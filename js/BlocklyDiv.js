const toolbox = {
	"kind": "categoryToolbox",
	"contents": [
	  {
      "kind": "category",
      "name": "Control",
      "colour": "116",
      "contents": [
        {
          "kind": "block",
          "type": "controls_if"
        },
        {
          "kind": "block",
          "type": "controls_for"
        },
        {
          "kind": "block",
          "type": "controls_whileUntil"
        },
		  ]
	  },
	  {
      "kind": "category",
      "name": "Math",
      "colour": "355",
      "contents": [
        {
          "kind": "block",
          "type": "math_number",
        },
        {
          "kind": "block",
          "type": "math_arithmetic"
        },
        {
          "kind": "block",
          "type": "math_single",
        }
      ]
	  },
	  {
      "kind": "category",
      "name": "Logic",
      "colour": "230",
      "contents": [
        {
          "kind": "block",
          "type": "logic_compare"
        },
        {
          "kind": "block",
          "type": "logic_operation"
        },
        {
          "kind": "block",
          "type": "logic_boolean"
        }
		  ]
	  },
    {
      "kind": "category",
      "name": "Strings",
      "colour": "180",
      "contents": [
        {
          "kind": "block",
          "type": "text"
        }
      ]
    },
	  {
      "kind": "category",
      "name": "Variables",
      "colour": "52",
      "custom": "VARIABLE",
	  },
    {
      "kind": "category",
      "name": "Testing",
      "colour": "125",
      "contents": [

      ]
    }
	]
}

Blockly.defineBlocksWithJsonArray([

]);

const blocklyDiv = document.getElementById("blocklyDiv");

const attrs = getAttr();

const attributes = {
  grid: attrs.grid === undefined ? {
		spacing: 30,
		length: 2,
		color: "#ccc",
		snap: true
	} : {},
	renderer: attrs.renderer !== undefined ? attrs.renderer === "default" ? "geras" : attrs.renderer : "zelos",
};

const config = {
	toolbox: toolbox,
  grid: attributes.grid,
	renderer: attributes.renderer
};

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

setSize();

document.getElementById("blocklySize").addEventListener("change", setSize);
