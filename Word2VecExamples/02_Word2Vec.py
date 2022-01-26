
import gensim
import pandas as pd

df = pd.read_csv('Path-to-your-data.csv')


removed = df.dropna(subset=['content'])  # remove all Rows whitout content
# Preprocessing of the data for Word2Vec training. All words are split into tokens and set in lowercase.
content = removed.content.apply(gensim.utils.simple_preprocess)

# This results in the following structure. A list is generated from each record. Each word is stored separately as a token. Also the punctuation and unnecessary words like 'a' were removed.
#['my', 'germination', 'process', 'is', 'so', 'far', 'so', 'good', 'next', 'step', 'is', 'to', 'transplant', 'into', 'soil']


# %%
model = gensim.models.Word2Vec(
    window=10,  # how many words bevore and after are used for training
    min_count=2,  # min words per sentence
    workers=6  # defines the cores of your machine which are used seperately, if you have only 4 use 4
)
model.build_vocab(content, progress_per=1000)

# %%

# train your Model
model.train(content, total_examples=model.corpus_count, epochs=5)

# %%
# save your model so use it again later
model.save(
    'DomainName.csv')


# %%
model.wv.most_similar('diy')
