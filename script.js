//your JS code here. If required.
// Create an object 'student' with a property 'name'
const student = {
    name: 'Alice'
};

// Add a method 'getKeys' to the Object prototype
Object.prototype.getKeys = function() {
    return Object.keys(this);
};

// Call the getKeys method on the 'student' object
console.log(student.getKeys()); // Output: ['name']
