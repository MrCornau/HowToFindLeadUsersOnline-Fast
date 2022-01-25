# How to Find Lead Users Online (Fast)

![alt text](https://github.com/MrCornau/HowToFindLeadUsersOnline-Fast/blob/main/Assets/Headerimage.jpg?raw=true)

Masterthesis @HfG Gmuend. Read more about our Thesis [here](https://afurthersourceforinnovation.digital).

The Digital Lead User Analysis is a method to find future customer needs. By analyzing user-generated content, it is possible to infer needs that have not yet been solved by the market.

In our master thesis, we have taken the approach of [Eric von Hippel and Sandro Kaulartz](https://evhippel.files.wordpress.com/2019/01/ai-method-for-discovering-need-solution-pairs-2019.pdf) and put it into an economic context with the help of methods from strategic design.

In this repository it is described how to repeat our technological process, and apply the Lead User Method to specific domain.
On our [website](https://afurthersourceforinnovation.digital), the necessary steps before and after are described.

1. [Setup](#1-setup)
2. [Generation of the Data Corpus](#2-generation-of-the-data-corpus)
3. [Defining Patterns and Words](#3-defining-patterns-and-words)
4. [Analyzing the Corpus](#4-analyzing-the-corpus)
5. [Manual Analysis](##5-manual-analysis)
6. [Integration Into Figma](#6-integration-into-figma)
7. [Experimental Approaches](#7-experimental-approaches)

# 1. Setup

@First set up the environment and install all necessary requirements. It is recommended to use Python 3.9 or above.
Steps down below can be skipped if you are using Jupiter Notebook, Kaggle, or Google Colab.

1. Clone the Repository

```
  git clone https://github.com/MrCornau/HowToFindLeadUsersOnline-Fast.git LeadUserAnalysisInMyDomain
  cd LeadUserAnalysisInMyDomain
```

2. Initialize a Virtual Environment

```
pip install virtualenv
virtualenv venv
source venv/bin/activate
```

3. Install all necessary requirements

```
pip3 install . -r requirements.txt
```

4. Install a Spacy NLP Modell
   Depending on which system you are working - Windows/[Linux,Mac] - CPU/GPU - you have to change the Spacy Model you are working with.
   You seperately have to download the spacy English model. We used the en_core_web_md modell. Get more Information [here](https://spacy.io/usage).

```
python3 -m spacy download en_core_web_md modell
```

# 2. Generation of the Data Corpus

We used date from different forum like reddit, github, devpost, twitter to collect subject specific data.
To use the prepared Matchers you should use the following format for your data.

<table><tbody><tr><th>Origin</th><th>Suborigin</th><th>Autor</th><th>Link</th><th>Content</th><th>Date</th><th>Medialink</th><th>Score</th></tr><tr><td>Reddit</td><td>r/photography</td><td>MrCornau</td><td>https://</td><td>User generated content goes here</td><td> Timestamp</td><td>https://</td><td>Score/Likes/etc.</td></tr></tbody></table>

### Scraping Data:

Collect data from the forums which have been defined in the workshop _(Worksheet 8)_. From previous experiences, data from the last two years is enough. Older posts are not relevant for future innovation topics. Use the prepared scraping options as described in the prepared Github Repository.

1. Check if you can find an already written scraper in the following links

- https://github.com/LameLemon/scrapers

We for example used the [PSRAW](https://github.com/markekraus/PSRAW) to get comments from Reddit.

2. Use librarys like Beatiful Soup
   In our case the open source Python library Beautifulsoup was used to scrape a forum. This can be used to retrieve and search the HTML code of a given link. You then look for specific features of individual comments. For example, a unique CSS class or an ID with which comments can be identified.

   Alwayse be pacient to not break the site, while sending to many requests per time. Follow the rules in the http://domaintoscrape.com/robots.txt file. Find some further informations [here](https://developers.google.com/search/docs/advanced/robots/intro)

   We provided some examples to understand the basic concept of beautiful soup.

```
   ScrapingExamples/
   ├─ 01_CrawlThreadLinks.py #scrape threadlinks from a forum
   ├─ 02_CrawlSubthreads.py #scrape recrusively links from subthreads (Pagination includet)
   ├─ 03_CrawlComments.py #scrape comments into an csv file (Pagination includet)
```

3. Use Webservices like ParseHub
   Furthermore, you can use providers like [Parshub](https://www.parsehub.com/) to get comments more easily. They offer a user-friendly interface to filter HTML code similar to the Beautiful Soup Library. In contrast, however, this approach is not unlimited free of charge.

# 3. Defining Patterns and Words

Use the words which have been collected in the Workshop to create patterns _(Worksheet 3 & 8)_. If the field is new and the jargon of the field could not be evaluated by experts, we recommend using a Word2Vec Model to find word embeddings in your data corpus. Thus, further words can be found within a subject area, but also deonyms. For example, the deonym Tempo (handkerchiefs) could be uncovered by such a model. While analysing gardening forums, we came across the deonym Toro, which is used for lawn mowers.

1. Prepare Data

```

import gensim
import pandas as pd

content = pd.read_csv('Path-to-your-data.csv')

# Preprocessing of the data for Word2Vec training. All words are split into tokens and set in lowercase.
content = removed.content.apply(gensim.utils.simple_preprocess)

#This results in the following structure. A list is generated from each record. Each word is stored separately as a token. Also the punctuation and unnecessary words like 'a' were removed.
['my', 'germination', 'process', 'is', 'so', 'far', 'so', 'good', 'next', 'step', 'is', 'to', 'transplant', 'into', 'soil']

```

2. Training der Daten

```
model = gensim.models.Word2Vec(
    window = 10, # Anzahl der Wörter, die jeweils in den Zusammenhang gesetzt werden.
    min_count = 2, # Mindest Anzahl an Wörter pro Satz
    workers= 6 # Wie viele Kerne des Rechners können gleichzeitig für das Training verwendet werden
)

model.build_vocab(content, progress_per=1000)

model.train(content, total_examples=model.corpus_count, epochs=model.epochs) # Training des Models


```

## 1. Word 2 Vec

Create a Word 2 Vec Model to find word embeddings in your data corpus. Therefore we used Gensim.

```
import gensim
import pandas as pd
from gensim.test.utils import datapath
from gensim.models.word2vec import Text8Corpus
from gensim.models.phrases import Phrases, Phraser

df = pd.read_csv('YourFile.csv')

```

At First we prepared our data

```
#remove all rows of the datacorpus whitout content
removed = df.dropna(subset=['content'])

# Preprocess the data for the Word2Vec training. It tokenizes all the words and sets them to lower case.
content = removed.content.apply(gensim.utils.simple_preprocess)

#This outputs following structure. From every sentence a list is generated. Each word is saved seperately as a token. Also the punktuation and unnecessary words like 'a' have been removed, as they are not important for the vord2vec model.
['my', 'germination', 'process', 'is', 'so', 'far', 'so', 'good', 'next', 'step', 'is', 'to', 'transplant', 'into', 'soil']

```

Following we set up the gensim modle

```
model = gensim.models.Word2Vec(
    window = 10, # how many words bevore and after are used for training
    min_count = 2, # min words per sentence
    workers= 6 #defines the cores of your machine which are used seperately, if you have only 4 use 4
)

model.build_vocab(content, progress_per=1000)

```

Train the Model

```
model.train(content, total_examples=model.corpus_count, epochs=model.epochs)
```

Save the model for later use

```
model.save('YOURFILEPATH.model')
```

Use the Model to find similar words in your context

```
model.wv.most_similar('diy')
```

# 4. Analyzing the Corpus

# 5. Manual Analysis

# 6. Integration Into Figma

# 7. Experimental Approaches
