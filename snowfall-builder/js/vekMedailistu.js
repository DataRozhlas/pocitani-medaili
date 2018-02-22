Highcharts.setOptions({
    lang: {
        months: [
            'leden', 'únor', 'březen', 'duben',
            'květen', 'červen', 'červenec', 'srpen',
            'září', 'říjen', 'listopad', 'prosinec'
        ],
        shortMonths: ['led', 'úno', 'bře', 'dub', 'kvě', 'čvn', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro'],
        weekdays: [
            'neděle', 'pondělí', 'úterý', 'středa',
            'čtvrtek', 'pátek', 'sobota'
        ],
        decimalPoint: ',',
        resetZoom: 'Zpět na výchozí zobrazení'
    }
});

Highcharts.chart('vekMedailistu', {
    chart : {
    	type: 'scatter',
    	zoomType: 'xy'
    },
    
    title: {
        text: 'Kolik jim bylo let, když získali medaili na zimní olympiádě?'
    },

    yAxis: {
    	min: 15,
    	max: 45,
    	crosshair: true,
        title: {
            text: 'věk'
        }
    },
    xAxis: {
        crosshair: {
        	snap: false
        },
        categories: ["1928 Svatý Mořic","1948 Svatý Mořic","1960 Squaw Valley","1964 Innsbruck","1968 Grenoble","1972 Sapporo","1976 Innsbruck","1980 Lake Placid","1984 Sarajevo","1988 Calgary","1992 Albertville","1998 Nagano","2002 Salt Lake City","2006 Turín","2010 Vancouver","2014 Soči","2018 Pchjongčchang"]
    },
    legend: {
    },

    plotOptions: {
        series: {
        	dataLabels: {
                enabled: true,
                formatter: function() {
                	if (this.point.y > 40 || this.point.y < 19 || this.point.j=="Ester Ledecká") {
                		return this.point.j.split(" ")[1];
                	}
                }
			}
        }
    },
    tooltip: {
        formatter: function() {
        	return '<b>' + this.point.j + '</b>' + '<br>' + this.series.name + '<br>' + this.point.d + '<br>' + this.y.toFixed(1) + ' let';
        }
    },

    credits: {
        href: 'https://cs.wikipedia.org/wiki/Seznam_%C4%8Deskoslovensk%C3%BDch_olympijsk%C3%BDch_medailist%C5%AF',
        text: 'Zdroj: Wikipedia, vlastní sběr a výpočet'
    },

    series: [{
        name: 'zlato',
        data: [{"x":4.0948,"y":27.05,"j":"Jiří Raška","d":"skoky na lyžích – střední můstek","p":"muž"},{"x":5.0578,"y":21.07,"j":"Ondrej Nepela","d":"krasobruslení","p":"muž"},{"x":10.9938,"y":32.04,"j":"Petr Svoboda","d":"lední hokej","p":"muž"},{"x":11.146,"y":22.04,"j":"Milan Hejduk","d":"lední hokej","p":"muž"},{"x":10.9492,"y":23.85,"j":"Libor Procházka","d":"lední hokej","p":"muž"},{"x":10.863,"y":23.88,"j":"Roman Hamrlík","d":"lední hokej","p":"muž"},{"x":10.9801,"y":24.05,"j":"Jaroslav Špaček","d":"lední hokej","p":"muž"},{"x":11.0852,"y":24.68,"j":"Milan Hnilička","d":"lední hokej","p":"muž"},{"x":10.819,"y":24.93,"j":"David Moravec","d":"lední hokej","p":"muž"},{"x":10.9853,"y":25.19,"j":"Jan Čaloun","d":"lední hokej","p":"muž"},{"x":10.7889,"y":25.49,"j":"Martin Straka","d":"lední hokej","p":"muž"},{"x":11.1493,"y":25.99,"j":"Martin Procházka","d":"lední hokej","p":"muž"},{"x":11.1734,"y":26.04,"j":"Jaromír Jágr","d":"lední hokej","p":"muž"},{"x":11.0042,"y":26.48,"j":"Pavel Patera","d":"lední hokej","p":"muž"},{"x":10.8128,"y":26.68,"j":"Robert Reichel","d":"lední hokej","p":"muž"},{"x":11.1877,"y":26.75,"j":"Jiří Šlégr","d":"lední hokej","p":"muž"},{"x":10.8092,"y":26.97,"j":"Martin Ručinský","d":"lední hokej","p":"muž"},{"x":11.033,"y":27,"j":"Roman Čechmánek","d":"lední hokej","p":"muž"},{"x":10.7615,"y":27.2,"j":"Robert Lang","d":"lední hokej","p":"muž"},{"x":10.753,"y":28.1,"j":"Richard Šmehlík","d":"lední hokej","p":"muž"},{"x":10.8477,"y":28.35,"j":"Josef Beránek","d":"lední hokej","p":"muž"},{"x":10.8157,"y":29.24,"j":"Jiří Dopita","d":"lední hokej","p":"muž"},{"x":11.0838,"y":30.07,"j":"František Kučera","d":"lední hokej","p":"muž"},{"x":11.0128,"y":33.09,"j":"Dominik Hašek","d":"lední hokej","p":"muž"},{"x":11.1602,"y":34.74,"j":"Vladimír Růžička","d":"lední hokej","p":"muž"},{"x":12.2066,"y":29.07,"j":"Aleš Valenta","d":"akrobatické lyžování – skoky","p":"muž"},{"x":12.9633,"y":33.05,"j":"Kateřina Neumannová","d":"běh na lyžích – 30 km volně","p":"žena"},{"x":14.2196,"y":22.78,"j":"Martina Sáblíková","d":"rychlobruslení – 3000 m","p":"žena"},{"x":14.1049,"y":22.78,"j":"Martina Sáblíková","d":"rychlobruslení – 5000 m","p":"žena"},{"x":14.873,"y":20.84,"j":"Eva Samková","d":"snowboarding – snowboardcross","p":"žena"},{"x":15.1324,"y":26.76,"j":"Martina Sáblíková","d":"rychlobruslení – 5000 m","p":"žena"},{"x":15.7743,"y":22.95,"j":"Ester Ledecká","d":"alpské lyžování – superobří slalom","p":"žena"}],
        color: 'rgba(255, 215, 0, .4)',
        marker: {
        	symbol: 'circle',
        	lineColor: 'black',
        	lineWidth: 0.5,
        	radius: 5
        }
    },{
    	name: 'stříbro',
    	data: [{"x":1.1183,"y":19.23,"j":"Augustin Bubník","d":"lední hokej","p":"muž"},{"x":0.8148,"y":20.36,"j":"Vladimír Kobranov","d":"lední hokej","p":"muž"},{"x":1.1731,"y":21.36,"j":"Miloslav Pokorný","d":"lední hokej","p":"muž"},{"x":0.877,"y":21.96,"j":"Oldřich Zábrodský","d":"lední hokej","p":"muž"},{"x":1.0101,"y":22.16,"j":"Přemysl Hainý","d":"lední hokej","p":"muž"},{"x":1.027,"y":24.28,"j":"Karel Stibor","d":"lední hokej","p":"muž"},{"x":0.8666,"y":24.83,"j":"Stanislav Konopásek","d":"lední hokej","p":"muž"},{"x":0.9537,"y":24.94,"j":"Vladimír Zábrodský","d":"lední hokej","p":"muž"},{"x":0.85,"y":25.19,"j":"Václav Roziňák","d":"lední hokej","p":"muž"},{"x":0.8856,"y":26.34,"j":"Jaroslav Drobný","d":"lední hokej","p":"muž"},{"x":1.2442,"y":27.2,"j":"Vladimír Bouzek","d":"lední hokej","p":"muž"},{"x":0.8475,"y":29.37,"j":"Zdeněk Jarkovský","d":"lední hokej","p":"muž"},{"x":1.1589,"y":29.92,"j":"Josef Trousílek","d":"lední hokej","p":"muž"},{"x":1.2167,"y":30.35,"j":"Vilibald Šťovík","d":"lední hokej","p":"muž"},{"x":1.2454,"y":30.99,"j":"Miroslav Sláma","d":"lední hokej","p":"muž"},{"x":0.9892,"y":31.39,"j":"Bohumil Modrý","d":"lední hokej","p":"muž"},{"x":1.0176,"y":33.67,"j":"Ladislav Troják","d":"lední hokej","p":"muž"},{"x":1.9715,"y":24.03,"j":"Karol Divín","d":"krasobruslení","p":"muž"},{"x":4.1386,"y":21.37,"j":"Jiří Kochta","d":"lední hokej","p":"muž"},{"x":4.1359,"y":21.6,"j":"Josef Horešovský","d":"lední hokej","p":"muž"},{"x":3.8578,"y":21.85,"j":"Oldřich Machač","d":"lední hokej","p":"muž"},{"x":4.1158,"y":23.37,"j":"Jan Suchý","d":"lední hokej","p":"muž"},{"x":3.7956,"y":23.66,"j":"Petr Hejma","d":"lední hokej","p":"muž"},{"x":4.0095,"y":23.9,"j":"František Pospíšil","d":"lední hokej","p":"muž"},{"x":3.8171,"y":23.95,"j":"Václav Nedomanský","d":"lední hokej","p":"muž"},{"x":4.1191,"y":25.29,"j":"Jan Havel","d":"lední hokej","p":"muž"},{"x":4.1829,"y":25.29,"j":"Jiří Holík","d":"lední hokej","p":"muž"},{"x":3.9264,"y":25.39,"j":"Karel Masopust","d":"lední hokej","p":"muž"},{"x":4.0562,"y":25.56,"j":"Vladimír Dzurilla","d":"lední hokej","p":"muž"},{"x":3.7845,"y":26.1,"j":"Jan Hrbatý","d":"lední hokej","p":"muž"},{"x":3.7964,"y":26.12,"j":"František Ševčík","d":"lední hokej","p":"muž"},{"x":3.8054,"y":26.99,"j":"Jan Klapáč","d":"lední hokej","p":"muž"},{"x":3.8546,"y":27.05,"j":"Jiří Raška","d":"skoky na lyžích – velký můstek","p":"muž"},{"x":4.1151,"y":28.21,"j":"Jaroslav Jiřík","d":"lední hokej","p":"muž"},{"x":4.1115,"y":28.36,"j":"Josef Černý","d":"lední hokej","p":"muž"},{"x":3.8126,"y":29.98,"j":"Vladimír Nadrchal","d":"lední hokej","p":"muž"},{"x":3.7981,"y":30.14,"j":"Jozef Golonka","d":"lední hokej","p":"muž"},{"x":5.7856,"y":22.63,"j":"Milan Chalupa","d":"lední hokej","p":"muž"},{"x":5.7758,"y":24.08,"j":"Jaroslav Pouzar","d":"lední hokej","p":"muž"},{"x":6.2463,"y":24.36,"j":"Miroslav Dvořák","d":"lední hokej","p":"muž"},{"x":5.8135,"y":24.41,"j":"Milan Nový","d":"lední hokej","p":"muž"},{"x":5.8732,"y":25.71,"j":"Jiří Novák","d":"lední hokej","p":"muž"},{"x":6.2361,"y":25.78,"j":"Milan Kajkl","d":"lední hokej","p":"muž"},{"x":5.7677,"y":25.86,"j":"Jiří Crha","d":"lední hokej","p":"muž"},{"x":6.0196,"y":26.07,"j":"Jiří Bubla","d":"lední hokej","p":"muž"},{"x":6.1965,"y":26.07,"j":"Ivan Hlinka","d":"lední hokej","p":"muž"},{"x":6.1683,"y":26.17,"j":"Vladimír Martinec","d":"lední hokej","p":"muž"},{"x":6.0293,"y":26.83,"j":"Bohuslav Šťastný","d":"lední hokej","p":"muž"},{"x":6.0344,"y":27.42,"j":"Bohuslav Ebermann","d":"lední hokej","p":"muž"},{"x":6.033,"y":27.47,"j":"Pavol Svitana","d":"lední hokej","p":"muž"},{"x":5.964,"y":29.24,"j":"Eduard Novák","d":"lední hokej","p":"muž"},{"x":6.0738,"y":29.25,"j":"Josef Augusta","d":"lední hokej","p":"muž"},{"x":5.9429,"y":29.85,"j":"Oldřich Machač","d":"lední hokej","p":"muž"},{"x":6.0629,"y":31.89,"j":"František Pospíšil","d":"lední hokej","p":"muž"},{"x":6.1551,"y":31.93,"j":"Jiří Holeček","d":"lední hokej","p":"muž"},{"x":5.9312,"y":33.29,"j":"Jiří Holík","d":"lední hokej","p":"muž"},{"x":8.2252,"y":20.74,"j":"Vladimír Růžička","d":"lední hokej","p":"muž"},{"x":7.8579,"y":21.91,"j":"Jaroslav Benák","d":"lední hokej","p":"muž"},{"x":8.122,"y":22.54,"j":"Miloslav Hořava","d":"lední hokej","p":"muž"},{"x":8.1699,"y":22.64,"j":"Eduard Uvíra","d":"lední hokej","p":"muž"},{"x":7.9097,"y":23.34,"j":"Igor Liba","d":"lední hokej","p":"muž"},{"x":7.94,"y":23.51,"j":"Dušan Pašek","d":"lední hokej","p":"muž"},{"x":8.1269,"y":24.24,"j":"Jaromír Šindel","d":"lední hokej","p":"muž"},{"x":8.2308,"y":24.26,"j":"Dárius Rusnák","d":"lední hokej","p":"muž"},{"x":7.8538,"y":24.55,"j":"Jiří Lála","d":"lední hokej","p":"muž"},{"x":8.2261,"y":25.14,"j":"Arnold Kadlec","d":"lední hokej","p":"muž"},{"x":7.9552,"y":25.29,"j":"Vladimír Caldr","d":"lední hokej","p":"muž"},{"x":8.2126,"y":25.55,"j":"Dagmar Švubová","d":"běh na lyžích – štafeta žen 4 x 5 km","p":"žena"},{"x":7.9064,"y":26.17,"j":"Jiří Hrdina","d":"lední hokej","p":"muž"},{"x":8.0972,"y":26.19,"j":"Radoslav Svoboda","d":"lední hokej","p":"muž"},{"x":8.0167,"y":26.82,"j":"Jaroslav Korbela","d":"lední hokej","p":"muž"},{"x":7.7727,"y":27.38,"j":"Květa Jeriová","d":"běh na lyžích – štafeta žen 4 x 5 km","p":"žena"},{"x":8.058,"y":27.73,"j":"Vladimír Kýhos","d":"lední hokej","p":"muž"},{"x":8.2188,"y":29.26,"j":"Pavel Richter","d":"lední hokej","p":"muž"},{"x":8.1966,"y":29.91,"j":"Blanka Paulů","d":"běh na lyžích – štafeta žen 4 x 5 km","p":"žena"},{"x":8.0802,"y":30.06,"j":"Vincent Lukáč","d":"lední hokej","p":"muž"},{"x":8.1057,"y":30.67,"j":"Milan Chalupa","d":"lední hokej","p":"muž"},{"x":8.0601,"y":30.78,"j":"František Černík","d":"lední hokej","p":"muž"},{"x":7.8754,"y":31,"j":"Gabriela Svobodová","d":"běh na lyžích – štafeta žen 4 x 5 km","p":"žena"},{"x":7.8541,"y":31.88,"j":"Jiří Králík","d":"lední hokej","p":"muž"},{"x":8.8795,"y":23.72,"j":"Pavel Ploc","d":"skoky na lyžích","p":"muž"},{"x":10.9485,"y":25.04,"j":"Kateřina Neumannová","d":"běh na lyžích – 5 km klasicky","p":"žena"},{"x":11.9575,"y":29.04,"j":"Kateřina Neumannová","d":"běh na lyžích – 15 km volně","p":"žena"},{"x":11.8972,"y":29.04,"j":"Kateřina Neumannová","d":"běh na lyžích – 2×5 km stíhací závod","p":"žena"},{"x":12.9104,"y":28.55,"j":"Lukáš Bauer","d":"běh na lyžích – 15 km klasicky","p":"muž"},{"x":12.7746,"y":33.05,"j":"Kateřina Neumannová","d":"běh na lyžích – skiatlon","p":"žena"},{"x":14.8465,"y":24.33,"j":"Gabriela Soukalová","d":"biatlon – závod s hromadným startem","p":"žena"},{"x":14.9031,"y":24.33,"j":"Gabriela Soukalová","d":"biatlon – smíšená štafeta","p":"žena"},{"x":14.907,"y":25.22,"j":"Veronika Vítková","d":"biatlon – smíšená štafeta","p":"žena"},{"x":14.8334,"y":26.76,"j":"Martina Sáblíková","d":"rychlobruslení – 3000 m","p":"žena"},{"x":15.1371,"y":29.73,"j":"Ondřej Moravec","d":"biatlon – stíhací závod","p":"muž"},{"x":15.0707,"y":29.73,"j":"Ondřej Moravec","d":"biatlon – smíšená štafeta","p":"muž"},{"x":14.9863,"y":31.64,"j":"Jaroslav Soukup","d":"biatlon – smíšená štafeta","p":"muž"},{"x":15.8435,"y":27.11,"j":"Michal Krčmář","d":"biatlon – sprint","p":"muž"},{"x":16.0358,"y":30.77,"j":"Martina Sáblíková","d":"rychlobruslení – 5000 m","p":"žena"}],
    	color: 'rgb(192,192,192, .4)',
        marker: {
        	symbol: 'circle',
        	lineColor: 'black',
        	lineWidth: 0.5,
        	radius: 5
        }
    	    },{
    	name: 'bronz',
    	data: [{"x":-0.0806,"y":23.32,"j":"Rudolf Burkert","d":"skoky na lyžích - velký můstek","p":"muž"},{"x":2.9365,"y":19.6,"j":"Jiří Holík","d":"lední hokej","p":"muž"},{"x":3.0202,"y":21.23,"j":"Stanislav Prýl","d":"lední hokej","p":"muž"},{"x":2.8924,"y":21.54,"j":"Vladimír Dzurilla","d":"lední hokej","p":"muž"},{"x":2.7928,"y":22.96,"j":"Jan Klapáč","d":"lední hokej","p":"muž"},{"x":3.1887,"y":24.18,"j":"Jaroslav Jiřík","d":"lední hokej","p":"muž"},{"x":2.9227,"y":24.33,"j":"Josef Černý","d":"lední hokej","p":"muž"},{"x":2.8808,"y":25.11,"j":"Jaroslav Walter","d":"lední hokej","p":"muž"},{"x":3.0145,"y":25.19,"j":"František Gregor","d":"lední hokej","p":"muž"},{"x":3.2499,"y":25.73,"j":"Ladislav Šmíd","d":"lední hokej","p":"muž"},{"x":3.0523,"y":25.95,"j":"Vladimír Nadrchal","d":"lední hokej","p":"muž"},{"x":2.9933,"y":26.11,"j":"Jozef Golonka","d":"lední hokej","p":"muž"},{"x":3.1318,"y":26.67,"j":"Rudolf Potsch","d":"lední hokej","p":"muž"},{"x":3.2186,"y":26.92,"j":"Jiří Dolana","d":"lední hokej","p":"muž"},{"x":2.873,"y":28.33,"j":"Miroslav Vlach","d":"lední hokej","p":"muž"},{"x":3.2371,"y":30.58,"j":"František Tikal","d":"lední hokej","p":"muž"},{"x":3.0565,"y":32.92,"j":"Vlastimil Bubník","d":"lední hokej","p":"muž"},{"x":2.963,"y":33.27,"j":"Stanislav Sventek","d":"lední hokej","p":"muž"},{"x":3.9937,"y":18.41,"j":"Hana Mašková","d":"krasobruslení","p":"žena"},{"x":4.9204,"y":22.06,"j":"Ivan Hlinka","d":"lední hokej","p":"muž"},{"x":5.0863,"y":22.16,"j":"Vladimír Martinec","d":"lední hokej","p":"muž"},{"x":4.963,"y":22.82,"j":"Bohuslav Šťastný","d":"lední hokej","p":"muž"},{"x":4.8113,"y":22.9,"j":"Helena Šikolová","d":"běh na lyžích – 5 km","p":"žena"},{"x":5.1234,"y":23.19,"j":"Miroslav Daněk","d":"lední hokej","p":"muž"},{"x":5.1603,"y":23.38,"j":"Vladimír Bednář","d":"lední hokej","p":"muž"},{"x":5.1607,"y":23.84,"j":"Rudolf Tajcnár","d":"lední hokej","p":"muž"},{"x":5.0834,"y":25.23,"j":"Eduard Novák","d":"lední hokej","p":"muž"},{"x":5.2458,"y":25.36,"j":"Jiří Kochta","d":"lední hokej","p":"muž"},{"x":4.8632,"y":25.59,"j":"Josef Horešovský","d":"lední hokej","p":"muž"},{"x":5.112,"y":25.84,"j":"Oldřich Machač","d":"lední hokej","p":"muž"},{"x":4.9053,"y":26.28,"j":"Richard Farda","d":"lední hokej","p":"muž"},{"x":5.195,"y":26.99,"j":"Karel Vohralík","d":"lední hokej","p":"muž"},{"x":5.0001,"y":27.88,"j":"František Pospíšil","d":"lední hokej","p":"muž"},{"x":5.0287,"y":27.93,"j":"Jiří Holeček","d":"lední hokej","p":"muž"},{"x":4.9464,"y":27.94,"j":"Václav Nedomanský","d":"lední hokej","p":"muž"},{"x":4.8317,"y":29.28,"j":"Jan Havel","d":"lední hokej","p":"muž"},{"x":4.9582,"y":29.28,"j":"Jiří Holík","d":"lední hokej","p":"muž"},{"x":5.1846,"y":29.55,"j":"Jaroslav Holík","d":"lední hokej","p":"muž"},{"x":5.0964,"y":29.55,"j":"Vladimír Dzurilla","d":"lední hokej","p":"muž"},{"x":4.8066,"y":32.35,"j":"Josef Černý","d":"lední hokej","p":"muž"},{"x":7.0811,"y":23.39,"j":"Květa Jeriová","d":"běh na lyžích – 5 km","p":"žena"},{"x":8.191,"y":19.69,"j":"Pavel Ploc","d":"skoky na lyžích","p":"muž"},{"x":8.1883,"y":20.22,"j":"Jozef Sabovčík","d":"krasobruslení","p":"muž"},{"x":8.0364,"y":21.71,"j":"Olga Charvátová","d":"alpské lyžování - sjezd","p":"žena"},{"x":7.7872,"y":27.38,"j":"Květa Jeriová","d":"běh na lyžích – 5 km","p":"žena"},{"x":9.1388,"y":21.9,"j":"Radim Nyč","d":"běh na lyžích – štafeta mužů 4 x 10 km","p":"muž"},{"x":8.8846,"y":22.19,"j":"Václav Korunka","d":"běh na lyžích – štafeta mužů 4 x 10 km","p":"muž"},{"x":9.0834,"y":24.65,"j":"Pavel Benc","d":"běh na lyžích – štafeta mužů 4 x 10 km","p":"muž"},{"x":8.7738,"y":25.28,"j":"Jiří Malec","d":"skoky na lyžích","p":"muž"},{"x":9.1126,"y":29.06,"j":"Ladislav Švanda","d":"běh na lyžích – štafeta mužů 4 x 10 km","p":"muž"},{"x":9.9588,"y":17.48,"j":"Tomáš Goder","d":"skoky na lyžích – družstva","p":"muž"},{"x":10.0201,"y":20.76,"j":"Jiří Šlégr","d":"lední hokej","p":"muž"},{"x":9.9741,"y":21.2,"j":"František Jež","d":"skoky na lyžích – družstva","p":"muž"},{"x":9.8083,"y":21.22,"j":"Robert Lang","d":"lední hokej","p":"muž"},{"x":10.1014,"y":22.12,"j":"Richard Šmehlík","d":"lední hokej","p":"muž"},{"x":10.2284,"y":22.33,"j":"Patrik Augusta","d":"lední hokej","p":"muž"},{"x":10.0602,"y":22.63,"j":"Jaroslav Sakala","d":"skoky na lyžích – družstva","p":"muž"},{"x":10.216,"y":22.95,"j":"Petr Hrbek","d":"lední hokej","p":"muž"},{"x":9.9605,"y":23.17,"j":"Róbert Švehla","d":"lední hokej","p":"muž"},{"x":10.1355,"y":25.09,"j":"Ladislav Lubina","d":"lední hokej","p":"muž"},{"x":10.0528,"y":25.09,"j":"Oldřich Svoboda","d":"lední hokej","p":"muž"},{"x":10.2224,"y":25.59,"j":"Radek Ťoupal","d":"lední hokej","p":"muž"},{"x":10.009,"y":25.85,"j":"Kamil Kašťák","d":"lední hokej","p":"muž"},{"x":10.0767,"y":25.98,"j":"Petr Barna","d":"krasobruslení","p":"muž"},{"x":10.1305,"y":26.26,"j":"Drahomír Kadlec","d":"lední hokej","p":"muž"},{"x":9.9032,"y":26.8,"j":"Leo Gudas","d":"lední hokej","p":"muž"},{"x":10.1083,"y":27.22,"j":"Petr Bříza","d":"lední hokej","p":"muž"},{"x":10.1983,"y":27.36,"j":"Peter Veselovský","d":"lední hokej","p":"muž"},{"x":10.1263,"y":27.73,"j":"Petr Rosol","d":"lední hokej","p":"muž"},{"x":10.117,"y":27.77,"j":"Bedřich Ščerban","d":"lední hokej","p":"muž"},{"x":10.2288,"y":27.93,"j":"Richard Žemlička","d":"lední hokej","p":"muž"},{"x":10.0761,"y":28.47,"j":"Jaromír Dragan","d":"lední hokej","p":"muž"},{"x":9.8052,"y":29.14,"j":"Jiří Parma","d":"skoky na lyžích – družstva","p":"muž"},{"x":10.2158,"y":29.88,"j":"Tomáš Jelínek","d":"lední hokej","p":"muž"},{"x":9.8734,"y":30.16,"j":"František Procházka","d":"lední hokej","p":"muž"},{"x":10.194,"y":30.57,"j":"Miloslav Hořava","d":"lední hokej","p":"muž"},{"x":9.8432,"y":31.21,"j":"Otakar Janecký","d":"lední hokej","p":"muž"},{"x":10.0056,"y":31.38,"j":"Igor Liba","d":"lední hokej","p":"muž"},{"x":10.9491,"y":25.04,"j":"Kateřina Neumannová","d":"běh na lyžích – 10 km volně stíhací závod","p":"žena"},{"x":13.0141,"y":20.39,"j":"Rostislav Olesz","d":"lední hokej","p":"muž"},{"x":12.8186,"y":22.56,"j":"Aleš Hemský","d":"lední hokej","p":"muž"},{"x":13.1785,"y":24.51,"j":"Martin Erat","d":"lední hokej","p":"muž"},{"x":13.1803,"y":27.2,"j":"Aleš Kotalík","d":"lední hokej","p":"muž"},{"x":13.1134,"y":27.96,"j":"Jan Bulis","d":"lední hokej","p":"muž"},{"x":13.1415,"y":28.01,"j":"Tomáš Kaberle","d":"lední hokej","p":"muž"},{"x":12.7935,"y":28.89,"j":"Pavel Kubina","d":"lední hokej","p":"muž"},{"x":13.1266,"y":29.08,"j":"Marek Židlický","d":"lední hokej","p":"muž"},{"x":13.1185,"y":29.18,"j":"Filip Kuba","d":"lední hokej","p":"muž"},{"x":13.1605,"y":29.67,"j":"Tomáš Vokoun","d":"lední hokej","p":"muž"},{"x":13.1918,"y":29.89,"j":"Patrik Eliáš","d":"lední hokej","p":"muž"},{"x":13.1318,"y":30.05,"j":"Milan Hejduk","d":"lední hokej","p":"muž"},{"x":12.9809,"y":30.55,"j":"Petr Čajánek","d":"lední hokej","p":"muž"},{"x":13.208,"y":30.7,"j":"Marek Malík","d":"lední hokej","p":"muž"},{"x":13.2391,"y":31.05,"j":"Václav Prospal","d":"lední hokej","p":"muž"},{"x":12.837,"y":31.12,"j":"David Výborný","d":"lední hokej","p":"muž"},{"x":12.9154,"y":32.06,"j":"Jaroslav Špaček","d":"lední hokej","p":"muž"},{"x":13.2242,"y":32.32,"j":"František Kaberle","d":"lední hokej","p":"muž"},{"x":12.7954,"y":32.7,"j":"Milan Hnilička","d":"lední hokej","p":"muž"},{"x":13.0037,"y":33.5,"j":"Martin Straka","d":"lední hokej","p":"muž"},{"x":13.2169,"y":33.94,"j":"Dušan Salfický","d":"lední hokej","p":"muž"},{"x":12.8525,"y":34.05,"j":"Jaromír Jágr","d":"lední hokej","p":"muž"},{"x":13.0257,"y":34.99,"j":"Martin Ručinský","d":"lední hokej","p":"muž"},{"x":13.0878,"y":35.21,"j":"Robert Lang","d":"lední hokej","p":"muž"},{"x":13.1468,"y":41.1,"j":"Dominik Hašek","d":"lední hokej","p":"muž"},{"x":14.2103,"y":22.78,"j":"Martina Sáblíková","d":"rychlobruslení – 1500 m","p":"žena"},{"x":14.2131,"y":23.5,"j":"Martin Jakš","d":"běh na lyžích – štafeta 4×10 km","p":"muž"},{"x":14.1451,"y":25.06,"j":"Šárka Záhrobská","d":"alpské lyžování – slalom","p":"žena"},{"x":14.1655,"y":31.45,"j":"Martin Koukal","d":"běh na lyžích – štafeta 4×10 km","p":"muž"},{"x":13.9514,"y":32.55,"j":"Lukáš Bauer","d":"běh na lyžích – 15 km volně","p":"muž"},{"x":13.8368,"y":32.55,"j":"Lukáš Bauer","d":"běh na lyžích – štafeta 4×10 km","p":"muž"},{"x":14.094,"y":32.91,"j":"Jiří Magál","d":"běh na lyžích – štafeta 4×10 km","p":"muž"},{"x":15.0176,"y":29.73,"j":"Ondřej Moravec","d":"biatlon – závod s hromadným startem","p":"muž"},{"x":14.808,"y":31.64,"j":"Jaroslav Soukup","d":"biatlon – sprint","p":"muž"},{"x":15.8916,"y":24.85,"j":"Eva Samková","d":"snowboarding – snowboardcross","p":"žena"},{"x":16.0939,"y":25.35,"j":"Karolína Erbanová","d":"rychlobruslení – 500 m","p":"žena"},{"x":15.9716,"y":29.23,"j":"Veronika Vítková","d":"biatlon – sprint","p":"žena"}],
    	color: 'rgb(205,127,50,.4)',
        marker: {
        	symbol: 'circle',
        	lineColor: 'black',
        	lineWidth: 0.5,
        	radius: 5
        }
    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 400
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});