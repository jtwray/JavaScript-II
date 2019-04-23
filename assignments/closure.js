// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


function ouTer() {
    const outer = "Blue";
    const inner = "Orange";

    function midDle() {
        const middle = "Red";
        console.log(`${outer}`);
        console.log(`${middle}`);
        console.log(`${inner}`);

        function inNer() {
            const middle = "Orange";
            const outer = "Orange";
            console.log(`${outer}${middle}${inner}`);


        } //inNer
        inNer();
    } //midDle
    midDle();
} //ouTer
ouTer();

function state() {
    const governor = "Governor, Tucker Wray";
    console.log(`Im ${governor}`);

    function county() {
        const mayor = "Mayor, Jack Frost";
        console.log(`Im $ { mayor }`);

        function district() {
            console.log(`wheres my tax refund ${governor}?!`);
            console.log(`where's my taxcheck, ${mayor}!?`);
        } //district

        district();
    } //county

    county();
} //state
state();
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
    // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
};