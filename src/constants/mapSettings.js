import colorPalette from "@/constants/colorPalette";

const {
    COLOR_LANDSCAPE,
    COLOR_BORDERS,
    COLOR_WATER,
    COLOR_LINE,
    COLOR_POINT_FILL,
    COLOR_SELECTED_POINT
} = colorPalette;

const COLORS = {
    BORDERS: COLOR_BORDERS,
    LANDSCAPE: COLOR_LANDSCAPE,
    LINE: COLOR_LINE,
    POINT: COLOR_SELECTED_POINT,
    POINT_FILL: COLOR_POINT_FILL,
    WATER: COLOR_WATER
};

const mapSettings = {
    mapId: 'MAP_ID',
    clickableIcons: false,
    streetViewControl: false,
    panControlOptions: false,
    gestureHandling: "cooperative",
    backgroundColor: 'rgb(32, 33, 33)',
    mapTypeControl: false,
    zoomControlOptions: {
        style: "SMALL"
    },
    disableDefaultUI: true,
    zoom: 18,
    minZoom: 5,
    maxZoom: 20,
    mapTypeControlOptions: {
        mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"],
    },
};

const mapStyles = [
    {elementType: "geometry", stylers: [{color: "#ebe3cd"}]},
    {elementType: "labels.text.fill", stylers: [{color: "#523735"}]},
    {elementType: "labels.text.stroke", stylers: [{color: "#f5f1e6"}]},
    {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{color: "#c9b2a6"}],
    },
    {
        featureType: "administrative.land_parcel",
        elementType: "geometry.stroke",
        stylers: [{color: "#dcd2be"}],
    },
    {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{color: "#ae9e90"}],
    },
    {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [{color: "#dfd2ae"}],
    },
    {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{color: "#dfd2ae"}],
    },
    {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{color: "#93817c"}],
    },
    {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [{color: "#a5b076"}],
    },
    {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{color: "#447530"}],
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [{color: "#f5f1e6"}],
    },
    {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{color: "#fdfcf8"}],
    },
    {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{color: "#f8c967"}],
    },
    {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{color: "#e9bc62"}],
    },
    {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [{color: "#e98d58"}],
    },
    {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.stroke",
        stylers: [{color: "#db8555"}],
    },
    {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [{color: "#806b63"}],
    },
    {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{color: "#dfd2ae"}],
    },
    {
        featureType: "transit.line",
        elementType: "labels.text.fill",
        stylers: [{color: "#8f7d77"}],
    },
    {
        featureType: "transit.line",
        elementType: "labels.text.stroke",
        stylers: [{color: "#ebe3cd"}],
    },
    {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{color: "#dfd2ae"}],
    },
    {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [{color: "#b9d3c2"}],
    },
    {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{color: "#92998d"}],
    },
];

export {mapSettings, mapStyles};
