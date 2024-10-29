console.log("reloaded");


a = [];
counter = 0;

function logURL(requestDetails) {
    if((requestDetails.url).startsWith("https://sun1")){
      //console.log(`Loading: ${requestDetails.url}`);
      a.push(requestDetails.url);
      console.log(a);
      download();
      
      //downloadImage(requestDetails.url);
    }
  }
  

c1 = 0;


function download() {
    let img = new Image();
    if(a.length){
    var t = a.shift();
    img.src = t;
    if(img.height < 240 && img.width < 240){
      return;
    }img.remove();
    let lnk = document.createElement("a");
    lnk.href = img.src;
    lnk.download = "img" + counter;
    lnk.click();
    lnk.remove();
    counter += 1;}
}




/*function downloadImage(link){
  if(c1 > 5){
    console.log("no");
    return;
  }
  
  img.src = link;
  if(img.height < 240 && img.width < 240){
    return;
  }img.remove();

  let a = document.createElement("a");
  a.href = link;
  a.download = "img" + counter;
  a.click();
  a.remove();
  counter += 1;
  c1 += 1; 
}*/

  browser.webRequest.onBeforeRequest.addListener(logURL, {
    urls: ["<all_urls>"],
  });
  
