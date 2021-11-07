Blockly.Blocks["peri_lcd"] = {
	init: function() {
		this.jsonInit(
			{
			  "type": "peri_lcd",
			  "message0": "LCD %1 pin %2 baud %3",
			  "args0": [
			    {
			      "type": "input_dummy"
			    },
			    {
			      "type": "field_dropdown",
			      "name": "PIN_DROPDOWN",
			      "options": [
			        [
			          "option",
			          "OPTIONNAME"
			        ],
			        [
			          "option",
			          "OPTIONNAME"
			        ],
			        [
			          "option",
			          "OPTIONNAME"
			        ]
			      ]
			    },
			    {
			      "type": "field_dropdown",
			      "name": "BAUD_DROPDOWN",
			      "options": [
			        [
			          "2400",
			          "BAUD_2400"
			        ],
			        [
			          "9600",
			          "BAUD_9600"
			        ],
			        [
			          "19200",
			          "BAUD_19200"
			        ]
			      ]
			    }
			  ],
			  "inputsInline": true,
			  "output": null,
			  "colour": 230,
			  "tooltip": "",
			  "helpUrl": ""
			}
		);
	}
};