var teacher = 'sanket'
function fun(){
   console.log(subject);  // it will result as undefined as the scope id assigned but not the value see parse and execution phase
    var teacher = 'pulkit';
    var subject = 'science'
    techingassistant = "vaibhav";
    console.log(teacher);
    console.log(techingassistant) 

}

fun()
console.log(teacher)
console.log(techingassistant)
