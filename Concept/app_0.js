var person = {
    firstName: "Penelope",
    lastName: "Barrymore",
    fullName: function () {
	// Notice we use "this" just as we used "he" in the example sentence earlier?:?
        console.log(this.firstName + " " + this.lastName);
		alert(this.firstName + " " + this.lastName);
		// We could have also written this:??
		console.log(person.firstName + " " + person.lastName);
		alert(person.firstName + " " + person.lastName);
    },
	anotherFunction: function(reff){
		
		alert(reff);
		alert(this);
	}
}