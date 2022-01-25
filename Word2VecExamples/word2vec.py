
import gensim
import pandas as pd

content = pd.read_csv('Path-to-your-data.csv')

# Preprocessing of the data for Word2Vec training. All words are split into tokens and set in lowercase.
content = removed.content.apply(gensim.utils.simple_preprocess)

# This results in the following structure. A list is generated from each record. Each word is stored separately as a token. Also the punctuation and unnecessary words like 'a' were removed.
#['my', 'germination', 'process', 'is', 'so', 'far', 'so', 'good', 'next', 'step', 'is', 'to', 'transplant', 'into', 'soil']
