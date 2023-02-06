import React, {useState, useEffect} from 'react';
import './App.css';

let i = 1;
const tableTwo = JSON.parse(localStorage.getItem("names"))
const tableSave = [...tableTwo]// <- ta tablica zawiera ID kafli i do tego tekst który ją wypełnia
/*if(JSON.parse(localStorage.getItem("names")) !== null){
tableSave.push(JSON.parse(localStorage.getItem("names")))
}*/

console.log(tableSave)
function Todoing(props){

    function getText(e){
        
        var podej = prompt("Input Task")
        setText(podej);
        //console.log(props.id , podej)
        const x = {id: props.id, text: podej, tab: table}
        tableSave.push(x)
        //console.log(tableSave)
        localStorage.setItem("names", JSON.stringify(tableSave))
        console.log(e.currentTarget)
        e.currentTarget.innerText += podej
        


    }
    function remove(e){
        e.currentTarget.parentElement.style.display = "none"
        //console.log(tableTwo)
        for(let i = 0; i < tableSave.length ; i++){
            //console.log(e.currentTarget.parentElement.id)
            if(tableSave[i].id === e.currentTarget.parentElement.id){
                //let x = tableTwo.slice(i)
                /*const y = tableTwo.filter(object => {
                    return object.id !== e.currentTarget.parentElement.id;
                  });*/
                  tableSave.splice(i, 1)
                  localStorage.setItem("names", JSON.stringify(tableSave))
                  
                console.log(tableSave)

            }
            
        }

    }
    const [table, setTable] = useState(1)
    const [text, setText] = useState("Click to change")
    /*function SetItem(){
        const obj = [
            props.id,
            text,
            "child"
    ];
        

        window.localStorage.setItem("myObject", JSON.stringify(obj));
        let newObject = window.localStorage.getItem("myObject");
        console.log(JSON.parse(newObject));
        console.log(obj[2]);
    }*/
    
    function handleId(e){
        let OfName = e.currentTarget.parentElement.id
        console.log(OfName)
        let numberOfName = OfName.slice(4 , 5)
        let indexTable = JSON.parse(localStorage.getItem("names"))
        let num
        //console.log(OfName)
        //console.log()
        for(let i = 0; i < indexTable.length ; i++){
            if(indexTable[i].id === OfName){
                console.log(indexTable[i].tab)
                num = i
            }

        }
        //console.log(indexTable[numberOfName].tab)
        if(indexTable[num].tab === 1){
            indexTable[num].tab = 2
            localStorage.setItem("names", JSON.stringify(indexTable))
            document.getElementById('tab-2').appendChild(document.getElementById(OfName))
            
        } else if(indexTable[num].tab === 2){
            indexTable[num].tab = 3
            localStorage.setItem("names", JSON.stringify(indexTable))
            document.getElementById('tab-3').appendChild(document.getElementById(OfName))
        } else if(indexTable[num].tab === 3){
            indexTable[num].tab = 4
            localStorage.setItem("names", JSON.stringify(indexTable))
            document.getElementById('tab-4').appendChild(document.getElementById(OfName))
        } else if(indexTable[num].tab === 4){
            indexTable[num].tab = 5
            localStorage.setItem("names", JSON.stringify(indexTable))
            document.getElementById('tab-5').appendChild(document.getElementById(OfName))
        } else if(indexTable[num].tab === 5){
            indexTable[num].tab = 6
            localStorage.setItem("names", JSON.stringify(indexTable))
            document.getElementById('tab-6').appendChild(document.getElementById(OfName))
        } 
        
        /*if (table === 1){
        //console.log(document.getElementById(e.currentTarget.id).parentElement);
        setTable(table + 1)
        var dziecko = document.getElementById(props.id);
        document.getElementById('tab-2').appendChild(dziecko);
        i = 2;
            let nameOf = dziecko.id
            let nameOf2 = nameOf.slice(4 , 5);
            //let indexTable = JSON.parse(localStorage.getItem("names"))
            indexTable[nameOf2].tab = "2"
            localStorage.setItem("names", JSON.stringify(indexTable))
            console.log(nameOf2)

        
        } else if(table === 2){
        var dziecko = document.getElementById(props.id);
        document.getElementById('tab-3').appendChild(dziecko);
        setTable(table + 1)
            let nameOf = dziecko.id
            let nameOf2 = nameOf.slice(4 , 5);
            let indexTable = JSON.parse(localStorage.getItem("names"))
            indexTable[nameOf2].tab = "3"
            localStorage.setItem("names", JSON.stringify(indexTable))
        }
        else if(table === 3){
            var dziecko = document.getElementById(props.id);
            document.getElementById('tab-4').appendChild(dziecko);
            setTable(table + 1)
                let nameOf = dziecko.id
                let nameOf2 = nameOf.slice(4 , 5);
                let indexTable = JSON.parse(localStorage.getItem("names"))
                indexTable[nameOf2].tab = "4"
                localStorage.setItem("names", JSON.stringify(indexTable))
            }
        else if(table === 4){
            var dziecko = document.getElementById(props.id);
            document.getElementById('tab-5').appendChild(dziecko);
            setTable(table + 1)
                let nameOf = dziecko.id
                let nameOf2 = nameOf.slice(4 , 5);
                let indexTable = JSON.parse(localStorage.getItem("names"))
                indexTable[nameOf2].tab = "5"
                localStorage.setItem("names", JSON.stringify(indexTable))
            }
        else if(table === 5){
            var dziecko = document.getElementById(props.id);
            document.getElementById('tab-6').appendChild(dziecko);
            setTable(table + 1)
                let nameOf = dziecko.id
                let nameOf2 = nameOf.slice(4 , 5);
                let indexTable = JSON.parse(localStorage.getItem("names"))
                indexTable[nameOf2].tab = "6"
                localStorage.setItem("names", JSON.stringify(indexTable))
            }*/
    }
    
    return(<div class="kafel" id={props.id} /*onLoad={SetItem}*/ ><button id="btn-remove" onClick={remove}>X</button><div id="polkafel" onClick={getText}>{props.text}</div><button onClick={handleId} id="btn-push">Got it!</button></div>);
   
}
export default Todoing;

