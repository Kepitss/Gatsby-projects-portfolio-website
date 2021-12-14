# Gatsby projects profolio website

Šis projekts ir veidots ar Gatsby ,kas papildus lieto Git(gitflow) ,lai izsekotu projekta izmaiņas un darba plūsmu.
<br></br>

https://gatsby-projects-portfolio.netlify.app/

## "Branch" vārda raksīšanas noteikumi.

- **Sāc "branch" vārdu ar vienu no grupas vārdiem:**
  - feature/
  - bugfix/
  - release/
  - hotfix/
  - support/

> #### Par "branch" grupas vārdu visbiežāk Gitflow parūpēsies.

- **Norādi autora vārdu pēc grupas vārda.**
- **Pēc autora vārda norādi īsu paskaidrojumu kam "branch" tiek lietota.**
- **Nelieto lielos burtus izņemot ja autora vārdā ir lielais burts**
- **Lieto slīpsvītru "/" lai atdalītu grupas vārdu no autora vārda un autora vārdu no paskaidrojuma.**
- **Paskaidrojuma vārdus atdali ar defisi "-".**
- **Nelieto punktu "." "branch" vārda beigās.**

> #### grupa/autors/īss-paskaidrojums
>
> <br></br>

## "Commit" vēstules rakstīšanas noteikumi.

- **Katra "commit" vēstule sastāv no:**
  - galvenes
  - galvenās daļas
  - kājenes
- **Galvenei vaig būt katrā "commit" vēstulē ,bet _galveno daļu_ un _kājeni_ vari lietot ja ir nepieciešams.**
  <br></br>

### Galvene

- **"Commit" vēstules galvenē ir obligāti jāiekļauj veids:**
  - **build:** = izmaiņas kas ietekmē būvēšanas sistēmu (piemēram: npm).
  - **docs:** = tikai dokumentācijas izmaiņas (piemēram: README.md).
  - **fix:** = kļūdas izlabošana. Tad obligāti ir galvenā daļā jaiekļauj divas rindkopas vai divi saraksta vienumi - "Before fix ..." un "Now ..."
  - **feat:** = jaunas funkcijas izveide
  - **perf:** = koda izmaiņa kas uzlabo mājaslapas darbību.
  - **refactor:** = koda izmaiņa, kas neizlabo kļūdu un nepievieno funkciju\*
  - **test:** = viss kas saistīts ar testiem
  - **revert:** = lieto ja ir vajadzība izlabot jau eksitējošu "commit" vēstuli. Tad galvenei ir jāsākas ar revert: un kopsavilkumu no labojamā "commit" vēstules galvenes. Kā arī galvenai daļai sākumā ir jasatur teikums "This reverts commit (SHA)" un ar paskaidrojumu kapēc šī "commit" vēstule tika labota.
- **"Commit" vēstules galvenē ir obligāti jaiekļauj kopsavilkums:**
  - Lieto galvenes kopsavilkumu ,lai aprakstītu īsu aprakstu par izmaiņu.
  - Izmanto imperaktīvu tagatnes laiku (lieto "save" nevis "saved")
  - Nelieto pirmo lielo burtu.
  - Nelieto punktu "." beigās.
    <br></br>

### Galvenā daļa

- **Tev galvenā daļā būtu vismaz jāatbild uz jautājumiem:**
  - Kapēc tu izveidoji šo izmaiņu?
  - Tu vari papildus izmantot salīdzinājumu ar iepriekšējo koda darbību ,lai parādītu izmaiņu vērtību.
    <br></br>

### Kājene

- Lieto kājeni ,lai norādītu noderīgu informāciju kam nebija vietas citās "commit" vēstules sekcijās.
  <br></br>

:relaxed: Paldies ka devāt man laiku.
