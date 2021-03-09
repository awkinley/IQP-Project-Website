---
layout: post
title:  "example tests"
date:   2020-08-01 10:06:30 -0400
categories: change
project_img: "/imgs/robotic_arm_placeholder.jpg"
project_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor metus, molestie ac quam vitae, vulputate congue felis. Etiam dictum neque ante, ac efficitur sapien commodo non. Quisque et venenatis risus, non interdum dui."
project_color: "#44679C"
---

# Markdown and other cool examples webpage

## Basics

# Example Heading
## Example subheading

# Images

![Image test](/imgs/boat.jpg)


# Equations

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis odio faucibus, sodales diam quis, lobortis metus. Nullam fermentum nulla sit amet ante lacinia molestie. Morbi venenatis blandit lectus, nec porttitor odio gravida a. Vivamus quis mattis quam. Phasellus malesuada facilisis est nec convallis. Integer ultrices massa faucibus, placerat diam id, porta ex. Donec felis risus, molestie vitae aliquet imperdiet, luctus id augue. Nullam tempor ut orci non luctus. Nullam accumsan cursus ullamcorper. Nunc convallis massa non tellus mollis aliquet. Aenean maximus nulla dolor, malesuada laoreet lacus maximus vitae. Aliquam erat volutpat. In ac interdum ligula. Fusce dignissim, purus sed laoreet consectetur, massa purus suscipit metus, vitae pretium magna orci non metus. Sed mollis urna vitae placerat tristique. Nunc laoreet orci a laoreet suscipit.

<!-- $$\tilde G = \mathbb{R}^2 \ltimes O(2)$$ -->

\\[ H(p,q) = -\int_X p(x) \; \log q(x) d\mu(x)\\]


# Code blocks

```markdown
![Image test](/imgs/boat.jpg)
```


# data graphs

<div id="tester" style="width:600px;height:250px;"></div>

<script type="text/javascript">
	TESTER = document.getElementById('tester');

	Plotly.plot( TESTER, [{
	    x: [1, 2, 3, 4, 5],
	    y: [1, 2, 4, 8, 16] }], { 
	    margin: { t: 0 } }, {showSendToCloud:true} );
</script>

# equation graphs 

<canvas id="myCanvas" width="578" height="300"></canvas>
<script>
  var myGraph = new Graph({
    canvasId: 'myCanvas',
    minX: -10,
    minY: -10,
    maxX: 10,
    maxY: 10,
    unitsPerTick: 1
  });

  myGraph.equations.push([(function(x) {
    return 5 * Math.sin(x);
  }), 'green', 3]);
  myGraph.equations.push([(function(x) {
    return x * x;
  }), 'blue', 3]);
  myGraph.equations.push([(function(x) {
    return 1 * x;
  }), 'red', 3]);
  myGraph.redraw();

</script>

# Embed youtube videos

<iframe width="560" height="315" src="https://www.youtube.com/embed/9LssTi4X8jY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
