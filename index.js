// Write your solution in this file!

const employee = {
    name : "Xtina",
    streetAddress : "100 West 5th St",
}

function updateEmployeeWithKeyAndValue(employee, streetAddress) {
    return {...employee, [streetAddress]: "11 Broadway",
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress) {
    employee [streetAddress] = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee) {
    const deleteFromEmployeeByKey = {...employee};
    delete deleteFromEmployeeByKey.name;
    return deleteFromEmployeeByKey;
}

function destructivelyDeleteFromEmployeeByKey(employee) {
    delete employee.name;
    return employee;
}