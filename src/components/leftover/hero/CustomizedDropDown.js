import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from "@material-ui/lab/Autocomplete";
import classNames from "classnames";

const useStyles = makeStyles(() => ({
	input: {
		fontSize: 18,
	},
}));

const CustomizedDropDown = (props) => {
	const classes = useStyles();
 
	const { name, label, className, value = null, ...otherProps } = props; 
	
	return (
		<Autocomplete
			value={value}	
			renderInput={(params) => {
				const { InputProps, ...other } = params;
				return (
					<TextField
						{...other}
						InputProps={{
							...InputProps,
							disableUnderline: true,
							classes: { input: classes.input },
						}}
						placeholder={label}
					/>
				);
			}}
			getOptionLabel={(option) => option.title || ''}
			className={classNames("w-full", className)}
			{...otherProps}
		/>
	);
};

export default CustomizedDropDown;
