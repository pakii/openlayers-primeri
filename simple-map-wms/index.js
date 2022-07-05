
const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
        new ol.layer.Tile({
            title: 'DEM',
            source: new ol.source.TileWMS({
                url: 'http://osgl.grf.bg.ac.rs/geoserver/osgl_2/wms',
                params: { LAYERS: 'osgl_2:dem25', VERSION: '1.1.1' }
            })
        })
    ],
    view: new ol.View({
        center: [2279411, 5591015],
        zoom: 7
    })
});
