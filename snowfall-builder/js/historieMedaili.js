Highcharts.chart('historieMedaili', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Kolik medailí přivezli čeští a českoslovenští sportovci ze všech zimních olympijských her?'
    },
    xAxis: {
        categories: ["1924 Chamonix","1928 Svatý Mořic","1932 Lake Placid","1936 Garmisch-Partenkirchen","1948 Svatý Mořic","1952 Oslo","1956 Cortina d'Ampezzo","1960 Squaw Valley","1964 Innsbruck","1968 Grenoble","1972 Sapporo","1976 Innsbruck","1980 Lake Placid","1984 Sarajevo","1988 Calgary","1992 Albertville","1994 Lillehammer","1998 Nagano","2002 Salt Lake City","2006 Turín","2010 Vancouver","2014 Soči","2018 Pchjongčchang"]
    },
    yAxis: {
        min: 0,
        title: {
            text: 'počet medailí'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        formatter: function() {
            return '<b>' + this.point.m + '</b>' + '<br>' + this.point.d + '<br><i>' + this.point.j + '</i>';
        }
    },
    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },
    credits: {
        href: 'https://cs.wikipedia.org/wiki/Seznam_%C4%8Deskoslovensk%C3%BDch_olympijsk%C3%BDch_medailist%C5%AF',
        text: 'Zdroj: Wikipedia'
    },
    series: [{
        name: 'osm',
        data: [{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":1,"j":"Eva Samková","d":"snowboarding – snowboardcross","m":"zlato","color":"rgba(255, 215, 0)"},{"y":0}]     
    },{
        name: 'sedm',
        data: [{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":1,"j":"Martina Sáblíková","d":"rychlobruslení – 5000 m","m":"zlato","color":"rgba(255, 215, 0)"},{"y":0}]
    },{
        name: 'šest',
        data: [{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":1,"j":"Jaromír Šindel, Jiří Králík, Radoslav Svoboda, Arnold Kadlec, Miloslav Hořava, Jaroslav Benák, Eduard Uvíra, Milan Chalupa, Vladimír Růžička, Dárius Rusnák, Jiří Hrdina, Vincent Lukáč, Pavel Richter, Igor Liba, Jiří Lála, Vladimír Caldr, Dušan Pašek, František Černík, Vladimír Kýhos, Jaroslav Korbela","d":"lední hokej","m":"stříbro","color":"rgb(192,192,192)"},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":1,"j":"Martina Sáblíková","d":"rychlobruslení – 5000 m","m":"zlato","color":"rgba(255, 215, 0)"},{"y":1,"j":"Martina Sáblíková","d":"rychlobruslení – 3000 m","m":"stříbro","color":"rgb(192,192,192)"},{"y":1,"j":"Ester Ledecká","d":"alpské lyžování – superobří slalom","m":"zlato","color":"rgba(255, 215, 0)"}]
    },{
        name: 'pět',
        data: [{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":1,"j":"Květa Jeriová, Gabriela Svobodová, Blanka Paulů a Dagmar Švubová","d":"běh na lyžích – štafeta žen 4 x 5 km","m":"stříbro","color":"rgb(192,192,192)"},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":1,"j":"Martina Sáblíková","d":"rychlobruslení – 3000 m","m":"zlato","color":"rgba(255, 215, 0)"},{"y":1,"j":"Gabriela Soukalová","d":"biatlon – závod s hromadným startem","m":"stříbro","color":"rgb(192,192,192)"},{"y":1,"j":"Martina Sáblíková","d":"rychlobruslení – 5000 m","m":"stříbro","color":"rgb(192,192,192)"}]
    },{
        name: 'čtyři',
        data: [{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":1,"j":"Jiří Raška","d":"skoky na lyžích – střední můstek","m":"zlato","color":"rgba(255, 215, 0)"},{"y":0},{"y":0},{"y":0},{"y":1,"j":"Pavel Ploc","d":"skoky na lyžích","m":"bronz","color":"rgb(205,127,50)"},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":1,"j":"Kateřina Neumannová","d":"běh na lyžích – 30 km volně","m":"zlato","color":"rgba(255, 215, 0)"},{"y":1,"j":"Martina Sáblíková","d":"rychlobruslení – 1500 m","m":"bronz","color":"rgb(205,127,50)"},{"y":1,"j":"Ondřej Moravec","d":"biatlon – stíhací závod","m":"stříbro","color":"rgb(192,192,192)"},{"y":1,"j":"Michal Krčmář","d":"biatlon – sprint","m":"stříbro","color":"rgb(192,192,192)"}]
    },{
        name: 'tři',
        data: [{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":1,"j":"Jiří Raška","d":"skoky na lyžích – velký můstek","m":"stříbro","color":"rgb(192,192,192)"},{"y":1,"j":"Ondrej Nepela","d":"krasobruslení","m":"zlato","color":"rgba(255, 215, 0)"},{"y":0},{"y":0},{"y":1,"j":"Jozef Sabovčík","d":"krasobruslení","m":"bronz","color":"rgb(205,127,50)"},{"y":1,"j":"Pavel Ploc","d":"skoky na lyžích","m":"stříbro","color":"rgb(192,192,192)"},{"y":1,"j":"Tomáš Goder, František Jež, Jaroslav Sakala, Jiří Parma","d":"skoky na lyžích – družstva","m":"bronz","color":"rgb(205,127,50)"},{"y":0},{"y":1,"j":"Dominik Hašek, Milan Hnilička, Roman Čechmánek, František Kučera, Libor Procházka, Jaroslav Špaček, Petr Svoboda, Richard Šmehlík, Roman Hamrlík, Jiří Šlégr, Pavel Patera, Robert Lang, Jan Čaloun, Martin Procházka, Robert Reichel, David Moravec, Milan Hejduk, Martin Ručinský, Martin Straka, Jiří Dopita, Josef Beránek, Jaromír Jágr, Vladimír Růžička","d":"lední hokej","m":"zlato","color":"rgba(255, 215, 0)"},{"y":1,"j":"Aleš Valenta","d":"akrobatické lyžování – skoky","m":"zlato","color":"rgba(255, 215, 0)"},{"y":1,"j":"Kateřina Neumannová","d":"běh na lyžích – skiatlon","m":"stříbro","color":"rgb(192,192,192)"},{"y":1,"j":"Martin Jakš, Lukáš Bauer, Jiří Magál, Martin Koukal","d":"běh na lyžích – štafeta 4×10 km","m":"bronz","color":"rgb(205,127,50)"},{"y":1,"j":"Jaroslav Soukup, Ondřej Moravec, Veronika Vítková, Gabriela Soukalová","d":"biatlon – smíšená štafeta","m":"stříbro","color":"rgb(192,192,192)"},{"y":1,"j":"Eva Samková","d":"snowboarding – snowboardcross","m":"bronz","color":"rgb(205,127,50)"}]
    },{
        name: 'dva',
        data: [{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":0},{"y":1,"j":"Vladimír Nadrchal, Vladimír Dzurilla, Josef Horešovský, Jan Suchý, Karel Masopust, František Pospíšil, Oldřich Machač, Jozef Golonka, Jan Hrbatý, Václav Nedomanský, Jan Havel, Jaroslav Jiřík, Josef Černý, František Ševčík, Petr Hejma, Jiří Holík, Jiří Kochta, Jan Klapáč","d":"lední hokej","m":"stříbro","color":"rgb(192,192,192)"},{"y":1,"j":"Vladimír Dzurilla, Jiří Holeček, Vladimír Bednář, Josef Horešovský, Oldřich Machač, František Pospíšil, Rudolf Tajcnár, Karel Vohralík, Josef Černý, Miroslav Daněk, Richard Farda, Jan Havel, Ivan Hlinka, Jaroslav Holík, Jiří Holík, Jiří Kochta, Vladimír Martinec, Václav Nedomanský, Eduard Novák, Bohuslav Šťastný","d":"lední hokej","m":"bronz","color":"rgb(205,127,50)"},{"y":0},{"y":0},{"y":1,"j":"Květa Jeriová","d":"běh na lyžích – 5 km","m":"bronz","color":"rgb(205,127,50)"},{"y":1,"j":"Jiří Malec","d":"skoky na lyžích","m":"bronz","color":"rgb(205,127,50)"},{"y":1,"j":"Petr Bříza, Oldřich Svoboda, Jaromír Dragan, Drahomír Kadlec, Róbert Švehla, Jiří Šlégr, Leo Gudas, Miloslav Hořava, Bedřich Ščerban, Richard Šmehlík, Robert Lang, Petr Rosol, Otakar Janecký, Kamil Kašťák, Ladislav Lubina, Patrik Augusta, Tomáš Jelínek, Petr Hrbek, Richard Žemlička, Igor Liba, Radek Ťoupal, Peter Veselovský, František Procházka","d":"lední hokej","m":"bronz","color":"rgb(205,127,50)"},{"y":0},{"y":1,"j":"Kateřina Neumannová","d":"běh na lyžích – 5 km klasicky","m":"stříbro","color":"rgb(192,192,192)"},{"y":1,"j":"Kateřina Neumannová","d":"běh na lyžích – 2×5 km stíhací závod","m":"stříbro","color":"rgb(192,192,192)"},{"y":1,"j":"Lukáš Bauer","d":"běh na lyžích – 15 km klasicky","m":"stříbro","color":"rgb(192,192,192)"},{"y":1,"j":"Lukáš Bauer","d":"běh na lyžích – 15 km volně","m":"bronz","color":"rgb(205,127,50)"},{"y":1,"j":"Ondřej Moravec","d":"biatlon – závod s hromadným startem","m":"bronz","color":"rgb(205,127,50)"},{"y":1,"j":"Karolína Erbanová","d":"rychlobruslení – 500 m","m":"bronz","color":"rgb(205,127,50)"}]
   },{
        name: 'jedna',
        data: [{"y":0},{"y":1,"j":"Rudolf Burkert","d":"skoky na lyžích - velký můstek","m":"bronz","color":"rgb(205,127,50)"},{"y":0},{"y":0},{"y":1,"j":"Bohumil Modrý, Zdeněk Jarkovský, Miroslav Sláma, Přemysl Hainý, Miloslav Pokorný, Josef Trousílek, Oldřich Zábrodský, Vilibald Šťovík, Vladimír Zábrodský, Stanislav Konopásek, Jaroslav Drobný, Václav Roziňák, Karel Stibor, Augustin Bubník, Ladislav Troják, Vladimír Bouzek, Vladimír Kobranov","d":"lední hokej","m":"stříbro","color":"rgb(192,192,192)"},{"y":0},{"y":0},{"y":1,"j":"Karol Divín","d":"krasobruslení","m":"stříbro","color":"rgb(192,192,192)"},{"y":1,"j":"Vladimír Dzurilla, Vladimír Nadrchal, František Tikal, František Gregor, Rudolf Potsch, Ladislav Šmíd, Stanislav Sventek, Jiří Dolana, Josef Černý, Jaroslav Walter, Miroslav Vlach, Jozef Golonka, Jiří Holík, Vlastimil Bubník, Jaroslav Jiřík, Jan Klapáč, Stanislav Prýl","d":"lední hokej","m":"bronz","color":"rgb(205,127,50)"},{"y":1,"j":"Hana Mašková","d":"krasobruslení","m":"bronz","color":"rgb(205,127,50)"},{"y":1,"j":"Helena Šikolová","d":"běh na lyžích – 5 km","m":"bronz","color":"rgb(205,127,50)"},{"y":1,"j":"Jiří Holeček, Jiří Crha, Pavol Svitana, Oldřich Machač, František Pospíšil, Jiří Bubla, Milan Kajkl, Milan Chalupa, Miroslav Dvořák, Eduard Novák, Milan Nový, Josef Augusta, Bohuslav Ebermann, Ivan Hlinka, Jiří Holík, Vladimír Martinec, Jiří Novák, Bohuslav Šťastný, Jaroslav Pouzar","d":"lední hokej","m":"stříbro","color":"rgb(192,192,192)"},{"y":1,"j":"Květa Jeriová","d":"běh na lyžích – 5 km","m":"bronz","color":"rgb(205,127,50)"},{"y":1,"j":"Olga Charvátová","d":"alpské lyžování - sjezd","m":"bronz","color":"rgb(205,127,50)"},{"y":1,"j":"Radim Nyč, Václav Korunka, Pavel Benc, Ladislav Švanda","d":"běh na lyžích – štafeta mužů 4 x 10 km","m":"bronz","color":"rgb(205,127,50)"},{"y":1,"j":"Petr Barna","d":"krasobruslení","m":"bronz","color":"rgb(205,127,50)"},{"y":0},{"y":1,"j":"Kateřina Neumannová","d":"běh na lyžích – 10 km volně stíhací závod","m":"bronz","color":"rgb(205,127,50)"},{"y":1,"j":"Kateřina Neumannová","d":"běh na lyžích – 15 km volně","m":"stříbro","color":"rgb(192,192,192)"},{"y":1,"j":"Milan Hnilička, Dominik Hašek, Tomáš Vokoun, Dušan Salfický, Filip Kuba, František Kaberle, Pavel Kubina, Marek Malík, Jaroslav Špaček, Marek Židlický, Tomáš Kaberle, Jan Bulis, Petr Čajánek, Martin Erat, Patrik Eliáš, Milan Hejduk, Aleš Hemský, Jaromír Jágr, Aleš Kotalík, Robert Lang, Rostislav Olesz, Václav Prospal, Martin Ručinský, Martin Straka, David Výborný","d":"lední hokej","m":"bronz","color":"rgb(205,127,50)"},{"y":1,"j":"Šárka Záhrobská","d":"alpské lyžování – slalom","m":"bronz","color":"rgb(205,127,50)"},{"y":1,"j":"Jaroslav Soukup","d":"biatlon – sprint","m":"bronz","color":"rgb(205,127,50)"},{"y":1,"j":"Veronika Vítková","d":"biatlon – sprint","m":"bronz","color":"rgb(205,127,50)"}]
   }]
});