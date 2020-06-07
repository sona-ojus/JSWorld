// will work
hoisted();

// will throw error : notHoisted is not a function
notHoisted();

function hoisted(){
    console.log("immediatley hoisted!!");
}

var notHoisted =  function sample(){
    console.log("not hoisted");
}