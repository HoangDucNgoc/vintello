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
        ['2010', 10, 'color: #49546B'],
        ['2020', 14, 'color: #53617B'],
        ['2030', 16, 'color: #7284A8'],
        ['2040', 22, 'color: #8B9AB7'],
        ['2050', 28, 'color : #D8DDE7']
    ]);
    var options = {
        title: 'By revenue ',
        titleTextStyle: {
            color: '#002E5B',    // any HTML string color ('red', '#cc00cc')
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
            color: '#002E5B',    // any HTML string color ('red', '#cc00cc')
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
            color: '#002E5B',    // any HTML string color ('red', '#cc00cc')
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
    // var chart11 = new google.visualization.BarChart(document.getElementById('barchart4'));
    // var chart21 = new google.visualization.BarChart(document.getElementById('barchart5'));
    // var chart31 = new google.visualization.BarChart(document.getElementById('barchart6'));
    // activate 3 chart
    chart1.draw(data, options);
    chart2.draw(data, options1);
    chart3.draw(data, options2);
    // chart11.draw(data, options);
    // chart21.draw(data, options1);
    // chart31.draw(data, options2);
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
            color: '#002E5B',    // any HTML string color ('red', '#cc00cc')
             fontSize: 16, // 12, 18 whatever you want (don't specify px)
        },
        legend: 'Right',
        // set percent
        sliceVisibilityThreshold: .2,
        // format color 
        slices: {
            0: {
                color: '#53617B'
            },
            1: {
                color: '#687899'
            },
            2 :{
              color : '#B2BBCF'
            }
        }
    };
    var options1 = {
        title: 'By countries',
        titleTextStyle: {
            color: '#002E5B',    // any HTML string color ('red', '#cc00cc')
             fontSize: 16, // 12, 18 whatever you want (don't specify px)
        },
        legend: 'Right',
        // set percent
        sliceVisibilityThreshold: .2,
        // format color 
        slices: {
            0: {
                color: '#53617B'
            },
            1: {
                color: '#687899'
            },
            2 :{
              color : '#B2BBCF'
            }
        }
    };
    var options2 = {
        title: 'By cities',
        titleTextStyle: {
            color: '#002E5B',    // any HTML string color ('red', '#cc00cc')
             fontSize: 16, // 12, 18 whatever you want (don't specify px)
        },
        legend: 'Right',
        // set percent
        sliceVisibilityThreshold: .2,
        // format color 
        slices: {
           0: {
                color: '#53617B'
            },
            1: {
                color: '#687899'
            },
            2 :{
              color : '#B2BBCF'
            }
        }
    };
    var options3 = {
        title: 'By cities',
        titleTextStyle: {
            color: '#002E5B',    // any HTML string color ('red', '#cc00cc')
             fontSize: 16, // 12, 18 whatever you want (don't specify px)
        },
        legend: 'Right',
        // set percent
        sliceVisibilityThreshold: .2,
        // format color 
        slices: {
            0: {
                color: 'yellow'
            },
            1: {
                color: '#002E5B'
            }
        }
    };
    var options4 = {
        title: 'By cities',
        titleTextStyle: {
            color: '#002E5B',    // any HTML string color ('red', '#cc00cc')
             fontSize: 16, // 12, 18 whatever you want (don't specify px)
        },
        legend: 'Right',
        // set percent
        sliceVisibilityThreshold: .2,
        // format color 
        slices: {
            0: {
                color: 'yellow'
            },
            1: {
                color: '#002E5B'
            }
        }
    };
    var options5 = {
        title: 'By cities',
        titleTextStyle: {
            color: '#002E5B',    // any HTML string color ('red', '#cc00cc')
             fontSize: 16, // 12, 18 whatever you want (don't specify px)
        },
        legend: 'Right',
        // set percent
        sliceVisibilityThreshold: .2,
        // format color 
        slices: {
            0: {
                color: 'yellow'
            },
            1: {
                color: '#002E5B'
            }
        }
    };
    // create chart
    var chart10 = new google.visualization.PieChart(document.getElementById('piechart'));
    var chart2 = new google.visualization.PieChart(document.getElementById('piechart1'));
    var chart3 = new google.visualization.PieChart(document.getElementById('piechart2'));
    // var chart101 = new google.visualization.PieChart(document.getElementById('piechart3'));
    // var chart21 = new google.visualization.PieChart(document.getElementById('piechart4'));
    // var chart31 = new google.visualization.PieChart(document.getElementById('piechart5'));
    chart10.draw(data, options);
    chart2.draw(data, options1);
    chart3.draw(data, options2);
    // chart101.draw(data, options3);
    // chart21.draw(data, options4);
    // chart31.draw(data, options5);
};