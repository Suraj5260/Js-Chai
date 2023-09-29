// Immediately Invoked Function Expressions (IIFE)


(function chai() {
    // named iife
    console.log("Chai pi lo frnds!!");
})();
((name) => {
    console.log(`Chai pi lo ${name}!!`);
})("Raju")