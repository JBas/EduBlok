Blockly.Blocks["comm_uart"] = {
	init: function() {
		this.jsonInit(
			{
			  "type": "comm_uart",
			  "message0": "UART %1 baudrate %2 bits %3 parity %4 stop %5 %6",
			  "args0": [
			    {
			      "type": "input_dummy"
			    },
			    {
			      "type": "input_value",
			      "name": "baudrate",
			      "check": "Number"
			    },
			    {
			      "type": "input_value",
			      "name": "bits",
			      "check": "Number"
			    },
			    {
			      "type": "input_value",
			      "name": "parity",
			      "check": "Number"
			    },
			    {
			      "type": "input_value",
			      "name": "stop",
			      "check": "Number"
			    },
			    {
			      "type": "input_statement",
			      "name": "NAME"
			    }
			  ],
			  "inputsInline": false,
			  "previousStatement": null,
			  "nextStatement": null,
			  "colour": 230,
			  "tooltip": "",
			  "helpUrl": ""
			}
		);
	}
};

Blockly.Blocks["comm_uart_read_n"] = {
	init: function() {
		this.jsonInit(
			{
			  "type": "comm_uart_read_n",
			  "message0": "read %1 bytes",
			  "args0": [
			    {
			      "type": "input_value",
			      "name": "NUM",
			      "check": "Number"
			    }
			  ],
			  "inputsInline": true,
			  "previousStatement": null,
			  "nextStatement": null,
			  "colour": 230,
			  "tooltip": "",
			  "helpUrl": ""
			}
		);
	}
};