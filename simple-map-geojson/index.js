const data = { "type": "FeatureCollection", "name": "geom_2", "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } }, "features": [{ "type": "Feature", "properties": { "id": "1" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-97.767105063201754, 43.233641176195583], [-96.757474606372128, 43.327873716969293], [-96.714328005652888, 40.732490644716727], [-97.767105063201754, 40.725951331545545], [-97.767105063201754, 43.233641176195583]]]] } }, { "type": "Feature", "properties": { "id": "2" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-96.584888203495282, 44.286881685679894], [-91.12252855244266, 44.453432564143903], [-91.614399800641678, 43.75946299793798], [-96.1102755955839, 43.647172393669479], [-96.584888203495282, 44.286881685679894]]]] } }] };

var format_geom_2 = new ol.format.GeoJSON();

var dataFeatures = format_geom_2.readFeatures(
    data,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' }
);

var vectorSource = new ol.source.Vector({
    attributions: ' ',
});
vectorSource.addFeatures(dataFeatures);
var size = 0;
var placement = 'point';

var style_geom_2 = function (feature, resolution) {
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    var style = [new ol.style.Style({
        stroke: new ol.style.Stroke({ color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0 }), fill: new ol.style.Fill({ color: 'rgba(133,182,111,1.0)' }),
        text: undefined
    })];

    return style;
};

var lyr_geom_2 = new ol.layer.Vector({
    declutter: true,
    source: vectorSource,
    style: style_geom_2,
    interactive: true,
    title: '<img src="styles/legend/geom_2.png" /> geom'
});

const layers = [
    new ol.layer.Tile({
        source: new ol.source.OSM(),
    }),
    new ol.layer.Vector({
        source: new ol.source.Vector({
            format: new ol.format.GeoJSON(),
            url: './data.json',
        }),
    }),
];
new ol.Map({
    layers: layers,
    target: 'map',
    view: new ol.View({
        center: [0, 0],
        zoom: 2
    }),
});