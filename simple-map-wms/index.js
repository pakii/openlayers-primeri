
    const layers = [
        new ol.layer.Tile({
            title: 'OSM',
            source: new ol.source.OSM(),
        }),

        new ol.layer.Tile({
            title: 'SAD drzave',
            extent: [-13884991, 2870341, -7455066, 6338219],
            source: new ol.source.TileWMS({
                url: 'https://ahocevar.com/geoserver/wms',
                params: { 'LAYERS': 'topp:states', 'TILED': true },
                serverType: 'geoserver'
            }),
        }),

    ];

    const map = new ol.Map({
        layers: layers,
        target: 'map',
        view: new ol.View({
            center: [-10997148, 4569099],
            zoom: 4,
        }),
    });

const layerSwitcher = new ol.control.LayerSwitcher();
map.addControl(layerSwitcher);