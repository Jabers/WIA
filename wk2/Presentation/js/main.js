window.onload = function() {

	//d3.select("body").append("p").text("Hello, world!")

	var dataSet = [90, 45, 29, 88, 72, 12, 63, 51, 35, 26, 20, 6];

	//varables for chart's dimensions
	var width = 700;
	var height = 700;
	//var barHeight = 20;

	//D3 scales
	var xScale = d3.scale.linear()
		.domain([0, d3.max(dataSet)])
		.range([0, width]);

	var yScale = d3.scale.ordinal()
		.domain(d3.range(dataSet.length))
		.rangeRoundBands([0, height], 0.05);

	var svg = d3.select("body")
		.append("svg")
		.attr("width", width)
		.attr("height", height);

	svg.selectAll("rect")
		.data(dataSet)
		.enter()
		.append("rect")
		// .attr("x", 0)
		// .attr("y", 0)
		// .attr("width", width)
		// .attr("height", barHeight);
		.attr("x", 0)
		.attr("y", function(d, i){
			return yScale(i);
		})
		.attr("width", function(d){
			return xScale(d);
		})
		.attr("height", yScale.rangeBand())
		.on("mouseover", function(){
			d3.select(this).classed("highlight", true);
		})
		.on("mouseout", function(){
			d3.select(this).classed("highlight", false);
		});

}