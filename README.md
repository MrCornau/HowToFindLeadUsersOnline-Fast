# How to Find Lead Users Online (Fast)

![Header Image](https://github.com/MrCornau/HowToFindLeadUsersOnline-Fast/blob/main/Assets/Headerimage.jpg?raw=true)

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

#### 1. Clone the Repository

```
  git clone https://github.com/MrCornau/HowToFindLeadUsersOnline-Fast.git LeadUserAnalysisInMyDomain
  cd LeadUserAnalysisInMyDomain
```

#### 2. Initialize a Virtual Environment

```
pip install virtualenv
virtualenv venv
source venv/bin/activate
```

#### 3. Install all necessary requirements

```
pip3 install . -r requirements.txt
```

#### 4. Install a Spacy NLP Modell

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

#### 1. Check if you can find an already written scraper in the following links

- https://github.com/LameLemon/scrapers

We for example used the [PSRAW](https://github.com/markekraus/PSRAW) to get comments from Reddit.

#### 2. Use librarys like Beatiful Soup

In our case the open source Python library Beautifulsoup was used to scrape a forum. This can be used to retrieve and search the HTML code of a given link. You then look for specific features of individual comments. For example, a unique CSS class or an ID with which comments can be identified.

Alwayse be pacient to not break the site, while sending to many requests per time. Follow the rules in the http://domaintoscrape.com/robots.txt file. Find some further informations [here](https://developers.google.com/search/docs/advanced/robots/intro)

We provided some examples to understand the basic concept of beautiful soup.

```
   ScrapingExamples/
   ├─ 01_CrawlThreadLinks.py #scrape threadlinks from a forum
   ├─ 02_CrawlSubthreads.py #scrape recrusively links from subthreads (Pagination includet)
   ├─ 03_CrawlComments.py #scrape comments into an csv file (Pagination includet)
```

#### 3. Use Webservices like ParseHub

Furthermore, you can use providers like [Parshub](https://www.parsehub.com/) to get comments more easily. They offer a user-friendly interface to filter HTML code similar to the Beautiful Soup Library. In contrast, however, this approach is not unlimited free of charge.

# 3. Defining Patterns and Words

Use the words which have been collected in the Workshop to create patterns _(Worksheet 3 & 8)_. If the field is new and the jargon of the field could not be evaluated by experts, we recommend using a Word2Vec Model to find word embeddings in your data corpus. Thus, further words can be found within a subject area, but also deonyms. For example, the deonym Tempo (handkerchiefs) could be uncovered by such a model. While analysing gardening forums, we came across the deonym Toro, which is used for lawn mowers.

```
   Word2VecExamples/
   ├─ 01_Word2VecDemonstration.py #Demonstration of an word 2 vec model traind on comments from the camera domain
   ├─ 02_Word2Vec.py #Train your own Word2Vec Model
   ├─ 03_CameraDomain.model #Pretrained model, based on the camera domain
```

#### 0. Demo | <sub><sup>_01_Word2VecDemonstration.py_</sup></sub>

```
from gensim.models import Word2Vec

#load provided model
model = Word2Vec.load(
    "CameraDomain.model")

#Search for words used in a smiliar context like spot. Show 10 results
model.wv.similar_by_word('spot', topn=10)


```

#### 1. Prepare Data | <sub><sup>_02_Word2Vec.py_</sup></sub>

```

import gensim
import pandas as pd

content = pd.read_csv('Path-to-your-data.csv')

# Preprocessing of the data for Word2Vec training. All words are split into tokens and set in lowercase.
content = removed.content.apply(gensim.utils.simple_preprocess)

#This results in the following structure. A list is generated from each record. Each word is stored separately as a token. Also the punctuation and unnecessary words like 'a' were removed.
['my', 'germination', 'process', 'is', 'so', 'far', 'so', 'good', 'next', 'step', 'is', 'to', 'transplant', 'into', 'soil']

```

#### 2. Following we set up the gensim modle | <sub><sup>_02_Word2Vec.py_</sup></sub>

```
model = gensim.models.Word2Vec(
    window=10,  # how many words bevore and after are used for training
    min_count=2,  # min words per sentence
    workers=6 #defines the cores of your machine which are used seperately, if you have only 4 use 4
)
model.build_vocab(content, progress_per=1000)
```

#### 3. Train the Model _02_Word2Vec.py_

```
model.train(content, total_examples=model.corpus_count, epochs=model.epochs)
```

#### 4. Save the model for later use | <sub><sup>_02_Word2Vec.py_</sup></sub>

```
model.save(
    'DomainName.csv')
```

#### 5. Use the Model to find similar words in your context | <sub><sup>_02_Word2Vec.py_ </sup></sub>

```
model.wv.most_similar('diy')
```

# 4. Analyzing the Corpus

```
   MatcherExamples/
   ├─ 01_FindPatterns.py #Demonstration of the usage of SpacyMatchers incontext of LeadUsers
   ├─ 02_PrepareDoc.py #Preanalyse the corpus to increase speed
   ├─ 03_PrepareforDisplay.py #Prepare the data to use the WebApp(old version) for manual analysis
   ├─ matcherFunctions.py #Helperfunctions
```

For finding patterns as 'I have created' we recommend using a rule-based approach. When analyzing the corpus it is recommended, to save as many features as possible, to create further data analysis tasks. Most important is that you preserve the date, to check the occurrences of a topic over time. For topic extraction, f.e. in trend/market forums, you can use rather a word list or use a semantic search. This involves searching for trend-describing terms within the forums of the market. The same applies in reverse in forums from the trend. In overlapping forums, search for both types of keywords in a row.

![Header Image](https://github.com/MrCornau/HowToFindLeadUsersOnline-Fast/blob/main/Assets/Patterns.jpg?raw=true)

#### 1. InventionMatcher | <sub><sup>01_FindPatterns.py</sup></sub>

The Innovations Matcher searches for sentences in which a user reports that she has created something or wants to create something. For this purpose, we used verbs that were defined based on our analysis of a DIY forum. Also operators were used in the rules, which lead to the fact that a word may not occur once or several times. Thus, different building blocks of sentences could be marked as optional. Thus sentences like 'I have created' were discovered as well as 'I will create or I have created'.

```
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
```

#### 2. Sent Start Matcher | <sub><sup>01_FindPatterns.py</sup></sub>

During the manual analysis of the DIY forum, it was noticed that many users do not necessarily use a personal pronoun to report an invention in the first person. Often this is also used silently. For example: Created a Web-App. For this we used a matcher (Fig.15), which specifically looks for one of our innovation verbs at the beginning of a sentence. ("IS_SENT_START": True)

```
SentStartMatcher = Matcher(nlp.vocab)
# Defined verbs, which can be related to a lead user innovation
InnovationVerbs = ['invent', 'design', 'introduce', 'create', 'develop', 'build'
                   'improve', 'diye', 'engineer', 'make', 'prototype']
# Matcher that searches for phrases like Created a Web-App, or Have created a Web-App.
SentStartPattern = [{'POS': 'AUX',  'OP': '*'},  # Auxiliary
                    {'POS': 'VERB', 'LEMMA': {'IN': InnovationVerbs}, 'IS_SENT_START': True}]
SentStartMatcher.add("SentStartMatcher", [SentStartPattern])
```

#### 3. NounMatcher | <sub><sup>01\*FindPatterns.py</sup></sub>

Another pattern of describing one's own inventions was found to be the use of certain nouns in combination with a pronoun. For example, \*'my creation’\_.

```
NounMatcher = Matcher(nlp.vocab)
# Nouns defined by us, which can be related to a lead user innovation
Nouns = ['creation', 'design', 'design', 'invention', 'enhancement']
NounPattern = [
    {'POS': 'PRON'},  # Pronoun present  - I, me, us,
    {'POS': 'ADJ', 'OP': '*'},  # Adjective - great, incredible
    {'LOWER': {'IN': Nouns}}]
NounMatcher.add("NounMatcher", [NounPattern])
```

#### 4. Subject Matcher | <sub><sup>01_FindPatterns.py</sup></sub>

The goal of this matcher is to find out if a comment deals with a certain topic. A large set of words was used, drawn on the one hand from a created taxonomy, but also from a Word2Vec model. To use this list the phrase matcher from SpaCy was used. Here we did also experiments with Zero Shot Learning and Semantic search which you can find [here](#7-experimental-approaches)

```
SubjectMatcher = PhraseMatcher(nlp.vocab, attr='LOWER')
# The goal of this matcher is to find out if a comment deals with a certain topic. A large set of words was used, drawn on the one hand from a created taxonomy, but also from a Word2Vec model. To use this list the phrase matcher from SpaCy was used.
SubjectsSpecificWords = ['garden', 'outdoor', 'tree', 'grass', 'lawn', 'trunk', 'leaf', 'forestry', 'harvesting', 'tool', 'tool', 'drilling machine', 'chain saw', 'riding mower', 'earth drilling rigs', 'sprayers', 'wrench',
                         'harvesting', 'sapling', 'stump', 'bush', 'shrub', 'pines', 'branches', 'tress', 'dogwood', 'conifer', 'backyard', 'gardens', 'yard', 'patio', 'plot', 'beds', 'flowerbed', 'bed', 'planter', 'farming', 'shrub', 'prune']
SubjectPattern = [nlp(Subject) for Subject in SubjectsSpecificWords]
SubjectMatcher.add('SubjectPattern', SubjectPattern)
```

#### 5. Analyse your Corpus | <sub><sup>01_FindPatterns.py</sup></sub>

Based on the respective matchers, the comments were then analyzed. In case a comment matches a matcher, an object is returned which returns the sentence and the recognized pattern. If there is no match, False is returned.
Iterate over the rows of your corpus and use the Single or Double Matcher

Single Matcher

```
#Positive Result
SingleMatcher(InnovationMatcher,“I created a WebApp“)
# returns: {„detected“: True, „match“: „i created“, „sent“: „I created a WebApp“}

#Negative Result
SingleMatcher(InnovationMatcher,“I really don’t like my camera“) #returns {„detected“: False}
```

Double Matcher

```
#Positive Result
DoubleMatcher(SubjectMatcher, InnovationMatcher,“I have created a new type of Chainsaw“)
# Returns:  {„detected“: True, „match“: ‚chainsaw‘, „match2“: „i have created“, „sent“: „i have created a new type of chainsaw“}

#Negative Result
DoubleMatcher(SubjectMatcher, InnovationMatcher,“I really like that tree“) #Returns {„detected“: False, „match“: tree, „sent“: „i really like that tree“}

#Negative Result
SingleMatcher(InnovationMatcher,“I really dont like my camera“) #Returns {„detected“: False}
```

#### 6. Increase speed | <sub><sup>02_PrepareDoc.py </sup></sub>

We found out that tokenizing every sentence of our corpus needed the most time. To get the corpus analysed faster, you can prepare the doc object used by the Matchers. Thereby you analyse the doc object and store it as bytes. By this we could improve the time that was needed to analyse our corpus significantly

```
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
```

Matcher
Just change the FunctionNames in your file, to make use of the Matchers, that already uses the pre analysed doc file

```
SingleMatcherWithDoc(InnovationMatcher,doc,“I created a WebApp“)
DoubleMatcherWithDoc(SubjectMatcher, InnovationMatcher,doc,“I have created a new type of Chainsaw“)
```

#### 7. Prepare for Display (Old Prototype) | <sub><sup>03_PrepareforDisplay.py</sup></sub>

In ould prototype we splittet the data corpus by year, suborigin and found pattern. Thereby we could skip bad lists. The curret Tool for amanual analysis is currently under construction, why we explain here how to use the old one.

```
Folder/
├─ Suborigin/
│  ├─ created_2020_suborigin.json
│  ├─ invented_2020_suborigin
│  ├─ created_2021_suborigin
│  ├─ ...
```

# 5. Manual Analysis

For the manual selection of filtered posts, a web tool was developed which allows the analyzed comments to be imported .Posts from lead users can be found quickly by highlighting the key phrase.
In our testing Phase we used the prototype which we also provide in this repository. Aftwerwards we started to develope a new prototype for more easy scanning and reading. It will be updatet here when it is finished. Till then you should use the old (ugly) prototype.

#### 1. Old version

![WebApp-Old](https://github.com/MrCornau/HowToFindLeadUsersOnline-Fast/blob/main/Assets/WebApp-Old.jpg?raw=true)

Install all dependencies

```
cd WebApp
npm i
```

Install the Json Server globaly, to store selected comments

```
npm install -g json-server
```

Place your analysed files in the json folder of the WebApp.
Folders are automatically displayed as tabs.

```
Webapp/
├─ src/
│  ├─ json/
│  │  ├─ Suborigin/ # place your analysed comments here
│  │  │  ├─ comments.json
│  │  ├─ Suborigin2/
│  │  │  ├─ comments.json
│  │  ├─ .../
│  │  │  ├─ comments.json
```

Start the development server

```
npm run dev
```

2. New Webapp, with more features and ab better User Experience - coming soon!

![WebApp-New](https://github.com/MrCornau/HowToFindLeadUsersOnline-Fast/blob/main/Assets/FinalWebapp.jpg?raw=true)

# 6. Integration Into Figma

We provide a Figma Plugin, to easilie move from the Webapp into a tool where workshops can be hosted.

#### 1. Setup Figma Plugin (Currently in Developemt Mode)

```
FigmaPlugin/
├─ manifest.json
├─ ...
```

Import the Plugin via the manifest.json file.

![WebApp-Figma](https://github.com/MrCornau/HowToFindLeadUsersOnline-Fast/blob/main/Assets/PluginImport.gif?raw=true)

#### 2. Download the selected comments

Use the download button in the Webapp to download your selected comments. Import them into figma via the provided Figma Plugin.
From now on you can follow the process which is explained on our [Website](https://afurthersourceforinnovation.digital).

![WebApp-Figma](https://github.com/MrCornau/HowToFindLeadUsersOnline-Fast/blob/main/Assets/PluginWebappDemo.gif?raw=true)

# 7. Experimental Approaches

1. Zero-Shot-Learning
   Zero shot learning, in a machine learning context, describes a model that is trained to fit a particular context without ever having seen an example. To test this type of model, you can use the open source library Transformers, which provides easy access to zero shot learning models. Here is an great [tutorial](https://www.kdnuggets.com/2021/04/zero-shot-learning.html) which explains the approach.

First, we tested how well the model can recognize a topic. Based on the word "gardening" alone, this model classified the sentence: "I created a new tractor for my lawn" with a probability of 98% as belonging to this topic. This type of model could be used, for example, to replace the Subject Matcher or to improve it.

```
sequence = "I created a new tractor for my lawn."
candidates_tags = ["gardening"]
classifier(sequence, candidates_tags)

# returns: {'labels': ['gardening'],
# 'scores': [0.9801499247550964],
# 'sequence': 'I created a new tractor for my lawn.'}

sequence = "I was eating bananas."
candidates_tags = ["gardening"]
classifier(sequence, candidates_tags)

# {'labels': ['gardening'],
# 'scores': [0.0001314152468694374],
# 'sequence': 'I was eating bananas.'}
```

Similar experiments were carried out with the recognition of innovative posts. Here, however, it quickly became apparent that the zero-shot classifier solves the task worse than the matcher we created. However, with professional training, we could imagine that this type of matcher could provide easier access to the method in the future. However, there will also be the problem that it will be difficult to distinguish between lead user innovations and things that users have built themselves. To the status quo, we still see the human component as essential here.

```
sequence = “I developed a film.”
candidates_tags = [“Innovation”]
classifier(sequence, candidates_tags)

# {‘labels’: [‘Innovation’],
#  ‘scores’: [0.951065182685852],
#  ‘sequence’: ‘I developed a film.’}

sequence = “I created a Web-App.”
candidates_tags = [“Innovation”]
classifier(sequence, candidates_tags)

# {‘labels’: [‘Innovation’],
# ‘scores’: [0.9521070122718811],
# ‘sequence’: ‘I created a Web-App.’}
```

2. Semantic Search

With the help of a semantic search, another attempt was made to filter the data corpus (find documents that fit together thematically). Here, the approach was based on an article by [Rajput (2020)](https://www.kaggle.com/ajitrajput/semantic-search-engine-using-nlp). First, a Tf-IDF (Term frequency-Inverse Document Frequency) model was created using the corpus. The model prioritizes the words from each document or comment that are most relevant to the context. Using a Latent Semantic Indexing (LSI) model, semantic principal components of the individual documents are then analyzed to find semantically related groups. For example, the term car belongs to a semantic concept that also includes words such as driving, traffic jam, tires, etc. This analysis uses factors such as the combinatorics of words used and is thus very similar to the Word2Vec model. Through this model, thematic similar documents can then be found without necessarily using the same word. In contrast to a rule-based approach, this can save a lot of time, since topic-specific words do not have to be collected. In our experiments, we were able to filter the corpus thematically. This can be especially useful when searching developer forums such as GitHub or trending forums. However, the attempt to search for posts in which lead users report on their innovations did not work as well as we had hoped. Here, the results of the rule-based approach were better.

Semantic search offers great potential for future work, especially since it is possible to search for topics in a corpus even without labeled data.
