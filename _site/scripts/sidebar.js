const headerLevels = {
  "h1": 1,
  "h2": 2,
  "h3": 3,
  "h4": 4,
  "h5": 5,
  "h6": 6
}

function getArrow(listElement) {
  let children = listElement.childNodes[0].childNodes;
  console.log("children:");
  console.log(children);
  var i;
  for (i = 0; i < children.length; i++) {
    let child = children[i];
    if (child.nodeName == "I") {
      return child;
    }
  }
}

function changeArrow(listElement) {
  let children = listElement.childNodes;
  var i;
  for (i = 0; i < children.length; i++) {
    let child = children[i];
    if (child.nodeName == "I") {
      let classes = child.classes;
      if (classes.length > 0) {
        child.classes = [];
      }
      else {
        child.classes.add("open");
      }
    }
  }
}


window.addEventListener('load', () => {
  const content = document.getElementById("content");
  const topList = document.getElementById("section-names");
  const headers = content.querySelectorAll("h1, h2, h3, h4, h5, h6")

  var index = 0;
  var currentLevel = 1;
  var currentList = topList;
  while (index < headers.length) {
    var section = headers[index];
    var newLevel = headerLevels[section.localName];

    if (newLevel === currentLevel) {
      //add li
      addSectionNameToList(currentList, section.innerText);
    }
    if (newLevel > currentLevel) {
      //add lower ul
      for (var i = 0; i < (newLevel - currentLevel); i++) {
        var lowerList = document.createElement("ul");
        currentList.appendChild(lowerList);
        currentList = lowerList;
      }

      addSectionNameToList(currentList, section.innerText);
      //change last header

      currentLevel = newLevel;
    }
    if (newLevel < currentLevel) {
      //move up a level
      for (var i = 0; i < (currentLevel - newLevel); i++) {
        currentList = currentList.parentElement;
      }

      addSectionNameToList(currentList, section.innerText);
      //change last header

      currentLevel = newLevel;
    }
    index += 1;
  }

  var coll = document.getElementsByClassName("sidebar-link");

  var i;
  // for every sidebar link
  for (i = 0; i < coll.length; i++) {
    // get the next element in the sidebar
    let nextElement = coll[i].nextElementSibling
    // if there is a next element, and it's an unordered list
    // then it's a siutation where we need to be able to close and open
    if (nextElement != null && nextElement.nodeName === "UL") {
      coll[i].addEventListener("click", function () {
        console.log("sidebar link clicked");
        var content = coll[i].nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }

      });
      console.log("coll[i] is ");
      console.log(coll[i]);
      let arrow = getArrow(coll[i])
      console.log("arrow is ");
      console.log(arrow);
      if (arrow != null) {
        arrow.addEventListener("click", function () {
          console.log("arrow clicked");
          this.classList.toggle("open");
        });
      }

    }

  }
})


function addSectionNameToList(list, sectionName) {
  var node = document.createElement("li");
  node.classList.add("sidebar-link")
  var link = document.createElement("a");
  var arrow = document.createElement("i");
  arrow.appendChild(document.createTextNode('\u200B'));
  link.setAttribute("href", "#" + sectionName.replace(/ /g, "-").toLowerCase());
  var text = document.createTextNode(sectionName);
  link.appendChild(arrow);
  link.appendChild(text);
  node.appendChild(link);
  list.appendChild(node);
}


function Graph(config) {
  // user defined properties
  this.canvas = document.getElementById(config.canvasId);
  this.minX = config.minX;
  this.minY = config.minY;
  this.maxX = config.maxX;
  this.maxY = config.maxY;
  this.unitsPerTick = config.unitsPerTick;
  this.equations = [];
  // constants
  this.axisColor = '#aaa';
  this.font = '8pt Calibri';
  this.tickSize = 20;

  // relationships
  this.context = this.canvas.getContext('2d');
  this.rangeX = this.maxX - this.minX;
  this.rangeY = this.maxY - this.minY;
  this.unitX = this.canvas.width / this.rangeX;
  this.unitY = this.canvas.height / this.rangeY;
  this.centerY = Math.round(Math.abs(this.minY / this.rangeY) * this.canvas.height);
  this.centerX = Math.round(Math.abs(this.minX / this.rangeX) * this.canvas.width);
  this.iteration = (this.maxX - this.minX) / this.canvas.width;
  this.scaleX = this.canvas.width / this.rangeX;
  this.scaleY = this.canvas.height / this.rangeY;

  // draw x and y axis
  this.drawXAxis();
  this.drawYAxis();
}

Graph.prototype.drawXAxis = function () {
  var context = this.context;
  context.save();
  context.beginPath();
  context.moveTo(0, this.centerY);
  context.lineTo(this.canvas.width, this.centerY);
  context.strokeStyle = this.axisColor;
  context.lineWidth = 2;
  context.stroke();

  // draw tick marks
  var xPosIncrement = this.unitsPerTick * this.unitX;
  var xPos, unit;
  context.font = this.font;
  context.textAlign = 'center';
  context.textBaseline = 'top';

  // draw left tick marks
  xPos = this.centerX - xPosIncrement;
  unit = -1 * this.unitsPerTick;
  while (xPos > 0) {
    context.moveTo(xPos, this.centerY - this.tickSize / 2);
    context.lineTo(xPos, this.centerY + this.tickSize / 2);
    context.stroke();
    context.fillText(unit, xPos, this.centerY + this.tickSize / 2 + 3);
    unit -= this.unitsPerTick;
    xPos = Math.round(xPos - xPosIncrement);
  }

  // draw right tick marks
  xPos = this.centerX + xPosIncrement;
  unit = this.unitsPerTick;
  while (xPos < this.canvas.width) {
    context.moveTo(xPos, this.centerY - this.tickSize / 2);
    context.lineTo(xPos, this.centerY + this.tickSize / 2);
    context.stroke();
    context.fillText(unit, xPos, this.centerY + this.tickSize / 2 + 3);
    unit += this.unitsPerTick;
    xPos = Math.round(xPos + xPosIncrement);
  }
  context.restore();
};

Graph.prototype.drawYAxis = function () {
  var context = this.context;
  context.save();
  context.beginPath();
  context.moveTo(this.centerX, 0);
  context.lineTo(this.centerX, this.canvas.height);
  context.strokeStyle = this.axisColor;
  context.lineWidth = 2;
  context.stroke();

  // draw tick marks
  var yPosIncrement = this.unitsPerTick * this.unitY;
  var yPos, unit;
  context.font = this.font;
  context.textAlign = 'right';
  context.textBaseline = 'middle';

  // draw top tick marks
  yPos = this.centerY - yPosIncrement;
  unit = this.unitsPerTick;
  while (yPos > 0) {
    context.moveTo(this.centerX - this.tickSize / 2, yPos);
    context.lineTo(this.centerX + this.tickSize / 2, yPos);
    context.stroke();
    context.fillText(unit, this.centerX - this.tickSize / 2 - 3, yPos);
    unit += this.unitsPerTick;
    yPos = Math.round(yPos - yPosIncrement);
  }

  // draw bottom tick marks
  yPos = this.centerY + yPosIncrement;
  unit = -1 * this.unitsPerTick;
  while (yPos < this.canvas.height) {
    context.moveTo(this.centerX - this.tickSize / 2, yPos);
    context.lineTo(this.centerX + this.tickSize / 2, yPos);
    context.stroke();
    context.fillText(unit, this.centerX - this.tickSize / 2 - 3, yPos);
    unit -= this.unitsPerTick;
    yPos = Math.round(yPos + yPosIncrement);
  }
  context.restore();
};

Graph.prototype.drawEquation = function (equation, color, thickness) {
  var context = this.context;
  context.save();
  context.save();
  this.transformContext();

  context.beginPath();
  context.moveTo(this.minX, equation(this.minX));

  for (var x = this.minX + this.iteration; x <= this.maxX; x += this.iteration) {
    context.lineTo(x, equation(x));
  }

  context.restore();
  context.lineJoin = 'round';
  context.lineWidth = thickness;
  context.strokeStyle = color;
  context.stroke();
  context.restore();
};

Graph.prototype.transformContext = function () {
  var context = this.context;

  // move context to center of canvas
  this.context.translate(this.centerX, this.centerY);

  /*
   * stretch grid to fit the canvas window, and
   * invert the y scale so that that increments
   * as you move upwards
   */
  context.scale(this.scaleX, -this.scaleY);
};


Graph.prototype.redraw = function () {
  var context = this.context;
  context.clearRect(0, 0, this.canvas.width, this.canvas.height);

  // draw x and y axis
  this.drawXAxis();
  this.drawYAxis();

  for (var i = 0; i < this.equations.length; i++) {
    var item = this.equations[i];
    this.drawEquation(item[0], item[1], item[2]);
  }
};
