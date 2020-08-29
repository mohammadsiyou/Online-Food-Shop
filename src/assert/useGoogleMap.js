import {useRef} from 'react'

const useGoogleMap = () => {
	
	const loaded = useRef(false);
	
	if (typeof window !== "undefined" && !loaded.current) { 
		if (!document.querySelector("#google-maps")) {
			loadScript(
				"https://maps.googleapis.com/maps/api/js?key=AIzaSyBJlza72Zw8tAFzC1NTXvPlQcHmbIZR5G4&libraries=places",
				document.querySelector("head"),
				"google-maps"
			);
		}
		loaded.current = true;
	}
	
}

export default useGoogleMap;

const loadScript = (src, position, id) => {
	
	if (!position) 
		return;

	const script = document.createElement("script");
	script.setAttribute("async", "");
	script.setAttribute("id", id);
	script.src = src;
	position.appendChild(script);
}