import { app } from "../scripts/app.js";

const ext = {
	// Unique name for the extension
	name: "Example.LoggingExtension",
	async init(app) {

	},
	async setup(app) {
		app.canvasEl.addEventListener("click", (e)=> {
			var node = app.graph.getNodeOnPos( e.clientX, e.clientY, app.graph._nodes, 5 );
			console.log("clicked node", node.type);
		});

	},
};

app.registerExtension(ext);
