let username=window.prompt("Enter your username: ");
// username=username.trim();

// let letter=username.charAt(0);
// letter=letter.toUpperCase();

// let rest=username.slice(1);
// rest=rest.toLowerCase();

// username=letter+rest;

// console.log(username);


//method chaining
username=username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);