const newInput = document.querySelector("input");
const newButtom = document.querySelector("button");
const newList = document.querySelector("div.todos");

var key_val = 0;
newButtom.addEventListener("click", function(){
    var item = newInput.value;
    var para = document.createElement("p");
    var key = document.createAttribute("key");
    key.value = key_val;
    para.setAttributeNode(key);
    para.innerHTML = item;
    newList.appendChild(para);
    key_val += 1
    
    para.addEventListener("click" , function(){
        newList.removeChild(para)

    })
    newInput.value=""

})