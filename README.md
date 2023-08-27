# Welcome to the Quiz Broadcast (with tests)

I denne øvingen skal du lage en React applikasjon som lar brukeren besvare
quiz-spørsmål om JavaScript. Du kan finne spørsmålene i `questions.js`.

Dersom du får det til kan du utvide oppgaven med å skrive automatiske tester
for applikasjonen med jest.

## Slik går du frem

Referanseoppskrift på alle detaljene finnes på emnets Github-sider

1. Under "Reference material" på emnets Github side finner du instruksjoner
   for å hjelpe deg å komme i gang med en ny React applikasjon. For denne 
   øvingen trenger du ikke "Root project" og "Server project".
2. Applikasjonen skal starte med følgende komponenter. Bruk React Router til å navigere mellom dem:
   * Forside: Brukeren skal kunne klikke "Ny Quiz" på forsiden
   * Question: Brukeren skal få et tilfeldig spørsmål
   * Correct answer: Brukeren skal få tilbakemelding om at de svarte riktig og kunne få et nytt spørsmål
   * Wrong answer: Brukeren skal få tilbakemelding om at de svarte feil og kunen få et nytt spørsmål
   * Tips: Question bør se slik ut: `<Question question={} onAnswer={handleAnswer} />`
3. Bruk `useState` for å huske hvilket spørsmål brukeren har fått. Du kan bruke funksjonen
   `randomQuestion` i `questions.js` for å finne et spørsmål og `isCorrectAnswer` for å sjekke svaret
4. Legg til Jest i applikasjonen. Se GitHub siden til kurset for tips
5. Skriv tester som sjekker
   * Test at Question-komponenten viser spørsmålet og svaralternativ. Bruk `expect().toMatchSnapshot()`
   * Test at om når brukeren klikker en svarknapp svarer blir svaret håndter.
     Bruk `find...().props.onClick()` for å simulere brukerklikk og `jest.fn()` og
     `expect(<mock>).toBeCalledWith("...")` for å sjekke at riktig funksjon kalles

Bonus:

* Bruk Context i stedet for state for spørsmålet


## Huskeliste

* [x] `mkdir server client`
* [x] `cd client && npm init -y && npm install --save-dev parcel && npm install --save react react-dom react-router-dom`
* [x] `npm pkg set scripts.dev="parcel watch index.html"`
* [x] Create `index.html` and `index.tsx`
* [x] Create `<Application />` with layout
* [x] Create `<FrontPage />`, `<Question />` og `<Answer />` components
* [ ] Add react router: `<HashRouter />`, `<Routes />`, `<Route />` and `<Link />`
* [ ] Add `useState` with question in `<Application />` and let `handleClickAnswer` call `isCorrectAnswer`
* [ ] Add tests:
  * [ ] `npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer`
  * [ ] Add `babel.config.js`
  * [ ] `npm pkg set scripts.test=jest`
* [ ] Write tests
  * [ ] Snapshot test that question is displayed
  * [ ] Check for onClick
