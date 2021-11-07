Blockly.Blocks["machine_set_pin"] = {
	init: function() {
		this.jsonInit(
			{
				"type": "machine_set_pin",
				"message0": "set pin %1 %2",
				"args0": [
					{
						"type": "field_dropdown",
						"name": "GPIOs",
						"options": gpio
					},
					{
						"type": "field_dropdown",
						"name": "STATE",
						"options": [
							[
								"HIGH",
								"HIGH"
							],
							[
								"LOW",
								"LOW"
							]
						]
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

Blockly.Blocks["machine_wait_n"] = {
	init: function() {
		this.jsonInit(
			{
			  "type": "machine_wait_n",
			  "message0": "wait %1 %2",
			  "args0": [
			    {
			      "type": "input_value",
			      "name": "NUM",
			      "check": "Number"
			    },
				{
					"type": "field_dropdown",
					"name": "UNITS",
					"options": [
						[
							"seconds",
							"seconds"
						],
						[
							"milliseconds",
							"milliseconds"
						],
						[
							"microseconds",
							"microseconds"
						]
					]
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

Blockly.Blocks["python_python"] = {
	init: function() {
		this.jsonInit(
			{
			"type": "python_python",
			"message0": "Python %1",
			"args0": [
				{
					"type": "input_value",
					"name": "COMMANDS",
					"check": "String"
				}
			],
			"inputsInline": false,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 230,
			"tooltip": "",
			"helpUrl": ""
			}
		)
	}
}

