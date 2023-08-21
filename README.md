# Øving 1: React Quiz

Formålet med denne øvingen er å opprette en React applikasjon med Parcel

## Instruksjoner

1. Opprett et React prosjekt med Parcel som vist på forelesningen
2. Når brukeren går til appliaksjonen: vis et tilfeldig spørsmål fra en quiz med én
   knapp per svaralternativ. Bruk `useState` til å ta vare på spørsmålet og på svaret
   (når brukeren har trykket på en knapp)
  * Hint: bruk funksjonene `randomQuestion` og `isCorrectAnswer` fra `questions.js` 
3. Når brukeren har trykket på en knapp (dvs `useState` for `answer` har blitt satt)
   viser applikasjonen "Riktig" eller "Feil"
4. Når brukeren har svart kan de trykke på en knapp for å få et nytt tilfeldig
   spørsmål (`setAnswer(undefined)` og `setQuestion(randomQuestion())`

Dersom du føler deg eventyrlysten kan du fortsette:

* Prøv å ha flere sider med `react-router-dom`
* Prøv å flytte spørsmålene til serveren
* Prøv å ha en oppsummering av antall spørsmål brukeren har besvart riktig
