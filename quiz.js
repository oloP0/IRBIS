let questions = {
    weze: [
        // ===== BOA DUSICIEL =====
        { q: "Do jakiej rodziny należy boa dusiciel?", a: ["Żmijowate", "Dusiciele", "Kobry", "Pytony"], correct: 1 },
        { q: "Jak boa dusiciel zabija swoją ofiarę?", a: ["Jadem", "Uderzeniem", "Duszeniem", "Zagryzaniem"], correct: 2 },
        { q: "Jaką długość może osiągnąć boa dusiciel?", a: ["1 metr", "2–3 metry", "5–6 metrów", "10 metrów"], correct: 1 },
        { q: "Czy boa dusiciel jest jadowity?", a: ["Tak", "Nie", "Tylko samce", "Tylko młode"], correct: 1 },
        { q: "Skąd pochodzi boa dusiciel?", a: ["Afryka", "Ameryka Południowa", "Australia", "Europa"], correct: 1 },
        { q: "Jak długo żyje boa dusiciel w hodowli?", a: ["5 lat", "10 lat", "20–30 lat", "50 lat"], correct: 2 },
        { q: "Czym głównie żywi się boa dusiciel?", a: ["Roślinami", "Ryżem", "Gryzoniami i ptakami", "Owocami"], correct: 2 },
        { q: "Czy boa dusiciel potrzebuje UVB?", a: ["Tak, wysokiego", "Nie", "Tylko w nocy", "Tylko młode"], correct: 1 },
        { q: "Jakie podłoże jest odpowiednie dla boa dusiciela?", a: ["Piasek", "Żwir", "Lignocel", "Trociny iglaste"], correct: 2 },
        { q: "Jaki typ terrarium jest najlepszy dla boa dusiciela?", a: ["Pionowe", "Kostka", "Poziome i przestronne", "Akwarium wodne"], correct: 2 },

        // ===== PYTON KRÓLEWSKI =====
        { q: "Skąd pochodzi pyton królewski?", a: ["Azja", "Afryka", "Ameryka Północna", "Australia"], correct: 1 },
        { q: "Dlaczego pyton królewski nazywany jest 'kuleczką'?", a: ["Bo jest okrągły", "Bo zwija się w kulę przy stresie", "Bo ma okrągłe oczy", "Bo tak wygląda jego jajo"], correct: 1 },
        { q: "Czy pyton królewski jest jadowity?", a: ["Tak", "Nie", "Tylko samce", "Tylko młode"], correct: 1 },
        { q: "Jaką długość osiąga pyton królewski?", a: ["50 cm", "1–1.5 m", "3 m", "5 m"], correct: 1 },
        { q: "Co jest podstawą diety pytona królewskiego?", a: ["Owady", "Ryby", "Gryzonie", "Rośliny"], correct: 2 },
        { q: "Jakie zachowanie jest typowe dla pytona królewskiego?", a: ["Agresja", "Szybkie ataki", "Chowanie się i spokojny charakter", "Skakanie"], correct: 2 },
        { q: "Jakie terrarium jest odpowiednie dla pytona królewskiego?", a: ["Wysokie", "Poziome", "Wodne", "Bez kryjówek"], correct: 1 },
        { q: "Czy pyton królewski potrzebuje kryjówek?", a: ["Nie", "Tak, minimum dwóch", "Tylko jednej", "Tylko młode"], correct: 1 },
        { q: "Jak często karmi się dorosłego pytona królewskiego?", a: ["Codziennie", "Co 2 dni", "Co 7–14 dni", "Raz w miesiącu"], correct: 2 },
        { q: "Jak pyton królewski reaguje na stres?", a: ["Atakuje", "Ucieka", "Zwiją się w kulę", "Wydaje dźwięki"], correct: 2 },

        // ===== WĄŻ ZBOŻOWY =====
        { q: "Skąd pochodzi wąż zbożowy?", a: ["Europa", "Azja", "Ameryka Północna", "Afryka"], correct: 2 },
        { q: "Czy wąż zbożowy jest jadowity?", a: ["Tak", "Nie", "Tylko młode", "Tylko samce"], correct: 1 },
        { q: "Jaką długość osiąga wąż zbożowy?", a: ["50 cm", "1–1.5 m", "3 m", "5 m"], correct: 1 },
        { q: "Dlaczego wąż zbożowy ma taką nazwę?", a: ["Żywi się zbożem", "Mieszka w polach kukurydzy", "Często spotykano go w magazynach zboża", "Ma kolor zboża"], correct: 2 },
        { q: "Jakie terrarium jest odpowiednie dla węża zbożowego?", a: ["Wysokie", "Poziome", "Wodne", "Bez kryjówek"], correct: 1 },
        { q: "Czy wąż zbożowy dobrze się wspina?", a: ["Nie", "Tak", "Tylko młode", "Tylko samce"], correct: 1 },
        { q: "Jak często karmi się dorosłego węża zbożowego?", a: ["Codziennie", "Co 2 dni", "Co 10–14 dni", "Raz w miesiącu"], correct: 2 },
        { q: "Jakie podłoże jest najlepsze dla węża zbożowego?", a: ["Piasek", "Lignocel", "Żwir", "Trociny iglaste"], correct: 1 },
        { q: "Czy wąż zbożowy jest dobry dla początkujących?", a: ["Nie", "Tak", "Tylko młode", "Tylko samce"], correct: 1 },
        { q: "Jakie zachowanie jest typowe dla węża zbożowego?", a: ["Agresja", "Spokój i ciekawość", "Skakanie", "Głośne syczenie"], correct: 1 }
    ],

    jaszczurki: [

    // ===== GEKON LAMPARCI =====
    { q: "Skąd pochodzi gekon lamparci?", a: ["Afryka", "Azja", "Australia", "Ameryka Południowa"], correct: 1 },
    { q: "Jakie podłoże jest najbezpieczniejsze dla gekona lamparciego?", a: ["Piasek", "Żwir", "Lignocel lub mata", "Trociny"], correct: 2 },
    { q: "Czy gekon lamparci potrzebuje UVB?", a: ["Tak, wysokiego", "Nie", "Może, ale nie jest to konieczne", "Tylko młode"], correct: 2 },

    // ===== GEKON ORZESIONY =====
    { q: "Skąd pochodzi gekon orzęsiony?", a: ["Madagaskar", "Nowa Kaledonia", "Australia", "Indonezja"], correct: 1 },
    { q: "Jaką dietę preferuje gekon orzęsiony?", a: ["Owady i papki owocowe", "Tylko owady", "Tylko owoce", "Rośliny"], correct: 0 },
    { q: "Czy gekon orzęsiony potrafi skakać?", a: ["Nie", "Tak, bardzo dobrze", "Tylko młode", "Tylko samce"], correct: 1 },

    // ===== GEKON PŁACZĄCY =====
    { q: "Dlaczego gekon płaczący ma taką nazwę?", a: ["Wydaje dźwięki jak płacz", "Ma łzy z powodu braku powiek", "Ma mokre oczy po jedzeniu", "To nazwa zwyczajowa bez powodu"], correct: 1 },
    { q: "Skąd pochodzi gekon płaczący?", a: ["Afryka", "Azja", "Australia", "Europa"], correct: 1 },
    { q: "Jakie terrarium jest odpowiednie dla gekona płaczącego?", a: ["Poziome", "Wodne", "Pionowe", "Bez kryjówek"], correct: 2 },

    // ===== AGAMA BRODATA =====
    { q: "Skąd pochodzi agama brodata?", a: ["Australia", "Afryka", "Azja", "Ameryka Południowa"], correct: 0 },
    { q: "Co jest podstawą diety agamy brodatej?", a: ["Owoce", "Owady i zielenina", "Ryby", "Nasiona"], correct: 1 },
    { q: "Jakie UVB potrzebuje agama brodata?", a: ["Brak", "Niskie", "Średnie", "Wysokie 10–12%"], correct: 3 },

    // ===== AGAMA KOŁNIERZASTA =====
    { q: "Z czego słynie agama kołnierzasta?", a: ["Zmieniania koloru", "Rozkładania kołnierza przy stresie", "Skakania", "Jadowitości"], correct: 1 },
    { q: "Skąd pochodzi agama kołnierzasta?", a: ["Australia i Papua Nowa Gwinea", "Madagaskar", "Afryka", "Europa"], correct: 0 },
    { q: "Jakie terrarium jest odpowiednie dla agamy kołnierzastej?", a: ["Wodne", "Pionowe", "Poziome i przestronne", "Małe i wilgotne"], correct: 2 },

    // ===== AGAMA KARŁOWATA =====
    { q: "Jaka jest cecha charakterystyczna agamy karłowatej?", a: ["Duży rozmiar", "Mały rozmiar i spokojny charakter", "Jadowitość", "Życie w wodzie"], correct: 1 },
    { q: "Skąd pochodzi agama karłowata?", a: ["Europa", "Australia", "Azja", "Afryka"], correct: 1 },
    { q: "Czym głównie żywi się agama karłowata?", a: ["Owocami", "Owady + trochę roślin", "Ryżem", "Trawą"], correct: 1 },

    // ===== KAMELEON JEMEŃSKI =====
    { q: "Skąd pochodzi kameleon jemeński?", a: ["Jemen i Arabia Saudyjska", "Madagaskar", "Australia", "Afryka"], correct: 0 },
    { q: "Co jest charakterystyczne dla kameleona jemeńskiego?", a: ["Brak zmiany koloru", "Róg na nosie", "Hełm na głowie", "Jadowitość"], correct: 2 },
    { q: "Jaką wilgotność preferuje kameleon jemeński?", a: ["10–20%", "30–40%", "50–60%", "80–90%"], correct: 2 },

    // ===== KAMELEON LAMPARCI =====
    { q: "Skąd pochodzi kameleon lamparci?", a: ["Madagaskar", "Australia", "Afryka", "Azja"], correct: 0 },
    { q: "Jakie terrarium jest odpowiednie dla kameleona lamparciego?", a: ["Poziome", "Pionowe", "Wodne", "Bez roślin"], correct: 1 },
    { q: "Co jest typowe dla kameleona lamparciego?", a: ["Brak zmiany koloru", "Silna zmiana barw", "Życie w ziemi", "Brak ogona"], correct: 1 },

    // ===== WARAN STEPOWY =====
    { q: "Skąd pochodzi waran stepowy?", a: ["Afryka", "Azja", "Australia", "Europa"], correct: 1 },
    { q: "Co jest podstawą diety warana stepowego?", a: ["Owady", "Rośliny", "Ryby", "Nasiona"], correct: 0 },
    { q: "Jakie terrarium jest odpowiednie dla warana stepowego?", a: ["Małe", "Średnie", "Bardzo duże i suche", "Wodne"], correct: 2 },

    // ===== WARAN ARGENTYŃSKI (TEGU) =====
    { q: "Jak inaczej nazywa się waran argentyński?", a: ["Tegu", "Gekon", "Kameleon", "Agama"], correct: 0 },
    { q: "Co je waran argentyński?", a: ["Rośliny", "Owady, mięso i owoce", "Tylko owady", "Tylko mięso"], correct: 1 },
    { q: "Jakie UVB potrzebuje tegu?", a: ["Brak", "Niskie", "Średnie", "Wysokie"], correct: 3 },

    // ===== FELSUMA MADAGASKARSKA =====
    { q: "Skąd pochodzi felsuma madagaskarska?", a: ["Madagaskar", "Australia", "Afryka", "Azja"], correct: 0 },
    { q: "Jakie terrarium jest odpowiednie dla felsumy?", a: ["Poziome", "Pionowe", "Wodne", "Bez roślin"], correct: 1 },
    { q: "Czym żywi się felsuma?", a: ["Owady i nektar", "Tylko owoce", "Tylko owady", "Rośliny"], correct: 0 },

    // ===== SZYSZKOWIEC =====
    { q: "Co wyróżnia szyszkowca?", a: ["Kolce na ogonie", "Łuski przypominające szyszki", "Jadowitość", "Brak kończyn"], correct: 1 },
    { q: "Skąd pochodzi szyszkowiec?", a: ["Australia", "Europa", "Azja", "Afryka"], correct: 0 },
    { q: "Czym żywi się szyszkowiec?", a: ["Owady", "Owoce", "Ryby", "Trawa"], correct: 0 }
],

    plazy: [

    // ===== AXOLOTL MEKSYKAŃSKI =====
    { q: "Skąd pochodzi axolotl meksykański?", a: ["Meksyk", "Brazylia", "Australia", "Indonezja"], correct: 0 },
    { q: "Dlaczego axolotl zachowuje cechy larwalne przez całe życie?", a: ["Z powodu neotenii", "Z powodu choroby", "Z powodu braku UVB", "Z powodu stresu"], correct: 0 },
    { q: "Jaka temperatura wody jest odpowiednia dla axolotla?", a: ["28–30°C", "16–20°C", "5–10°C", "25–27°C"], correct: 1 },
    { q: "Czym żywi się axolotl?", a: ["Owocami", "Owocami i roślinami", "Mięsem, robakami i pelletami", "Trawą"], correct: 2 },
    { q: "Jakiego podłoża NIE wolno stosować u axolotla?", a: ["Piasek drobny", "Gołe dno", "Żwir", "Mata"], correct: 2 },
    { q: "Co jest ważne w akwarium axolotla?", a: ["Silne światło", "Brak filtracji", "Czysta, chłodna woda", "Wysoka temperatura"], correct: 2 },

    // ===== RANITOMEYA RETICULATA =====
    { q: "Do jakiej grupy należą Ranitomeya reticulata?", a: ["Ropuchy", "Drzewołazy (żaby trujące)", "Kumaki", "Rzekotki"], correct: 1 },
    { q: "Skąd pochodzi Ranitomeya reticulata?", a: ["Europa", "Ameryka Południowa", "Australia", "Afryka"], correct: 1 },
    { q: "Co jest kluczowe w hodowli Ranitomeya reticulata?", a: ["Niska wilgotność", "Wysoka wilgotność i roślinność", "Suchy piasek", "Brak kryjówek"], correct: 1 },
    { q: "Czym żywią się Ranitomeya reticulata?", a: ["Drobne owady", "Ryby", "Rośliny", "Nasiona"], correct: 0 },
    { q: "Jakie terrarium jest odpowiednie dla Ranitomeya reticulata?", a: ["Pionowe, wilgotne, z roślinami", "Poziome i suche", "Wodne", "Pustynne"], correct: 0 },
    { q: "Dlaczego Ranitomeya reticulata są kolorowe?", a: ["Aby odstraszać drapieżniki", "Aby przyciągać partnerów", "Aby się kamuflować", "To przypadek"], correct: 0 },

    // ===== KUMAK DALEKOWSCHODNI =====
    { q: "Skąd pochodzi kumak dalekowschodni?", a: ["Rosja, Chiny, Korea", "Australia", "Afryka", "Ameryka Północna"], correct: 0 },
    { q: "Co wyróżnia kumaka dalekowschodniego?", a: ["Jaskrawe ubarwienie ostrzegawcze", "Duży rozmiar", "Jadowitość", "Brak błon pławnych"], correct: 0 },
    { q: "Jakie środowisko preferuje kumak dalekowschodni?", a: ["Suchy step", "Wilgotne tereny i woda", "Pustynia", "Góry wysokie"], correct: 1 },
    { q: "Jak kumak broni się przed drapieżnikami?", a: ["Ucieka", "Wydziela toksyny i pokazuje brzuch", "Udaje martwego", "Wydaje głośne dźwięki"], correct: 1 },
    { q: "Czym żywi się kumak dalekowschodni?", a: ["Owocami", "Owady i drobne bezkręgowce", "Trawą", "Ryżem"], correct: 1 },
    { q: "Jak wygląda brzuch kumaka dalekowschodniego?", a: ["Jest czarny", "Jest jaskrawo pomarańczowy", "Jest biały", "Jest niebieski"], correct: 1 },

    // ===== RZEKOTKA AUSTRALIJSKA =====
    { q: "Skąd pochodzi rzekotka australijska?", a: ["Australia", "Europa", "Ameryka Południowa", "Afryka"], correct: 0 },
    { q: "Jakie terrarium jest odpowiednie dla rzekotki australijskiej?", a: ["Poziome", "Pionowe i wilgotne", "Wodne", "Suche i gorące"], correct: 1 },
    { q: "Co jest typowe dla rzekotki australijskiej?", a: ["Jest jadowita", "Ma spokojny charakter i duży rozmiar", "Żyje pod ziemią", "Nie potrafi się wspinać"], correct: 1 },
    { q: "Czym żywi się rzekotka australijska?", a: ["Owocami", "Owady", "Trawą", "Nasionami"], correct: 1 },
    { q: "Jaką wilgotność lubi rzekotka australijska?", a: ["10–20%", "30–40%", "60–80%", "90–100%"], correct: 2 },
    { q: "Jakie podłoże jest odpowiednie dla rzekotki australijskiej?", a: ["Piasek", "Ziemia i mech", "Żwir", "Trociny"], correct: 1 },

    // ===== ŻABA ROGATA =====
    { q: "Dlaczego żaba rogata ma taką nazwę?", a: ["Ma rogi na grzbiecie", "Ma wyrostki nad oczami przypominające rogi", "Jest agresywna", "Wydaje dźwięki jak ryk"], correct: 1 },
    { q: "Skąd pochodzi żaba rogata?", a: ["Ameryka Południowa", "Europa", "Australia", "Azja"], correct: 0 },
    { q: "Co jest charakterystyczne dla żaby rogatej?", a: ["Jest bardzo mała", "Ma ogromny apetyt i szeroką paszczę", "Żyje na drzewach", "Nie potrzebuje wilgoci"], correct: 1 },
    { q: "Czym żywi się żaba rogata?", a: ["Owocami", "Owady i małe kręgowce", "Trawą", "Nasionami"], correct: 1 },
    { q: "Jakie podłoże jest najlepsze dla żaby rogatej?", a: ["Piasek", "Wilgotny torf lub włókno kokosowe", "Żwir", "Sucha ziemia"], correct: 1 },
    { q: "Jak zachowuje się żaba rogata?", a: ["Jest bardzo aktywna", "Jest spokojna i mało ruchliwa", "Cały czas skacze", "Żyje w wodzie"], correct: 1 },

    // ===== RZEKOTKA ZIELONA =====
    { q: "Skąd pochodzi rzekotka zielona?", a: ["Europa", "Australia", "Ameryka Północna", "Afryka"], correct: 0 },
    { q: "Jakie środowisko preferuje rzekotka zielona?", a: ["Suche tereny", "Wilgotne miejsca i roślinność", "Pustynie", "Wysokie góry"], correct: 1 },
    { q: "Co wyróżnia rzekotkę zieloną?", a: ["Jest jadowita", "Ma przyssawki na palcach ułatwiające wspinanie", "Żyje pod ziemią", "Nie potrafi pływać"], correct: 1 },
    { q: "Czym żywi się rzekotka zielona?", a: ["Owocami", "Owady", "Trawą", "Nasionami"], correct: 1 },
    { q: "Jakie terrarium jest odpowiednie dla rzekotki zielonej?", a: ["Pionowe i wilgotne", "Poziome i suche", "Wodne", "Pustynne"], correct: 0 },
    { q: "Jakie podłoże jest najlepsze dla rzekotki zielonej?", a: ["Piasek", "Mech i ziemia", "Żwir", "Trociny"], correct: 1 }

],

   ptaki: [

    // ===== ARA ARARAUNA =====
    { q: "Skąd pochodzi ara ararauna?", a: ["Ameryka Południowa", "Australia", "Afryka", "Azja"], correct: 0 },
    { q: "Co wyróżnia arę araraunę?", a: ["Cichy głos", "Ogromna inteligencja i głośne wokalizacje", "Brak zdolności latania", "Życie w nocy"], correct: 1 },
    { q: "Jak długo może żyć ara ararauna?", a: ["10 lat", "20 lat", "50–70 lat", "100 lat"], correct: 2 },
    { q: "Czym żywi się ara ararauna?", a: ["Nasionami, owocami i orzechami", "Trawą", "Ryżem", "Owocami morza"], correct: 0 },
    { q: "Jakie warunki są ważne dla ary ararauny?", a: ["Mała klatka", "Dużo przestrzeni i zabawy", "Brak zabawek", "Ciemne pomieszczenie"], correct: 1 },

    // ===== NIMFA =====
    { q: "Skąd pochodzi nimfa?", a: ["Australia", "Europa", "Afryka", "Ameryka Północna"], correct: 0 },
    { q: "Co jest charakterystyczne dla nimfy?", a: ["Czuba na głowie", "Brak ogona", "Czerwone skrzydła", "Nocny tryb życia"], correct: 0 },
    { q: "Jakie zachowanie jest typowe dla nimf?", a: ["Agresja", "Łagodność i towarzyskość", "Życie samotnicze", "Brak wokalizacji"], correct: 1 },
    { q: "Czym żywi się nimfa?", a: ["Nasionami i warzywami", "Owocami morza", "Trawą", "Wyłącznie owocami"], correct: 0 },
    { q: "Jak długo żyje nimfa?", a: ["5 lat", "10 lat", "15–25 lat", "50 lat"], correct: 2 },

    // ===== ALEKSANDRETTA OBROŻNA =====
    { q: "Skąd pochodzi aleksandretta obrożna?", a: ["Indie i Afryka", "Australia", "Europa", "Ameryka Południowa"], correct: 0 },
    { q: "Co wyróżnia aleksandrettę obrożną?", a: ["Czarna obroża u samców", "Brak ogona", "Czerwone skrzydła", "Nocny tryb życia"], correct: 0 },
    { q: "Jakie zachowanie jest typowe dla aleksandretty?", a: ["Cisza i spokój", "Głośne nawoływania", "Brak latania", "Życie w nocy"], correct: 1 },
    { q: "Czym żywi się aleksandretta obrożna?", a: ["Nasionami, owocami i warzywami", "Trawą", "Mięsem", "Owocami morza"], correct: 0 },
    { q: "Jak długo żyje aleksandretta obrożna?", a: ["5 lat", "10 lat", "20–30 lat", "60 lat"], correct: 2 },

    // ===== KAKADU BIAŁA =====
    { q: "Skąd pochodzi kakadu biała?", a: ["Australia", "Europa", "Ameryka Południowa", "Afryka"], correct: 0 },
    { q: "Co wyróżnia kakadu białą?", a: ["Czarna obroża", "Duża biała czuba", "Brak ogona", "Czerwone skrzydła"], correct: 1 },
    { q: "Jakie zachowanie jest typowe dla kakadu?", a: ["Cisza", "Ogromna potrzeba kontaktu i głośność", "Brak aktywności", "Nocny tryb życia"], correct: 1 },
    { q: "Czym żywi się kakadu biała?", a: ["Nasionami, orzechami i owocami", "Trawą", "Mięsem", "Wyłącznie warzywami"], correct: 0 },
    { q: "Jak długo żyje kakadu biała?", a: ["5 lat", "20 lat", "40–70 lat", "100 lat"], correct: 2 },

    // ===== LORYSA GÓRSKA =====
    { q: "Skąd pochodzi lorysa górska?", a: ["Australia i Oceania", "Europa", "Afryka", "Ameryka Południowa"], correct: 0 },
    { q: "Co wyróżnia lorysę górską?", a: ["Żywi się nektarem", "Jest nocna", "Nie potrafi latać", "Ma czarną obrożę"], correct: 0 },
    { q: "Jakie terrarium/klatka jest odpowiednia dla lorysy?", a: ["Mała klatka", "Duża przestrzeń i gałęzie", "Wodne terrarium", "Pustynne warunki"], correct: 1 },
    { q: "Jakie zachowanie jest typowe dla lorysy górskiej?", a: ["Cisza", "Energia i ciekawość", "Brak ruchu", "Agresja"], correct: 1 },
    { q: "Czym NIE wolno karmić lorysy?", a: ["Nektarem", "Specjalną papką", "Owocami", "Nasionami"], correct: 3 },

    // ===== ŻAKO =====
    { q: "Skąd pochodzi papuga żako?", a: ["Afryka", "Australia", "Europa", "Ameryka Południowa"], correct: 0 },
    { q: "Co wyróżnia papugę żako?", a: ["Niska inteligencja", "Najlepsza zdolność mówienia wśród papug", "Brak ogona", "Nocny tryb życia"], correct: 1 },
    { q: "Jak długo żyje papuga żako?", a: ["5 lat", "10 lat", "40–60 lat", "100 lat"], correct: 2 },
    { q: "Czym żywi się żako?", a: ["Nasionami, warzywami i owocami", "Trawą", "Mięsem", "Wyłącznie orzechami"], correct: 0 },
    { q: "Jakie warunki są ważne dla żako?", a: ["Mała klatka", "Dużo zabawek i stymulacji", "Brak kontaktu z ludźmi", "Ciemne pomieszczenie"], correct: 1 }

],

ssaki: [

    // ===== KAPUCYNKA =====
    { q: "Skąd pochodzi kapucynka?", a: ["Ameryka Południowa", "Afryka", "Australia", "Azja"], correct: 0 },
    { q: "Co wyróżnia kapucynki?", a: ["Niska inteligencja", "Wysoka inteligencja i zręczność", "Brak ogona", "Nocny tryb życia"], correct: 1 },
    { q: "Czym żywi się kapucynka?", a: ["Trawą", "Owocami, owadami i roślinami", "Wyłącznie mięsem", "Nasionami"], correct: 1 },
    { q: "Czy kapucynka wymaga zezwolenia w Polsce?", a: ["Nie", "Tak, CITES", "Tylko czasami", "Tylko samce"], correct: 1 },
    { q: "Jakie warunki są ważne dla kapucynki?", a: ["Mała klatka", "Duża woliera i stymulacja", "Brak zabawek", "Ciemne pomieszczenie"], correct: 1 },

    // ===== SKUNKS PLAMISTY =====
    { q: "Skąd pochodzi skunks plamisty?", a: ["Ameryka Północna", "Europa", "Australia", "Afryka"], correct: 0 },
    { q: "Co wyróżnia skunksa plamistego?", a: ["Brak zapachu", "Możliwość wydzielania woni obronnej", "Jadowitość", "Brak ogona"], correct: 1 },
    { q: "Czym żywi się skunks plamisty?", a: ["Owocami morza", "Owocami, owadami i mięsem", "Trawą", "Wyłącznie owocami"], correct: 1 },
    { q: "Czy skunks plamisty jest legalny w Polsce?", a: ["Tak", "Nie", "Tylko samce", "Tylko młode"], correct: 0 },
    { q: "Jakie warunki są odpowiednie dla skunksa?", a: ["Mała klatka", "Duża przestrzeń i kryjówki", "Wodne terrarium", "Pustynne warunki"], correct: 1 },

    // ===== LEMUR KATTA =====
    { q: "Skąd pochodzi lemur katta?", a: ["Madagaskar", "Australia", "Europa", "Afryka"], correct: 0 },
    { q: "Co wyróżnia lemura kattę?", a: ["Brak ogona", "Długi pasiasty ogon", "Nocny tryb życia", "Brak skakania"], correct: 1 },
    { q: "Czym żywi się lemur katta?", a: ["Owocami i roślinami", "Mięsem", "Trawą", "Wyłącznie owadami"], correct: 0 },
    { q: "Czy lemur katta wymaga zezwolenia?", a: ["Nie", "Tak, CITES", "Tylko samce", "Tylko młode"], correct: 1 },
    { q: "Jakie warunki są odpowiednie dla lemura?", a: ["Mała klatka", "Duża woliera i grupa", "Brak światła", "Wodne środowisko"], correct: 1 },

    // ===== JEŻOZWIERZ BRAZYLIJSKI =====
    { q: "Skąd pochodzi jeżozwierz brazylijski?", a: ["Ameryka Południowa", "Europa", "Australia", "Azja"], correct: 0 },
    { q: "Co wyróżnia jeżozwierza brazylijskiego?", a: ["Brak kolców", "Kolce i zdolność wspinania", "Jadowitość", "Brak ogona"], correct: 1 },
    { q: "Czym żywi się jeżozwierz brazylijski?", a: ["Liśćmi, owocami i korą", "Mięsem", "Trawą", "Nasionami"], correct: 0 },
    { q: "Czy jeżozwierz brazylijski jest legalny w Polsce?", a: ["Tak", "Nie", "Tylko samce", "Tylko młode"], correct: 0 },
    { q: "Jakie warunki są odpowiednie dla jeżozwierza?", a: ["Mała klatka", "Duża woliera z gałęziami", "Wodne terrarium", "Pustynne warunki"], correct: 1 },


        // ===== kapibara =====

{ q: "Skąd pochodzi kapibara?", a: ["Ameryka Południowa", "Afryka", "Australia", "Europa"], correct: 0 },

{ q: "Co wyróżnia kapibarę spośród innych gryzoni?", a: ["Jest największym gryzoniem świata", "Ma chwytny ogon", "Potrafi latać", "Żyje wyłącznie na pustyniach"], correct: 0 },

{ q: "Jakie środowisko najbardziej odpowiada kapibarze?", a: ["Bagna i brzegi rzek", "Pustynie", "Góry wysokie", "Tundra"], correct: 0 },

{ q: "Co stanowi podstawę diety kapibary?", a: ["Trawy i rośliny wodne", "Mięso", "Owady", "Nasiona drzew iglastych"], correct: 0 },

{ q: "Jakie warunki są odpowiednie dla kapibary w hodowli?", a: ["Duży wybieg i basen", "Mała klatka", "Terrarium suche", "Brak dostępu do wody"], correct: 0 },

    // ===== LOTOPAŁANKA KARŁOWATA =====
    { q: "Skąd pochodzi lotopałanka karłowata?", a: ["Australia", "Europa", "Ameryka Południowa", "Afryka"], correct: 0 },
    { q: "Co wyróżnia lotopałanki?", a: ["Brak błony lotnej", "Błona lotna umożliwiająca szybowanie", "Brak ogona", "Życie w wodzie"], correct: 1 },
    { q: "Czym żywi się lotopałanka?", a: ["Nektarem, owocami i owadami", "Mięsem", "Trawą", "Wyłącznie nasionami"], correct: 0 },
    { q: "Czy lotopałanki można trzymać pojedynczo?", a: ["Tak", "Nie, wymagają grupy", "Tylko samce", "Tylko młode"], correct: 1 },
    { q: "Jakie warunki są odpowiednie dla lotopałanki?", a: ["Mała klatka", "Duża pionowa woliera", "Wodne terrarium", "Pustynne warunki"], correct: 1 }

],

bezkregowce: [

    // ===== MODLISZKA ORCHIDEOWA =====
    { q: "Skąd pochodzi modliszka orchideowa?", a: ["Azja Południowo-Wschodnia", "Afryka", "Ameryka Południowa", "Australia"], correct: 0 },
    { q: "Co wyróżnia modliszkę orchideową?", a: ["Wygląd przypominający kwiat", "Jadowitość", "Brak skrzydeł", "Życie pod ziemią"], correct: 0 },
    { q: "Jakie warunki lubi modliszka orchideowa?", a: ["Niska wilgotność", "Wysoka wilgotność i ciepło", "Zimno", "Suche powietrze"], correct: 1 },
    { q: "Czym żywi się modliszka orchideowa?", a: ["Owocami", "Owadzimi larwami i muchami", "Liśćmi", "Nektarem"], correct: 1 },

    // ===== MODLISZKA DIABELSKA =====
    { q: "Skąd pochodzi modliszka diabelska?", a: ["Afryka", "Europa", "Australia", "Ameryka Północna"], correct: 0 },
    { q: "Co wyróżnia modliszkę diabelską?", a: ["Duże rozmiary i wachlarzowate odnóża", "Jadowitość", "Brak skrzydeł", "Życie w wodzie"], correct: 0 },
    { q: "Jakie warunki są odpowiednie dla modliszki diabelskiej?", a: ["Niska wilgotność", "Wysoka wilgotność", "Zimne środowisko", "Brak wentylacji"], correct: 0 },
    { q: "Czym żywi się modliszka diabelska?", a: ["Owocami", "Owadzimi larwami i świerszczami", "Liśćmi", "Nasionami"], correct: 1 },

    // ===== ŚLIMAK OLBRZYMI AFRYKAŃSKI =====
    { q: "Skąd pochodzi ślimak olbrzymi afrykański?", a: ["Afryka", "Europa", "Azja", "Ameryka Południowa"], correct: 0 },
    { q: "Co wyróżnia ślimaka olbrzymiego afrykańskiego?", a: ["Duże rozmiary", "Jadowitość", "Brak muszli", "Życie w wodzie"], correct: 0 },
    { q: "Jakie warunki są odpowiednie dla ślimaka afrykańskiego?", a: ["Suche środowisko", "Wilgotne terrarium", "Wysoka temperatura 35°C", "Zimno"], correct: 1 },
    { q: "Czym żywi się ślimak afrykański?", a: ["Mięsem", "Warzywami i owocami", "Owadzimi larwami", "Nasionami"], correct: 1 },

    // ===== ŚLIMAK IMMACULATA =====
    { q: "Do jakiego rodzaju należy ślimak Immaculata?", a: ["Achatina", "Helix", "Pomacea", "Lissachatina"], correct: 0 },
    { q: "Co wyróżnia ślimaka Immaculata?", a: ["Jasna muszla i szybki wzrost", "Jadowitość", "Brak muszli", "Życie w wodzie"], correct: 0 },
    { q: "Jakie podłoże jest najlepsze dla Immaculaty?", a: ["Piasek", "Włókno kokosowe", "Żwir", "Trociny"], correct: 1 },
    { q: "Czym żywi się ślimak Immaculata?", a: ["Warzywami i wapniem", "Mięsem", "Owadzimi larwami", "Nasionami"], correct: 0 },

    // ===== PATYCZAK ROGATY =====
    { q: "Skąd pochodzi patyczak rogaty?", a: ["Australia", "Europa", "Afryka", "Ameryka Północna"], correct: 0 },
    { q: "Co wyróżnia patyczaka rogatego?", a: ["Wyrostki przypominające rogi", "Jadowitość", "Życie w wodzie", "Brak odnóży"], correct: 0 },
    { q: "Czym żywi się patyczak rogaty?", a: ["Liśćmi jeżyny i malin", "Owadzimi larwami", "Mięsem", "Nasionami"], correct: 0 },
    { q: "Jakie warunki są odpowiednie dla patyczaka rogatego?", a: ["Suche powietrze", "Wilgotne terrarium z wentylacją", "Zimno", "Wysoka temperatura 40°C"], correct: 1 },

    // ===== PTASZNIK KĘDZIERZAWY =====
    { q: "Skąd pochodzi ptasznik kędzierzawy?", a: ["Ameryka Środkowa", "Europa", "Azja", "Australia"], correct: 0 },
    { q: "Co wyróżnia ptasznika kędzierzawego?", a: ["Spokojny charakter", "Jadowitość śmiertelna dla ludzi", "Życie w wodzie", "Brak włosków parzących"], correct: 0 },
    { q: "Jakie podłoże jest najlepsze dla ptasznika kędzierzawego?", a: ["Piasek", "Włókno kokosowe", "Żwir", "Trociny"], correct: 1 },

    // ===== SKORPION CESARSKI =====
    { q: "Skąd pochodzi skorpion cesarski?", a: ["Afryka", "Europa", "Ameryka Północna", "Azja"], correct: 0 },
    { q: "Co wyróżnia skorpiona cesarskiego?", a: ["Duże rozmiary i spokojny charakter", "Jadowitość śmiertelna", "Życie w wodzie", "Brak szczypiec"], correct: 0 },
    { q: "Czym żywi się skorpion cesarski?", a: ["Owocami", "Owadzimi larwami i świerszczami", "Liśćmi", "Nasionami"], correct: 1 },

    // ===== PTASZNIK GOLIAT =====
    { q: "Co wyróżnia ptasznika goliata?", a: ["Największy ptasznik świata", "Życie w wodzie", "Brak jadu", "Jasne ubarwienie"], correct: 0 },
    { q: "Skąd pochodzi ptasznik goliat?", a: ["Ameryka Południowa", "Europa", "Australia", "Afryka"], correct: 0 },
    { q: "Jakie warunki są odpowiednie dla ptasznika goliata?", a: ["Wysoka wilgotność i ciepło", "Zimno", "Suche powietrze", "Brak podłoża"], correct: 0 }

],
};


// ====== LOGIKA QUIZU ======
let selectedQuestions = [];
let current = 0;
let score = 0;

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", () => location.reload());

function startQuiz() {
    const category = document.getElementById("category-select").value;

    if (category === "all") {
        let all = [];
        Object.values(questions).forEach(cat => {
            all = all.concat(cat);
        });
        selectedQuestions = all.sort(() => Math.random() - 0.5).slice(0, 25);
    } else {
        selectedQuestions = questions[category]
            .sort(() => Math.random() - 0.5)
            .slice(0, 25);
    }

    document.getElementById("start-box").classList.add("hidden");
    document.getElementById("quiz-box").classList.remove("hidden");

    current = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    let q = selectedQuestions[current];
    document.getElementById("question-text").innerText =
        `Pytanie ${current + 1} z ${selectedQuestions.length}\n\n${q.q}`;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.a.forEach((ans, i) => {
        const btn = document.createElement("button");
        btn.textContent = ans;
        btn.addEventListener("click", () => checkAnswer(i));
        answersDiv.appendChild(btn);
    });

    nextBtn.classList.add("hidden");
}

function checkAnswer(i) {
    let q = selectedQuestions[current];
    const buttons = document.querySelectorAll("#answers button");

    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === q.correct) btn.classList.add("correct");
        else if (index === i) btn.classList.add("wrong");
    });

    if (i === q.correct) score++;
    nextBtn.classList.remove("hidden");
}

function nextQuestion() {
    current++;
    if (current >= selectedQuestions.length) {
        endQuiz();
    } else {
        showQuestion();
    }
}

function endQuiz() {
    document.getElementById("quiz-box").classList.add("hidden");
    document.getElementById("end-box").classList.remove("hidden");

    let percent = Math.round((score / selectedQuestions.length) * 100);

    document.getElementById("score").innerText =
        `Zdobyłeś ${score} / ${selectedQuestions.length} punktów (${percent}%)`;
}



