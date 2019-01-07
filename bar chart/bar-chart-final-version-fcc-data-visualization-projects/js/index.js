var req = new XMLHttpRequest();
req.open(
"GET",
"https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json",
true);

req.send();
req.onload = function () {
	var json = JSON.parse(req.responseText);
	console.log(JSON.stringify(json["data"]));

	var h = 550;
	var w = 1.5 * h;
	var padding = 30;
	var dataset = json["data"];
	var max = d3.max(json["data"], function (d) {return d[1];});
	var min = d3.min(json["data"], function (d) {return d[1];});
	var xScale = d3.
	scaleLinear().
	domain([1947, 2016]).
	range([2 * padding, 2 * padding + w]);
	var yScale = d3.
	scaleLinear().
	domain([22000, 0]).
	range([padding, padding + h]);

	console.log(xScale(1947));
	console.log(xScale(2016));

	var xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"));
	var yAxis = d3.axisLeft(yScale);

	console.log(JSON.stringify(max));

	var svg = d3.
	select("#chart-box").
	append("svg").
	attr("height", h + 2 * padding).
	attr("width", w + 4 * padding).
	attr("id", "svg-chart");

	svg.
	selectAll("rect").
	data(dataset).
	enter().
	append("rect").
	attr("class", function (d, i) {
		console.log("Gotcha! " + JSON.stringify(dataset[i - 1]) + " a");
		if (i > 0 && dataset[i - 1][1] > d[1]) {
			return "bar-down";
		} else {
			return "bar-up";
		}
	});

	var linearGradient1 = svg.
	append("defs").
	append("linearGradient").
	attr("id", "gradient-1");

	linearGradient1.
	append("stop").
	attr("offset", "0%").
	attr("stop-color", "#1c7530");
	linearGradient1.
	append("stop").
	attr("offset", "50%").
	attr("stop-color", "#28a745");
	linearGradient1.
	append("stop").
	attr("offset", "100%").
	attr("stop-color", "#1c7530");

	var linearGradient2 = svg.
	append("defs").
	append("linearGradient").
	attr("id", "gradient-2");

	linearGradient2.
	append("stop").
	attr("offset", "0%").
	attr("stop-color", "#eb8f98");
	linearGradient2.
	append("stop").
	attr("offset", "50%").
	attr("stop-color", "#dc3545");
	linearGradient2.
	append("stop").
	attr("offset", "100%").
	attr("stop-color", "#eb8f98");

	var tooltip = d3.
	select("#root").
	append("div").
	attr("id", "tooltip").
	style("display", "none");

	tooltip.append("h2").attr("id", "tooltip-title");

	tooltip.append("p").attr("id", "tooltip-value");

	svg.
	selectAll("rect").
	attr("x", function (d, i) {return 2 * padding + i * 3;}).
	attr("y", function (d) {return h - d[1] / 40 + padding;}).
	attr("width", 3).
	attr("height", function (d) {return d[1] / 40;}).
	attr("data-date", function (d) {return d[0];}).
	attr("data-gdp", function (d) {return d[1];}).
	on("mouseover", function (d) {
		tooltip.
		transition().
		duration(100).
		style("opacity", "1");
		tooltip.
		style("display", "flex").
		style("left", d3.event.pageX + 20 + "px") //check docs
		.style("top", d3.event.pageY - 28 + "px") //check docs
		.attr("data-date", d[0]);
		var titleString = extractYear(d[0]);
		d3.select("#tooltip-title").text(titleString);
		var valueFormat = d3.format("($,.1f");
		d3.select("#tooltip-value").text(valueFormat(d[1]) + " billion"); //check docs
	}).
	on("mouseout", function (d) {
		tooltip.
		transition().
		duration(150).
		style("opacity", "0");
		tooltip.attr("data-date", "");
	});

	svg.
	append("g").
	attr("transform", "translate(0, " + (h + padding) + ")").
	attr("id", "x-axis").
	call(xAxis);

	svg.
	append("g").
	attr("transform", "translate(" + 2 * padding + ", 0)").
	attr("id", "y-axis").
	call(yAxis);

	svg.
	append("text").
	attr("id", "y-label").
	text("billions of US dollars").
	attr("x", padding).
	attr("y", padding).
	attr("transform", "translate(" + (padding + 10) + ", 10)");

	svg.
	append("text").
	text("GDP grew compared to previous quarter").
	attr("x", w - 8 * padding).
	attr("y", 2 * padding);

	svg.
	append("text").
	text("GDP shrank compared to previous quarter").
	attr("x", w - 8 * padding).
	attr("y", 2.8 * padding);

	svg.
	append("rect").
	attr("height", "12px").
	attr("width", "12px").
	attr("x", w - 8 * padding - 15).
	attr("y", 2.8 * padding - 12).
	attr("fill", "#dc3545");

	svg.
	append("rect").
	attr("height", "12px").
	attr("width", "12px").
	attr("x", w - 8 * padding - 15).
	attr("y", 2 * padding - 12).
	attr("fill", "#28a745");
};

function extractYear(str) {
	var partSet = str.split("-");
	console.log(partSet);
	var result = void 0;
	switch (partSet[1]) {
		case "01":
			result = partSet[0] + " Q1";
			break;
		case "04":
			result = partSet[0] + " Q2";
			break;
		case "07":
			result = partSet[0] + " Q3";
			break;
		case "10":
			result = partSet[0] + " Q4";
			break;}

	return result;
}