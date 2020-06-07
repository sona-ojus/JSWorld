// create a function which on invocation will trigger the async methods one by one
// async keyword added before the function
// await keyword added before the async methods that needs to be triggered
// the reject will be considered as error and hence will throw exception
// use try catch block to handle error.

function getCategory(){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Inside getCategory");
            resolve("Employee"); 
        }, 5000)
    });
}

function getEmployeeID(category){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Inside getEmployeeID: " + category);
            resolve("1500");
        },5000)
    });
}

function getEmployeeDetails(empID){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("Inside getEmployeeDetails: " + empID);
            var details = {"name" : "sona", "age": 27};
            reject("error occurred");
            resolve(details);
        }, 5000)
    });
}

async function getResult(){
    try{
        const category_info = await getCategory();
        const empID_info = await getEmployeeID(category_info);
        const empDetails_info = await getEmployeeDetails(empID_info);
        console.log("Name: " + empDetails_info.name + ", Age: " + empDetails_info.age);
    }catch(err){
        console.log(err);
    }
}

getResult();