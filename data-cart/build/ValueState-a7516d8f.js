import { D as DataType } from './Icons-85d4abff.js';

/**
 * Different states.
 */
const ValueStates = {
	None: "None",
	Success: "Success",
	Warning: "Warning",
	Error: "Error",
	Information: "Information",
};

class ValueState extends DataType {
	static isValid(value) {
		return !!ValueStates[value];
	}
}

ValueState.generateTypeAccessors(ValueStates);

export { ValueState as V };
