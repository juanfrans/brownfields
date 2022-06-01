var smallMedia = window.matchMedia("(max-width: 600px)").matches;
var initLoad = false;

var layerTypes = {
  fill: ["fill-opacity"],
  line: ["line-opacity"],
  circle: ["circle-opacity", "circle-stroke-opacity"],
  symbol: ["icon-opacity", "text-opacity"],
  raster: ["raster-opacity"],
  "fill-extrusion": ["fill-extrusion-opacity"],
  heatmap: ["heatmap-opacity"],
};

var alignments = {
  left: "lefty",
  center: "centered",
  right: "righty",
  full: "fully",
};

function getLayerPaintType(layer) {
  var layerType = map.getLayer(layer).type;
  return layerTypes[layerType];
}

function setLayerOpacity(layer) {
  var paintProps = getLayerPaintType(layer.layer);
  paintProps.forEach(function (prop) {
    var options = {};
    if (layer.duration) {
      var transitionProp = prop + "-transition";
      options = { duration: layer.duration };
      map.setPaintProperty(layer.layer, transitionProp, options);
    }
    map.setPaintProperty(layer.layer, prop, layer.opacity, options);
  });
}

var story = document.getElementById("story");
var features = document.createElement("div");
features.setAttribute("id", "features");

var header = document.createElement("div");

if (config.toptitle) {
  var toptitle = document.createElement("div");
  toptitle.innerHTML = config.toptitle;
  header.appendChild(toptitle);
}

if (config.title) {
  var titleText = document.createElement("div");
  titleText.innerHTML = config.title;
  header.appendChild(titleText);
}

if (config.subtitle) {
  var subtitleText = document.createElement("div");
  subtitleText.innerHTML = config.subtitle;
  header.appendChild(subtitleText);
}

if (config.byline) {
  var bylineText = document.createElement("div");
  // bylineText.classList.add("byline");
  bylineText.innerHTML = config.byline;
  header.appendChild(bylineText);
}

if (config.description) {
  var descriptionText = document.createElement("div");
  descriptionText.innerHTML = config.description;
  header.appendChild(descriptionText);
}

if (header.innerText.length > 0) {
  header.classList.add(config.theme);
  header.setAttribute("id", "header");
  story.appendChild(header);
}

config.chapters.forEach((record, idx) => {
  var container = document.createElement("div");
  var chapter = document.createElement("div");
  chapter.classList.add("br3");
  chapter.innerHTML = record.chapterDiv;

  if (record.title) {
    var title = document.createElement("h3");
    title.innerText = record.title;
    chapter.appendChild(title);
  }

  if (record.image) {
    var image = new Image();
    image.src = record.image;
    chapter.appendChild(image);
  }

  if (record.description) {
    var story = document.createElement("p");
    story.innerHTML = record.description;
    chapter.appendChild(story);
  }

  container.setAttribute("id", record.id);
  container.classList.add("step");
  if (idx === 0) {
    container.classList.add("active");
  }

  chapter.classList.add(config.theme);
  container.appendChild(chapter);
  container.classList.add(alignments[record.alignment] || "centered");
  if (record.hidden) {
    container.classList.add("hidden");
  }
  features.appendChild(container);
});

story.appendChild(features);

var footer = document.createElement("div");

if (config.footer) {
  var footerText = document.createElement("p");
  footerText.innerHTML = config.footer;
  footer.appendChild(footerText);
}

if (footer.innerText.length > 0) {
  footer.classList.add(config.theme);
  footer.setAttribute("id", "footer");
  story.appendChild(footer);
}

mapboxgl.accessToken = config.accessToken;

const transformRequest = (url) => {
  const hasQuery = url.indexOf("?") !== -1;
  const suffix = hasQuery
    ? "&pluginName=scrollytellingV2"
    : "?pluginName=scrollytellingV2";
  return {
    url: url + suffix,
  };
};

var startingZoom;
if (smallMedia) {
  startingZoom = config.chapters[0].location.zoomSmall;
} else {
  startingZoom = config.chapters[0].location.zoom;
}

var map = new mapboxgl.Map({
  container: "map",
  style: config.style,
  center: config.chapters[0].location.center,
  // zoom: config.chapters[0].location.zoom,
  zoom: startingZoom,
  bearing: config.chapters[0].location.bearing,
  pitch: config.chapters[0].location.pitch,
  interactive: false,
  transformRequest: transformRequest,
  projection: config.projection, // TODO: update this on config
});

if (config.showMarkers) {
  var marker = new mapboxgl.Marker({ color: config.markerColor });
  marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

// instantiate the scrollama
var scroller = scrollama();

map.on("load", function () {
  // var layers = map.getStyle().layers;
  // for (var i = 0; i < layers.length; i++) {
  //   console.log(layers[i].id);
  //   if (layers[i].type === "symbol") {
  //     firstSymbolId = layers[i].id;
  //     // break;
  //   }
  // }
  if (config.use3dTerrain) {
    map.addSource("mapbox-dem", {
      type: "raster-dem",
      url: "mapbox://mapbox.mapbox-terrain-dem-v1",
      tileSize: 512,
      maxzoom: 14,
    });
    // add the DEM source as a terrain layer with exaggerated height
    map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });

    // add a sky layer that will show when the map is highly pitched
    map.addLayer({
      id: "sky",
      type: "sky",
      paint: {
        "sky-type": "atmosphere",
        "sky-atmosphere-sun": [0.0, 0.0],
        "sky-atmosphere-sun-intensity": 15,
      },
    });
  }
  map.addSource("eHeatmap", {
    type: "image",
    url: "data/eHeatmap.png",
    coordinates: [
      [-74.257113635, 40.915485758],
      [-73.699378802, 40.915485758],
      [-73.699378802, 40.496109055],
      [-74.257113635, 40.496109055],
    ],
  });
  map.addLayer(
    {
      id: "nyc_land",
      type: "fill",
      source: {
        type: "geojson",
        data: "data/nyc20.geojson",
        attribution:
          'Designed and built by <a href="https://juanfrans.com/" target="_blank">Juan Francisco Saldarriaga</a> at <a href="https://brown.columbia.edu/" target="_blank">The Brown Institute for Media Innovation</a>',
      },
      paint: {
        "fill-color": "#f7f7f7",
      },
    },
    "waterway"
  );
  map.addLayer(
    {
      id: "upzonings-line",
      type: "line",
      source: {
        type: "geojson",
        data: "data/upzonings.geojson",
      },
      paint: {
        "line-color": "#1f2937",
        "line-width": 0.9,
        "line-opacity": 0,
      },
    },
    "waterway-label"
  );
  map.addLayer(
    {
      id: "cleanupSites",
      type: "circle",
      source: {
        type: "geojson",
        data: "data/oerCleanupSites.geojson",
      },
      paint: {
        "circle-color": "#3EB8A7",
        "circle-stroke-width": 0.3,
        "circle-radius": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10,
          2.5,
          14,
          4,
          18,
          12,
        ],
        "circle-opacity": 0,
        "circle-stroke-opacity": 0,
      },
    },
    "upzonings-line"
  );
  map.addLayer(
    {
      id: "eDesignations",
      type: "circle",
      source: {
        type: "geojson",
        data: "data/eDesignationsSPEED.geojson",
      },
      paint: {
        "circle-opacity": 0,
        "circle-stroke-opacity": 0,
        "circle-color": "#ff8500",
        "circle-stroke-color": "#BF6300",
        "circle-stroke-width": 0.3,
        "circle-radius": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10,
          2.5,
          14,
          4,
          18,
          12,
        ],
      },
    },
    "cleanupSites"
  );
  map.addLayer(
    {
      id: "stateCleanup",
      type: "circle",
      source: {
        type: "geojson",
        data: "data/stateCleanupSites.geojson",
      },
      paint: {
        "circle-opacity": 0,
        "circle-stroke-opacity": 0,
        "circle-color": "#4ade80",
        "circle-stroke-color": "#BF6300",
        "circle-stroke-width": 0.3,
        "circle-radius": [
          "interpolate",
          ["linear"],
          ["zoom"],
          10,
          2.5,
          14,
          4,
          18,
          12,
        ],
      },
    },
    "eDesignations"
  );
  map.addLayer(
    {
      id: "nyc",
      type: "line",
      source: {
        type: "geojson",
        data: "data/nyc20.geojson",
      },
      paint: {
        "line-color": "black",
        "line-width": 0.5,
      },
    },
    "stateCleanup"
  );

  map.addLayer(
    {
      id: "cleanupSitesBIN",
      type: "fill",
      source: {
        type: "geojson",
        data: "data/cleanupSitesBIN.geojson",
      },
      paint: {
        "fill-color": "#3EB8A7",
        "fill-opacity": 0,
        "fill-outline-color": "#2B8074",
      },
    },
    "road-simple"
  );

  map.addLayer(
    {
      id: "eHeatmap",
      type: "raster",
      source: "eHeatmap",
      paint: {
        "raster-fade-duration": 0,
        "raster-opacity": 0.5,
      },
    },
    "nyc"
  );
  map.addLayer(
    {
      id: "eDesignationsBBL",
      type: "fill",
      source: {
        type: "geojson",
        data: "data/eDesignationsBBL.geojson",
      },
      paint: {
        "fill-color": "#ff8500",
        "fill-opacity": 0,
        "fill-outline-color": "#BF6300",
      },
    },
    "cleanupSitesBIN"
  );
  map.addLayer(
    {
      id: "gentrificationIndex",
      type: "fill",
      source: {
        type: "geojson",
        data: "data/gentrificationIndex.geojson",
      },
      filter: [">", "scoreScaled", 0],
      paint: {
        "fill-color": [
          "step",
          ["get", "scoreScaled"],
          "#ffffff",
          0,
          "#ffe6e6",
          0.2,
          "#ffbfbf",
          0.5,
          "#ff8080",
          0.6,
          "#ff4040",
          0.7,
          "#ff0000",
        ],
        "fill-opacity": 0,
      },
    },
    "nyc"
  );

  map.addLayer(
    {
      id: "selectedNtas",
      type: "line",
      source: {
        type: "geojson",
        data: "data/selectedNTAs.geojson",
      },
      paint: {
        "line-opacity": 0,
        "line-color": "black",
        "line-width": 1.5,
      },
    },
    "waterway-label"
  );

  // setup the instance, pass callback functions
  scroller
    .setup({
      step: ".step",
      offset: 0.75,
      progress: true,
    })
    .onStepEnter((response) => {
      var chapter = config.chapters.find(
        (chap) => chap.id === response.element.id
      );
      response.element.classList.add("active");
      let thisZoom;
      if (smallMedia) {
        thisZoom = chapter.location.zoomSmall;
      } else {
        thisZoom = chapter.location.zoom;
      }
      thisLocation = {
        bearing: chapter.location.bearing,
        center: chapter.location.center,
        pitch: chapter.location.pitch,
        zoom: thisZoom,
      };
      map[chapter.mapAnimation || "flyTo"](thisLocation);
      if (config.showMarkers) {
        marker.setLngLat(chapter.location.center);
      }
      if (chapter.onChapterEnter.length > 0) {
        chapter.onChapterEnter.forEach(setLayerOpacity);
      }
      if (chapter.callback) {
        window[chapter.callback]();
      }
      if (chapter.rotateAnimation) {
        map.once("moveend", function () {
          const rotateNumber = map.getBearing();
          map.rotateTo(rotateNumber + 90, {
            duration: 24000,
            easing: function (t) {
              return t;
            },
          });
        });
      }
    })
    .onStepExit((response) => {
      var chapter = config.chapters.find(
        (chap) => chap.id === response.element.id
      );
      response.element.classList.remove("active");
      if (chapter.onChapterExit.length > 0) {
        chapter.onChapterExit.forEach(setLayerOpacity);
      }
    });
});

// setup resize event
window.addEventListener("resize", scroller.resize);
