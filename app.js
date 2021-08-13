let checkButton = document.getElementById("checkme");
let dataToSave = document.getElementById("textarea");

checkButton.addEventListener("change",()=>{
   setInterval(()=>{
    if(checkButton.checked){
        localStorage.setItem("autosave-data",dataToSave.value);    
    };
},1000);
});

dataToSave,addEventListener("load" , ()=>{
    if(localStorage.getItem("autosave-data") != null){
        dataToSave.value = localStorage.getItem("autosave-data");
    }
    
});

function allClear(){
    if(localStorage.getItem("autosave-data") != null){
        dataToSave.value = localStorage.removeItem("autosave-data");
        dataToSave.value = "Write your notes here";
    }
}
