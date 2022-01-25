from gensim.models import Word2Vec


model = Word2Vec.load(
    "Word2VecExamples/CameraDomain.model")

model.wv.similar_by_word('mower', topn=9)
