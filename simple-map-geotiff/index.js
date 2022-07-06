const source = new ol.source.GeoTIFF({
    sources: [{
        url: 'https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/2020/S2A_36QWD_20200701_0_L2A/TCI.tif',
    }]
});
const layers = [
    // new ol.layer.Tile({
    //     source: new ol.source.OSM()
    // }),
    new ol.layer.WebGLTile({
        source
    })
];
new ol.Map({
    layers: layers,
    target: 'map',
    view: source.getView()
});