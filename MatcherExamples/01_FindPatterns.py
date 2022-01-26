# %%
from spacy.matcher import PhraseMatcher
import pandas as pd
from spacy.matcher import Matcher
import spacy
import matcherFunctions
nlp = spacy.load("en_core_web_md")

# %%
df = pd.read_csv(
    'YourCorpus.csv', lineterminator='\n')


#nununununununununununununu Innovation Matcher nununununununununununununununununun#
# %%
InventionMatcher = Matcher(nlp.vocab)
# Defined verbs, which can be related to a lead user innovation
InnovationVerbs = ['invent', 'design', 'introduce', 'create', 'develop', 'build'
                   'improve', 'diye', 'engineer', 'make', 'prototype']
# Matcher looking for phrases like 'I have created..., I will create, We have recently created'.
InnovationPattern = [
    {'POS': 'PRON'},  # Pronoun present - wie I, me, us
    {'POS': 'AUX',  'OP': '*'},  # Auxiliary - is, has
    {'POS': 'VERB',  'OP': '*'},  # Verb - optional Verb
    {'POS': 'PART',  'OP': '*'},  # Particle - ’s, not
    {'POS': 'ADV',  'OP': '*'},  # Adverb - very, tomorrow,
    {'LEMMA': {'IN': InnovationVerbs}},
]
InventionMatcher.add("InventionMatcher", [InnovationPattern])


#nununununununununununununu SentStartMatcher nununununununununununununununununun#
# %%
SentStartMatcher = Matcher(nlp.vocab)
# Defined verbs, which can be related to a lead user innovation
InnovationVerbs = ['invent', 'design', 'introduce', 'create', 'develop', 'build'
                   'improve', 'diye', 'engineer', 'make', 'prototype']
# Matcher that searches for phrases like Created a Web-App, or Have created a Web-App.
SentStartPattern = [{'POS': 'AUX',  'OP': '*'},  # Auxiliary
                    {'POS': 'VERB', 'LEMMA': {'IN': InnovationVerbs}, 'IS_SENT_START': True}]
SentStartMatcher.add("SentStartMatcher", [SentStartPattern])


#nununununununununununununu NounMatcher nununununununununununununununununun#
# %%
NounMatcher = Matcher(nlp.vocab)
# Nouns defined by us, which can be related to a lead user innovation
Nouns = ['creation', 'design', 'design', 'invention', 'enhancement']
NounPattern = [
    {'POS': 'PRON'},  # Pronoun present  - I, me, us,
    {'POS': 'ADJ', 'OP': '*'},  # Adjective - great, incredible
    {'LOWER': {'IN': Nouns}}]
NounMatcher.add("NounMatcher", [NounPattern])


#nununununununununununununu SubjectMatcher nununununununununununununununununun#
# %%
SubjectMatcher = PhraseMatcher(nlp.vocab, attr='LOWER')
# The goal of this matcher is to find out if a comment deals with a certain topic. A large set of words was used, drawn on the one hand from a created taxonomy, but also from a Word2Vec model. To use this list the phrase matcher from SpaCy was used.
SubjectsSpecificWords = ['garden', 'outdoor', 'tree', 'grass', 'lawn', 'trunk', 'leaf', 'forestry', 'harvesting', 'tool', 'tool', 'drilling machine', 'chain saw', 'riding mower', 'earth drilling rigs', 'sprayers', 'wrench',
                         'harvesting', 'sapling', 'stump', 'bush', 'shrub', 'pines', 'branches', 'tress', 'dogwood', 'conifer', 'backyard', 'gardens', 'yard', 'patio', 'plot', 'beds', 'flowerbed', 'bed', 'planter', 'farming', 'shrub', 'prune']
SubjectPattern = [nlp(Subject) for Subject in SubjectsSpecificWords]
SubjectMatcher.add('SubjectPattern', SubjectPattern)


#nununununununununununununu SortoutMatcher nununununununununununununununununun#
# %%
SortoutMatcher = Matcher(nlp.vocab)
# Many comments, which were not relevant for us, could be recognized by single words, which were used in the analyzed sentence.
Sourtout_Words = [{'LEMMA': {'IN': ['skill', 'film',
                                    'video', 'role', 'roll', 'repair', 'tutorial', 'remedy']}}]
SortoutMatcher.add("SortoutMatcher", [Sourtout_Words])


#nununununununununununununu SingleSearchDemonstration nununununununununununununununununun#
# %%
def SingleSearchDemonstration(content):
    matcher = False
    sortedWord = None
    markedSent = None
    # Check the Comment if ther are any matches with the subject Matcher
    result = matcherFunctions.singlesearch(
        SubjectMatcher, str(content))
    # If you found some results, continue with some other Matchers
    if(result['detected']):
        InnovationResult = matcherFunctions.singlesearch(
            InventionMatcher, str(content))
        if(InnovationResult['detected']):
            # If a match was detected, store the data
            matcher = True
            selector = InnovationResult['word1']
            selectorShort = InnovationResult['word1'][-1].lemma_
            markedSent = InnovationResult['markedSent']
        else:
            matcher = False
            selector = None
            selectorShort = None
    else:
        matcher = False
        selector = None
        selectorShort = None
    if(matcher):
        # If a match was detected, check if a word is in the comments, which defines the comment as unuseful
        sortedOut = matcherFunctions.singlesearch(
            SortoutMatcher, result['sent'])
        if(sortedOut['detected']):
            matcher = False
            markedSent = sortedOut['markedSent']
            sortedWord = sortedOut['word1'][-1].lemma_
    # return you results
    return {"Matcher": matcher, "Selector": str(selector), "selectorShort": str(selectorShort), "MarkedSent": str(markedSent), "sortedWord": str(sortedWord)}


#nununununununununununununu DoubleSearchDemonstration nununununununununununununununununun#
# %%
def DoubleSearchDemonstration(content):
    matcher = False
    sortedWord = None
    markedSent = None
    # Check if the comment is in your subject, following by checking the comment was written in context of an innovation
    result = matcherFunctions.doubleSearch(
        SubjectMatcher, InventionMatcher, str(content))
    # If you found some results, continue with some other Matchers
    if(result['detected']):
        matcher = True
        selector = result['word1']
        selectorShort = result['word1'][-1].lemma_
        markedSent = result['markedSent']
    else:
        matcher = False
        selector = None
        selectorShort = None
    # return you results
    return {"Matcher": matcher, "Selector": str(selector), "selectorShort": str(selectorShort), "MarkedSent": str(markedSent), "sortedWord": str(sortedWord)}


#nununununununununununununu Analyse your Corpus nununununununununununununununununun#
# %%
# Create new Dataframe to store the analysed comments
AnalysedData = pd.DataFrame(columns=['autor', 'date', 'content', 'link', 'origin', 'suborigin',
                            'score', 'medialink', 'result', 'Selector', 'selectorShort', 'MarkedSent', 'sortedWord'])
# iterate over your data corpus
# for idx, row in df.iloc[0:5000].iterrows(): #use for testing
for idx, row in df.iterrows():
    newrow = []
    MatchResults = None
    newrow.append(row)
    MatchResults = SingleSearchDemonstration(row['content'])
    #MatchResults = DoubleSearchDemonstration(row['content'])
    newrow.append(MatchResults)
    # add results to the prepared Dataframe
    AnalysedData.loc[idx] = [row.autor, row.date, row.content,
                             row.link, row.origin, row.suborigin, row.score, row.medialink, MatchResults['Matcher'], MatchResults['Selector'], MatchResults['selectorShort'], MatchResults['MarkedSent'], MatchResults['sortedWord']]
AnalysedData.to_csv('AnalysedComments.csv')
