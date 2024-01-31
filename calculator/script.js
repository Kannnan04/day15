let output = document.getElementById("result");

function display(num){
    output.value += num;
}
function calculate(){
    try{
      output.value = eval(output.value);

    }
    catch(error){
        alert("Invalid Data")
    }
}
function del(){
    output.value = output.value.slice(0,-1)
}
function clr(){
    output.value = "";
}