const url = "http://127.0.0.1:8000";

async function send_to_backend(text){
    //do{
    console.log(text)
        let request = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                "text": text
            })
        });
        /*if (request.status == 200){ 
            analyse_check = 1;
            break
            } 
        else{
            window.alert(analyse_check + " " +text);
            await sleep(20000);
        }
        
    } while(analyse_check != 1);*/

}


async function give(){
    send_to_backend(
        document.getElementsByClassName("vkuiUnstyledTextField PostInput__input--9KzbI PostInputWithEmoji__input--4OIB4 vkuiText vkuiText--sizeY-compact vkuiTypography vkuiRootComponent")[0].textContent
    );
}

browser.runtime.onMessage.addListener((message) => {
    if (message.command === "give") {
      give();
    }
  });