const ASSIGNED_PINS = new Set();
const IMPORTED_MODULES = new Set();

// Machine Blocks Code
Blockly.Python["machine_set_pin"] = function(block) {
	const gpio = block.getFieldValue('GPIOs');
	const pin = gpio.substring(4);
	const state = block.getFieldValue('STATE');
	
	const var_name = 'p' + pin;
	
	var _code;
	if (ASSIGNED_PINS.has('p' + pin)) {
		_code = var_name + '.init(mode=Pin.OUT, value=' + state + ')\n';
	} else {
		ASSIGNED_PINS.add('p' + pin);
		_code = var_name + ' = Pin(' + pin + ', Pin.OUT, value=' + state + ')\n';	
	}
	
	return _code;
};

Blockly.Python["machine_read_pin"] = function(block) {
	const gpio = block.getFieldValue('GPIOs');
	const pin = gpio.substring(4);
	
	const var_name = 'p' + pin;
	
	var _code;
	
	var _code;
	if (ASSIGNED_PINS.has(var_name)) {
		_code = var_name + '.value()\n';
	} else {
		ASSIGNED_PINS.add('p' + pin);
		_code = var_name + ' = Pin(' + pin + ', Pin.IN)\n';
		_code += var_name + '.value()\n';
	}
	 
	
	return [_code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['machine_wait_n'] = function(block) {
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  var units = block.getFieldValue('UNITS');
  
  IMPORTED_MODULES.add("import time");
  
  var code;
  
  switch (units) {
	  case "SECONDS":
		  code = "time.sleep(" + value + ")";
		  break;
	  case "MILLISECONDS":
		  code = "time.ms_sleep(" + value + ")";
		  break;
	  case "MICROSECONDS":
		  code = "time.us_sleep(" + value + ")";
		  break;
  }
  return code;
};






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