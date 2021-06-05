'use strict';
$(document).ready(function () {

    var colors = {
        primary: $('.chartjs-colors .bg-primary').css('background-color'),
        secondary: $('.chartjs-colors .bg-secondary').css('background-color'),
        info: $('.chartjs-colors .bg-info').css('background-color'),
        success: $('.chartjs-colors .bg-success').css('background-color'),
        danger: $('.chartjs-colors .bg-danger').css('background-color'),
        warning: $('.chartjs-colors .bg-warning').css('background-color'),
        purple: $('.chartjs-colors .bg-purple').css('background-color'),
        pink: $('.chartjs-colors .bg-pink').css('background-color'),
        primaryLight: $('.chartjs-colors .bg-primary-light').css('background-color'),
        successLight: $('.chartjs-colors .bg-success-light').css('background-color'),
    };

    basic_bar_chart();

    basic_line_chart();

    basic_pie_chart();

    basic_radar_chart();

    basic_horizontalBar_chart();

    bar_chart_with_line();

    function basic_bar_chart() {
        var element = document.getElementById("basic_bar_chart");
        element.height = 100;
        new Chart(element, {
            type: 'bar',
            data: {
                labels: ["Europe", "Asia", "Africa", "North America", "South America", "Antarctica", "Australia"],
                datasets: [
                    {
                        label: "Population (millions)",
                        backgroundColor: [
                            colors.primary,
                            colors.secondary,
                            colors.success,
                            colors.warning,
                            colors.info,
                            colors.purple,
                            colors.pink,
                        ],
                        data: [2478, 3267, 1734, 2084, 3000, 2478, 3267]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Predicted world population (millions) in 2050'
                }
            }
        });
    }

    function basic_line_chart() {
        var element = document.getElementById("basic_line_chart");
        element.height = 100;
        new Chart(element, {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    data: [65, 0, 80, 81, 56, 85, 40],
                    label: "Africa",
                    borderColor: colors.primary,
                    backgroundColor: colors.primaryLight,
                }, {
                    data: [25, 55, 20, 31, 96, 35, 80],
                    label: "Asia",
                    borderColor: colors.success,
                    backgroundColor: colors.successLight,
                }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'World population per region (in millions)'
                }
            }
        });
    }

    function basic_pie_chart() {
        var element = document.getElementById("basic_pie_chart");
        element.height = 100;
        new Chart(element, {
            type: 'pie',
            data: {
                labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
                datasets: [{
                    label: "Population (millions)",
                    borderWidth: 2,
                    backgroundColor: [
                        colors.primary,
                        colors.pink,
                        colors.success,
                        colors.warning,
                        colors.info
                    ],
                    data: [2478,3267,734,1784,933]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Predicted world population (millions) in 2050'
                }
            }
        });
    }

    function basic_radar_chart() {
        var element = document.getElementById("basic_radar_chart");
        element.height = 100;
        new Chart(element, {
            type: 'radar',
            data: {
                labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
                datasets: [
                    {
                        label: "1950",
                        fill: true,
                        backgroundColor: colors.primaryLight,
                        borderColor: colors.primary,
                        pointBorderColor: "#ffffff",
                        data: [8.77,55.61,21.69,6.62,6.82]
                    }, {
                        label: "2050",
                        fill: true,
                        backgroundColor: colors.successLight,
                        borderColor: colors.success,
                        pointBorderColor: "#ffffff",
                        data: [25.48,54.16,7.61,8.06,4.45]
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Distribution in % of world population'
                }
            }
        });
    }

    function basic_horizontalBar_chart() {
        var element = document.getElementById("basic_horizontalBar_chart");
        element.height = 100;
        new Chart(element, {
            type: 'horizontalBar',
            data: {
                labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
                datasets: [
                    {
                        label: "Population (millions)",
                        backgroundColor: [
                            colors.primary,
                            colors.secondary,
                            colors.success,
                            colors.warning,
                            colors.info
                        ],
                        data: [2478,5267,734,784,433]
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Predicted world population (millions) in 2050'
                }
            }
        });
    }

    function bar_chart_with_line() {
        var element = document.getElementById("bar_chart_with_line");
        element.height = 100;
        new Chart(element, {
            type: 'bar',
            data: {
                labels: ["1900", "1950", "1999", "2050"],
                datasets: [{
                    label: "Europe",
                    type: "line",
                    borderColor: colors.primary,
                    data: [408,547,675,734],
                    fill: false
                }, {
                    label: "Africa",
                    type: "line",
                    borderColor: colors.secondary,
                    data: [133,221,783,2478],
                    fill: false
                }, {
                    label: "Europe",
                    type: "bar",
                    backgroundColor: colors.purple,
                    data: [408,547,675,734],
                }, {
                    label: "Africa",
                    type: "bar",
                    backgroundColor: colors.pink,
                    backgroundColorHover: "#3e95cd",
                    data: [133,221,783,2478]
                }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Population growth (millions): Europe & Africa'
                },
                legend: { display: false }
            }
        });
    }

});