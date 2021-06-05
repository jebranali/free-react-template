(function($) {
    "use strict";
    jQuery(document).on('ready', function() {

        // Basic Radar Chart JS
        if(document.getElementById("apex-basic-radar-chart")){
            var options = {
                chart: {
                    height: 300,
                    type: 'radar',
                },
                series: [{
                    name: 'Series 1',
                    data: [80, 50, 30, 40, 100, 20],
                }],
                title: {
                    text: 'Basic Radar Chart'
                },
                labels: ['January', 'February', 'March', 'April', 'May', 'June']
            }
            var chart = new ApexCharts(
                document.querySelector("#apex-basic-radar-chart"),
                options
            );
            chart.render();
        }

        // Radar â€“ Multiple Series Chart JS
        if(document.getElementById("apex-radar-multiple-series")){
            var options = {
                chart: {
                    height: 350,
                    type: 'radar',
                    dropShadow: {
                        enabled: true,
                        blur: 1,
                        left: 1,
                        top: 1
                    }
                },
                series: [{
                    name: 'Series 1',
                    data: [80, 50, 30, 40, 100, 20],
                }, {
                    name: 'Series 2',
                    data: [20, 30, 40, 80, 20, 80],
                }, {
                    name: 'Series 3',
                    data: [44, 76, 78, 13, 43, 10],
                }],
                title: {
                    text: 'Radar Chart - Multi Series'
                },
                stroke: {
                    width: 0
                },
                fill: {
                    opacity: 0.4
                },
                markers: {
                    size: 0
                },
                labels: ['2011', '2012', '2013', '2014', '2015', '2016']
            }
            var chart = new ApexCharts(
                document.querySelector("#apex-radar-multiple-series"),
                options
            );
            chart.render();

            function update() {
                function randomSeries() {
                    var arr = []
                    for(var i = 0; i < 6; i++) {
                        arr.push(Math.floor(Math.random() * 100))
                    }

                    return arr
                }
                chart.updateSeries([{
                    name: 'Series 1',
                    data: randomSeries(),
                }, {
                    name: 'Series 2',
                    data: randomSeries(),
                }, {
                    name: 'Series 3',
                    data: randomSeries(),
                }])
            }
        }

        // Radar with Polygon-fill Chart JS
        if(document.getElementById("apex-radar-with-polygon-fill")){
            var options = {
                chart: {
                    height: 350,
                    type: 'radar',
                },
                series: [{
                    name: 'Series 1',
                    data: [20, 100, 40, 30, 50, 80, 33],
                }],
                labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                plotOptions: {
                    radar: {
                        size: 140,
                        polygons: {
                            strokeColor: '#e9e9e9',
                            fill: {
                                colors: ['#f8f8f8', '#fff']
                            }
                        }
                    }
                },
                title: {
                    text: 'Radar with Polygon Fill'
                },
                colors: ['#FF4560'],
                markers: {
                    size: 4,
                    colors: ['#fff'],
                    strokeColor: '#FF4560',
                    strokeWidth: 2,
                },
                tooltip: {
                    y: {
                        formatter: function(val) {
                            return val
                        }
                    }
                },
                yaxis: {
                    tickAmount: 7,
                    labels: {
                        formatter: function(val, i) {
                            if(i % 2 === 0) {
                                return val
                            } else {
                                return ''
                            }
                        }
                    }
                }
            }
            var chart = new ApexCharts(
                document.querySelector("#apex-radar-with-polygon-fill"),
                options
            );
            chart.render();
        }

    });
}(jQuery));