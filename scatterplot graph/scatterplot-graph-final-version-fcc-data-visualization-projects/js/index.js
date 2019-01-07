function processDataFromServer(json) {
	console.log(JSON.stringify(json));

	var h = 600;
	var w = 4 / 3 * h;
	var padding = 40;

	var xScale = d3.scaleLinear();

	xScale.domain([1993, 2018]).range([padding, padding + w]);

	var yScale = d3.scaleLinear();

	yScale.domain([2160000, 2400000]).range([padding, padding + h]);

	var xAxis = d3.
	axisBottom(xScale).
	tickFormat(d3.format("d")).
	ticks(25);

	var yAxis = d3.axisLeft(yScale).tickFormat(d3.timeFormat("%M:%S"));

	var svg = d3.
	select("#chart-bg").
	append("svg").
	attr("height", h + 2 * padding).
	attr("width", w + 2 * padding).
	attr("id", "chart");

	svg.
	selectAll("circle").
	data(json).
	enter().
	append("circle").
	attr("r", 5).
	attr("cx", function (d) {return (d["Year"] - 1993) * 32 + padding;}).
	attr("cy", function (d) {return (d["Seconds"] - 2160) * 2.5 + padding;}).
	attr("stroke", "black").
	attr("class", "dot").
	attr("data-xvalue", function (d) {return d["Year"];}).
	attr("data-yvalue", function (d) {
		var data = new Date(d["Seconds"] * 1000);
		console.log(JSON.stringify(data));
		return data;
	}).
	attr("fill", function (d) {
		if (d["Doping"] === "") {
			return "rgba(40,167,69,0.8)";
		} else {
			return "rgba(220,53,69,0.8)";
		}
	}).
	on("mouseover", function (d, i) {
		d3.
		select("#tooltip").
		transition().
		duration(150).
		style("opacity", "1");
		d3.
		select("#tooltip").
		style("left", d3.event.pageX + 10 + "px").
		style("top", d3.event.pageY - 70 + "px").
		attr("data-year", d["Year"]);
		d3.select("#tooltip-title").text(d["Name"] + " - " + d["Nationality"]);
		d3.select("#tooltip-value").text("Year: " + d["Year"]);
		if (d["Doping"] !== "") {
			d3.select("#tooltip-doping").text("Doping: " + d["Doping"]);
		} else {
			d3.select("#tooltip-doping").text("");
		}
	}).
	on("mouseout", function (d, i) {
		d3.
		select("#tooltip").
		transition().
		duration(150).
		style("opacity", "0");
	}).
	append("title").
	text(function (d) {return d3.timeFormat("%M:%S")(d["Seconds"] * 1000);});

	svg.
	append("g").
	attr("transform", "translate(0," + (h + padding) + ")").
	attr("id", "x-axis").
	call(xAxis);

	svg.
	append("g").
	attr("transform", "translate(" + padding + ",0)").
	attr("id", "y-axis").
	call(yAxis);

	svg.
	append("text").
	text("Contender accused of doping").
	attr("transform", "translate(" + (padding + w - 250) + ",52)");

	svg.
	append("text").
	text("Contender never accused of doping").
	attr("transform", "translate(" + (padding + w - 250) + ",72)");

	svg.
	append("rect").
	attr("height", "12px").
	attr("width", "12px").
	attr("y", "40").
	attr("x", "" + (padding + w - 266)).
	attr("fill", "rgb(220,53,69)");

	svg.
	append("rect").
	attr("height", "12px").
	attr("width", "12px").
	attr("y", "60").
	attr("x", "" + (padding + w - 266)).
	attr("fill", "rgb(40,167,69)");
}

var req = new XMLHttpRequest();
req.open(
"GET",
"https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json",
true);

req.send();
req.onload = function () {
	var jsonFile = JSON.parse(req.responseText);
	processDataFromServer(jsonFile);
};