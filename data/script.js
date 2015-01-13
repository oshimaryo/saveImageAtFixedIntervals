self.port.emit("start");


// var content = $("#content");
// var content = document.getElementById("content");
//
// if(content !== null){
//   console.log("get content success.");
//   var bounds = content.getBoundingClientRect();
//   x = bounds.left;
//   y = bounds.top;
//   var width = bounds.width;
//   var height = bounds.height;
//
//   console.log("X: " +x);
//   console.log("Y: " +y);
//   console.log("W: " +width);
//   console.log("H: " +height);
//
//   var canvas = document.createElement("canvas");
//   canvas.setAttribute("width", width);
//   canvas.setAttribute("height", height);
//   // canvas.style.display = 'none';
//   canvas.id = "thisiscanvas"
//   document.body.appendChild(canvas);
//   var ctx = canvas.getContext("2d");
//
//   // console.log(window);
//
//   ctx.drawWindow(window, x, y, width, height, "rgb(255,255,255)");
//
//   canvas.saveImage()
//
//   // document.body.dataset.fig = ctx;
//
// }else {
//   console.log("get content failed.");
// }


// function getImage(img) {
//   // Create an empty canvas element
//   var canvas = document.createElement("canvas");
//   canvas.width = 1600;
//   canvas.height = 900;
//
//   // Copy the image contents to the canvas
//   var ctx = canvas.getContext("2d");
//   ctx.drawImage(img, 0, 0);
//
//   // Get the data-URL formatted image
//   //var dataURL = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
//   var dataURL = canvas.toDataURL("image/png");
//
//   return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
// }
//
// function getImages(outputDir){
//   var coded_images = new Array();
//   var images = document.getElementsByTagName('img');
//   for (var i=0; i<images.length; i++){
//     coded_images[i] = getImage(images[i]);
//   }
//   //send coded_images back to main.js
// }
