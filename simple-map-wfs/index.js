const extent = [-7764158.120614472, 6497671.793022064, -7545451.955295365, 6800851.93792694];

const vectorSource = new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: function (extent) {
        return (
            'https://ahocevar.com/geoserver/wfs?service=WFS&' +
            'version=1.1.0&request=GetFeature&typename=osm:water_areas&' +
            'outputFormat=application/json&srsname=EPSG:3857&' +
            'bbox=' +
            extent.join(',') +
            ',EPSG:3857'
        );
    },
    strategy: ol.loadingstrategy.bbox,
});

const vector = new ol.layer.Vector({
    title: 'Vodene povrsine',
    source: vectorSource,
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'blue',
            width: 2,
        }),
        fill: new ol.style.Fill({color: 'lightblue'})
    }),
});

const map = new ol.Map({
    layers: [
        new ol.layer.Tile({
            title: 'OSM',
            source: new ol.source.OSM(),
        }), vector
    ],
    target: 'map',
    view: new ol.View({
        center: [0, 0],
        zoom: 2,
    }),
});

map.getView().fit(extent);

const layerSwitcher = new ol.control.LayerSwitcher();
map.addControl(layerSwitcher);