    function mode(array)
    {
        if(array.length == 0)
            return null;
        var modeMap = {};
        var maxEl = array[0], maxCount = 1;
        for(var i = 0; i < array.length; i++)
        {
            var el = array[i];
            if(modeMap[el] == null)
                modeMap[el] = 1;
            else
                modeMap[el]++;  
            if(modeMap[el] > maxCount)
            {
                maxEl = el;
                maxCount = modeMap[el];
            }
        }
        return maxEl;
    }
    
    
    var postzero
    postzero  = document.getElementsByClassName("vkuiUnstyledTextField PostInput__input--9KzbI PostInputWithEmoji__input--4OIB4 vkuiText vkuiText--sizeY-compact vkuiTypography vkuiRootComponent")[0].textContent

    var wallPosts;
    wallPosts = Array.from(document.getElementsByClassName("wall_post_text")).slice(0, Math.min(document.getElementsByClassName("wall_post_text").length, 19));

    wallPosts.unshift(postzero)
    //let IDs = [generateTextId]; -- reserved for aftershow updates
    for(var i = 1; i < wallPosts.length; i++){
        wallPosts[i] = wallPosts[i].textContent;
        //IDs.push(generateTextId);
    }
    fetch("http://localhost:8000/public-post", {
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
    .then((response) =>{
        return response.text()
    })
    .then((data) => {
        var div = document.createElement("div")
        var div1 = document.getElementsByClassName("vkitModalHeader__container--R5vpo vkitModalHeader__containerWithBefore--4hT65 vkitModalHeader__containerNoSeparator--PsLv8")[0]
        var d = JSON.parse(data)
        d = d.data // Array[String]
        div.className = "extensionResponse";
        freq = mode(d.slice(1, d.length))
        div.innerText = `Текущий текст: ${d[0]}\n Определенная тематика паблика: ${freq}`;
        div.style.cssText = "align-items: center;box-sizing: border-box;display: flex;flex-direction: column;justify-content: center;text-align: center;margin: 0 auto"
        //insert CSS when the brain is working

        Array.from(document.getElementsByClassName("extensionResponse")).forEach((elem) => elem.remove())

        div1.parentNode.insertBefore(div, div1.nextSibling)
    })


    //chrome.extension.getBackgroundPage().console.log('foo'); that snippet might potentially be valuable for aftershow 