
google.charts.load('current', {'packages':['corechart']});
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
	  google.charts.setOnLoadCallback(drawMarkersMap);
	  google.charts.setOnLoadCallback(drawChart1);
	  google.charts.setOnLoadCallback(drawTrendlines);
		
	  function drawChartTypeBar(){
		 var data = google.visualization.arrayToDataTable([
        ['Year', 'Visitations', { role: 'style' } ],
        ['2010', 10, 'color: gray'],
        ['2020', 14, 'color: #76A7FA'],
        ['2030', 16, 'color: red'],
        ['2040', 22, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
        ['2050', 28, 'stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2']
      ]);
			  
		
			  var options = {
				  title: 'By revenue ',
				  legend: { position: 'none' },
				  bars: 'horizontal', // Required for Material Bar Charts.
				  bar: {groupWidth: "95%"},
				  hAxis: { textPosition: 'none' },
				  bar: { groupWidth: "90%" }
				};

        var options1 = {
          title: 'By profit',
          legend: { position: 'none' },
          bars: 'horizontal', // Required for Material Bar Charts.
          bar: {groupWidth: "95%"},
          hAxis: { textPosition: 'none' },
          bar: { groupWidth: "90%" }
        };

        var options2 = {
          title: 'By employee counts',
          legend: { position: 'none' },
          bars: 'horizontal', // Required for Material Bar Charts.
          bar: {groupWidth: "95%"},
          hAxis: { textPosition: 'none' },
          bar: { groupWidth: "90%" }
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
          ['Hinh',     20],
          ['Eat',      20],
          ['Rice',      50],
        ]);

        var options = {
        	  title: 'By verticals',
          	legend: 'Right',
		  // set percent
		  	sliceVisibilityThreshold: .2,
		  // format color 
		  	slices: {
            0: { color: 'yellow' },
            1: { color: '#002E5B' }
          }
        };

        var options1 = {
            title: 'By countries',
            legend: 'Right',
      // set percent
        sliceVisibilityThreshold: .2,
      // format color 
        slices: {
            0: { color: 'yellow' },
            1: { color: '#002E5B' }
          }
        };


        var options2 = {
            title: 'By cities',
            legend: 'Right',
      // set percent
        sliceVisibilityThreshold: .2,
      // format color 
        slices: {
            0: { color: 'yellow' },
            1: { color: '#002E5B' }
          }
        };
        // create chart
        var chart10 = new google.visualization.PieChart(document.getElementById('piechart'));
        var chart2 = new google.visualization.PieChart(document.getElementById('piechart1'));
        var chart3 = new google.visualization.PieChart(document.getElementById('piechart2'));
        var chart101 = new google.visualization.PieChart(document.getElementById('piechart3'));
        var chart21 = new google.visualization.PieChart(document.getElementById('piechart4'));
        var chart31 = new google.visualization.PieChart(document.getElementById('piechart5'));
        chart10.draw(data, options);
        chart2.draw(data, options1);
        chart3.draw(data, options2);
        chart101.draw(data, options);
        chart21.draw(data, options1);
        chart31.draw(data, options2);
};
		function drawMarkersMap() {
	      var data = google.visualization.arrayToDataTable([
	        ['City',   'Population', 'Area'],
	        ['HaNoi',      2761477,    1285.31],
	    		['DaLat',      2761473333333333,    1285.31],
	    		['BaoLoc',      276147712232,    1285.31],
	      ]);

	      var options = {
	        region: 'VN',
	        displayMode: 'markers',
	        colorAxis: {colors: ['#e7711c', '#4374e0']} // orange to blue
	      };
	      // chart_div 1 : create Map chart
	      var chart = new google.visualization.GeoChart(document.getElementById('chart_div1'));
	      // activate Map chart
	      chart.draw(data, options);
    };

    function drawChart1() {

      var data = google.visualization.arrayToDataTable([
        ['ID', 'Life Expectancy', 'Fertility Rate', 'Region',     'Population'],
        ['365',    80.66,              1.67,      'bb',  33739900],
        ['DEU',    79.84,              1.36,      'Europe',         81902307],
        ['DNK',    78.6,               1.84,      'Europe',         5523095],
        ['EGY',    72.73,              2.78,      'Middle East',    79716203],
        ['GBR',    80.05,              2,         'Europe',         61801570],
        ['IRN',    72.49,              1.7,       'Middle East',    73137148],
        ['IRQ',    68.09,              4.77,      'Middle East',    31090763],
        ['ISR',    81.55,              2.96,      'Middle East',    7485600],
        ['RUS',    68.6,               1.54,      'Europe',         141850000],
        ['1000',    78.09,              2.05,      'North America',  307007000]
      ]);

      var options = {
        title: 'Segment attractiveness (size, growth, strategic priorities)',
        hAxis: {title: 'Ability to win (propensity to buy)'},
        vAxis: {title: 'Est. average deal size'},
        bubble: {
          textStyle: {
            auraColor: 'none',
          }
        },
        height: 400,
		legend : {position: 'top', textStyle: {color: 'blue', fontSize: 16}}
      };

      var chart = new google.visualization.BubbleChart(document.getElementById('noAura'));

      chart.draw(data, options);
    };

	function drawTrendlines() {     
       var data = google.visualization.arrayToDataTable([
         ['Element', 'Density', { role: 'style' }],
         ['Copper', 8.94, '#b87333'],            // RGB value
         ['Silver', 10.49, 'silver'],            // English color name
         ['Gold', 19.30, 'gold'],
		 ['Platinum', 21.45, 'color: #e5e4e2' ], // CSS-style declaration
      ]);

      var options = {
        title: 'Motivation and Energy Level Throughout the Day',
        hAxis: {
          title: 'Time of Day',
        },
        vAxis: {
          title: 'Rating (scale of 1-10)'
        }
      };
      // chart div 1 2: create column chart
      var chart2 = new google.visualization.ColumnChart(document.getElementById('chart_div2'));
      var chart3 = new google.visualization.ColumnChart(document.getElementById('chart_div3'));
      var chart4 = new google.visualization.ColumnChart(document.getElementById('chart_div4'));
      var chart5 = new google.visualization.ColumnChart(document.getElementById('chart_div5'));
      // activate column chart
      chart2.draw(data, options);
      chart3.draw(data, options);
      chart4.draw(data, options);
      chart5.draw(data, options);
    }