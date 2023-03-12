// Write your solution in this file!
const employee = {
    name: "Sam Smith",
    streetAddress: "Nairobi"
  };
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
  }
  function deleteFromEmployeeByKey(obj, key) {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
  }
  function destructivelyDeleteFromEmployeeKey(employee, key) {
        delete employee[key];
        return employee;
  }
  function destructivelyDeleteFromEmployeeKey(employee, key) {
    
  }