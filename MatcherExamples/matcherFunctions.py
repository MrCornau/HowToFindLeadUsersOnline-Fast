from ast import literal_eval
import spacy
from spacy.tokens import DocBin
from spacy.matcher import Matcher
nlp = spacy.load("en_core_web_md")


def test(self, *args):
    for arg in args:
        print(arg)

# Use one Matcher to search in a comment


def singleSearch(Matcher_1, rawdoc):
    test = rawdoc.lower()
    doc = nlp(test)
    matches = Matcher_1(doc)
    for match_id, start, end in matches:
        span = doc[start:end]
        newsent = span.sent
        for word in span:
            newsent = markFoundPattern(str(newsent), str(word))

        markedContent = rawdoc.lower().replace(str(span.sent), newsent)
        return {"detected": True,
                "word1": span,
                "sent": str(span.sent),
                "markedSent": markedContent}
    return {"detected": False}

# Use if you have already analyzed your Corpus and saved the a doc object for each comment


def singleSearchWithDoc(Matcher_1, docobj, content):
    new_doc_bin = DocBin().from_bytes(literal_eval(docobj))
    docs = list(new_doc_bin.get_docs(nlp.vocab))
    doc = docs[0]
    matches = Matcher_1(doc)
    for match_id, start, end in matches:
        span = doc[start:end]
        newsent = span.sent
        for word in span:
            newsent = markFoundPattern(str(newsent), str(word))

        markedContent = content.lower().replace(str(span.sent), newsent)
        return {"detected": True,
                "word1": span,
                "sent": newsent,
                "markedSent": markedContent}
    return {"detected": False}

# Use one Matcher to search in a comment. Double check if the found match also fits for your second Matcher


def doubleSearch(Matcher_1, Matcher2, rawdoc):
    doc = nlp(rawdoc.lower())
    matches = Matcher_1(doc)
    for match_id, start, end in matches:
        span = doc[start:end]

        word = span
        sents = span.sent  # ADDED THIS LINE
        doc2 = nlp(str(sents))
        matches2 = Matcher2(doc2)
        for match, start2, end2 in matches2:
            span2 = doc2[start2:end2]
            newsent = span.sent
            words = []
            words.append(span)
            words.append(span2)
            for word in words:
                newsent = markFoundPattern(str(newsent), str(word))
            markedContent = rawdoc.replace(str(span.sent), newsent)
            return {"detected": True,
                    "word1": span,
                    "word2": span2,
                    "sent": str(span.sent),
                    "markedSent": markedContent}

        return {"detected": False}
    return {"detected": False}


# Use if you have already analyzed your Corpus and saved the a doc object for each comment
def doubleSearchWithDoc(Matcher_1, Matcher_2, docobj, content):
    new_doc_bin = DocBin().from_bytes(literal_eval(docobj))
    docs = list(new_doc_bin.get_docs(nlp.vocab))
    doc = docs[0]
    matches = Matcher_1(doc)
    for match_id, start, end in matches:
        span = doc[start:end]
        word = span
        sents = span.sent  # ADDED THIS LINE
        matches2 = Matcher_2(sents)
        for match, start2, end2 in matches2:
            span2 = sents[start2:end2]
            newsent = sents
            words = []
            words.append(span)
            words.append(span2)
            for word in words:
                newsent = markFoundPattern(str(newsent), str(word))
            markedContent = content.replace(str(span.sent), newsent)
            return {"detected": True,
                    "word1": span,
                    "word2": span2,
                    "sent": str(span.sent),
                    "markedSent": markedContent}

        return {"detected": False}
    return {"detected": False}


matcher = Matcher(nlp.vocab)

# Mark the found Pattern


def markFoundPattern(orig_text, replacement):
    # Add individual Rule to the Matcher based on the found pattern
    matcher.add("Rule",  [[{"LOWER": replacement}]])
    tok = nlp(orig_text)
    text = ''
    buffer_start = 0
    for _, match_start, _ in matcher(tok):
        # If we've skipped over some tokens, let's add those in (with trailing whitespace if available)
        if match_start > buffer_start:
            text += tok[buffer_start: match_start].text + \
                tok[match_start - 1].whitespace_
        # Replace token, with trailing whitespace if available
        text += '-----> '+replacement + ' !!! '+tok[match_start].whitespace_
        buffer_start = match_start + 1
    text += tok[buffer_start:].text
    matcher.remove("Rule")
    # Remove the individual Rule
    return text
