const url = "http://127.0.0.1:8000";
var analyse_check = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function analyse(text) {
    
}



async function send_to_backend(text){
    do{
        let request = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                "text": text
            })
        });
        if (request.status == 200){ 
            analyse_check = 1;
            break
            } 
        else{
            window.alert(analyse_check + " " +text);
            await sleep(200000);
        }
        
    } while(analyse_check != 1);
}

export{
    send_to_backend, sleep, analyse
}

export function main(){
    var link = document.URL.split("/")
    if(link[link.length - 1] != "feed"){
        if(document.getElementsByClassName("submit_post_field dark submit_post_inited").length > 0){
            // empty
            send_to_backend(document.getElementsByClassName("submit_post_field dark submit_post_inited")[0].firstChild.textContent)
            }
        else if(document.getElementsByClassName("PostInputWithEmoji__messageInputWrapper--mQxVHt").length > 0){
            alert("dsa")
            var where = document.getElementsByClassName("vkuiUnstyledTextField")[0].firstChild.textContent
            var a = document.getElementsByClassName("vkuiButton__in");
            var b = ""
            for(var i = 0; i < a.length; i++){
                if ("Далее" == a[i].firstChild.textContent){
                  b = a[i];
                }
              }
            var btn_elem = ((b.parentElement).parentElement).parentElement;
            var btn = document.createElement("button");
            btn.className = "vkuiButton--size-m vkuiButton--mode-primary vkuiButton--appearance-accent vkuiButton--align-center vkuiTappable vkuiTappable--hasPointer-none vkuiClickable__resetButtonStyle vkuiClickable__host vkuiClickable__realClickable vkui-focus-visible vkuiRootComponent"
            btn.textContent = "Проанализировать на соответствие тематике паблика"
            btn.onclick = send_to_backend(where)
        }
    }
}