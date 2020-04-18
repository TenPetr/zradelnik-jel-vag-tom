# 👨‍🍳 Cookbook 👩‍🍳

Záverečný projekt pre predmet "Moderní webové technologie".
Študenti vytvoria CRUD aplikáciu pre Žrádelník API.
Inšpirovať sa môžete [dummy appkou tu.](https://exercise.cngroup.dk/).

**DEADLINE ODOVZDANIA:** 8. 5. 2020 \
**TERMÍN ZÁPOČTU:** 12. 5. 2020

## Minimálne požiadavky

- Výpis listu receptov
- Vytvorenie receptu
- Editácia receptu
- Mazanie receptu

Nemusíte implementovať side-dish a počet prvkov k receptu je ľubovoľný. API je stavané tak, že povinný je iba názov receptu. Dokumentácia API nižšie.
\
\
Pre routing použite [React Router](https://reacttraining.com/react-router/web).
\
Pre API calls použite [Axios](https://github.com/axios/axios).

## Odovzdanie

V tomto repozitári budete mať vytvorené master branche, do ktorého **bez node_modules** pushnete svoje riešenia. Branche budú v tvare: `team1-master`, `team2-master`...
Čo sa custom projektov týka, poprosím tiež do tohto istého repa, kvôli prehladnosti. \
**Hint:** Vytvárajte si separátne branches a vytvorte si pull request do vášho mastru. Predtým ako kód mergnete, spravte si code review podobne, ako sme vám robili my v priebehu semestra, budete sa zároveň učiť medzi sebou a poskytnete si inú perspektívu.

## Spôsob hodnotenia

### Známkovanie

Základnou známkou, z ktorej budeme vychádzať je C. Na základe UI (menej podstatné, nie každý je dizajnér) a hlavne **kvality kódu a dodržiavania konvencii** pôjde známka vyššie, alebo nižšie. Je to z dôvodu rozdielnej úrovne jednotlivých projektov, kde principiálne nemôžeme dať rovnaké hodnotenie niekomu, kto sa s aplikáciou vyhral a niekomu, kto síce zadanie splnil, no kvalitatívne to nie je ono.

### Záverečná prezentácia

Celkovo bude prebiehať ideálne tak, že kaž'dy z vás odprezentuje časť projektu, na ktore pracoval, my sa potom spýtame na určité časti kódu, poradíme sa a udelíme známku spolu s individuálnym feedbackom :)
\
Hodnotenie, na základe najnovších opatrení vlády môže prebiehať osobne na univerzite. V prípade, že sa chcete stretnútť F2F, kontaktujte nás prosím. Inak to bude (bohužial) klasicky cez MS Teams.

## Ako si vylepšiť základnú známku

- Na štýlovanie využite `styled components`
  - Dostupné knižnice sú: [Emotion](https://emotion.sh/docs/introduction) alebo [Styled Components](https://styled-components.com/)
  
* Použite nejakú component library, ideálne:
  * [Material UI](https://material-ui.com/)
  * [Ant Design](https://ant.design/)
  * [React Bootstrap](https://react-bootstrap.github.io/)

* Pre folder structure využite [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/), štruktúra je nasledovná:

  - **Pages:** obsahujú logiku
  - **Templates:** Rendrujú celé UI, preberajú si logiku z page pomocou props
  - **Organisms:** zhluk molekúl a atómov, väčšie Časti UI, napr. Header a Footer
  - **Molecules:** Zhluk atómov, napr. Ikona s Label ==> IconLabel
  - **Atoms:** Najzákladnejšie časti stránky: Button, Paragraph, Heading...

* Oddeľte API calls od logiky pomocou custom hooks (veľmi dôležité). Pre inšpiráciu využite repo [fire-cards](https://github.com/fresh-js-devs/fire-cards) a branch `lecture`.

* **KOMPONENTUJTE**. Sila Reactu je v oddelení logických celkov do komponent. Vytvorenie jednej karty nestačí, skončíte so záplavou `<div />`ov a kód sa stáva horšie čitatelným!

* Mažte `console.log()`

* Pozor na nevyužité premenné a importy, chyby v konzoli.

* Prosím nepoužívajte `var`. Za každý `var` umrie na svete jeden 🦄 a Patrik dostáva malý infarkt.

* Ak máte arrow funkciu, ktorá je na jeden riadok / vracia jednu expression, nepotrebujete `{}`, ani `return`.

* Vytvorte axios inštanciu a nastavte default URL

## API dokumentácia

![POST /recipes](src/images/post_recipes.png)
![PUT /recipes](src/images/put_recipes.png)
![GET /recipes/{slug}](src/images/get_recipe.png)
![DELETE /recipes/{id}](src/images/delete_recipe.png)
![GET /recipes/ingredients](src/images/get_ingredients.png)
![GET /recipes/side-dishes](src/images/get_side_dishes.png)
