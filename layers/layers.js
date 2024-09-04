var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_coordenadasdelimitadasporcomascopia_1 = new ol.format.GeoJSON();
var features_coordenadasdelimitadasporcomascopia_1 = format_coordenadasdelimitadasporcomascopia_1.readFeatures(json_coordenadasdelimitadasporcomascopia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coordenadasdelimitadasporcomascopia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coordenadasdelimitadasporcomascopia_1.addFeatures(features_coordenadasdelimitadasporcomascopia_1);
var lyr_coordenadasdelimitadasporcomascopia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_coordenadasdelimitadasporcomascopia_1, 
                style: style_coordenadasdelimitadasporcomascopia_1,
                popuplayertitle: "coordenadas delimitadas por comas - copia",
                interactive: true,
                title: '<img src="styles/legend/coordenadasdelimitadasporcomascopia_1.png" /> coordenadas delimitadas por comas - copia'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_coordenadasdelimitadasporcomascopia_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_coordenadasdelimitadasporcomascopia_1];
lyr_coordenadasdelimitadasporcomascopia_1.set('fieldAliases', {'PUNTOS': 'PUNTOS', 'NORTE': 'NORTE', 'ESTE': 'ESTE', 'CANTIDAD (LUMINARIAS)': 'CANTIDAD (LUMINARIAS)', 'TECNOLOGÍA': 'TECNOLOGÍA', 'POTENCIA': 'POTENCIA', });
lyr_coordenadasdelimitadasporcomascopia_1.set('fieldImages', {'PUNTOS': 'Range', 'NORTE': 'Range', 'ESTE': 'Range', 'CANTIDAD (LUMINARIAS)': 'Range', 'TECNOLOGÍA': 'TextEdit', 'POTENCIA': 'Range', });
lyr_coordenadasdelimitadasporcomascopia_1.set('fieldLabels', {'PUNTOS': 'inline label - visible with data', 'NORTE': 'inline label - visible with data', 'ESTE': 'inline label - visible with data', 'CANTIDAD (LUMINARIAS)': 'inline label - visible with data', 'TECNOLOGÍA': 'inline label - visible with data', 'POTENCIA': 'inline label - visible with data', });
lyr_coordenadasdelimitadasporcomascopia_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});