// my variables
var clearBtn = document.querySelector(".clear-btn");


//clear tasks button   
clearBtn.onclick = function () {
    //document.querySelector("crossed-text").remove();
    var hideLi = document.getElementsByClassName("crossed-text"); 
    for(var i = 0; i < hideLi.length; i++){
        hideLi[i].style.display = "none";
    }
};


//my functions
//add new task after clicking add button
function addTask() {
    //save the value
    var inputValue = document.querySelector(".get-value").value;
    //condition
    if (inputValue != "") {
        //var with new li
        var newLi = document.createElement("li");
        //create textnode for future li with inputValue
        var includeTask = document.createTextNode(inputValue);
        //new li with textnode
        newLi.appendChild(includeTask);
        //creatr new li in ul (list-task class)
        document.querySelector(".list-task").appendChild(newLi);
        //after creating clear form
        document.querySelector(".get-value").value = "";
        //also create possibility to cross finished task
        newLi.addEventListener("click", function () {
            newLi.classList.toggle("crossed-text");
        });
    }
    else {
        alert("don't forget to add task :)");
    }
};





 