## Assignment - backend

Your about to build an english dictionary app

1. Download [English Dictionary in CSV format](https://www.bragitoff.com/2016/03/english-dictionary-in-csv-format/)
2. [x] Set up a DynamoDB with `dictionary` table
3. [x] **DATABASE:**
   1. [x] Parse & Insert all words, in a common structure, to `dictionary` table
4. [x] **BACKEND:**
   1. build a REST API with the following end point(s):
      1. [x] `GET /:word` - if word has more than one parts of speech will return all words part of speech, else, will return a word + definition + part of speech.
      2. [x] `GET /:word/:partOfSpeech` - will return a word + definition + part of speech [(noun, verb, adjectives, etc...)](https://www.dictionary.com/e/parts-of-speech/)
      3. [x] `GET /part-of-speech/:part` - for example, `/part-of-speech/adjective`, will return a random word + definition + part of speech (`part` is enum)
      4. [x] `GET /part-of-speech/:part?letter=X` - for example, `/part-of-speech/noun?letter=m`, will return a random word with the same letter + definition + part of speech
   2. [x] **BONUS**: should be deployed as `lambda function`
