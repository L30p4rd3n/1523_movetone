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
    console.log("dasdasda");
    send_to_backend("fsdfdsdf");
} // now force the button to do that