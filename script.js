var w = 500,
	h = 500;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['A01','A05', 'A06', 'A09', 'A10', 'A03', 'A08'];

//Data
var d = [
					   [//Actor01
						{axis:"Actor Strength",value:1},
						{axis:"Bargain Activity",value:0.50},
						{axis:"Bargain Gain",value:0.44},
						{axis:"Distance Moved",value:0.5}		
					  ],[//Actor05
						{axis:"Actor Strength",value:0.21},
						{axis:"Bargain Activity",value:0.98},
						{axis:"Bargain Gain",value:0.15},
						{axis:"Distance Moved",value:0.98}	
					  ],[//Actor06
						{axis:"Actor Strength",value:0.16},
						{axis:"Bargain Activity",value:0.75},
						{axis:"Bargain Gain",value:0.17},
						{axis:"Distance Moved",value:0.48}	
					  ],[//Actor09
						{axis:"Actor Strength",value:0.52},
						{axis:"Bargain Activity",value:0.98},
						{axis:"Bargain Gain",value:0.16},
						{axis:"Distance Moved",value:0.15}	
					  ],[//Actor10
						{axis:"Actor Strength",value:0.37},
						{axis:"Bargain Activity",value:0.98},
						{axis:"Bargain Gain",value:0.98},
						{axis:"Distance Moved",value:0.74}	
					  ],[//Actor03
						{axis:"Actor Strength",value:0.30},
						{axis:"Bargain Activity",value:0.75},
						{axis:"Bargain Gain",value:0.42},
						{axis:"Distance Moved",value:0.14}	
					  ],[//Actor08
						{axis:"Actor Strength",value:0.22},
						{axis:"Bargain Activity",value:0.75},
						{axis:"Bargain Gain",value:0.25},
						{axis:"Distance Moved",value:0.42}	
					  ]
		];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 1,
  levels: 6,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Ranking (%) among actors through various aspects");

		
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	