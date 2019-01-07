var promisses = [d3.json('https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/movie-data.json')];

Promise.all(promisses).then(function (result) {return renderDiagram(result);});

function renderDiagram(json) {
	//console.log(JSON.stringify(json));

	var h = 550;
	var w = 2 * h;

	var svg = d3.select('#root').
	append('svg').
	attrs(
	{ id: 'chart', width: w, height: h });


	var root = d3.hierarchy(json[0]);

	root.sum(function (d) {return d.value;});

	root.sort(function (a, b) {return b.height - a.height || b.value - a.value;});

	//console.log(root);

	var treemap = d3.treemap().
	size([w, h]).
	tile(d3.treemapSquarify);

	treemap(root);

	console.log(root);

	var cells = svg.selectAll('.cell').
	data(root.descendants()).
	enter().
	append('g').
	attr('class', 'cell');

	cells.append('rect').attrs(function (d) {
		console.log(d);
		console.log(JSON.stringify(d.data.category));
		return {
			x: d.x0,
			width: d.x1,
			height: d.y1,
			y: d.y0,
			class: d.children === undefined ? 'tile' : 'branch',
			'data-name': d.data.name,
			'data-category': d.data.category,
			'data-value': d.data.value,
			fill: pickFill(d.data.category) };

	}).style('stroke', 'white');

	cells.append('text').text(function (d) {return d.data.name;}).attrs(function (d) {
		return { x: d.x0 + 2, y: d.y0 + 12, 'font-size': 10, width: d.x1 };
	}).style('pointer-events', 'none').call(wrap, 40);

	d3.selectAll('.tile').on('mouseover', function (d) {
		var tooltip = d3.select('#tooltip');
		tooltip.style('opacity', '1').
		style('top', d3.event.pageY + 'px').
		style('left', d3.event.pageX + 'px').
		attr('data-value', d.data.value);
		tooltip.select('#tip-name').text('Name: ' + d.data.name);
		tooltip.select('#tip-category').text('Category: ' + d.data.category);
		tooltip.select('#tip-value').text('Value: ' + d.data.value);
	}).on('mouseout', function (d) {
		d3.select('#tooltip').style('opacity', '0');
	});

	var categories = ['Action', 'Adventure', 'Comedy', 'Drama', 'Animation', 'Family', 'Biography'];

	var legend = d3.select('#root').
	append('svg').
	attrs({ 'id': 'legend', height: 150, width: 1100 });

	legend.selectAll('rect').data(categories).enter().append('rect').
	attrs(function (d, i) {return {
			class: 'legend-item',
			'width': 25,
			height: 25,
			fill: pickFill(d),
			x: 250 * (i - i % 3) / 3,
			y: 35 * (i % 3),
			transform: 'translate(' + 200 + ',' + 20 + ')' };});



	legend.selectAll('text').
	data(categories).enter().append('text').
	attrs(function (d, i) {return {
			x: 250 * (i - i % 3) / 3 + 30,
			y: 35 * (i % 3) + 20,
			transform: 'translate(' + 200 + ',' + 20 + ')' };}).
	text(function (d) {return d;});
}

function wrap(text, width) {
	text.each(function () {
		var text = d3.select(this),
		words = text.text().split(/\s+/).reverse(),
		word,
		line = [],
		lineNumber = 0,
		lineHeight = 1.1, // ems
		x = text.attr("x"),
		y = text.attr("y"),
		dy = 0, //parseFloat(text.attr("dy")),
		tspan = text.text(null).
		append("tspan").
		attr("x", x).
		attr("y", y).
		attr("dy", dy + "em");
		while (word = words.pop()) {
			line.push(word);
			tspan.text(line.join(" "));
			if (tspan.node().getComputedTextLength() > width) {
				line.pop();
				tspan.text(line.join(" "));
				line = [word];
				tspan = text.append("tspan").
				attr("x", x).
				attr("y", y).
				attr("dy", ++lineNumber * lineHeight + dy + "em").
				text(word);
			}
		}
	});
}

function pickFill(category) {
	switch (category) {
		case 'Action':
			return 'deepskyblue';
			break;
		case 'Adventure':
			return 'springgreen';
			break;
		case 'Comedy':
			return 'khaki';
			break;
		case 'Drama':
			return 'lightcoral';
			break;
		case 'Animation':
			return 'lightsteelblue';
			break;
		case 'Family':
			return 'orange';
			break;
		case 'Biography':
			return 'aquamarine';
			break;}

}