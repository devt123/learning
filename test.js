// function printMessage() {
//     console.log("Jai shree ram!");

//     setTimeout(printMessage, 1000); // Run again after 1 second
// }

// printMessage();
 


const object ={
    name :"shrey",
    age:"22",
    love:"shree ram",
    humanLove:"ayushi",
}

function ExtractObject(object){
    const {name,age,love,humanLove} =object
    console.log(name,age,love,humanLove);
    console.log("most lovaable person is ",humanLove);
}
ExtractObject(object);

const array=["shrey","ayushi","shree ram","sita ram"]

function ExtractArray(array){
    const [name,humanLove,love,sitaRam] = array
    console.log(name,humanLove,love,sitaRam);
    console.log("most lovaable person is ",love);
}
ExtractArray(array);

