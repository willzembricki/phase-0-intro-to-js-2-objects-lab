// Write your solution in this file!
const employee={
    name:`Will`,
    streetAddress:`Dickinson`, 
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const updateEmployeeWithKeyAndValue = {...employee};
    updateEmployeeWithKeyAndValue[key]= value;
    return updateEmployeeWithKeyAndValue;
}
function destructivelyDeleteFromEmployeeByKey(employee,key,value){
    employee[key] = value;
    return employee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key,value){
    employee[key]=value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const newObj ={...employee};
    delete newObj[key];
    return newObj;
}