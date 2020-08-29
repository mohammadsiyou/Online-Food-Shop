import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Hero from "components/leftover/hero/Hero";
import AddressMap from "components/mobile/address/AddressMap";
import { locationChange } from "store/location";

const defaultLocation = {
	lat: 34.33781482366286,
	lng: 47.088752098083496,
	description: "",
};

const MobileLeftoverHero = ({className}) => { 
	
	const dispatch = useDispatch();
	const location = useSelector(state => state.location.current);
	const address = location || defaultLocation;
	const [mapOpen, setMapOpen] = useState(false);
	
	const mapDialogOnChange = () => {
		setMapOpen(!mapOpen);
	};
	
	const selectAddress = (item) => {
		dispatch(locationChange(item));
		mapDialogOnChange();
	};

	return (
		<div>
			<Hero className={className} mapClick={mapDialogOnChange} />
			<AddressMap open={mapOpen} address={address} closeDialog={mapDialogOnChange} selectAddress={selectAddress} />	
		</div>
	);
};

export default MobileLeftoverHero;