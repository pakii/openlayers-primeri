
    const map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.XYZ({
                    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/'
                        + 'World_Street_Map/MapServer/tile/{z}/{y}/{x}'
                })
            })
        ],
        view: new ol.View({
            center: [0, 0],
            zoom: 2
        })
    });



    // source: new ol.source.TileArcGISRest({
    //     url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
    // })
