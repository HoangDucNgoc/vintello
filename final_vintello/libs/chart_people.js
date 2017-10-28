google.charts.load('current', {
    'packages': ['corechart']
});
// geoChart load
google.charts.load('current', {
    'packages': ['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
// -------------------------------------------------------
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawChartTypeBar);

function drawChartTypeBar() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Visitations', {
            role: 'style'
        }],
        ['2010', 10, 'color: #0069A6'],
        ['2020', 14, 'color: #1978AF'],
        ['2030', 16, 'color: #338788'],
        ['2040', 22, 'color: #4C96C1'],
        ['2050', 28, 'color : #66A5CA']
    ]);
    var options = {
        title: 'By revenue ',
        titleTextStyle: {
            color: '#002E5B', // any HTML string color ('red', '#cc00cc')
            fontSize: 16, // 12, 18 whatever you want (don't specify px)
        },
        legend: {
            position: 'none'
        },
        bars: 'horizontal', // Required for Material Bar Charts.
        bar: {
            groupWidth: "95%"
        },
        hAxis: {
            textPosition: 'none'
        },
        bar: {
            groupWidth: "90%"
        }
    };
    var options1 = {
        title: 'By profit',
        titleTextStyle: {
            color: '#002E5B', // any HTML string color ('red', '#cc00cc')
            fontSize: 16, // 12, 18 whatever you want (don't specify px)
        },
        legend: {
            position: 'none'
        },
        bars: 'horizontal', // Required for Material Bar Charts.
        bar: {
            groupWidth: "95%"
        },
        hAxis: {
            textPosition: 'none'
        },
        bar: {
            groupWidth: "90%"
        }
    };
    var options2 = {
        title: 'By employee counts',
        titleTextStyle: {
            color: '#002E5B', // any HTML string color ('red', '#cc00cc')
            fontSize: 16, // 12, 18 whatever you want (don't specify px)
        },
        legend: {
            position: 'none'
        },
        bars: 'horizontal', // Required for Material Bar Charts.
        bar: {
            groupWidth: "95%"
        },
        hAxis: {
            textPosition: 'none'
        },
        bar: {
            groupWidth: "90%"
        }
    };
    // create 3 barchart
    var chart1 = new google.visualization.BarChart(document.getElementById('barchart1'));
    var chart2 = new google.visualization.BarChart(document.getElementById('barchart2'));
    var chart3 = new google.visualization.BarChart(document.getElementById('barchart3'));
    var chart11 = new google.visualization.BarChart(document.getElementById('barchart4'));
    var chart21 = new google.visualization.BarChart(document.getElementById('barchart5'));
    var chart31 = new google.visualization.BarChart(document.getElementById('barchart6'));
    // activate 3 chart
    chart1.draw(data, options);
    chart2.draw(data, options1);
    chart3.draw(data, options2);
    chart11.draw(data, options);
    chart21.draw(data, options1);
    chart31.draw(data, options2);
}

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Hinh', 20],
        ['Eat', 20],
        ['Rice', 50],
    ]);
    var options = {
        title: 'By verticals',
        titleTextStyle: {
            color: '#002E5B', // any HTML string color ('red', '#cc00cc')
            fontSize: 16, // 12, 18 whatever you want (don't specify px)
        },
        legend: 'Right',
        // set percent
        sliceVisibilityThreshold: .2,
        // format color 
        slices: {
            0: {
                color: '#0069A6'
            },
            1: {
                color: '#1978AF'
            },
            2: {
                color: '#338788'
            }
        },
        width: '100%',
        height: '100%',
    };
    var options1 = {
        title: 'By countries',
        titleTextStyle: {
            color: '#002E5B', // any HTML string color ('red', '#cc00cc')
            fontSize: 16, // 12, 18 whatever you want (don't specify px)
        },
        legend: 'Right',
        // set percent
        sliceVisibilityThreshold: .2,
        // format color 
        slices: {
            0: {
                color: '#0069A6'
            },
            1: {
                color: '#1978AF'
            },
            2: {
                color: '#338788'
            }
        },
        width: '100%',
        height: '100%',
    };
    var options2 = {
        title: 'By cities',
        titleTextStyle: {
            color: '#002E5B', // any HTML string color ('red', '#cc00cc')
            fontSize: 16, // 12, 18 whatever you want (don't specify px)
        },
        legend: 'Right',
        // set percent
        sliceVisibilityThreshold: .2,
        // format color 
        slices: {
            0: {
                color: '#0069A6'
            },
            1: {
                color: '#1978AF'
            },
            2: {
                color: '#338788'
            }
        },
        width: '100%',
        height: '100%',
    };
   
    // create chart
    var chart10 = new google.visualization.PieChart(document.getElementById('piechart'));
    var chart2 = new google.visualization.PieChart(document.getElementById('piechart1'));
    var chart3 = new google.visualization.PieChart(document.getElementById('piechart2'));
    chart10.draw(data, options);
    chart2.draw(data, options1);
    chart3.draw(data, options2);
};