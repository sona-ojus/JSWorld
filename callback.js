function getCategory(callback, onFailure){
    setTimeout(function(){
        console.log("Inside getCategory");
        callback("Employee");
        // will be triggered all if we dont check for failure condition
        onFailure("getCategory Failed...");         
    }, 5000)
}

function getEmployeeID(category, callback, onFailure){
    setTimeout(function(){
        console.log("Inside getEmployeeID: " + category);
        callback("1500");
        // will be triggered all if we dont check for failure condition
        onFailure("getEmployeeID Failed...");
    },5000)
}

function getEmployeeDetails(empID, callback, onFailure){
    setTimeout(function(){
        console.log("Inside getEmployeeDetails: " + empID);
        var details = {"name" : "sona", "age": 27};
        callback(details);
        // will be triggered all if we dont check for failure condition
        onFailure("getEmployeeDetails Failed...");
    }, 5000)
}

getCategory(function(category){
    getEmployeeID(category,function(empID){
        getEmployeeDetails(empID,function(details){
            console.log("Name: " + details.name + ", Age: " + details.age);
        }, function(errMessage){console.log(errMessage);})
    }, function(errMessage){console.log(errMessage);})
}, function(errMessage){console.log(errMessage);})