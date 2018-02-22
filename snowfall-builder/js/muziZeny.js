var categories = [
    "1924", "1928", "1932", "1936", "1948", "1952", "1956", "1960", "1964", "1968", "1972", "1976", "1980",
    "1984", "1988", "1992", "1994", "1998", "2002", "2006", "2010", "2014", "2018"
    ];

Highcharts.chart('muziZeny', {
    chart: {
        type: 'bar'
    },
    colors: ["#283fd5", "#d52834"],
    title: {
        text: 'Medailové disciplíny mužů a žen'
    },
    subtitle: {
        text: ''
    },
    credits: {
        enabled: false
    },
    xAxis: [{
        categories: categories,
        reversed: true,
        labels: {
            step: 1
        }
    }, { // mirror axis on right side
        opposite: true,
        reversed: true,
        categories: categories,
        linkedTo: 0,
        labels: {
            step: 1
        },
    }],
    yAxis: {
        title: {
            text: null
        },
        labels: {
            formatter: function () {
                return Math.abs(this.value);
            }
        },
        min: -6,
        max: 6
    },

    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + ': ZOH ' + this.point.category + '</b><br/>' +
                'Medailových disciplín: ' + Math.abs(this.point.y).toString().replace(".",",");
        }
    },

    series: [{
        name: 'Muži',
        data: [0, -1, 0, 0, -1, 0, 0,
            -1, -1, -3, -2, -1, 0, -3, -3,
            -3, 0, -1, -1, -2, -2, -4, -1]
    }, {
        name: 'Ženy',
        data: [0, 0, 0, 0, 0, 0, 0,
            0, 0, 1, 1, 0, 1, 3, 0,
            0, 0, 2, 2, 2, 4, 5, 5]
    }]
});
