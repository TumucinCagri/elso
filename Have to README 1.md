# [**SvelteKit tutorialt mindenkinek kötelező végigcsinálni a csapatban! Aki ezt nem teszi meg, azt nem csak szájba, hanem seggbe is úgy fogjuk széjjel fogjuk kúrni, hogy megtanulja végre rendesen a leckét**](https://svelte.dev/tutorial)


# Projekt Szabályzat
---

## Kötelező eszközök és telepítések

### Fejlesztőknek

- **Node.js v22.17.1**  
  Letöltés: [nodejs.org](https://nodejs.org/en/download)  
  *Ha nincs telepítve, nem tudsz dolgozni a projekten!*

- **Git Bash**  
  Letöltés: [git-scm.com](https://git-scm.com/downloads)  
  *Verziókezeléshez elengedhetetlen, hogy biztonságosan menthesd a munkád!*

- **Live Share (VS Code bővítmény)**  
  Telepítés:  
  1. Nyisd meg a VS Code-ot  
  2. Nyomd meg: `Ctrl + Shift + X`  
  3. Keresd meg: **Live Share**  
  4. Telepítsd!  
  *Ezzel valós időben segíthetünk egymásnak, mintha ott lennénk melletted.*

---

### Designereknek

- Jelenleg nincs hivatalos eszköz.  
  *Ha változik, értesítünk!*

---

## Kommunikáció

- **Discord közösség**  
  Csatlakozás: [Discord szerverünk](https://discord.gg/FtrCtQE9dZ)  
  *Kötelező bent lenned! Itt zajlanak a megbeszélések.*

- **Trello projektkezelő**  
  [Trellon](https://trello.com/invite/b/688187406df80713b9550cd1/ATTI9debb6f1dc82799784d2368d73ba684bD39DEEA0/weanimelist) követheted a feladataid és a projekt állását.*

---

## Fontos szabályok és ajánlások

- Minden nap dolgozz legalább 1-2 órát a projekten!  
- Mindig **kezdet előtt érdemes `git pull`-t végrehajtani**, hogy a legfrissebb változat legyen nálad!  
- Csak a **saját feladataidhoz tartozó fájlokat add hozzá** (`git add <fájlnév>`), soha ne használd a `git add .` vagy `git add --all` parancsokat!  
- Minden változást azonnal ments Git-re (`git commit` + `git push`).  
- Mások munkáját **engedély nélkül tilos módosítani vagy felülírni**!  
- Ha elakadsz, nyugodtan kérj segítséget a csoportban Discordon, ha kell használjuk a Live Share-t!  
- Tarts rendszeres szüneteket, igyál sok vizet és mozogj! Egészséged az első!

---

## Gyors kezdés

1. Telepítsd a szükséges eszközöket (Node.js, Git).  
2. Klónozd a projektet:  
   ```bash
   git clone https://github.com/peldaprojekt/pelda.git
   cd pelda
   npm install
   npm start
