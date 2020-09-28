const headerLevels = {
	"h1": 1,
	"h2": 2,
	"h3": 3,
	"h4": 4,
	"h5": 5,
	"h6": 6
}

window.addEventListener('load', ()=>{
	const content = document.getElementById("content");
	const topList = document.getElementById("section-names");
	const headers = content.querySelectorAll("h1, h2, h3, h4, h5, h6")
	console.log(headers);
	var index = 0;
	var currentLevel = 1;
	var currentList = topList;
	while(index < headers.length){
		var section = headers[index];
		var newLevel = headerLevels[section.localName];

		if(newLevel === currentLevel){
			//add li
			addSectionNameToList(currentList, section.innerText);
		}
		if(newLevel > currentLevel){
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
		if(newLevel < currentLevel){
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
}) 

function addSectionNameToList(list, sectionName){
	var node = document.createElement("li");
	var link = document.createElement("a");

	link.setAttribute("href", "#" + sectionName.replace(/ /g, "-").toLowerCase());
	var text = document.createTextNode(sectionName);
	console.log(text);
	link.appendChild(text);
	node.appendChild(link);
	list.appendChild(node);
}