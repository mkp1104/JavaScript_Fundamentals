var person = {
    firstName   :"Penelope",
    lastName    :"Barrymore",
    // Since the "this" keyword is used inside the showFullName method below, and the showFullName method is defined on the person object,​
    // "this" will have the value of the person object because the person object will invoke showFullName ()​
    showFullName:function () {
    console.log (this.firstName + " " + this.lastName);
    }
    }
    person.showFullName (); // Penelope Barrymore
	
	$ ("button").click (function (event) {
	// $(this) will have the value of the button ($("button")) object​
	console.log ($(this).prop ("name"));	// because the button object invokes the click () method​
	});