# Øving 8: Flytte logikk fra klient til server

Denne øvingen kan brukes for studenter som føler de henger litt etter. Den starter med en appliksjon der man oppretter
og viser filmer kun i frontend.

Innholdet av denne øvingen er tilstrekkelig for en sterk D på eksamen.

## Første skritt: Fra React til Express

1. Få applikasjonen til å kjøre med `npm run dev` og gå til http://localhost:3000 for å se at du kan legge til og liste
   filmer. Legg merke til at når du refresher siden så vil informasjonen bli borte
2. Endre applikasjonen til å inkludere "plot" på filmene i tillegg til title, countries og year
3. Endre applikasjonen slik at i stedet for å legge til en ny film på klienten så sender applikasjonen filmene til
   serveren. Legg merke til at filmene som vises på klienten nå ikke inkluderer den nye filmen.
4. Endre applikasjonen slik at i stedet for å vise de filmene fra klienten så henter den filmene fra serveren.

## Andre skritt: Fra Express til MongoDB

Når serveren restartes vil dataene forvinne. Bruk det du lærte
på [forelesning 7](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/blob/reference/07/server/moviesApi.ts)
for å legge inn data i MongoDB i stedet.

Se også
[kursnotatenes seksjon om MongoDB](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming#reading-data-from-mongodb)

## Tredje skritt: Få serveren til å kjøre på Heroku

[Lag de nødvendige scripts i package.json](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming#deploy-to-heroku).
For at MongoDB skal fungere på Heroku må du gå under appen din på https://dashboard.heroku.com/ og Settings > Config
Vars og legge inn MONGO_DB_URL. Du må også åpne for at alle IP-adresser kan aksesserer databasen din
på https://cloud.mongodb.com/ (fordi Heroku kan plutselig bytte IP-adresse)