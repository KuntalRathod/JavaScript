// Immediatelty Invoked Function Expression
// IIFE is a function that is executed right after it is created
// It has no name and is not stored in a variable
// It is used to keep the variables inside it local to the function
// and not accessible to the global scope
// It is used to avoid variable hoisting from within blocks
// It is used to avoid polluting the global scope
// It is used to create closures
// It is used to create private variables
// It is used to create modules
// It is used to create namespaces
// It is used to create singletons
// It is used to create private static variables
// It is used to create private static functions

// Example 1
(function chai() {
    //named IIFE
    console.log(`DB CONNETED`);
})();

// Example 2
((name) => {
    console.log(`DB CONNETED To ${name}`);
})("Kuntal")






