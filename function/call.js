// implement the myCall to simulate the fn.call(obj, ...args);
// notice: we cannot use es6 method
Function.prototype.myCall = function(context = window) {
    // this equals the function which execute the myCall method;
    context.fn = this;
    // collect the arguments
    const argumentsArr = Array.prototype.slice.call(arguments).slice(1);
    // with the eval method to simulate parameter tranfer
    const result = eval('context.fn(' + argumentsArr+ ')');
    // delete the extra property
    delete context.fn;
    return result;
}



