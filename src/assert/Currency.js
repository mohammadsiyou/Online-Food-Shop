
const Currency = ({price, value, decimal}) => { 
	let result = parseFloat(price) * parseFloat(value);
	if(decimal === "1" || decimal === "2")
		result = result.toFixed(parseFloat(decimal));
	return result
};

export default Currency;