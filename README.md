Eestikeelse kõne transkribeerimise näidisrakendus JavaScriptis 
==========

Kirjeldus
---------

Näidisrakendus JavaScriptis, mis transkribeerib kasutaja kõne ja kirjutab transkriptsiooni konsooli.
Kood on kommenteeritud ja sisaldab vaid transkribeerimiseks vajalikku, mis teeb programmi 
töö mõistmise lihtsaks. 

Rakendus kasutab töötamiseks [dictate.js](https://github.com/Kaljurand/dictate.js) teeki. Teeki pole modifitseeritud.
Seega peaks kõik vastama BSD litsentsi nõuetele. Lisainfo ,,LICENSE" failis.


Näidisrakenduse proovimine
-----------------------

Demo proovimiseks käivita esmalt lokaalne HTTP server:
```
    python3 -m http.server 8081
```
ja seejärel ava brauseris aadress  <http://localhost:8081/demo/simpleTest.html>

**NB!** Kui brauseris kuvatakse lehekülg veakoodiga 404, siis veenduge, et käivitasite
HTTP serveri repositooriumi juurkaustas.

Brauserite tugi
---------------

Töötab brauseri Google Chrome versiooniga 90.0.4430.93. Ei tohiks esineda probleeme muude versioonide
ja teise levinud veebilehitsejatega (nagu Firefox ja Edge), kuid seda ei saa kindlalt väita, sest katseid tehtud ei ole.

Vaata lisaks
--------
* [Bakalaureusetöö]() - Lõputöö, mille raames käesolev rakendus loodi. (viide lisatakse peale töö avaldamist)
* [Eestikeelse häälassistendi raamistik](https://github.com/leppsalujyrgen/eestikeelse-haalassistendi-raamistik) - Androidi rakendus, mis võtab sisendiks kasutaja häälkäskluse ning selle põhjal tuvastab soovitud tegevuse.
* [Kõnele service](https://github.com/Kaljurand/K6nele-service) - Eestikeelse kõne transkribeerimise tarkvara Androidile.
* [Dictate.js](https://github.com/Kaljurand/dictate.js) - Eestikeelse kõne transkribeerimise tarkvara JavaScriptile.
* [Kõne transkribeerimise näidisrakendus Androidis](https://github.com/leppsalujyrgen/Kone-transkribeerimine-Android-rakenduses.git) - Lihtsakoeline Androidi rakendus, mis kõne transkribeerib ja kirjutab selle ekraanile.
