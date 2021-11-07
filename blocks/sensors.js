var gpio = [
	["0", "GPIO0"],
	["1", "GPIO1"],
	["2", "GPIO2"],
	["3", "GPIO3"],
	["4", "GPIO4"],
	["5", "GPIO5"],
	["6", "GPIO6"],
	["7", "GPIO7"],
	["8", "GPIO8"],
	["9", "GPIO9"],
	["10", "GPIO10"],
	["11", "GPIO11"],
	["12", "GPIO12"],
	["13", "GPIO13"],
	["14", "GPIO14"],
	["15", "GPIO15"],
	["16", "GPIO16"],
	["17", "GPIO17"],
	["18", "GPIO18"],
	["19", "GPIO19"],
	["20", "GPIO20"],
	["21", "GPIO21"],
	["22", "GPIO22"],
	["26", "GPIO26"],
	["27", "GPIO27"],
	["28", "GPIO28"]
];

Blockly.Blocks["ping)))"] = {
	init: function() {
		this.jsonInit(
			{
				"type": "ping)))",
				"message0": "ping))) pin %1 in %2",
				"args0": [
					{
						"type": "field_dropdown",
						"name": "GPIOs",
						"options": gpio
					},
					{
						"type": "field_dropdown",
						"name": "UNITS",
						"options": [
							[
								"cm",
								"cm"
							],
							[
								"inches",
								"inches"
							]
						]
					},
				],
				"output": null,
				"colour": 120
			}	
		);
	}
};

Blockly.Blocks["pir"] = {
	init: function() {
		this.jsonInit(
			{
				"type": "pir",
				"message0": "pir GPIO %1",
				"args0": [
					{
						"type": "field_dropdown",
						"name": "GPIOs",
						"options": gpio
					}
				],
				"output": null,
				"colour": 120
			}	
		);
	}
};
