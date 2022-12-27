import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
	'pk.eyJ1IjoiYWNhcnRoZXJ5IiwiYSI6ImNsYzEydWxobjN6eDQzdnBsemg2azBubnMifQ.C1bUTDuFxPIf6qNXKrK4lg';

if (!navigator.geolocation) {
	alert('No geolocation access');
	throw new Error('No geolocation access');
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<MapsApp />
	</React.StrictMode>
);
