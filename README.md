Hello and welcome to the Quiz broadcast
=======================================

Exercise 3: Creating an API with Express
========================================

Flytt funksjonalitet for quiz til serveren-siden med ExpressJS. Du trenger følgende endepunkt:

* `GET /api/questions/random` - returner et tilfeldig spørsmål **uten å inkludere korrekt svar**
* `POST /api/questions/answer` - send inn svar med
  `{id: <id>, answer: "answer_a"|"answer_b"|"answer_c"|"answer_d"|"answer_e"}`.
  Skal returnere `{result: "correct"|"incorrect"}`
* Ekstra-mål: `GET /api/score` - returnerer `{answered: <number>, correct: <number>}`

Bruk koden for quiz fra øving 2 som utgangspunkt.

Dersom du ikke har implementer øving 2 enda anbefaler jeg at du starter med denne. Sørg for at koden ligger i et
directory som heter `client`. Oppretter du et `server`-prosjekt som beskrevet i README-fila til emnet og implementerer
`GET /api/questions/random` og `POST /api/questions/answer`. Kopier inn `questions.js` for å implementere
logikken (*merk: express liker ikke å importere "../questions.js"*)

Erstatt koden i klienten med kode som kaller Express-API-et

For `GET /quiz/score` må du ta i bruk [cookie-parser](http://expressjs.com/en/resources/middleware/cookie-parser.html).
Vi skal se på dette på forelesning 6, men du kan prøve ut med instruksjonene nå dersom du har tid
