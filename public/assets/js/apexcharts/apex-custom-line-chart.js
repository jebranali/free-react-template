(function($) {
    "use strict";
    jQuery(document).on('ready', function() {

        // Traffic Source Chart JS
        if(document.getElementById("traffic-source-chart")){
            var options = {
                chart: {
                    height: 322,
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [5, 7, 5],
                    curve: 'straight',
                    dashArray: [0, 8, 5]
                },
                colors: ['#ea3a3b', '#13bb37', '#4788ff'],
                series: [
                    {
                        name: "Session Duration",
                        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10, 97]
                    },
                    {
                        name: "Page Views",
                        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35, 85]
                    },
                    {
                        name: 'Total Visits',
                        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47, 99]
                    }
                ],
                legend: {
                    show: false,
                },
                markers: {
                    size: 0,
                    hover: {
                        sizeOffset: 6
                    }
                },
                xaxis: {
                    categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '13 Jan', '12 Jan'],
                },
                tooltip: {
                    y: [{
                        title: {
                            formatter: function (val) {
                                return val + " (mins)"
                            }
                        }
                    }, {
                        title: {
                            formatter: function (val) {
                                return val + " per session"
                            }
                        }
                    }, {
                        title: {
                            formatter: function (val) {
                                return val;
                            }
                        }
                    }]
                },
                grid: {
                    borderColor: '#f1f1f1',
                }
            }
            var chart = new ApexCharts(
                document.querySelector("#traffic-source-chart"),
                options
            );
            chart.render();
        }

        // Website Analytics Chart JS
        if(document.getElementById("website-analytics-chart")){
            var options = {
                chart: {
                    height: 305,
                    type: 'bar',
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '50%',
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
                colors: ['#ea3a3b', '#4788ff', '#6a4ffc'],
                series: [{
                    name: 'Net Profit',
                    data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 111, 85]
                }, {
                    name: 'Revenue',
                    data: [76, 85, 101, 98, 87, 105, 91, 114, 95, 95, 80]
                }, {
                    name: 'Free Cash Flow',
                    data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 90, 100]
                }],
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
                }
            }
            var chart = new ApexCharts(
                document.querySelector("#website-analytics-chart"),
                options
            );
            chart.render();
        }

        // Revenue Summary Chart JS
        if(document.getElementById("revenue-summary-chart")){
            var options = {
                chart: {
                    height: 350,
                    type: 'area',
                },
                dataLabels: {
                    enabled: false
                },
                colors: ['#008FFB', '#18D2B7'],
                stroke: {
                    curve: 'smooth'
                },
                series: [{
                    name: 'Monthly Sales',
                    data: [50, 70, 90, 65, 75, 50, 80]
                }, {
                    name: 'Yearly Sales',
                    data: [40, 60, 80, 55, 65, 40, 70]
                }],
                xaxis: {
                    categories: ["01 Jan", "05 Jan", "10 Jan", "15 Jan", "20 Jan", "25 Jan", "30 Jan"],
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                }
            }
            var chart = new ApexCharts(
                document.querySelector("#revenue-summary-chart"),
                options
            );
            chart.render();
        }

        // Revenue Growth Chart JS
        if(document.getElementById("revenue-growth-chart")){
            var options = {
                chart: {
                    height: 400,
                    type: 'line',
                    shadow: {
                        enabled: false,
                        color: '#eeeeee',
                        top: 3,
                        left: 2,
                        blur: 3,
                        opacity: 1
                    },
                },
                stroke: {
                    width: 7,
                    curve: 'smooth'
                },
                series: [{
                    name: 'Revenue Growth',
                    data: [0, 3, 10, 9, 29, 5, 22, 9, 30, 7, 19, 5]
                }],
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        gradientToColors: [ '#1da1f2'],
                        shadeIntensity: 1,
                        type: 'horizontal',
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [100, 100, 100, 100],
                    },
                },
                markers: {
                    size: 4,
                    opacity: 0.9,
                    colors: ["#1da1f2"],
                    strokeColor: "#ffffff",
                    strokeWidth: 2,

                    hover: {
                        size: 7,
                    }
                },
            }
            var chart = new ApexCharts(
                document.querySelector("#revenue-growth-chart"),
                options
            );
            chart.render();
        }

        // Client Recollection Chart JS
        if(document.getElementById("client-recollection-chart")){
            var options = {
                chart: {
                    height: 332,
                    type: 'bar',
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '40%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                colors: ['#3578e5', '#FF5B5C'],
                stroke: {
                    show: true,
                    width: 3,
                    colors: ['transparent']
                },
                series: [{
                    name: 'New Clients',
                    data: [44, 55, 57, 56, 65, 65, 70, 65, 60, 70, 75]
                }, {
                    name: 'Retained Clients',
                    data: [35, 41, 36, 26, 70, 68, 70, 60, 55, 65, 70]
                }],
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return + val + " thousands"
                        }
                    }
                },
            }
            var chart = new ApexCharts(
                document.querySelector("#client-recollection-chart"),
                options
            );
            chart.render();
        }

        // Basic Line Chart JS
        if(document.getElementById("apex-basic-line-chart")){
            var options = {
                chart: {
                    height: 360,
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                series: [{
                    name: "Desktops",
                    data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 160, 150, 200]
                }],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Product Trends by Month',
                    align: 'left',
                    style: {
                        fontSize: "13px",
                        color: '#666'
                    }
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                }
            }
            var chart = new ApexCharts(
                document.querySelector("#apex-basic-line-chart"),
                options
            );
            chart.render();
        }

        // Line with Data Labels Chart JS
        if(document.getElementById("apex-line-with-data-labels")){
            var options = {
                chart: {
                    height: 365,
                    type: 'line',
                    shadow: {
                        enabled: true,
                        color: '#000',
                        top: 18,
                        left: 7,
                        blur: 10,
                        opacity: 1
                    },
                    toolbar: {
                        show: false
                    }
                },
                colors: ['#77B6EA', '#545454'],
                dataLabels: {
                    enabled: true,
                },
                stroke: {
                    curve: 'smooth'
                },
                series: [{
                    name: "High - 2019",
                    data: [28, 29, 33, 36, 32, 32, 33, 28, 29, 33, 36, 32],
                },
                    {
                        name: "Low - 2019",
                        data: [12, 11, 14, 18, 17, 13, 13, 12, 11, 14, 18, 17]
                    }
                ],
                title: {
                    text: 'Average High & Low Revenue',
                    align: 'left',
                    style: {
                        fontSize: "13px",
                        color: '#666'
                    }
                },
                grid: {
                    borderColor: '#e7e7e7',
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                markers: {
                    size: 6
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov', 'Dec'],
                    title: {
                        text: 'Month'
                    }
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    floating: true,
                    offsetY: -10,
                    offsetX: -5
                }
            }
            var chart = new ApexCharts(
                document.querySelector("#apex-line-with-data-labels"),
                options
            );
            chart.render();
        }

        // Annotations Line Chart JS
        if(document.getElementById("apex-annotations-chart")){
            var options = {
                annotations: {
                    yaxis: [
                        {
                            y: 8200,
                            borderColor: "#00E396",
                            label: {
                                borderColor: "#00E396",
                                style: {
                                    color: "#fff",
                                    background: "#00E396"
                                },
                                text: "Y Axis Annotation"
                            }
                        }
                    ],
                    xaxis: [
                        {
                            // in a datetime series, the x value should be a timestamp, just like it is generated below
                            x: new Date("11/17/2017").getTime(),
                            strokeDashArray: 0,
                            borderColor: "#775DD0",
                            label: {
                                borderColor: "#775DD0",
                                style: {
                                    color: "#fff",
                                    background: "#775DD0"
                                },
                                text: "X Axis Anno Vertical"
                            }
                        },
                        {
                            x: new Date("03 Dec 2017").getTime(),
                            borderColor: "#FEB019",
                            label: {
                                borderColor: "#FEB019",
                                style: {
                                    color: "#fff",
                                    background: "#FEB019"
                                },
                                orientation: "horizontal",
                                text: "X Axis Anno Horizonal"
                            }
                        }
                    ],
                    points: [
                        {
                            x: new Date("27 Nov 2017").getTime(),
                            y: 8500.9,
                            marker: {
                                size: 8,
                                fillColor: "#fff",
                                strokeColor: "#2698FF",
                                radius: 2
                            },
                            label: {
                                borderColor: "#FF4560",
                                offsetY: 0,
                                style: {
                                    color: "#fff",
                                    background: "#FF4560"
                                },
                                text: "Point Annotation (XY)"
                            }
                        }
                    ]
                },
                chart: {
                    height: 380,
                    type: "line",
                    id: "areachart-2"
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: "straight"
                },
                series: [
                    {
                        data: series.monthDataSeries1.prices
                    }
                ],
                title: {
                    text: "Line with Annotations",
                    align: "left",
                    style: {
                        fontSize: "13px",
                        color: '#666'
                    }
                },
                labels: series.monthDataSeries1.dates,
                xaxis: {
                    type: "datetime"
                }
            };
            var chart = new ApexCharts(document.querySelector("#apex-annotations-chart"), options);
            chart.render();
        }

        // Gradient Line Chart JS
        if(document.getElementById("apex-gradient-chart")){
            var options = {
                chart: {
                    height: 350,
                    type: 'line',
                    shadow: {
                        enabled: false,
                        color: '#bbb',
                        top: 3,
                        left: 2,
                        blur: 3,
                        opacity: 1
                    },
                },
                stroke: {
                    width: 7,
                    curve: 'smooth'
                },
                series: [{
                    name: 'Likes',
                    data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
                }],
                xaxis: {
                    type: 'datetime',
                    categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
                },
                title: {
                    text: 'Social Media',
                    align: 'left',
                    style: {
                        fontSize: "13px",
                        color: '#666'
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        gradientToColors: [ '#FDD835'],
                        shadeIntensity: 1,
                        type: 'horizontal',
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100, 100, 100]
                    },
                },
                markers: {
                    size: 4,
                    opacity: 0.9,
                    colors: ["#FFA41B"],
                    strokeColor: "#fff",
                    strokeWidth: 2,
                    hover: {
                        size: 7,
                    }
                },
                yaxis: {
                    min: -10,
                    max: 40,
                    title: {
                        text: 'Engagement',
                    },
                }
            }
            var chart = new ApexCharts(
                document.querySelector("#apex-gradient-chart"),
                options
            );
            chart.render();
        }

        // Dashed Line Chart JS
        if(document.getElementById("apex-dashed-linechart")){
            var options = {
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [5, 7, 5],
                    curve: 'straight',
                    dashArray: [0, 8, 5]
                },
                series: [{
                    name: "Session Duration",
                    data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
                },
                    {
                        name: "Page Views",
                        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
                    },
                    {
                        name: 'Total Visits',
                        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
                    }
                ],
                title: {
                    text: 'Page Statistics',
                    align: 'left'
                },
                legend: {
                    tooltipHoverFormatter: function(val, opts) {
                        return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
                    },
                    offsetY: -10,
                },
                markers: {
                    size: 0,
                    hover: {
                        sizeOffset: 6
                    }
                },
                xaxis: {
                    categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
                        '10 Jan', '11 Jan', '12 Jan'
                    ],
                },
                tooltip: {
                    y: [{
                        title: {
                            formatter: function (val) {
                                return val + " (mins)"
                            }
                        }
                    }, {
                        title: {
                            formatter: function (val) {
                                return val + " per session"
                            }
                        }
                    }, {
                        title: {
                            formatter: function (val) {
                                return val;
                            }
                        }
                    }]
                },
                grid: {
                    borderColor: '#f1f1f1',
                },
            }
            var chart = new ApexCharts(
                document.querySelector("#apex-dashed-linechart"),
                options
            );
            chart.render();
        }

        // Zoomable Timeseries Chart JS
        if(document.getElementById("zoomable-timeseries-chart")){
            var ts2 = 1484418600000;
            var dates = [];
            var spikes = [5, -5, 3, -3, 8, -8]
            for (var i = 0; i < 120; i++) {
                ts2 = ts2 + 86400000;
                var innerArr = [ts2, dataSeries[1][i].value];
                dates.push(innerArr)
            }
            var options = {
                chart: {
                    type: 'area',
                    stacked: false,
                    height: 350,
                    zoom: {
                        type: 'x',
                        enabled: true,
                        autoScaleYaxis: true
                    },
                    toolbar: {
                        autoSelected: 'zoom'
                    }
                },
                dataLabels: {
                    enabled: false
                },
                series: [{
                    name: 'XYZ MOTORS',
                    data: dates
                }],
                markers: {
                    size: 0,
                },
                title: {
                    text: 'Stock Price Movement',
                    align: 'left'
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        inverseColors: false,
                        opacityFrom: 0.5,
                        opacityTo: 0,
                        stops: [0, 90, 100]
                    },
                },
                yaxis: {
                    labels: {
                        formatter: function (val) {
                            return (val / 1000000).toFixed(0);
                        },
                    },
                    title: {
                        text: 'Price'
                    },
                },
                xaxis: {
                    type: 'datetime',
                },
                tooltip: {
                    shared: false,
                    y: {
                        formatter: function (val) {
                            return (val / 1000000).toFixed(0)
                        }
                    }
                }
            }
            var chart = new ApexCharts(
                document.querySelector("#zoomable-timeseries-chart"),
                options
            );
            chart.render();
        }

    });
}(jQuery));