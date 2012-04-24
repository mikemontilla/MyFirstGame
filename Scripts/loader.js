var jewel = {};
//wait until main document is loaded
window.addEventListener("load",function(){
		//Start dynamic loading
		Modernizr.load([
		{
			//These files are alway loaded
			load : [
				"Scripts/sizzle.js",
				"Scripts/dom.js",
				"Scripts/game.js"
			],
			//The next function is called when all files have finished loading
			// and executing
			complete : function(){
				console.log("All files loaded!");
			}
		}
	]);
},false);