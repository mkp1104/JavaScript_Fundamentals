var user = {
    data        :[
        {name:"T. Woods", age:37},
        {name:"P. Mickelson", age:43}
    ],
    clickHandler:function (event) {
        var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1

        // This line is adding a random person from the data array to the text field
        $ ("input").val (this.data[randomNum].name + " " + this.data[randomNum].age);
    }

}

// Assign an eventHandler to the button's click event
//$("button").click (user.clickHandler);

$ ("button").click (user.clickHandler.bind (user));