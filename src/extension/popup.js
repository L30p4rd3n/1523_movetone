const sendMessageId = document.getElementById("sendmessageid");
if (sendMessageId) {
    sendMessageId.onclick = function() {
          browser.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                browser.tabs.sendMessage(
                    tabs[0].id,
                 {
                       command: "give"
                 },
                function(response) {
                        window.close();
                 }
             );
        })
    };
}
