
# %%
import pandas as pd
import spacy
from spacy.tokens import DocBin
nlp = spacy.load("en_core_web_md")

df = pd.read_csv(
    'YourData.csv')


def docObj(content):
    doc = nlp(content.lower())
    doc_bin = DocBin()
    doc_bin.add(doc)
    doc_bin_bytes = doc_bin.to_bytes()
    return doc_bin_bytes


df['doc'] = df['content'].apply(docObj)
df.to_csv('CorpusWithDoc.csv')
