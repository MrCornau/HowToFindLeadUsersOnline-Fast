

import pandas as pd
import re
import os
import json

df = pd.read_csv(
    'YourCorpus.csv', lineterminator='\n')

# %%
# convert date to datetime. If there is none, give it a recent date

pattern = '\d\d\d\d'


def PDDate(date):
    try:
        return pd.to_datetime(date)
    except Exception as e:
        return pd.to_datetime('Nov 20, 2021')

# Add a row where the year is stored


def ReturnYear(Daylie):
    test_string = str(Daylie)
    date = re.findall(pattern, test_string)
    try:
        return str(date[0])
    except Exception as e:
        return None


df['date'] = df['date'].apply(PDDate)
df['year'] = df['date'].apply(ReturnYear)
df.head()

# %%
# Store Subrigins, Searchterms and years in Arrays to create new files acording to them
patterns = df.groupby('selectorShort').count()
patternList = list(patterns.index)
years = df.groupby('selectorShort').count()
yearsList = list(years.index)
suborigins = df.groupby('suborigin').count()
suboriginsList = list(suborigins.index)


# %%
Output = df
interestingcommment = {}
interestingcommment["interestingcomments"] = []
folder = 'PathToFolder'
# iterate over the Analysed comments and store them in individual files regarding to subrogigin, year and pattern
for sub in suboriginsList:
    redpath = folder+sub.replace("/", "_")+'Semantic'
    print(redpath)
    os.mkdir(redpath)
    for year in yearsList:
        for word in patterns:
            Name = word+sub+year
            LocSelector = Output.loc[Output["selectorShort"] == word]
            LocYear = LocSelector.loc[LocSelector["year"] == year]
            LocSub = LocYear.loc[LocYear["suborigin"] == sub]
            interestingcommment = {}
            interestingcommment["interestingcomments"] = []
            if LocSub.shape[0] > 0:  # If frame is not empty
                with open(redpath+'/'+Name+'.json', 'w') as outfile:
                    filetojson = LocSub.to_json(orient="records")
                    interestingcommment["interestingcomments"] = json.loads(
                        filetojson)
                    # Name displayed in the WebApp
                    interestingcommment['name'] = Name
                    json.dump(interestingcommment, outfile)
