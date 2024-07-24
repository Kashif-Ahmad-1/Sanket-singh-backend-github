var teacher = 'sanket'
function fun(){
   
    var teacher = 'pulkit';
    techingassistant = "vaibhav";
    console.log(teacher);
    console.log(techingassistant) // --> Autoglobal concept through parse and execution

}

fun()
console.log(teacher)
console.log(techingassistant) // autoglobals it happens during execution phase what if we declare before fun() it will show error 
