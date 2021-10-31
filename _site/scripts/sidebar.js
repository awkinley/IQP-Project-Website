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
    let i;
    for (i = 0; i < children.length; i++) {
        let child = children[i];
        if (child.nodeName == "I") {
            return child;
        }
    }
}

function changeArrow(listElement) {
    let children = listElement.childNodes;
    let i;
    for (i = 0; i < children.length; i++) {
        let child = children[i];
        if (child.nodeName == "I") {
            let classes = child.classes;
            if (classes.length > 0) {
                child.classes = [];
            } else {
                child.classes.add("open");
            }
        }
    }
}


window.addEventListener('load', () => {
    const content = document.getElementById("content");
    const topList = document.getElementById("section-names");
    const headers = content.querySelectorAll("h1, h2, h3, h4, h5, h6")

    let index = 0;
    let currentLevel = 1;
    let currentList = topList;
    while (index < headers.length) {
        let section = headers[index];
        let newLevel = headerLevels[section.localName];

        if (newLevel === currentLevel) {
            //add li
            addSectionNameToList(currentList, section.innerText);
        }
        if (newLevel > currentLevel) {
            //add lower ul
            for (let i = 0; i < (newLevel - currentLevel); i++) {
                let lowerList = document.createElement("ul");
                currentList.appendChild(lowerList);
                currentList = lowerList;
            }

            addSectionNameToList(currentList, section.innerText);
            //change last header

            currentLevel = newLevel;
        }
        if (newLevel < currentLevel) {
            //move up a level
            for (let i = 0; i < (currentLevel - newLevel); i++) {
                currentList = currentList.parentElement;
            }

            addSectionNameToList(currentList, section.innerText);
            //change last header

            currentLevel = newLevel;
        }
        index += 1;
    }

    let coll = document.getElementsByClassName("sidebar-link");

    let i;
    // for every sidebar link
    for (i = 0; i < coll.length; i++) {
        let sidebarLink = coll[i];
        let nextElement = sidebarLink.nextElementSibling
            // if there is a next element, and it's an unordered list
            // then it's a siutation where we need to be able to close and open
        if (nextElement != null && nextElement.nodeName === "UL") {
            // put the arrow in if there are children
            let arrow = document.createElement("i");
            arrow.appendChild(document.createTextNode('\u200B'));
            sidebarLink.insertBefore(arrow, sidebarLink.firstChild);

            const expandChildren = () => {
                let content = nextElement;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }

                if (arrow != null) {
                    arrow.classList.toggle("open");
                }
            }
            arrow.addEventListener("click", expandChildren);
            sidebarLink.lastChild.addEventListener("click", expandChildren);
            nextElement.style.display = "none";
        }
    }
})


function addSectionNameToList(list, sectionName) {
    let node = document.createElement("li");
    node.classList.add("sidebar-link");
    let link = document.createElement("a");
    // let arrow = document.createElement("i");
    // arrow.appendChild(document.createTextNode('\u200B'));

    // replace spaces with hyphens
    let newSectionName = sectionName.replace(/ /g, "-");
    // remove periods
    newSectionName = newSectionName.replace(/\./g, '');
    // remove ampersands
    newSectionName = newSectionName.replace(/&/g, '');
    // remove colons
    newSectionName = newSectionName.replace(/:/g, '');
    link.setAttribute("href", "#" + newSectionName.toLowerCase());
    let text = document.createTextNode(sectionName);
    // link.appendChild(arrow);
    link.appendChild(text);
    node.appendChild(link);
    list.appendChild(node);
}


// function Graph(config) {
//   // user defined properties
//   this.canvas = document.getElementById(config.canvasId);
//   this.minX = config.minX;
//   this.minY = config.minY;
//   this.maxX = config.maxX;
//   this.maxY = config.maxY;
//   this.unitsPerTick = config.unitsPerTick;
//   this.equations = [];
//   // constants
//   this.axisColor = '#aaa';
//   this.font = '8pt Calibri';
//   this.tickSize = 20;

//   // relationships
//   this.context = this.canvas.getContext('2d');
//   this.rangeX = this.maxX - this.minX;
//   this.rangeY = this.maxY - this.minY;
//   this.unitX = this.canvas.width / this.rangeX;
//   this.unitY = this.canvas.height / this.rangeY;
//   this.centerY = Math.round(Math.abs(this.minY / this.rangeY) * this.canvas.height);
//   this.centerX = Math.round(Math.abs(this.minX / this.rangeX) * this.canvas.width);
//   this.iteration = (this.maxX - this.minX) / this.canvas.width;
//   this.scaleX = this.canvas.width / this.rangeX;
//   this.scaleY = this.canvas.height / this.rangeY;

//   // draw x and y axis
//   this.drawXAxis();
//   this.drawYAxis();
// }

// Graph.prototype.drawXAxis = function () {
//   let context = this.context;
//   context.save();
//   context.beginPath();
//   context.moveTo(0, this.centerY);
//   context.lineTo(this.canvas.width, this.centerY);
//   context.strokeStyle = this.axisColor;
//   context.lineWidth = 2;
//   context.stroke();

//   // draw tick marks
//   let xPosIncrement = this.unitsPerTick * this.unitX;
//   let xPos, unit;
//   context.font = this.font;
//   context.textAlign = 'center';
//   context.textBaseline = 'top';

//   // draw left tick marks
//   xPos = this.centerX - xPosIncrement;
//   unit = -1 * this.unitsPerTick;
//   while (xPos > 0) {
//     context.moveTo(xPos, this.centerY - this.tickSize / 2);
//     context.lineTo(xPos, this.centerY + this.tickSize / 2);
//     context.stroke();
//     context.fillText(unit, xPos, this.centerY + this.tickSize / 2 + 3);
//     unit -= this.unitsPerTick;
//     xPos = Math.round(xPos - xPosIncrement);
//   }

//   // draw right tick marks
//   xPos = this.centerX + xPosIncrement;
//   unit = this.unitsPerTick;
//   while (xPos < this.canvas.width) {
//     context.moveTo(xPos, this.centerY - this.tickSize / 2);
//     context.lineTo(xPos, this.centerY + this.tickSize / 2);
//     context.stroke();
//     context.fillText(unit, xPos, this.centerY + this.tickSize / 2 + 3);
//     unit += this.unitsPerTick;
//     xPos = Math.round(xPos + xPosIncrement);
//   }
//   context.restore();
// };

// Graph.prototype.drawYAxis = function () {
//   let context = this.context;
//   context.save();
//   context.beginPath();
//   context.moveTo(this.centerX, 0);
//   context.lineTo(this.centerX, this.canvas.height);
//   context.strokeStyle = this.axisColor;
//   context.lineWidth = 2;
//   context.stroke();

//   // draw tick marks
//   let yPosIncrement = this.unitsPerTick * this.unitY;
//   let yPos, unit;
//   context.font = this.font;
//   context.textAlign = 'right';
//   context.textBaseline = 'middle';

//   // draw top tick marks
//   yPos = this.centerY - yPosIncrement;
//   unit = this.unitsPerTick;
//   while (yPos > 0) {
//     context.moveTo(this.centerX - this.tickSize / 2, yPos);
//     context.lineTo(this.centerX + this.tickSize / 2, yPos);
//     context.stroke();
//     context.fillText(unit, this.centerX - this.tickSize / 2 - 3, yPos);
//     unit += this.unitsPerTick;
//     yPos = Math.round(yPos - yPosIncrement);
//   }

//   // draw bottom tick marks
//   yPos = this.centerY + yPosIncrement;
//   unit = -1 * this.unitsPerTick;
//   while (yPos < this.canvas.height) {
//     context.moveTo(this.centerX - this.tickSize / 2, yPos);
//     context.lineTo(this.centerX + this.tickSize / 2, yPos);
//     context.stroke();
//     context.fillText(unit, this.centerX - this.tickSize / 2 - 3, yPos);
//     unit -= this.unitsPerTick;
//     yPos = Math.round(yPos + yPosIncrement);
//   }
//   context.restore();
// };

// Graph.prototype.drawEquation = function (equation, color, thickness) {
//   let context = this.context;
//   context.save();
//   context.save();
//   this.transformContext();

//   context.beginPath();
//   context.moveTo(this.minX, equation(this.minX));

//   for (let x = this.minX + this.iteration; x <= this.maxX; x += this.iteration) {
//     context.lineTo(x, equation(x));
//   }

//   context.restore();
//   context.lineJoin = 'round';
//   context.lineWidth = thickness;
//   context.strokeStyle = color;
//   context.stroke();
//   context.restore();
// };

// Graph.prototype.transformContext = function () {
//   let context = this.context;

//   // move context to center of canvas
//   this.context.translate(this.centerX, this.centerY);

//   /*
//    * stretch grid to fit the canvas window, and
//    * invert the y scale so that that increments
//    * as you move upwards
//    */
//   context.scale(this.scaleX, -this.scaleY);
// };


// Graph.prototype.redraw = function () {
//   let context = this.context;
//   context.clearRect(0, 0, this.canvas.width, this.canvas.height);

//   // draw x and y axis
//   this.drawXAxis();
//   this.drawYAxis();

//   for (let i = 0; i < this.equations.length; i++) {
//     let item = this.equations[i];
//     this.drawEquation(item[0], item[1], item[2]);
//   }
// };