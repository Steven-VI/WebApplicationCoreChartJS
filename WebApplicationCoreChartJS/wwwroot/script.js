// Vertical bar chart
var ctx = document.getElementById('myChartVerticalBars').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Hong Kong', 'Macau', 'Japan', 'Switzerland', 'Spain', 'Singapore'],
        datasets: [{
            label: 'Life expectancy',
            data: [84.308, 84.188, 84.118, 83.706, 83.5, 83.468],
            backgroundColor: [
                'rgba(216, 27, 96, 0.6)',
                'rgba(3, 169, 244, 0.6)',
                'rgba(255, 152, 0, 0.6)',
                'rgba(29, 233, 182, 0.6)',
                'rgba(156, 39, 176, 0.6)',
                'rgba(84, 110, 122, 0.6)'
            ],
            borderColor: [
                'rgba(216, 27, 96, 1)',
                'rgba(3, 169, 244, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(29, 233, 182, 1)',
                'rgba(156, 39, 176, 1)',
                'rgba(84, 110, 122, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Life Expectancy by Country',
            position: 'top',
            fontSize: 16,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 75
                }
            }]
        }
    }
});

// Doughnut chart
var ctx = document.getElementById('myChartDoughnut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Dairy', 'Fruits', 'Lean meats', 'Vegetables', 'Whole grains'],
        datasets: [{
            data: [27.92, 17.53, 14.94, 26.62, 12.99],
            backgroundColor: ['#e91e63', '#00e676', '#ff5722', '#1e88e5', '#ffd600'],
            borderWidth: 0.5,
            borderColor: '#ddd'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Recommended Daily Diet',
            position: 'top',
            fontSize: 16,
            fontColor: '#111',
            padding: 20
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 20,
                fontColor: '#111',
                padding: 15
            }
        },
        tooltips: {
            enabled: false
        },
        plugins: {
            datalabels: {
                color: '#111',
                textAlign: 'center',
                font: {
                    lineHeight: 1.6
                },
                formatter: function (value, ctx) {
                    return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
                }
            }
        }
    }
});

// Pie chart
var ctx = document.getElementById('myChartPie').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Dairy', 'Fruits', 'Lean meats', 'Vegetables', 'Whole grains'],
        datasets: [{
            data: [27.92, 17.53, 14.94, 26.62, 12.99],
            backgroundColor: ['#e91e63', '#00e676', '#ff5722', '#1e88e5', '#ffd600'],
            borderWidth: 0.5,
            borderColor: '#ddd'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Recommended Daily Diet',
            position: 'top',
            fontSize: 16,
            fontColor: '#111',
            padding: 20
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 20,
                fontColor: '#111',
                padding: 15
            }
        },
        tooltips: {
            enabled: false
        },
        plugins: {
            datalabels: {
                color: '#111',
                textAlign: 'center',
                font: {
                    lineHeight: 1.6
                },
                formatter: function (value) {
                    return value + '%';
                }
            }

           
        }
    }
});

var ctx = document.getElementById('myChartLine').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Dairy', 'Fruits', 'Lean meats', 'Vegetables', 'Whole grains'],
        datasets: [{
            data: [27.92, 17.53, 14.94, 26.62, 12.99],
            backgroundColor: ['#e91e63', '#00e676', '#ff5722', '#1e88e5', '#ffd600'],
            borderWidth: 0.5,
            borderColor: '#ddd'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Recommended Daily Diet',
            position: 'top',
            fontSize: 16,
            fontColor: '#111',
            padding: 20
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 20,
                fontColor: '#111',
                padding: 15
            }
        },
        tooltips: {
            enabled: false
        },
        plugins: {
            datalabels: {
                color: '#111',
                textAlign: 'center',
                font: {
                    lineHeight: 1.6
                },
                formatter: function (value) {
                    return value + '%';
                }
            }


        }
    }
});

// Radar Chart
var ctx = document.getElementById('myChartRadar').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Dairy', 'Fruits', 'Lean meats', 'Vegetables', 'Whole grains'],
        datasets: [{
            data: [27.92, 17.53, 14.94, 26.62, 12.99],
            backgroundColor: ['#e91e63', '#00e676', '#ff5722', '#1e88e5', '#ffd600'],
            borderWidth: 0.5,
            borderColor: '#ddd'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Recommended Daily Diet',
            position: 'top',
            fontSize: 16,
            fontColor: '#111',
            padding: 20
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 20,
                fontColor: '#111',
                padding: 15
            }
        },
        tooltips: {
            enabled: false
        },
        plugins: {
            datalabels: {
                color: '#111',
                textAlign: 'center',
                font: {
                    lineHeight: 1.6
                },
                formatter: function (value) {
                    return value + '%';
                }
            }


        }
    }
});

// Polar Area Chart
var ctx = document.getElementById('myChartPolarArea').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Dairy', 'Fruits', 'Lean meats', 'Vegetables', 'Whole grains'],
        datasets: [{
            data: [27.92, 17.53, 14.94, 26.62, 12.99],
            backgroundColor: ['#e91e63', '#00e676', '#ff5722', '#1e88e5', '#ffd600'],
            borderWidth: 0.5,
            borderColor: '#ddd'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Recommended Daily Diet',
            position: 'top',
            fontSize: 16,
            fontColor: '#111',
            padding: 20
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 20,
                fontColor: '#111',
                padding: 15
            }
        },
        tooltips: {
            enabled: false
        },
        plugins: {
            datalabels: {
                color: '#111',
                textAlign: 'center',
                font: {
                    lineHeight: 1.6
                },
                formatter: function (value) {
                    return value + '%';
                }
            }


        }
    }
});

// Bubble Chart
var ctx = document.getElementById('myChartBubble').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bubble',
    data: {
        labels: ['Dairy', 'Fruits', 'Lean meats', 'Vegetables', 'Whole grains'],
        datasets: [{
            data: [27.92, 17.53, 14.94, 26.62, 12.99],
            backgroundColor: ['#e91e63', '#00e676', '#ff5722', '#1e88e5', '#ffd600'],
            borderWidth: 0.5,
            borderColor: '#ddd'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Recommended Daily Diet',
            position: 'top',
            fontSize: 16,
            fontColor: '#111',
            padding: 20
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 20,
                fontColor: '#111',
                padding: 15
            }
        },
        tooltips: {
            enabled: false
        },
        plugins: {
            datalabels: {
                color: '#111',
                textAlign: 'center',
                font: {
                    lineHeight: 1.6
                },
                formatter: function (value) {
                    return value + '%';
                }
            }


        }
    }
});

// Scatter Chart
var ctx = document.getElementById('myChartScatter').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        labels: ['Dairy', 'Fruits', 'Lean meats', 'Vegetables', 'Whole grains'],
        datasets: [{
            data: [27.92, 17.53, 14.94, 26.62, 12.99],
            backgroundColor: ['#e91e63', '#00e676', '#ff5722', '#1e88e5', '#ffd600'],
            borderWidth: 0.5,
            borderColor: '#ddd'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Recommended Daily Diet',
            position: 'top',
            fontSize: 16,
            fontColor: '#111',
            padding: 20
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 20,
                fontColor: '#111',
                padding: 15
            }
        },
        tooltips: {
            enabled: false
        },
        plugins: {
            datalabels: {
                color: '#111',
                textAlign: 'center',
                font: {
                    lineHeight: 1.6
                },
                formatter: function (value) {
                    return value + '%';
                }
            }


        }
    }
});

// Area Chart
var ctx = document.getElementById('myChartArea').getContext('2d');

var myChart = new Chart(ctx, {
    data: {
        datasets: [
            { fill: 'origin' },      // 0: fill to 'origin'
            { fill: '+2' },          // 1: fill to dataset 3
            { fill: 1 },             // 2: fill to dataset 1
            { fill: false },         // 3: no fill
            { fill: '-2' }           // 4: fill to dataset 2
        ]
    }
});