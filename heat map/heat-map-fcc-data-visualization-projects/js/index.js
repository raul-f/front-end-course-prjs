function pageRender(json) {

  var w = 1052;
  var h = 360;
  var padding = 60;
  var legendData = [-2.5, -2, -1.25, 0, 1.25, 2];
  var legDimension = 25;

  var yScale = d3.scaleTime().
  domain([new Date("2016-12-15"), new Date("2017-12-15")]).
  range([padding, h + padding]);

  var xScale = d3.scaleLinear().
  domain([1753, 2016]).
  range([padding, w + padding]);

  var legScale = d3.scaleLinear().
  domain([-3.75, -2, -1.25, 0, 1.25, 2, 3.75]).
  range([0, 25, 50, 75, 100, 125, 150]);

  var legAxis = d3.axisBottom(legScale).tickValues([-2, -1.25, 0, 1.25, 2]).tickFormat(d3.format('+.3'));

  var yAxis = d3.axisLeft(yScale).
  ticks(12).
  tickFormat(d3.timeFormat("%B"));

  var xAxis = d3.axisBottom(xScale).
  ticks(20).
  tickFormat(d3.format('d'));

  var svg = d3.select('#root').
  append('svg').
  attr('id', 'chart').
  attr('height', h + 2 * padding + 100).
  attr('width', w + 2 * padding);

  var tip = d3.select('#root').append('div');

  tip.attr('id', 'tooltip');

  tip.append('p').
  attr('id', 'tooltip-year').
  attr('class', 'tip-text');

  tip.append('p').
  attr('id', 'tooltip-temp').
  attr('class', 'tip-text');

  tip.append('p').
  attr('id', 'tooltip-variance').
  attr('class', 'tip-text');

  svg.selectAll('rect').
  data(json['monthlyVariance']).
  enter().
  append('rect').
  attr('height', 30).
  attr('width', 4).
  attr('class', 'cell').
  attr('y', function (d, i) {
    return i % 12 * 30 + padding;
  }).
  attr('data-year', function (d) {return d['year'];}).
  attr('data-month', function (d) {return d['month'] - 1;}).
  attr('data-temp', function (d) {return d['variance'];}).
  attr('x', function (d, i) {
    return (i - i % 12) / 12 * 4 + padding;
  }).attr('fill', function (d) {return colorPick(d['variance']);}).
  on('mouseover', function (d) {
    tip.transition().
    duration(200).
    style('opacity', 1);
    tip.style('top', d3.event.pageY - 140 + "px").
    style('left', d3.event.pageX - 80 + "px");
    tip.attr('data-year', d['year']);
    console.log(JSON.stringify(d));
    tip.attr('data-value', d['year']);
    d3.select('#tooltip-year').
    text(d['year'] + " - " + parseMonth(d['month']));
    d3.select('#tooltip-temp').
    text(d3.format('.2f')(d['variance'] + 8.66) + "\xBAC");
    d3.select('#tooltip-variance').
    text(d3.format('.2f')(d['variance']) + "\xBAC");
  }).
  on('mouseout', function (d) {
    tip.transition().
    duration(200).
    style('opacity', 0);
    tip.attr('data-year', null);
  });

  svg.append('g').
  attr('transform', "translate(" + padding + ", 0)").
  attr('id', 'y-axis').
  call(yAxis);

  svg.append('g').
  attr('transform', "translate(0, " + (h + padding) + ")").
  attr('id', 'x-axis').
  call(xAxis);

  var legend = svg.append('g').
  attr('id', 'legend');

  legend.selectAll('rect').
  data(legendData).
  enter().
  append('rect').
  attr('width', legDimension).
  attr('height', legDimension).
  attr('x', function (d, i) {return legDimension * i;}).
  attr('fill', function (d) {return colorPick(d);});

  legend.attr('transform', "translate(" + padding + ", " + (h + padding + 25) + ")");

  legend.append('g').call(legAxis).attr('transform', "translate(" + 0 + ", " + 25 + ")");

  legend.append('text').text("Variance from average temperature in \xBAC").attr('transform', "translate(" + -35 + ", " + 58 + ")").style('font-size', '14px');
}

function parseMonth(val) {
  switch (val) {
    case 1:
      return 'January';
      break;
    case 2:
      return 'February';
      break;
    case 3:
      return 'March';
      break;
    case 4:
      return 'April';
      break;
    case 5:
      return 'May';
      break;
    case 6:
      return 'June';
      break;
    case 7:
      return 'July';
      break;
    case 8:
      return 'August';
      break;
    case 9:
      return 'September';
      break;
    case 10:
      return 'October';
      break;
    case 11:
      return 'November';
      break;
    case 12:
      return 'December';
      break;}

}

function colorPick(val) {
  if (val >= 2) {
    return '#B32114';
  } else if (val >= 1.25) {
    return '#ECA72E';
  } else if (val >= 0) {
    return '#F3CF49';
  } else if (val >= -1.25) {
    return '#F9F6B1';
  } else if (val >= -2) {
    return '#D2DDF1';
  } else {
    return '#5A81BC';
  }
}

var req = new XMLHttpRequest();
req.open('GET', 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json', true);
req.send();
req.onload = function () {
  var serverJSON = JSON.parse(req.responseText);
  console.log(JSON.stringify(serverJSON));
  pageRender(serverJSON);
};