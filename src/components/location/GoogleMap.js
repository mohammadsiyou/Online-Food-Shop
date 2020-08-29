import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import useScript from 'assert/useScript';
import "./style.css";

const mapService = {
	map: null,
};

const useStyles = makeStyles(() => ({
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
		"& .zoomWrapper": {
			marginLeft: "12px",
			marginRight: "12px",
			width: "24px",
			fontSize: "23px",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
		},
		"& .zoomButton": {
			textAlign: "center",
			marginBottom: "30px",
			color: "rgb(158, 158, 158)",
			borderColor: "transparent",
			boxShadow:
				"0 1px 2px 1px rgba(0,0,0,.15), 0 2px 5px -3px rgba(0,0,0,.15)",
			borderRadius: "3px",
			cursor: "pointer",
			backgroundColor: "rgb(255, 255, 255)",
			height: "28px",
			width: "28px",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},

		"& .getLocation": {
			marginLeft: "12px",
			marginRight: "12px",
			marginTop: "12px",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			padding: "4px",
			maxWidth: "90px",
			backgroundColor: "#fff",
			borderColor: "transparent",
			boxShadow: "0 1px 2px 1px rgba(0,0,0,.15),0 2px 5px -3px rgba(0,0,0,.15)",
			boxSizing: "border-box !important",
			borderWidth: "1px",
			borderStyle: "solid",
			borderRadius: "3px",
			backgroundClip: "border-box",
			color: "#000",
			verticalAlign: "middle",
			textDecoration: "none",
			fontFamily: "Arial,Helvetica,sans-serif",
			cursor: "pointer",
			transition:
				"background-color .15s ease-out,border-color .15s ease-out,opacity .15s ease-out",
			textAlign: "left",
			height: "28px",
			overflow: "hidden",
		},
		"& .getLocationIcon": {
			backgroundImage: "url(/static/images/map/get-location.svg)",
			width: "16px",
			height: "16px",
			border: "5px solid transparent",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
		},
	},
}));

const ZoomControl = (div, map) => {
	
	const controlDiv = div;

	controlDiv.classList.add("zoomWrapper");

	const zoomIn = document.createElement("div");
	zoomIn.classList.add("zoomButton");
	zoomIn.innerHTML = "<strong>+</strong>";
	controlDiv.appendChild(zoomIn);

	const controlUI = document.createElement("div");
	controlUI.value = map.getZoom();
	controlUI.min = map.minZoom;
	controlUI.max = map.maxZoom;
	controlDiv.appendChild(controlUI);

	const zoomOut = document.createElement("div");
	zoomOut.classList.add("zoomButton");
	zoomOut.innerHTML = "<strong>-</strong>";
	controlDiv.appendChild(zoomOut);

	controlUI.addEventListener("input", function () {
		map.setZoom(parseFloat(controlUI.value));
	});

	zoomIn.addEventListener("click", function () {
		map.setZoom(parseFloat(controlUI.value) + 1);
	});

	zoomOut.addEventListener("click", function () {
		map.setZoom(parseFloat(controlUI.value) - 1);
	});

	return controlUI;
};

const GetLocation = (div, map) => {
	const controlDiv = div;

	controlDiv.classList.add("getLocation");

	const icon = document.createElement("div");
	icon.classList.add("getLocationIcon");
	controlDiv.appendChild(icon);

	controlDiv.addEventListener("click", function () {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				try {
					var pos = {
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					};
					map.setCenter(pos);
				} catch (err) {}
			});
		}
	});
};

const GoogleMap = (props) => {
	
	const [loaded] = useScript(
		"https://maps.googleapis.com/maps/api/js?key=AIzaSyBJlza72Zw8tAFzC1NTXvPlQcHmbIZR5G4&libraries=places"
	);
	
	const { locationChange, lat, lng, className } = props;
	const classes = useStyles();
		
	React.useEffect(() => {
		if (!mapService.map && window.google) {
			const latlng = new window.google.maps.LatLng(lat, lng);
			const mapOptions = {
				minZoom: 4,
				maxZoom: 18,
				zoom: 15,
				center: latlng,
				gestureHandling: "greedy",
				disableDefaultUI: true,
			};
			const mapDiv = document.getElementById("map");
			mapService.map = new window.google.maps.Map(mapDiv, mapOptions);
	
			const markerDiv = document.createElement("div");
			markerDiv.classList.add("centerMarker");
			mapDiv.appendChild(markerDiv);
	
			const zoomDiv = document.createElement("div");
			const rangeInput = ZoomControl(zoomDiv, mapService.map);
			zoomDiv.index = 1;
			mapService.map.controls[
				window.google.maps.ControlPosition.LEFT_CENTER
			].push(zoomDiv);
	
			const getLocationDiv = document.createElement("div");
			GetLocation(getLocationDiv, mapService.map);
			mapService.map.controls[window.google.maps.ControlPosition.LEFT_TOP].push(
				getLocationDiv
			);
	
			const onZoom = () => {
				rangeInput.value = mapService.map.getZoom();
			};
			const onDrag = () => {
				const location = mapService.map.getCenter();
				const lat = location.lat();
				const lng = location.lng();
				const geocoder = new window.google.maps.Geocoder();
				const latlng = { lat: parseFloat(lat), lng: parseFloat(lng) };
				geocoder.geocode({ location: latlng }, function (results, status) {
					if (status === window.google.maps.GeocoderStatus.OK) {
						if (results.length) {
							const result = results[0];
							const lat = result.geometry.location.lat();
							const lng = result.geometry.location.lng();
							const description = result.formatted_address;
							locationChange({ lat, lng, description, inputChanged:false });
						}
					}
				});
			};
	
			const listenerHandle = window.google.maps.event.addListener(
				mapService.map,
				"dragend",
				onDrag
			);
			const zoomHandle = window.google.maps.event.addListener(
				mapService.map,
				"zoom_changed",
				onZoom
			);
			return () => {
				mapService.map = null;
				window.google.maps.event.removeListener(listenerHandle);
				window.google.maps.event.removeListener(zoomHandle);
			};
		}
	}, [loaded, locationChange, lat, lng]);

	return <div id="map" className={classNames(classes.map, className)}></div>;
};

export default React.memo(GoogleMap, (props, nextProps) => { 
	if((props.lat !== nextProps.lat || props.lng !== nextProps.lng) && nextProps.inputChanged)
		return false;
	return true;
});
