(function($) {
    "use strict";
    jQuery(document).on('ready', function() {

        // Mixed Charts Line Column JS
        if(document.getElementById("apex-mixed-charts-line-column")){
            var options = {
                chart: {
                    height: 400,
                    type: 'line',
                },
                series: [{
                    name: 'Website Blog',
                    type: 'column',
                    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160, 440, 505, 414]
                }, {
                    name: 'Social Media',
                    type: 'line',
                    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16, 23, 42, 35]
                }],
                stroke: {
                    width: [0, 4]
                },
                title: {
                    text: 'Traffic Sources'
                },
                legend: {
                    offsetY: -10,
                },
                // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                labels: ['01 Jan 2019', '02 Jan 2019', '03 Jan 2019', '04 Jan 2019', '05 Jan 2019', '06 Jan 2019', '07 Jan 2019', '08 Jan 2019', '09 Jan 2019', '10 Jan 2019', '11 Jan 2019', '12 Jan 2019', '13 Jan 2019', '14 Jan 2019', '15 Jan 2019'],
                xaxis: {
                    type: 'datetime'
                },
                yaxis: [{
                    title: {
                        text: 'Website Blog',
                    },
                }, {
                    opposite: true,
                    title: {
                        text: 'Social Media'
                    }
                }]
            }
            var chart = new ApexCharts(
                document.querySelector("#apex-mixed-charts-line-column"),
                options
            );
            chart.render();
        }

        // Mixed Multiple Y-Axis Charts JS
        if(document.getElementById("apex-mixed-multiple-y-axis-charts")){
            var options = {
                chart: {
                    height: 400,
                    type: 'line',
                    stacked: false
                },
                dataLabels: {
                    enabled: false
                },
                series: [{
                    name: 'Income',
                    type: 'column',
                    data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
                }, {
                    name: 'Cashflow',
                    type: 'column',
                    data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
                }, {
                    name: 'Revenue',
                    type: 'line',
                    data: [20, 29, 37, 36, 44, 45, 50, 58]
                }],
                stroke: {
                    width: [1, 1, 4]
                },
                title: {
                    text: 'XYZ - Stock Analysis (2012 - 2019)',
                    align: 'left',
                    offsetX: 50
                },
                xaxis: {
                    categories: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
                },
                yaxis: [
                    {
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: '#008FFB'
                        },
                        labels: {
                            style: {
                                color: '#008FFB',
                            }
                        },
                        title: {
                            text: "Income (thousand crores)",
                            style: {
                                color: '#008FFB',
                            }
                        },
                        tooltip: {
                            enabled: true
                        }
                    },
                    {
                        seriesName: 'Income',
                        opposite: true,
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: '#00E396'
                        },
                        labels: {
                            style: {
                                color: '#00E396',
                            }
                        },
                        title: {
                            text: "Operating Cashflow (thousand crores)",
                            style: {
                                color: '#00E396',
                            }
                        },
                    },
                    {
                        seriesName: 'Revenue',
                        opposite: true,
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: '#FEB019'
                        },
                        labels: {
                            style: {
                                color: '#FEB019',
                            },
                        },
                        title: {
                            text: "Revenue (thousand crores)",
                            style: {
                                color: '#FEB019',
                            }
                        }
                    },
                ],
                tooltip: {
                    fixed: {
                        enabled: true,
                        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                        offsetY: 30,
                        offsetX: 60
                    },
                },
                legend: {
                    horizontalAlign: 'left',
                    offsetX: 30,
                    offsetY: -10,
                }
            }
            var chart = new ApexCharts(
                document.querySelector("#apex-mixed-multiple-y-axis-charts"),
                options
            );
            chart.render();
        }

        // Mixed Line & Area Charts JS
        if(document.getElementById("apex-mixed-line-area-charts")){
            var options = {
                chart: {
                    height: 400,
                    type: 'line',
                },
                stroke: {
                    curve: 'smooth'
                },
                series: [{
                    name: 'New Visitor',
                    type: 'area',
                    data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33, 44, 55, 31, 60,]
                }, {
                    name: 'Total Visitor',
                    type: 'line',
                    data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43, 55, 69, 45, 70]
                }],
                fill: {
                    type:'solid',
                    opacity: [0.35, 1],
                },
                labels: ['Oct 01', 'Oct 02', 'Oct 03', 'Oct 04', 'Oct 05', 'Oct 06', 'Oct 07', 'Oct 08', 'Oct 09 ', 'Oct 10', 'Oct 11', 'Oct 12', 'Oct 13', 'Oct 14', 'Oct 15'],
                markers: {
                    size: 0
                },
                yaxis: [
                    {
                        title: {
                            text: 'New Visitor',
                        },
                    },
                    {
                        opposite: true,
                        title: {
                            text: 'Total Visitor',
                        },
                    },
                ],
                tooltip: {
                    shared: true,
                    intersect: false,
                    y: {
                        formatter: function (y) {
                            if(typeof y !== "undefined") {
                                return  y.toFixed(0) + " points";
                            }
                            return y;
                        }
                    }
                },
                legend: {
                    offsetY: -10,
                }
            }
            var chart = new ApexCharts(
                document.querySelector("#apex-mixed-line-area-charts"),
                options
            );
            chart.render();
        }

        // Mixed Line Column Area Chart JS
        if(document.getElementById("apex-mixed-line-column-area-chart")){
            var options = {
                chart: {
                    height: 400,
                    type: 'line',
                    stacked: false,
                },
                stroke: {
                    width: [0, 2, 5],
                    curve: 'smooth'
                },
                plotOptions: {
                    bar: {
                        columnWidth: '50%'
                    }
                },
                colors: ['#2962ff', '#00c851', '#ff3547'],
                series: [{
                    name: 'Page Views',
                    type: 'column',
                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 50]
                }, {
                    name: 'New Visitor',
                    type: 'area',
                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 50]
                }, {
                    name: 'Total Visitor',
                    type: 'line',
                    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 50]
                }],
                fill: {
                    opacity: [0.85,0.25,1],
                    gradient: {
                        inverseColors: false,
                        shade: 'light',
                        type: "vertical",
                        opacityFrom: 0.85,
                        opacityTo: 0.55,
                        stops: [0, 100, 100, 100]
                    }
                },
                labels: [
                    '01/01/2018',
                    '02/01/2018',
                    '03/01/2018',
                    '04/01/2018',
                    '05/01/2018',
                    '06/01/2018',
                    '07/01/2018',
                    '08/01/2018',
                    '09/01/2018',
                    '10/01/2018',
                    '11/01/2018',
                    '12/01/2018',
                ],
                markers: {
                    size: 0
                },
                xaxis: {
                    type:'datetime'
                },
                yaxis: {
                    min: 0
                },
                tooltip: {
                    shared: true,
                    intersect: false,
                    y: {
                        formatter: function (y) {
                            if(typeof y !== "undefined") {
                                return  y.toFixed(0) + " views";
                            }
                            return y;
                        }
                    }
                },
                legend: {
                    offsetY: -10,
                    labels: {
                        useSeriesColors: true
                    },
                    markers: {
                        customHTML: [
                            function() {
                                return ''
                            }, function() {
                                return ''
                            }, function() {
                                return ''
                            }
                        ]
                    }
                }
            }
            var chart = new ApexCharts(
                document.querySelector("#apex-mixed-line-column-area-chart"),
                options
            );
            chart.render();
        }

    });
}(jQuery));