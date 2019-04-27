"use strict";

var db = connect("localhost:27017/nosql_workshop");

var geoSpatialDocs = [
    {"name":"031 Zulauf Neck","latitude":"-88.4867","longitude":"87.3613"},{"name":"9290 Maximo Pass","latitude":"-83.9410","longitude":"160.9217"},{"name":"534 Murphy Lights","latitude":"37.8776","longitude":"103.2619"},{"name":"60387 Upton Rue","latitude":"-77.4681","longitude":"171.0499"},{"name":"826 Wehner Alley","latitude":"-44.5562","longitude":"140.8795"},{"name":"349 Jared Village","latitude":"-86.1572","longitude":"120.1370"},{"name":"447 Mauricio Greens","latitude":"-87.2201","longitude":"-156.4554"},{"name":"8485 Miller Fords","latitude":"55.3138","longitude":"-88.7051"},{"name":"27484 Christian Tunnel","latitude":"77.5391","longitude":"73.5222"},{"name":"92013 Lexie Radial","latitude":"-84.9371","longitude":"-73.1877"},{"name":"5318 McDermott Trail","latitude":"-1.2397","longitude":"-52.7920"},{"name":"567 Mueller Lane","latitude":"-40.1849","longitude":"133.6982"},{"name":"7042 Crona Valleys","latitude":"-65.8247","longitude":"25.8130"},{"name":"2725 Dena Lodge","latitude":"4.4355","longitude":"132.9831"},{"name":"38520 Lebsack Unions","latitude":"59.7065","longitude":"-4.4997"},{"name":"566 Elenor Track","latitude":"47.4686","longitude":"-84.3522"},{"name":"22127 Ebert Plains","latitude":"-48.0061","longitude":"170.6801"},{"name":"08782 Kitty Plains","latitude":"-85.2413","longitude":"-145.7381"},{"name":"3979 Friesen Manor","latitude":"58.2881","longitude":"-37.2041"},{"name":"344 Zoe Loaf","latitude":"-82.4788","longitude":"-55.3106"},{"name":"95337 Miller Shores","latitude":"-17.3016","longitude":"-27.5118"},{"name":"2701 Windler Glen","latitude":"-42.9075","longitude":"78.2162"},{"name":"39583 Kristian Highway","latitude":"8.9691","longitude":"151.0544"},{"name":"9928 Eda Prairie","latitude":"55.0779","longitude":"95.3633"},{"name":"8744 Hahn Loop","latitude":"-78.5925","longitude":"114.4516"},{"name":"682 Mayert Ramp","latitude":"88.4275","longitude":"-159.5975"},{"name":"0772 Murazik Rapid","latitude":"38.5319","longitude":"-15.8934"},{"name":"769 Roob Forges","latitude":"-32.5472","longitude":"-160.8381"},{"name":"7140 Yundt Island","latitude":"5.5586","longitude":"-52.8273"},{"name":"7659 Vallie Walk","latitude":"-20.3355","longitude":"-101.8170"},{"name":"54025 Johnston Row","latitude":"-19.9614","longitude":"22.7457"},{"name":"08610 Elena Manor","latitude":"-79.6023","longitude":"40.0032"},{"name":"14432 Chadd Ramp","latitude":"-53.3556","longitude":"168.1934"},{"name":"312 Ignatius Greens","latitude":"-89.4139","longitude":"-158.9553"},{"name":"14699 Reinger Brooks","latitude":"-43.4376","longitude":"6.0088"},{"name":"5259 Joany Throughway","latitude":"-13.7296","longitude":"160.8490"},{"name":"110 Runolfsson Wall","latitude":"30.3541","longitude":"-32.6384"},{"name":"8399 Hyatt Lights","latitude":"24.9472","longitude":"-30.1461"},{"name":"683 Koelpin Isle","latitude":"-80.5493","longitude":"168.8052"},{"name":"2124 Karelle Glen","latitude":"48.8839","longitude":"-143.3970"},{"name":"5725 Randy Ridges","latitude":"75.0485","longitude":"-32.4031"},{"name":"855 Erik Forks","latitude":"86.4169","longitude":"-13.8683"},{"name":"580 Christina Harbors","latitude":"12.1546","longitude":"23.8737"},{"name":"99139 Edythe Ridges","latitude":"-72.2960","longitude":"12.2921"},{"name":"17871 Aida Estate","latitude":"-68.4653","longitude":"-141.7999"},{"name":"497 Katlynn Centers","latitude":"65.0758","longitude":"76.2471"},{"name":"6574 Quinton Drive","latitude":"-27.9988","longitude":"96.7793"},{"name":"077 Doris Ramp","latitude":"61.4502","longitude":"119.4102"},{"name":"1550 Senger Pines","latitude":"47.5720","longitude":"-84.5918"},{"name":"48261 Howe Prairie","latitude":"77.1750","longitude":"126.1526"}
];

for (var i = 0; i < 50; i++) {
    db.geospatial.insertOne({
        _id: new ObjectId(),
        name: geoSpatialDocs[i].name,
        latitude: geoSpatialDocs[i].latitude,
        longitude: geoSpatialDocs[i].longitude
    });
}

db.geospatial.createIndex({ location: "2dsphere" });
