# Mock exam for PG6301 Web Development and API design, 2022

The exam for PG6301 is a practical test where you should demonstrate your mastery of the technologies and concepts that
have been thought in the course: React, Express, Heroku, Mongodb, Open ID Connect, Jest and Web sockets. The fact that
this is a practical exam means that you are evaluated on the functionality of the running code that you deliver, rather
than your theoretical mastery of the subjects

You can use [this GitHub classroom repository](https://classroom.github.com/a/zrIPRlqJ) to get a more realistic
experience of how you will need to use GitHub during the exam.

## The task

Show movies saved in a MongoDB with React. Let users log in with Active Directory. Logged-in users can add new movies to
the database. When a user adds a movie, other users should see a notification with WebSockets.

The application should have tests that can be run with npm. It should be deployed on Heroku.

## Test your application

I suggest that you ask another student to check your application on Heroku and GitHub. When you evaluate your own or
your team's application you can do as follows:

1. Go to the GitHub page of the solution
2. Check that `npm test` runs
3. Check that GitHub links to the deployed app on Heroku
4. Verify that you can log in to the app
5. Verify that you can add data
6. Verify that you can see the data you added

If you're smart, you construct the code of your app so that everything that has to do with movies can easily be replaced
with something else. Then you can reuse the code directly on the exam. This is especially relevant for
the `package.json`-files, `index.html` and `index.jsx`, login code, and `server.js`.

## Checklist of technologies you should include in your application

- [ ] Logon with Active Directory
- [ ] Jest tests
    - [ ] Snapshot tests
    - [ ] Simulate + jest.fn
    - [ ] Supertest
- [ ] Deployment to Heroku
- [ ] Mongodb
- [ ] Navigating in the application using React Router (remember Express Middleware)
- [ ] Reading data from the server (remember error handling)
- [ ] Writing data to the server
- [ ] Websockets

## Guidance (in Norwegian)

### Viktig:

* Eksamen må besvares i Github Classroom
* Du mister tilgang til GitHub 23. november, kl 09:00
* Lever en ZIP-fil (ikke RAR, 7z eller tilsvarende). Den beste måten er å utvikle på Github og velge "Code" > "Download
  ZIP" i ditt repository på github.com,
* README-fila på Github og i ZIP-fila må inneholde link to Github repository og Heroku-applikasjonen
* Genererte filer som `node_modules`, `.parcel-cache`, `dist` og `coverage` må ikke være sjekket inn på Github eller i
  ZIP-fila
* Les oppgavebeskrivelsen grundig og sjekk at du ikke har oversett noen funksjonelle krav
* Du trenger ikke å løse alle krav for å få en ok karakter, prioriter hvilke krav du vil løse og dokumenter eventuelle
  forenklinger du har utført i README.md

### Samarbeid under eksamen:

Du kan be andre om hjelp under eksamen, men du må angi i README.md kode du ikke har skrevet eller du har delt med andre
om det ikke skal regnes som plagiat. Du vil bli evaluert på egen kode du leverer og bør angi hvilken kode du ikke selv
har utviklet

### *Må*-krav til teknisk løsning

* [ ] Besvarelsen skal inneholde en README-fil med link til Heroku og GitHub
* [ ] `npm run dev` skal starte server og klient. Concurrently og parcel anbefales
* [ ] `npm test` skal kjøre tester. Testene skal ikke feile
* [ ] Koden skal ha konsistent formattering. Prettier og Husky anbefales
* [ ] Nettsidene skal ha god layout med CSS Grid og horisontal navigasjonsmeny. Brukeren må kunne navigere overalt uten
  å bruke "back" eller redigere URL
* [ ] Serveren validerer at brukeren er logget inn
* [ ] Innleveringen skal være i form av en ZIP-fil. Maks størrelse på fila er 1MB
* [ ] Applikasjonsdata skal lagres i MongoDB
* [ ] Applikasjonen skal deployes til Heroku
* [ ] Applikasjonen skal ha tester for visning og brukerhandlinger i React og for API i Express
