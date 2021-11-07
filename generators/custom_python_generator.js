Blockly.Python["ping)))"] = function(block) {
	const gpio = block.getFieldValue('GPIOs');
	const pin = gpio.substring(4);
	const unit = block.getFieldValue('UNITS');
	
	// imports.add("import machine");
	// imports.add("import time");
	
	// var _code = "pin = machine.Pin(25, Pin.OUT)\n";
	// _code += "while True:\n";
	// _code += "\tpin.off()\n";
	// _code += "\ttime.sleep(1)\n";
	// _code += "\tpin.on()\n";
	// _code += "\ttime.sleep(1)\n";
	
	var _code = 'print("Hello World!")';
	
	return [_code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["python_python"] = function(block) {
	var _code = Blockly.Python.valueToCode(block, "COMMANDS", Blockly.Python.ORDER_ATOMIC) || "print('Hello World!')";
	console.log(_code);

	return _code;
};