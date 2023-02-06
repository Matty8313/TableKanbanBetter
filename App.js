import React, { Component }  from 'react';
import './App.css';
import Todoing from "./ToDo.js";
import {useState, useEffect} from 'react';
import "./Input.css"


let numberOfTask = JSON.parse(localStorage.getItem("numberOfTasks"))
let z = JSON.parse(localStorage.getItem("numberOfTasks"))
function App(props) {
  const [ilo, setIlo] = useState([]);
  const [idek, setIdek] = useState(0);
  
    useEffect(()=>{

      
        //console.log(JSON.parse(localStorage.getItem("names")))
        if(localStorage.getItem("names") !== null){
        let x = JSON.parse(localStorage.getItem("names"))
        //console.log(x)
        //console.log(x.length)
        
        
        for(let i = 0 ; i < x.length ; i++){
        //setIlo([...ilo, <Todoing id={"task" + i} />])
        
        setIlo(current => [... current, <Todoing id={x[i].id} text={x[i].text}/>])
        //setIdek(x.length)
        let y = "tab-" + x[i].tab
        let z = y.toString()
        //let nameParent = document.getElementById(`tab-${z}`)
        var task = ilo     /// w tym miejscu musze pobrac object z tablicy, żeby włożyć go a ppendChild
        var table = document.getElementById(y)
        //table.appendChild(task)
        //console.log(document.getElementById(y))
        //console.log(task)
        //console.log(nameParent)*/
        
        }
        }
      
      }, [])
      function handleID(e) {
        //let x = JSON.parse(localStorage.getItem("names"))
        if(localStorage.getItem("names") !== null){
          let x = JSON.parse(localStorage.getItem("names"))
          console.log(x)
          console.log(x.length)
          
          for(let i = 0 ; i < x.length ; i++){
            let y = "tab-" + x[i].tab
            //let z = y.toString()
            let x1 = document.getElementById(y)
            let x2 = document.getElementById(x[i].id)
            console.log(x1)
            console.log(x2)
            x1.appendChild(x2)
          }
        //console.log(idek)

        
      }}

  
  return (
    <><div id="all">
        <div id="panel-c">
          <button id="adding"  onClick={() => {
          setIdek(numberOfTask + 1);
          setIlo([...ilo, <Todoing id={"task" + numberOfTask} />])
          numberOfTask++
          localStorage.setItem("numberOfTasks", JSON.stringify(numberOfTask))
          
          }}>Add new Task!</button>
          <button onClick={handleID} id="loading">Load</button>
        </div>
      <div id="To Do" class="table" >
          <div class="un-table1" >To Do</div>
          <div class="un-table" id="tab-1"><p>Tasks</p> {ilo}</div>
          <div class="un-table" id="tab-2"><p>Prioryty</p></div>
      </div>
      <div id="Doing" class="table">
          <div class="un-table1">Doing</div>
          <div class="un-table" id="tab-3"><p>Taking Info</p></div>
          <div class="un-table" id="tab-4"><p>Making</p></div>
      </div>
      <div class="table">
        <div class="un-table1">Done</div>
        <div class="un-table" id="tab-5"><p>Done</p></div>
        <div class="un-table" id="tab-6"><p>Connect</p></div>
      </div>
    </div>
    
    </>
    
    
  );
}

export default App;

