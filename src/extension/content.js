const url_all = "http://127.0.0.1:8000/public-post";
const url_check = "http://127.0.0.1:8000/eval";


async function generateTextId() {
    return ("000" + Math.floor(Math.random() * 100000)).slice(-6);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sendall() {
    let postzero = document.getElementsByClassName("vkuiUnstyledTextField PostInput__input--9KzbI PostInputWithEmoji__input--4OIB4 vkuiText vkuiText--sizeY-compact vkuiTypography vkuiRootComponent")[0].textContent
    let wallPosts =  Array.from(document.getElementsByClassName("wall_post_text")).slice(0, Math.min(document.getElementsByClassName("wall_post_text").length, 9));
    wallPosts.unshift(postzero)
    //let IDs = [generateTextId];
    for(var i = 1; i < wallPosts.length; i++){
        wallPosts[i] = wallPosts[i].textContent;
        //IDs.push(generateTextId);
    }
    let request = await fetch("http://localhost:8000/public-post", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
            //"public_id": id,
            "data": wallPosts,
            //"ids": IDs
        })   
    })
    let ans = await request.json();
    console.log(ans)
}


async function give(){
    //let id = generateTextId();
    //console.log(id)
    sendall();
}

browser.runtime.onMessage.addListener((message) => {
    if (message.command === "give") {
      give();
    }
  });