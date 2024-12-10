const sendMessageId = document.getElementById("sendmessageid");
if (sendMessageId) {
    sendMessageId.onclick = async function () {
        browser.tabs
            .query({ active: true})
            .then(tabs => {
                for(var i = 0; i < tabs.length; i++){
                    console.log(tabs[i].url)
                    if(tabs[i].url.startsWith("https://vk.com")){
                        console.log(tabs[i] + " " + tabs[i].id)
                        browser.tabs.executeScript(tabs[i].id, {
                            file: "content.js"
                        })
                    }
                }
            }

    )
    };
}
