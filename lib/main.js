var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
var {Cc, Ci, Cu} = require("chrome");
var mediator = Cc['@mozilla.org/appshell/window-mediator;1'].getService(Ci.nsIWindowMediator);
var timer = require('sdk/timers');
var tabs = require('sdk/tabs');
var workers = [];

var count = 0;

var getImage = function(){
  console.log("getImage is not implemetnd yet.");
};

var pagemod = pageMod.PageMod({
  include: "*",
  contentScriptWhen: "end",
  contentScriptFile: [
    data.url("jquery-2.0.3.min.js"),
    data.url("script.js")
  ],
  onAttach: function(worker){
    // workers.push(worker);
    worker.port.on("start", function(){
      saveImage();
    });
  }
})

var saveImage = function(){
  console.log("count:: " + count);
  var window = mediator.getMostRecentWindow("navigator:browser").gBrowser.contentWindow;
  var document = window.document;
  var content = document.getElementById("content");
  var bounds = content.getBoundingClientRect();
  var x = bounds.left;
  var y = bounds.top;
  var width = bounds.width;
  var height = bounds.height;

  console.log("X: " +x);
  console.log("Y: " +y);
  console.log("W: " +width);
  console.log("H: " +height);

  var canvas = document.createElement("canvas");
  canvas.setAttribute("width", width);
  canvas.setAttribute("height", height);
  // canvas.style.display = 'none';
  canvas.id = "thisiscanvas"
  document.body.appendChild(canvas);
  var ctx = canvas.getContext("2d");
  ctx.drawWindow(window, x, y, width, height, "rgb(255,255,255)");

  // ctx.saveImage();
  var dataURL = canvas.toDataURL("image/png");
  // var dataURL = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  // console.log(dataURL);
  // saveImage(dataURL);

  tabs.open({
    url: dataURL,
    inBackground: true
  });

  if(count < 5){
    var duration = 33;
    timer.setTimeout(saveImage, duration);
  }
  count++;
}
