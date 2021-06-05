(function($) {
    "use strict";
    jQuery(document).on('ready', function() {

        // Basic Radialbar Chart JS
        if(document.getElementById("apex-basic-radialbar-chart")){
            var options = {
                chart: {
                    height: 350,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '70%',
                        }
                    },
                },
                series: [70],
                labels: ['Cricket'],

            }
            var chart = new ApexCharts(
                document.querySelector("#apex-basic-radialbar-chart"),
                options
            );
            chart.render();
        }

        // Multiple Radialbar Chart JS
        if(document.getElementById("apex-multiple-radialbar-chart")){
            var options = {
                chart: {
                    height: 350,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: '22px',
                            },
                            value: {
                                fontSize: '16px',
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                formatter: function (w) {
                                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                    return 249
                                }
                            }
                        }
                    }
                },
                series: [44, 55, 67, 83],
                labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],

            }
            var chart = new ApexCharts(
                document.querySelector("#apex-multiple-radialbar-chart"),
                options
            );
            chart.render();
        }

        // Radialbar Custom Angle Circle Chart JS
        if(document.getElementById("apex-radialbar-cutom-angle-circle")){
            var options = {
                chart: {
                    height: 390,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        offsetY: 0,
                        startAngle: 0,
                        endAngle: 270,
                        hollow: {
                            margin: 5,
                            size: '30%',
                            background: 'transparent',
                            image: undefined,
                        },
                        dataLabels: {
                            name: {
                                show: false,

                            },
                            value: {
                                show: false,
                            }
                        }
                    }
                },
                colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
                series: [76,67,61,90],
                labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
                legend: {
                    show: true,
                    floating: true,
                    fontSize: '16px',
                    position: 'left',
                    offsetX: 160,
                    offsetY: 10,
                    labels: {
                        useSeriesColors: true,
                    },
                    markers: {
                        size: 0
                    },
                    formatter: function(seriesName, opts) {
                        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                    },
                    itemMargin: {
                        horizontal: 1,
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            show: false
                        }
                    }
                }]
            }
            var chart = new ApexCharts(
                document.querySelector("#apex-radialbar-cutom-angle-circle"),
                options
            );
            chart.render();
        }

        // Radialbar Gradient Circle Chart JS
        if(document.getElementById("apex-radialbar-gradient-circle-chart")){
            var options = {
                chart: {
                    height: 400,
                    type: 'radialBar',
                    toolbar: {
                        show: true
                    }
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 225,
                        hollow: {
                            margin: 0,
                            size: '70%',
                            background: '#fff',
                            image: undefined,
                            imageOffsetX: 0,
                            imageOffsetY: 0,
                            position: 'front',
                            dropShadow: {
                                enabled: true,
                                top: 3,
                                left: 0,
                                blur: 4,
                                opacity: 0.24
                            }
                        },
                        track: {
                            background: '#fff',
                            strokeWidth: '67%',
                            margin: 0, // margin is in pixels
                            dropShadow: {
                                enabled: true,
                                top: -3,
                                left: 0,
                                blur: 4,
                                opacity: 0.35
                            }
                        },

                        dataLabels: {
                            showOn: 'always',
                            name: {
                                offsetY: -10,
                                show: true,
                                color: '#888',
                                fontSize: '17px'
                            },
                            value: {
                                formatter: function(val) {
                                    return parseInt(val);
                                },
                                color: '#111',
                                fontSize: '36px',
                                show: true,
                            }
                        }
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        type: 'horizontal',
                        shadeIntensity: 0.5,
                        gradientToColors: ['#ABE5A1'],
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100]
                    }
                },
                series: [75],
                stroke: {
                    lineCap: 'round'
                },
                labels: ['Percent'],
            }
            var chart = new ApexCharts(
                document.querySelector("#apex-radialbar-gradient-circle-chart"),
                options
            );
            chart.render();
        }

        // Radialbar Stroked Circular Gauge Chart JS
        if(document.getElementById("apex-radialbar-stroked-circular-gauge")){
            var options = {
                chart: {
                    height: 350,
                    type: 'radialBar',
                    offsetY: -10
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 135,
                        dataLabels: {
                            name: {
                                fontSize: '16px',
                                color: undefined,
                                offsetY: 120
                            },
                            value: {
                                offsetY: 76,
                                fontSize: '22px',
                                color: undefined,
                                formatter: function (val) {
                                    return val + "%";
                                }
                            }
                        }
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        shadeIntensity: 0.15,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 65, 91]
                    },
                },
                stroke: {
                    dashArray: 4
                },
                series: [67],
                labels: ['Median Ratio'],

            }
            var chart = new ApexCharts(
                document.querySelector("#apex-radialbar-stroked-circular-gauge"),
                options
            );
            chart.render();
        }

        // Radialbar Semi Circular Gauge Chart JS
        if(document.getElementById("apex-radialbar-semi-circular-gauge")){
            var options = {
                chart: {
                    type: 'radialBar',
                    offsetY: -20,
                    height: 600,
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -90,
                        endAngle: 90,
                        track: {
                            background: "#e7e7e7",
                            strokeWidth: '97%',
                            margin: 5, // margin is in pixels
                            shadow: {
                                enabled: true,
                                top: 2,
                                left: 0,
                                color: '#999',
                                opacity: 1,
                                blur: 2
                            }
                        },
                        dataLabels: {
                            name: {
                                show: false
                            },
                            value: {
                                offsetY: -2,
                                fontSize: '22px'
                            }
                        }
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        shadeIntensity: 0.4,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 53, 91]
                    },
                },
                series: [76],
                labels: ['Average Results'],

            }
            var chart = new ApexCharts(
                document.querySelector("#apex-radialbar-semi-circular-gauge"),
                options
            );
            chart.render();
        }

        // Radialbars with Image Chart JS
        if(document.getElementById("apex-radialbars-with-image")){
            var options = {
                chart: {
                    height: 350,
                    type: 'radialBar',
                },
                fill: {
                    type: 'image',
                    image: {
                        src: ['assets/img/slider/1.jpg'],
                    }
                },
                series: [67],
                stroke: {
                    lineCap: 'round'
                },
                labels: ['Volatility'],

            }
            var chart = new ApexCharts(
                document.querySelector("#apex-radialbars-with-image"),
                options
            );
            chart.render();
        }

    });
}(jQuery));