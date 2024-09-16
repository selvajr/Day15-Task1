let result=document.getElementById("result");
function display(num){
    result.value += num;
}
    function calculate(){
         try{
            result.value = eval(result.value);
         }
         catch(err){
            alert("Only numbera ar allowed")
         }
    
}
function Clear(){
    result.value="";
}