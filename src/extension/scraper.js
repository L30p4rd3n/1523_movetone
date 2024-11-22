/*console.log("reloaded");

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const maxsize = 30;
const self_id = "8c1dd7281fdbb8d0f0369dd55a490401f3fde697@temporary-addon"; // changes upon reinstalling
//const batchsize = 5;
//.


a = [];
b = new Set();
counter = 0;
c1 = 0;

function logURL(requestDetails) {
  if(c1 >= maxsize){ 
    a = [];
    b = [];
}
else{ 
  if((requestDetails.url).startsWith("https://sun1")){
    var c = requestDetails.url.split("&");
    var d = c[c.length-1].slice(3, -1).split("x")
    d[0], d[1] = parseFloat(d[0]), parseFloat(d[1]); // WHAT
    if (d[0] > 360 && d[1] > 360){  
      console.log(c1);
      console.log(requestDetails.url);
          //a.push(requestDetails.url);
          b.add(requestDetails.url);
          a = Array.from(b); // picture fails to load, second request gets sent to same link, and the set is the only way around  
          //console.log(a);
          //console.log(b);
          c1 = a.length; // bro high af
        }
    }
  }
}  

function download() {  
  for(var i = 0; i < maxsize; i++){
    //console.log(i, c1);
    let img = new Image();
    var t = a[i];
    //console.log(c1, a.length - 1);
    img.src = t;
    //console.log(img.height, img.width);
    img.remove();
    let lnk = document.createElement("a");
    lnk.href = img.src;
    lnk.download = "img" + i;
    lnk.click();
    lnk.remove();
    sleep(50); 
    return 0;
  }c1+=1;
  //counter += 1; // == b[b.length - 1] ???
  }
}

f = false;

while(f == false){
  if(c1 >= maxsize){
    f = true;
    download();
  }
}



  browser.webRequest.onBeforeRequest.addListener(logURL, {
    urls: ["<all_urls>"],
  });
  
*/