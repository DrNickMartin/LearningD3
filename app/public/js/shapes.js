var dataArray = [5, 11, 18];

var svg = d3.select("#chart").append("svg")
  .attr("height","100%")
  .attr("width","100%");

svg.selectAll("rect")
  .data(dataArray)
  .enter().append("rect")
    .attr("height",function(d,i){
      return d*15;
    })
    .attr("width","50")
    .attr("x",function(d,i) {
      return 60*i;
    })
    .attr("y",function(d,i){
      return 300-(d*15);
    })
    .attr("fill","pink");

var newX = 300;
svg.selectAll("circle.first")
  .data(dataArray)
  .enter().append("circle")
    .attr("class","first")
    .attr("cx",function(d,i){
      newX += (d*3)+(i*20)
      return newX+(i*20);
    })
    .attr("cy","60")
    .attr("r",function(d) {
      return d*3;
    })
    .attr("fill","orange");

var newX = 300;
svg.selectAll("ellipse")
  .data(dataArray)
  .enter().append("ellipse")
    .attr("class","second")
    .attr("cx",function(d,i){
      newX += (d*3)+(i*20)
      return newX+(i*20);
    })
    .attr("cy","150")
    .attr("ry","30")
    .attr("rx",function(d) {
      return d*3;
    })
    .attr("fill","red");

var newX = 300;
svg.selectAll("line")
  .data(dataArray)
  .enter().append("line")
    .attr("x1",newX)
    .attr("y1",function(d,i){
      return 200+(i*20);
    })
    .attr("x2",function(d) {
      return (d*15)+newX;
    })
    .attr("y2",function(d) {
      return d+250;
    });

svg.append("text")
  .attr("x","20")
  .attr("y","20")
  .attr("font-size","18")
  .text("Let's build some simple shapes using d3:");
