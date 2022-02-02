function drawcard(){
    id = Math.floor(Math.random() * 108);         //Generetes a random number from 0-108 (there are 108 cards in uno)  

    //red cards
    //------------------------------------------------------------------

    if(id < 10 + (25*0)){                    
        return ["red",id,id]
    }
    else if(id < 19 + (25*0)){         
        return ["red", id-9,id]          
    }
    else if(id < 20 + (25*0)){               
        return ["red","+2",id];  
    }
    else if(id < 22 + (25*0)){                   
        return ["red","reverse",id];
    }
    else if(id < 24 + (25*0)){                   
        return ["red","skip",id];
    }
    else if(id == 24 + (25*0)){                   
        return ["red", 0,id];
    }

    //yellow cards
    //------------------------------------------------------------------

    if(id < 10 + (25*1)){                    
        return ["yellow",id-(25*1),id]
    }
    else if(id < 19 + (25*1)){         
        return ["yellow", id-(9+25*1),id]          
    }
    else if(id < 21 + (25*1)){               
        return ["yellow","+2",id];  
    }
    else if(id < 23 + (25*1)){                   
        return ["yellow","reverse",id];
    }
    else if(id < 25 + (25*1)){                   
        return ["yellow","skip",id];
    }
    else if(id == 25 + (25*1)){                   
        return ["yellow", 0,id];
    }

    //green cards
    //------------------------------------------------------------------

    if(id < 10 + (25*2)){                    
        return ["green",id-(25*2),id]
    }
    else if(id < 19 + (25*2)){         
        return ["green", id-(9+25*2),id]          
    }
    else if(id < 21 + (25*2)){               
        return ["green","+2",id];  
    }
    else if(id < 23 + (25*2)){                   
        return ["green","reverse",id];
    }
    else if(id < 25 + (25*2)){                   
        return ["green","skip",id];
    }
    else if(id == 25 + (25*2)){                   
        return ["green", 0,id];
    }

    //blue cards
    //------------------------------------------------------------------

    if(id < 10 + (25*3)){                    
        return ["blue",id-(25*3),id]
    }
    else if(id < 19 + (25*3)){         
        return ["blue", id-(9+25*3),id]          
    }
    else if(id < 21 + (25*3)){               
        return ["blue","+2",id];  
    }
    else if(id < 23 + (25*3)){                   
        return ["blue","reverse",id];
    }
    else if(id < 25 + (25*3)){                   
        return ["blue","skip",id];
    }
    else if(id == 25 + (25*3)){                   
        return ["blue", 0,id];
    }

    //Black cards
    //------------------------------------------------------------------

    if (id < 104){
        return ["pick", "+4",id]
    }
    else if (id < 108){                      
        return ["pick", "none",id]
    }
}

let drawn = []
function fulldraw(){
    while(true){
        r = drawcard();
        currentId = r[2]
        if(drawn.length == 108){
            drawn = []
        }
        else if(drawn.includes(currentId)){
            // console.log("already drawn")
        }
        else{
            drawn.push(currentId)
            return r
        }
    }
}
function decktest(){
    x = 0
    while(x < 109){
        x++
        fulldraw()
        console.log(drawn, drawn.length)
    }
}

function firstdraw(){
    h = []
    for(let i = 0; i < 5; i++){
        d = fulldraw()
        h.push(d)
    }
    return h
}
hand = firstdraw()

function firstcard(){
    while(true){
        lastcard = fulldraw()
        if(lastcard[2] < 100){
            break
        }
    }
    console.log("firstdraw",lastcard)
    var html_card = document.createElement("button");
    html_card.innerHTML             = lastcard[1];
    html_card.id                    = "CurrentCard";
    html_card.className             = "cards";
    html_card.style.backgroundColor = lastcard[0]
    html_card.addEventListener("click", function() {
        console.log(lastcard[0], lastcard[1], lastcard[2])})
    html_hand = document.querySelector(".currentcardholder").appendChild(html_card);
}

function updatecurrent(newcolor,newvalue,newid){
    console.log("Last Card",lastcard)
    console.log("new",newcolor,newvalue,newid)
    if(newcolor == lastcard[0]){
        console.log("Correct Color")
        document.getElementById("CurrentCard").innerHTML            = newvalue;
        document.getElementById("CurrentCard").style.backgroundColor= newcolor;
        document.getElementById(newid).remove();
    }
    else if(newvalue == lastcard[1]){
        console.log("Corret Value")
        document.getElementById("CurrentCard").innerHTML            = newvalue;
        document.getElementById("CurrentCard").style.backgroundColor= newcolor;
        document.getElementById(newid).remove();
    }
    lastcard = [newcolor,newvalue,newid]
}


firstcard()
// HTML
// -------------------------------------------------------------

function showhand(){
    for(let x = 0; x < hand.length;x++){
        var html_card = document.createElement("button");
        html_card.innerHTML             = hand[x][1];
        html_card.id                    = hand[x][2];
        html_card.className             = "cards";
        html_card.style.backgroundColor = hand[x][0]
        html_card.addEventListener("click", function() {
            console.log(hand[x][0], hand[x][1], hand[x][2])
            updatecurrent(hand[x][0], hand[x][1], hand[x][2])
        })
        html_hand = document.querySelector(".hand").appendChild(html_card);
    }
}
showhand()



