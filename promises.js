// resolve and reject waits for the task to complete
// but the console.logs doesnt wait.

function getCategory(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("Inside getCategory");
            resolve("Employee");  
            reject("getCategory Failed...");  // automatically ignored if resolve is executed.
            console.log("Skipped reject..!!!!!");     
        }, 5000)
    });
}

function getEmployeeID(category){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("Inside getEmployeeID: " + category);
            resolve("1500");
            reject("getEmployeeID Failed..."); // automatically ignored if resolve is executed
        },5000)
    });
}

function getEmployeeDetails(empID){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("Inside getEmployeeDetails: " + empID);
            var details = {"name" : "sona", "age": 27};            
            reject("getEmployeeDetails Failed...");
            resolve(details);// automatically ignored if reject is executed

            console.log("Skipped resolve..!!!!!");
        }, 5000)
    });
}

getCategory()
    .then(function(category) { getEmployeeID(category)
        .then(function(empID) { getEmployeeDetails(empID)
            .then(function(details) {console.log("Name: " + details.name + ", Age: " + details.age);
        }).catch(function(errMessage){console.log(errMessage);})
    }).catch(function(errMessage){console.log(errMessage);})
}).catch(function(errMessage){console.log(errMessage);})