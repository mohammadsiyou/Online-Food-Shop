import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import useScript from 'assert/useScript';

const useStyles = makeStyles(() => ({
	root: {
		width: "100%",
		height: "250px",
		padding: "12px",
		border: "1px solid #f2f2f2",
		background: "white",
	},
	map: {
		width: "100%",
		height: "100%",
		"& > .centerMarker": {
			position: "absolute",
			background: "url(/static/images/icons/black_pin.svg) no-repeat",
			top: "50%",
			left: "50%",
			zIndex: "1",
			marginLeft: "-25px",
			marginTop: "-50px",
			height: "50px",
			width: "50px",
			cursor: "pointer",
		},
		"& .gm-bundled-control > .gmnoprint >div": {
			height: "60px !important",
			width: "30px !important",
		},
		"& .gm-control-active": {
			height: "30px !important",
			width: "30px !important",
		},
	},
}));


const Map = ({ className, location }) => { 
	const classes = useStyles();
	const [loaded] = useScript(
		"https://maps.googleapis.com/maps/api/js?key=AIzaSyBJlza72Zw8tAFzC1NTXvPlQcHmbIZR5G4&libraries=places"
	);
	useEffect(() => {
		if (loaded && window.google) { 
			const latlng = new window.google.maps.LatLng(...location);
			const mapOptions = {
				minZoom: 4,
				maxZoom: 18,
				zoom: 15,
				center: latlng,
				gestureHandling: "greedy",
				disableDefaultUI: true,
				zoomControl: true,
				zoomControlOptions: {
					position: window.google.maps.ControlPosition.LEFT_TOP,
				},
			};
			const mapDiv = document.getElementById("map");
			new window.google.maps.Map(mapDiv, mapOptions);
			const markerDiv = document.createElement("div");
			markerDiv.classList.add("centerMarker");
			mapDiv.appendChild(markerDiv);
		}
	}, [loaded, location]);

	return (
		<div className={classNames(classes.root, className)}>
			<div className={classes.map} id="map"></div>
		</div>
	);
};

export default Map;
