const toolbox = createToolbox();

Blockly.defineBlocksWithJsonArray(defineJsonArrayBlocks());

const blocklyDiv = document.getElementById("blocklyDiv");

const attrs = getAttr();

function setConfig() {
  const attributes = {
    grid: attrs.grid === undefined ? {
      spacing: 30,
      length: 2,
      color: "#ccc",
      snap: true
    } : {},
    renderer: attrs.renderer !== undefined ? attrs.renderer === "default" ? "geras" : attrs.renderer : "zelos",
  };

  return {
    toolbox: toolbox,
    grid: attributes.grid,
    renderer: attributes.renderer
  };
}

const config = setConfig();

const workspace = Blockly.inject(blocklyDiv, config);


function setSize() {
	let size = document.getElementById("blocklySize").value;

	blocklyDiv.style.width = size + "px";
	blocklyDiv.style.height = size + "px";

	Blockly.svgResize(workspace);
}

function upload(stateToLoad) {
  Blockly.serialization.workspaces.load(stateToLoad, workspace)
}

const helloWorld = {"blocks":{"languageVersion":0,"blocks":[{"type":"main_function","id":"BVc!VRxb;Jk|+fcZS[s-","x":0,"y":0,"inputs":{"NAME":{"block":{"type":"text_print","id":".sc`=cfY?xA}sU06Vw~{","inputs":{"TEXT":{"block":{"type":"text","id":"%@s~8,@O-jU#7?I9o[+[","fields":{"TEXT":"Hello, world!"}}}},"next":{"block":{"type":"process_exit","id":"8Y.%3KWmw:l{y5+A8Lz@","inputs":{"MESSAGE":{"block":{"type":"text","id":"OofD=+?^uBY|P0ECpes-","fields":{"TEXT":"Success"}}},"EXIT_CODE":{"block":{"type":"math_number","id":"(0$GrI[E2Rsp?LmCu]j!","fields":{"NUM":0}}}}}}}}}}]}}

upload(helloWorld);

setSize();

document.getElementById("blocklySize").addEventListener("change", setSize);
