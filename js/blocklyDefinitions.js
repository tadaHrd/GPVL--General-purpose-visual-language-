function createToolbox() {
  const logic_if = {
    "kind": "category",
    "name": "If",
    "categorystyle": "logic_category",
    "contents": [
      {
        "kind":"block",
        "type":"controls_if"
      },
      {
        "kind":"block",
        "type":"controls_if",
        "extraState":{
          "hasElse":"true"
        }
      },
      {
        "kind":"block",
        "type":"controls_if",
        "extraState":{
          "hasElse":"true",
          "elseIfCount":1
        }
      }
    ]
  }
  const logic_boolean = {
    "kind": "category",
    "name": "Boolean",
    "categorystyle": "logic_category",
    "contents": [
      {
        "kind":"block",
        "type":"logic_compare"
      },
      {
        "kind":"block",
        "type":"logic_operation"
      },
      {
        "kind":"block",
        "type":"logic_negate"
      },
      {
        "kind":"block",
        "type":"logic_boolean"
      },
      {
        "kind":"block",
        "type":"logic_null"
      },
      {
        "kind":"block",
        "type":"logic_ternary"
      }
    ]
  };
  const logic = {
    "kind": "category",
    "name": "Logic",
    "categorystyle": "logic_category",
    "contents": [
      logic_if,
      logic_boolean
    ]
  }

  const loop = {
    "kind": "category",
    "name": "Loops",
    "categorystyle": "loop_category",
    "contents":  [
      {
        "kind":"block",
        "type":"controls_repeat_ext"
      },
      {
        "kind": "block",
        "type": "controls_whileUntil"
      },
      {
        "kind":"block",
        "type":"controls_for"
      },
      {
        "kind":"block",
        "type":"controls_forEach"
      },
      {
        "kind":"block",
        "type":"controls_flow_statements"
      }
    ]
  };

  const math = {
    "kind":"category",
    "name":"Math",
    "categorystyle":"math_category",
    "contents": [
      {
        "kind":"block",
        "type":"math_number"
      },
      {
        "kind":"block",
        "type":"math_arithmetic"
      },
      {
        "kind":"block",
        "type":"math_single"
      },
      {
        "kind":"block",
        "type":"math_trig"
      },
      {
        "kind":"block",
        "type":"math_constant"
      },
      {
        "kind":"block",
        "type":"math_round"
      },
      {
        "kind":"block",
        "type":"math_on_list",
        "extraState":"<mutation op=\"SUM\"></mutation>"
      },
      {
        "kind":"block",
        "type":"math_modulo"
      },
      {
        "kind":"block",
        "type":"math_constrain"
      },
      {
        "kind":"block",
        "type":"math_random_int"
      },
      {
        "kind":"block",
        "type":"math_random_float"
      },
      {
        "kind":"block",
        "type":"math_atan2"
      }
    ]
  };

  const lists = {
    "kind": "category",
    "name": "Lists",
    "categorystyle": "list_category",
    "contents": [
      {
        "kind": "block",
        "type": "lists_create_empty"
      },
      {
        "kind":"block",
        "type":"lists_create_with",
        "extraState":{
          "itemCount":3
        }
      },
      {
        "kind":"block",
        "type":"lists_repeat"
      },
      {
        "kind":"block",
        "type":"lists_length"
      },
      {
        "kind":"block",
        "type":"lists_isEmpty"
      },
      {
        "kind":"block",
        "type":"lists_indexOf"
      },
      {
        "kind":"block",
        "type":"lists_getIndex"
      },
      {
        "kind":"block",
        "type":"lists_setIndex"
      }
    ]
  };

  const strings ={
    "kind": "category",
    "name": "Strings",
    "colour": "180",
    "contents": [
      {
        "kind": "block",
        "type": "text"
      },
      {
        "kind": "block",
        "type": "text_multiline"
      },
      {
        "kind": "block",
        "type": "text_join"
      },
      {
        "kind": "block",
        "type": "text_append",
        "inputs": {
          "TEXT": {
            "shadow": {
              "type": "text"
            }
          }
        }
      },
      {
        "kind": "block",
        "type": "text_length"
      },
      {
        "kind": "block",
        "type": "text_isEmpty"
      }
    ]
  };

  const variables = {
    "kind": "category",
    "name": "Variables",
    "categorystyle": "variable_category",
    "custom": "VARIABLE"
  };

  const functions = {
    "kind": "category",
    "name": "Functions",
    "categorystyle": "procedure_category",
    "custom": "PROCEDURE"
  }

  const STD_Process = {
    "kind": "category",
    "name": "Process",
    "colour": 180,
    "contents": [
      {
        "kind": "block",
        "type": "main_function"
      },
      {
        "kind": "block",
        "type": "process_exit"
      }
    ]
  };
  const STD_IO = {
    "kind": "category",
    "name": "IO",
    "colour": 160,
    "contents": [
      {
        "kind": "block",
        "type": "text_print"
      },
      {
        "kind": "block",
        "type": "getline",
      }
    ]
  };
  const STD = {
    "kind": "category",
    "name": "STD",
    "contents": [
      STD_Process,
      STD_IO
    ]
  };

  const testing = {
    "kind": "category",
    "name": "Testing",
    "colour": "125",
    "contents": [

    ]
  };

  const special = {
    sep: { "kind": "sep" }
  };

  return {
    "kind": "categoryToolbox",
    "contents": [
      logic,
      loop,
      math,
      lists,
      strings,
      variables,
      functions,
      special.sep,
      STD,
      testing
    ]
  }
}

function defineJsonArrayBlocks() {
  const getline = {
    "type": "getline",
    "message0": "get line",
    "inputsInline": true,
    "output": "String",
    "colour": 160,
    "tooltip": "Get line from the standard input",
    "helpUrl": ""
  };
  const mainFunction = {
    "type": "main_function",
    "message0": "Main function %1 %2",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_statement",
        "name": "NAME"
      }
    ],
    "colour": 180,
    "tooltip": "Main function that is called on the start of the process",
    "helpUrl": ""
  };
  const processExit = {
    "type": "process_exit",
    "message0": "Exit process: %1 Message: %2 Exit code: %3",
    "args0": [
      {
        "type": "input_dummy"
      },
      {
        "type": "input_value",
        "name": "MESSAGE",
        "check": "String"
      },
      {
        "type": "input_value",
        "name": "EXIT_CODE",
        "check": "Number"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "colour": 180,
    "tooltip": "Exits the process with message and exit code (0 = success)",
    "helpUrl": ""
  };

  return [
    getline,
    mainFunction,
    processExit
  ]
}
