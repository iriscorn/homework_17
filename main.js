// first name
let userName = prompt("Enter your name").trim();

userName = userName.split(" ");
for(var i = 0; i < userName.length; i++) {
    userName[i] = userName[i].charAt(0).toUpperCase() + userName[i].slice(1).toLowerCase();
}

userName = userName.join(" ");
console.log(userName);

// last name
let lastName = prompt("Enter your surname").trim();

lastName = lastName.split(" ");
for(var i = 0; i < lastName.length; i++) {
    lastName[i] = lastName[i].charAt(0).toUpperCase() + lastName[i].slice(1).toLowerCase();
}

lastName = lastName.join(" ");
console.log(userName, lastName);

// email
let userEmail = prompt("Enter your email").replaceAll().toLowerCase().split(" ").join("");
userEmail = (!userEmail.includes('@')) ? `not valid email <b> ${userEmail} </b> (symbol @ not exist)`:
(userEmail.startsWith('@')) ? `not valid email <b> ${userEmail} </b> (symbol @ find in first place)`:
(userEmail.endsWith('@')) ? `not valid email <b> ${userEmail} </b> (symbol @ find in last place)`:
`<b> ${userEmail} </b>`;

console.log(userEmail);

// age
let dateOfBirth = +prompt('Enter the year of your birth').replaceAll();
today = new Date();
thisYear = today.getFullYear();

let userAge = thisYear - dateOfBirth;
if(userAge > 120) {
    alert("LIAR!");
}

console.log(userAge);

// all together
document.getElementById('fullName').innerHTML = `Full name: <b> ${userName} ${lastName} </b>`;
document.getElementById('email').innerHTML = `Email: ${userEmail}`;
if(userAge > 120) {
    document.getElementById('age').innerHTML = `Age: <b> ${userAge} </b> (I don't believe you \u{1F611})`;
} else {
    document.getElementById('age').innerHTML = `Age: <b> ${userAge} </b>`;
}














// let text = "Ira Korn";
// document.write(text.substr(3, 6));
// document.write(text.substring(3, 6));
// document.write(text.slice(1, 2));
// document.write(text.split(''));
// document.write(text.indexOf('ra'));
// document.write(text.indexOf('ra'));