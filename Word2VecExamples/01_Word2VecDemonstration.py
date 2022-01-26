
# %%

from gensim.models import Word2Vec

# load provided model
model = Word2Vec.load(
    "CameraDomain.model")

# Search for words used in a smiliar context like spot. Show 10 results
model.wv.similar_by_word('spot', topn=10)

# %%
