# Øving 9: OpenID Connect

I denne øvingen skal dere opprette en applikasjon som lag brukeren logge seg på med Google. Det er nyttig å deploye
applikasjonen på Heroku, men ikke nødvendig,

1. [Opprett en applikasjon med React client og Express server som beskrevet i notatene for emnet](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/#reference-material)
    * Opprett client med Parcel og React
    * Opprett server med Express
    * Opprett et `dev` script på toppnivå som kjører parcel og express samtidig med `concurrently`
2. Cookies: Lag en påloggingsskjerm som lagrer brukerens navn i en cookie og et profilbilde som viser navnet
    * LoginPage
    * ProfilePage
3. Registrer en ny webapplikasjon med [Googles pålogging](https://console.cloud.google.com/apis/credentials)
    * Pass på at du legger inn i Authorised JavaScript Origins verdien `http://localhost:3000`
    * Pass på at du legger inn i Authorised redirect URIs verdien `http://localhost:3000/login/callback`
    * Ta vare på client_id verdien (du vil trenge denne senere)
4. Implementer en login-fly mot Google
    * På login-siden må du lage en authorization uri som bruker authorization_endpoint
      fra https://accounts.google.com/.well-known/openid-configuration, client_id (fra forrige sted), redirect_uri
      scope "email" og response_type "token"
    * Om alt går rett vil Google sende brukeren tilbake til /login/callback. Lag en komponent her som pakker ut svaret
      i `window.location.hash` og sender `access_token` til Express på `/api/login`
    * Express må ta vare på access_token i en cookie
    * Implementer GET `/api/login` i Express til å sende access token i cookie som en Authorization: Bearer header til
      userinfo_endpoint angitt i https://accounts.google.com/.well-known/openid-configuration og returnere resultatet
      som JSON

[Løsningsforslag](https://github.com/kristiania-pg6301-2023/pg6301-frontend-programming/tree/reference/09)