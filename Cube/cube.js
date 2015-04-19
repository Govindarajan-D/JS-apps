//Author: Govindarajan D
function cube(text){
	var cubeContainer = document.getElementById("cube-container");
	var initial = 20, offset = 0; //Alter these to change position
	var cubeString = text;
	var textArray = cubeString.toUpperCase().split('');
	var sideNames = ["one", "two", "three", "four", "five", "six"];

	for(i=0;i<textArray.length;i++){
		var cubeNode = document.createElement("div");
		cubeNode.id = "cube" + (i+1);
		if(i%2)
		cubeNode.className = "cubeodd";
		else
		cubeNode.className = "cubeeven";
		
		var posTop = parseInt(initial,10) + parseInt(offset,10);
		var cubeStyle = "position: absolute; left:40px; top:" + posTop + "px";
		offset += 100; 
		
		cubeContainer.appendChild(cubeNode);
		cubeNode.setAttribute("style",cubeStyle);
		
		for(j=0; j<6;j++){
			var sideNode = document.createElement("div");
			var cubeText = document.createTextNode(textArray[i]);
			sideNode.className ="side " + sideNames[j];
			cubeNode.appendChild(sideNode);
			sideNode.appendChild(cubeText);
		}
	}
}