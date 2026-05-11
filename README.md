# Laboration 4 – Angular 2 (Programmering i TypeScript, DT208G)

**Genomförd av: joha2102**

Länk till applikationen: https://ts-labb-4.netlify.app/courses

## Projektbeskrivning

Detta projekt är del 2 av Laboration 4 i kursen *Programmering i TypeScript*. Det är en frontend som är byggd för att kommunicera med ett API som levererar information om kurser på Webbutvecklingsprogrammet.

Data hämtas från:
https://webbutveckling.miun.se/files/ramschema.json

Syftet är att skapa en Angular-applikation som hämtar data från en webbtjänst och presenterar den på skärmen.

## Webbplatsen innehåller

- En tabell med Webbutvecklingsprogrammets ramschema
- Tabellen visar data för fälten kurskod, kursnamn och progression
- Sorteringsfunktion för kursnamn, kurskod och progression.
- Filtreringsfunktion utifrån sökfras,

## Tekniker

- Angular
- TypeScript
- HTML & CSS (global samt på komponent-nivå)
- HttpClient
- Signals
- Git & GitHub


## Kör projektet lokalt

```bash
ng serve
```

Gå sedan till: http://localhost:4200

Sidan laddas om vid uppdateringar i koden.

## Bygg projektet

```bash
ng build
```
Detta kompilerar projektet och placerar de färdiga filerna i mappen `dist/`. 
Som standard optimeras applikationen för bästa möjliga prestanda och hastighet.