
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)


if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}

// const tabs = [
//     { url: "https://www.linkedin.com/in/per-harald-borgen/"}
// ]

tabBtn.addEventListener("click",function(){
       // console.log(tabs[0].url)
    //    chrome.tabs.query({active: true , currentWindow:true} ,function(tabs){ 
    //    })

        chrome.tabs.query({active : true , currentWindow : true} , function(tabs){
            console.log(tabs)
            
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
         render(myLeads)
        })
})

function render(leads){

    let listItems = ""
    
    for(let i=0;i<leads.length;i++){
    
        listItems +=  
        `<li>
           <a target='_blank' href= '${ leads[i]}'> 
            ${leads[i]}  
            </a>
       </li>`
         
    }
    
    ulEl.innerHTML = listItems   //lastly one time rendering
    
    }

deleteBtn.addEventListener("dblclick" , function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})


inputBtn.addEventListener("click" , function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    //save the myleads to local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})








// function saveLead(){
//     console.log("Button clicked!")
// }

// myLeads=JSON.parse(myLeads)
// myLeads.push("www.w3schools.com")

// myLeads=JSON.stringify(myLeads)
// console.log(typeof myLeads)


 // listItems +=  "<li><a target='_blank' href= ' "+ myLeads[i] + " '>" + myLeads[i] + "</a></li>" 

    // ulEl.innerHTML += "<li>"+ myLeads[i] + </li>"
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append (li)