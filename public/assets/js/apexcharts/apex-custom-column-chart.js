(function($) {
    "use strict";
    jQuery(document).on('ready', function() {

        // Basic Column Chart JS
        if(document.getElementById("apex-basic-column-chart")){
            var options = {
                chart: {
                    height: 360,
                    type: 'bar',
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                series: [{
                    name: 'Net Profit',
                    data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 70, 75]
                }, {
                    name: 'Revenue',
                    data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 100, 110]
                }, {
                    name: 'Free Cash Flow',
                    data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 55, 45]
                }],
                xaxis: {
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                },
                yaxis: {
                    title: {
                        text: '$ (thousands)'
                    }
                },
                fill: {
                    opacity: 1

                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "$ " + val + " thousands"
                        }
                    }
                },
                legend: {
                    offsetY: -10,
                }
            }
            var chart = new ApexCharts(
                document.querySelector("#apex-basic-column-chart"),
                options
            );
            chart.render();
        }

        // Column with Data Labels Chart JS
        if(document.getElementById("apex-column-with-data-labels")){
            var options = {
                chart: {
                    height: 360,
                    type: 'bar',
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            position: 'top', // top, center, bottom
                        },
                    }
                },
                dataLabels: {
                    enabled: true,
                    formatter: function (val) {
                        return val + "%";
                    },
                    offsetY: -20,
                    style: {
                        fontSize: '12px',
                        colors: ["#304758"]
                    }
                },
                series: [{
                    name: 'Inflation',
                    data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
                }],
                xaxis: {
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    position: 'top',
                    labels: {
                        offsetY: -18,

                    },
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    crosshairs: {
                        fill: {
                            type: 'gradient',
                            gradient: {
                                colorFrom: '#D8E3F0',
                                colorTo: '#BED1E6',
                                stops: [0, 100],
                                opacityFrom: 0.4,
                                opacityTo: 0.5,
                            }
                        }
                    },
                    tooltip: {
                        enabled: true,
                        offsetY: -35,

                    }
                },
                fill: {
                    gradient: {
                        shade: 'light',
                        type: "horizontal",
                        shadeIntensity: 0.25,
                        gradientToColors: undefined,
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [50, 0, 100, 100]
                    },
                },
                yaxis: {
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false,
                    },
                    labels: {
                        show: false,
                        formatter: function (val) {
                            return val + "%";
                        }
                    }

                },
                title: {
                    text: 'Monthly Inflation in the USA, 2008',
                    floating: true,
                    offsetY: 335,
                    align: 'center',
                    style: {
                        color: '#444'
                    }
                },
                legend: {
                    offsetY: -10,
                },
            }
            var chart = new ApexCharts(
                document.querySelector("#apex-column-with-data-labels"),
                options
            );
            chart.render();
        }

        // Stacked Columns Chart JS
        if(document.getElementById("apex-column-with-data-labels")){
            var options = {
                chart: {
                    height: 360,
                    type: 'bar',
                    stacked: true,
                    toolbar: {
                        show: true
                    },
                    zoom: {
                        enabled: true
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }],
                plotOptions: {
                    bar: {
                        horizontal: false,
                    },
                },
                series: [{
                    name: 'PRODUCT A',
                    data: [44, 55, 41, 67, 22, 43]
                },{
                    name: 'PRODUCT B',
                    data: [13, 23, 20, 8, 13, 27]
                },{
                    name: 'PRODUCT C',
                    data: [11, 17, 15, 15, 21, 14]
                },{
                    name: 'PRODUCT D',
                    data: [21, 7, 25, 13, 22, 8]
                }],
                xaxis: {
                    type: 'datetime',
                    categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT'],
                },
                legend: {
                    position: 'right',
                    offsetY: 40
                },
                fill: {
                    opacity: 1
                },
            }
            var chart = new ApexCharts(
                document.querySelector("#apex-stacked-columns"),
                options
            );
            chart.render();
        }

        // Stacked Columns 100% Chart JS
        if(document.getElementById("apex-stacked-columns-100")){
            var options = {
                chart: {
                    height: 360,
                    type: 'bar',
                    stacked: true,
                    stackType: '100%'
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }],
                series: [{
                    name: 'PRODUCT A',
                    data: [44, 55, 41, 67, 22, 43, 21, 49]
                },{
                    name: 'PRODUCT B',
                    data: [13, 23, 20, 8, 13, 27, 33, 12]
                },{
                    name: 'PRODUCT C',
                    data: [11, 17, 15, 15, 21, 14, 15, 13]
                }],
                xaxis: {
                    categories: ['2011 Q1', '2011 Q2', '2011 Q3', '2011 Q4', '2012 Q1', '2012 Q2', '2012 Q3', '2012 Q4'],
                },
                fill: {
                    opacity: 1
                },

                legend: {
                    position: 'right',
                    offsetX: 0,
                    offsetY: 50
                },
            }
            var chart = new ApexCharts(
                document.querySelector("#apex-stacked-columns-100"),
                options
            );
            chart.render();
        }

        // Column with Negative Values Chart JS
        if(document.getElementById("apex-column-with-negative-values")){
            var options = {
                chart: {
                    height: 360,
                    type: 'bar',
                },
                plotOptions: {
                    bar: {
                        colors: {
                            ranges: [
                                {
                                    from: -100,
                                    to: -46,
                                    color: '#F15B46'
                                }, {
                                    from: -45,
                                    to: 0,
                                    color: '#FEB019'
                                }
                            ]
                        },
                        columnWidth: '80%',
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                series: [{
                    name: 'Cash Flow',
                    data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
                        5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -
                            48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
                    ]
                }],

                yaxis: {
                    title: {
                        text: 'Growth',
                    },
                    labels: {
                        formatter: function (y) {
                            return y.toFixed(0) + "%";
                        }
                    }

                },
                xaxis: {
                    // TODO: uncomment below and fix the error
                    //type: 'datetime',
                    categories: [
                        '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
                        '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
                        '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
                        '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
                        '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
                        '2013-07-01', '2013-08-01', '2013-09-01'
                    ],
                    labels: {
                        rotate: -90
                    }
                },
                tooltip: {}
            }
            var chart = new ApexCharts(
                document.querySelector("#apex-column-with-negative-values"),
                options
            );
            chart.render();
        }

        // Dynamic Loaded Column Chart JS
        if(document.getElementById("apex-year-results-charts")){
            Apex = {
                chart: {
                    toolbar: {
                        show: false
                    }
                },
                tooltip: {
                    shared: false
                },
            }
            var colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#00D9E9', '#FF66C3'];

            function shuffleArray(array) {
                for (var i = array.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
                return array;
            }
            var arrayData = [{
                y: 400,
                quarters: [{
                    x: 'Q1',
                    y: 120
                }, {
                    x: 'Q2',
                    y: 90
                }, {
                    x: 'Q3',
                    y: 100
                }, {
                    x: 'Q4',
                    y: 90
                }]
            }, {
                y: 430,
                quarters: [{
                    x: 'Q1',
                    y: 120
                }, {
                    x: 'Q2',
                    y: 110
                }, {
                    x: 'Q3',
                    y: 90
                }, {
                    x: 'Q4',
                    y: 110
                }]
            }, {
                y: 448,
                quarters: [{
                    x: 'Q1',
                    y: 70
                }, {
                    x: 'Q2',
                    y: 100
                }, {
                    x: 'Q3',
                    y: 140
                }, {
                    x: 'Q4',
                    y: 138
                }]
            }, {
                y: 470,
                quarters: [{
                    x: 'Q1',
                    y: 150
                }, {
                    x: 'Q2',
                    y: 60
                }, {
                    x: 'Q3',
                    y: 190
                }, {
                    x: 'Q4',
                    y: 70
                }]
            }, {
                y: 540,
                quarters: [{
                    x: 'Q1',
                    y: 120
                }, {
                    x: 'Q2',
                    y: 120
                }, {
                    x: 'Q3',
                    y: 130
                }, {
                    x: 'Q4',
                    y: 170
                }]
            }, {
                y: 580,
                quarters: [{
                    x: 'Q1',
                    y: 170
                }, {
                    x: 'Q2',
                    y: 130
                }, {
                    x: 'Q3',
                    y: 120
                }, {
                    x: 'Q4',
                    y: 160
                }]
            }];

            function makeData() {
                var dataSet = shuffleArray(arrayData)
                var dataYearSeries = [{
                    x: "2014",
                    y: dataSet[0].y,
                    color: colors[0],
                    quarters: dataSet[0].quarters
                }, {
                    x: "2015",
                    y: dataSet[1].y,
                    color: colors[1],
                    quarters: dataSet[1].quarters
                }, {
                    x: "2016",
                    y: dataSet[2].y,
                    color: colors[2],
                    quarters: dataSet[2].quarters
                }, {
                    x: "2017",
                    y: dataSet[3].y,
                    color: colors[3],
                    quarters: dataSet[3].quarters
                }, {
                    x: "2018",
                    y: dataSet[4].y,
                    color: colors[4],
                    quarters: dataSet[4].quarters
                }, {
                    x: "2019",
                    y: dataSet[5].y,
                    color: colors[5],
                    quarters: dataSet[5].quarters
                }];
                return dataYearSeries
            }

            var optionsYear = {
                chart: {
                    id: 'barYear',
                    height: 400,
                    width: '100%',
                    type: 'bar',
                },
                plotOptions: {
                    bar: {
                        distributed: true,
                        horizontal: true,
                        barHeight: '75%',
                        dataLabels: {
                            position: 'bottom'
                        }
                    }
                },
                dataLabels: {
                    enabled: true,
                    textAnchor: 'start',
                    style: {
                        colors: ['#fff']
                    },
                    formatter: function(val, opt) {
                        return opt.w.globals.labels[opt.dataPointIndex]
                    },
                    offsetX: 0,
                    dropShadow: {
                        enabled: true
                    }
                },
                colors: colors,
                series: [{
                    data: makeData()
                }],
                states: {
                    normal: {
                        filter: {
                            type: 'desaturate'
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: true,
                        filter: {
                            type: 'darken',
                            value: 1
                        }
                    }
                },
                tooltip: {
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function(val, opts) {
                                return opts.w.globals.labels[opts.dataPointIndex]
                            }
                        }
                    }
                },
                title: {
                    text: 'Yearly Results',
                    offsetX: 15
                },
                subtitle: {
                    text: '(Click on bar to see details)',
                    offsetX: 15
                },
                yaxis: {
                    labels: {
                        show: false
                    }
                },
            }

            var yearChart = new ApexCharts(
                document.querySelector("#apex-year-results-charts"),
                optionsYear
            );
            yearChart.render();
        }

    });
}(jQuery));