(function($) {
    "use strict";
    jQuery(document).on('ready', function() {

        // Email Send Pie Chart
        if(document.getElementById("emailSend-chart")){
            var options = {
                chart: {
                    type: 'donut',
                    height: 340,
                },
                labels: ['80% Send', '67% Read', '33% Unread'],
                series: [100, 67, 33],
                colors: ['#6956CE', '#1CD3D2', '#4788ff'],
                dataLabels: {
                    enabled: false,
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }
            var chart = new ApexCharts(
                document.querySelector("#emailSend-chart"),
                options
            );
            chart.render();
        }

        // Activity Timeline Chart JS
        if(document.getElementById("activity-timeline-chart")){
            var options = {
                chart: {
                    height: 300,
                    type: 'radialBar',
                },
                legend: {
                    show: true,
                },
                colors: ['#ea3a3b', '#13bb37', '#4788ff', '#1CD3D2'],
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: '14px',
                                color: "2b2b2b",
                            },
                            value: {
                                fontSize: '20px',
                            },
                            total: {
                                show: true,
                                label: 'Total Visitor',
                            }
                        }
                    }
                },
                series: [95, 80, 90, 81],
                labels: ['Organic Search', 'Email Campaign', 'Referral Visitor', 'Social Media'],
            }
            var chart = new ApexCharts(
                document.querySelector("#activity-timeline-chart"),
                options
            );
            chart.render();
        }

        // Simple Pie Chart JS
        if(document.getElementById("apex-simple-pie-chart")){
            var options = {
                chart: {
                    width: '100%',
                    height: 430,
                    type: 'pie',
                },
                labels: ['UK', 'USA', 'Canada', 'Australia', 'Italy'],
                series: [44, 55, 13, 43, 22],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }],
                legend: {
                    horizontalAlign: 'right',
                }
            }
            var chart = new ApexCharts(
                document.querySelector("#apex-simple-pie-chart"),
                options
            );
            chart.render();
        }

        // Simple Donut Chart JS
        if(document.getElementById("apex-simple-donut-chart")){
            var options = {
                chart: {
                    width: '100%',
                    height: 430,
                    type: 'donut',
                },
                labels: ['UK', 'USA', 'Canada', 'Australia', 'Italy'],
                series: [44, 55, 41, 17, 15],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }
            var chart = new ApexCharts(
                document.querySelector("#apex-simple-donut-chart"),
                options
            );
            chart.render();
        }

        // Monochrome Pie Chart JS
        if(document.getElementById("apex-monochrome-pie-chart")){
            var options = {
                chart: {
                    width: '100%',
                    height: 430,
                    type: 'pie',
                },
                series: [25, 15, 44, 55, 41, 17],
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                theme: {
                    monochrome: {
                        enabled: true
                    }
                },
                title: {
                    text: "Number of leads"
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }
            var chart = new ApexCharts(
                document.querySelector("#apex-monochrome-pie-chart"),
                options
            );
            chart.render();
        }

        // Gradient Donut Chart JS
        if(document.getElementById("apex-gradient-donut-chart")){
            var options = {
                chart: {
                    width: '100%',
                    height: 455,
                    type: 'donut',
                },
                dataLabels: {
                    enabled: false
                },
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                series: [44, 55, 41, 17, 15, 35],
                fill: {
                    type: 'gradient',
                },
                legend: {
                    formatter: function(val, opts) {
                        return val + " - " + opts.w.globals.series[opts.seriesIndex]
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }
            var chart = new ApexCharts(
                document.querySelector("#apex-gradient-donut-chart"),
                options
            );
            chart.render();
            const paper = chart.paper();
        }

        // Donut with Pattern Chart JS
        if(document.getElementById("apex-donut-with-pattern-chart")){
            var options = {
                chart: {
                    width: 415,
                    type: 'donut',
                    dropShadow: {
                        enabled: true,
                        color: '#111',
                        top: -1,
                        left: 3,
                        blur: 3,
                        opacity: 0.2
                    }
                },
                stroke: {
                    width: 0,
                },
                series: [44, 55, 41, 17, 15],
                plotOptions: {
                    pie: {
                        donut: {
                            labels: {
                                show: true,
                                total: {
                                    showAlways: true,
                                    show: true
                                }
                            }
                        }
                    }
                },
                labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
                dataLabels: {
                    dropShadow: {
                        blur: 3,
                        opacity: 0.8
                    }
                },
                fill: {
                    type: 'pattern',
                    opacity: 1,
                    pattern: {
                        enabled: true,
                        style: ['verticalLines', 'squares', 'horizontalLines', 'circles','slantedLines'],
                    },
                },
                states: {
                    hover: {
                        enabled: false
                    }
                },
                theme: {
                    palette: 'palette2'
                },
                title: {
                    text: "Favourite Movie Type"
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }
            var chart = new ApexCharts(
                document.querySelector("#apex-donut-with-pattern-chart"),
                options
            );
            chart.render();
        }

        // Pie with Image Chart JS
        if(document.getElementById("apex-image-with-pie-chart")){
            var options = {
                chart: {
                    width: 450,
                    type: 'pie',
                },
                colors: ['#93C3EE', '#E5C6A0', '#669DB5', '#94A74A'],
                series: [44, 33, 54, 45],
                fill: {
                    type: 'image',
                    opacity: 0.85,
                    image: {
                        src: ['assets/img/slider/1.jpg', 'assets/img/slider/2.jpg', 'assets/img/slider/3.jpg', 'assets/img/slider/4.jpg'],
                        width: 25,
                        imagedHeight: 25
                    },
                },
                stroke: {
                    width: 4
                },
                dataLabels: {
                    enabled: false
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }
            var chart = new ApexCharts(
                document.querySelector("#apex-image-with-pie-chart"),
                options
            );
            chart.render();
        }

    });
}(jQuery));