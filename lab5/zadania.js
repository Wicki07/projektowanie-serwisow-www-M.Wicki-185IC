"use strict"
let json = {
    "samochod":{
      nazwa: "Audi",
      data: 1909,
      "sedan":[
        {
          model:"A6C8",
          rokprodukcji: 2018,
          moc:"163KM",
        },
        {
          model:"A4B8",
          rokprodukcji: 2007,
          moc:"170KM",
        },
      ],
      "suv":[
        {
          model:"RSQ8",
          rokprodukcji: 2020,
          moc:"600KM",
        },
        {
          model:"Q3",
          rokprodukcji: 2011,
          moc:"150KM",
        },
      ],
    },
  }

console.log(json);
//Zadanie 1
// Task 1
console.log("Zadanie 1")
console.log("task 1:")
function mnozenie(a, b){
    return a*b;
}

let liczba1 = json.samochod.data;
let liczba2 = json.samochod.sedan[0].rokprodukcji;
console.log("wynik mnożenia: "+ mnozenie(liczba1, liczba2))

//Zadanie 1
// Task 2
console.log("Zadanie 1")
console.log("task 2:")
function nazwa(a, b) {
    const tekst = `Marka samochodu ${a} model samochu ${b}`
    console.log(tekst);
}
let model = json.samochod.nazwa;
let marka = json.samochod.suv[1].model;
nazwa(model, marka);

//Zadanie 2
// Task 1

let id, name, username, email;

fetch('https://jsonplaceholder.typicode.com/users/10')
.then(response => response.json())
.then(userData => {
	id = userData.id;
	name = userData.name;
	username = userData.username;
	email = userData.email;
})

.catch(function(error){console.error(error)})
.finally(function(){
	console.log("Sprawdzenie załdowania")
	console.log("id: " + id)
	console.log("name: " + name)
	console.log("username: " + username)
	console.log("email: " + email)
})
function user(userId){
	return new Promise((resolve, reject) => {
		if (userId == id){
			resolve(mnozenie(userId, id))
		}else{
			reject('zle id')
		}
    })
};
//Promise potrzebuje czasu aby wczytać dane
console.log("Zadanie 2")
console.log("task 1:")
setTimeout(() => {
    console.log("Zadanie 2")
    console.log("task 2:")
	user(id).then(wynik => console.log('id uzytkowania pomnozone przez siebie: ', wynik));
	user(9).catch(wynik => console.log('zle wprowadzone dane ', wynik));
	user(id).finally(() => console.log('koniec'));	  
}, 300);

//Zadanie 2
// Task 2

function objekt(imie, nazwa) {
	var objekt = { 
		imei: imie, 
		nazwa: nazwa 
	};
	return objekt;
}   
function createUser(userId){
	return new Promise((resolve, reject) => {
		if (userId == id){
			resolve(objekt(name, username))
		}else{
			reject('zle id')
		}
    })
};
setTimeout(() => {

	createUser(id).then(wynik => console.log('tworzenie objektu powiodło sie: ', wynik));
	createUser(9).catch(wynik => console.log('zle wprowadzone dane ', wynik));
	createUser(id).finally(() => console.log('koniec'));	  
}, 300);

//Zadanie 3

async function asyncAndAwait() {
	let response = await fetch('https://jsonplaceholder.typicode.com/users/8');
	if (response.ok) {
		var objectJSON = await response.json();
		id = objectJSON.id;
		name = objectJSON.name;
		username = objectJSON.username;
		email = objectJSON.email;
        console.log("Zadanie 3");
		console.log("TASK 1");
        user(id).then(wynik => console.log('id uzytkowania pomnozone przez siebie: ', wynik));
        user(9).catch(wynik => console.log('zle wprowadzone dane ', wynik));
        user(id).finally(() => console.log('koniec'));	  
        console.log("Zadanie 3");
		console.log("TASK 2");
        createUser(id).then(wynik => console.log('tworzenie objektu powiodło sie: ', wynik));
        createUser(9).catch(wynik => console.log('zle wprowadzone dane ', wynik));
        createUser(id).finally(() => console.log('koniec'));	  
	}
}
setTimeout(() => {
	asyncAndAwait();
}, 300);   

//Zadanie 4

let xmlhttprequest = new XMLHttpRequest();

setTimeout(() => {
	xmlhttprequest.open('GET', 'https://jsonplaceholder.typicode.com/users/7');
	xmlhttprequest.responseType = 'json';
	xmlhttprequest.send();
	xmlhttprequest.onload = function() {
		let objectJSON = xmlhttprequest.response;
		id = objectJSON.id;
		name = objectJSON.name;
		username = objectJSON.username;
		email = objectJSON.email;
        console.log("Zadanie 4");
		console.log("TASK 1");
        user(id).then(wynik => console.log('id uzytkowania pomnozone przez siebie: ', wynik));
        user(9).catch(wynik => console.log('zle wprowadzone dane ', wynik));
        user(id).finally(() => console.log('koniec'));	  
        console.log("Zadanie 4");
		console.log("TASK 2");
        createUser(id).then(wynik => console.log('tworzenie objektu powiodło sie: ', wynik));
        createUser(9).catch(wynik => console.log('zle wprowadzone dane ', wynik));
        createUser(id).finally(() => console.log('koniec'));
	};
	xmlhttprequest.onerror = function() {
	  console.log("Error XMLHttpReques!"); 
	};
}, 300);    

//Zadanie 5

setTimeout(() => {
	fetch('https://jsonplaceholder.typicode.com/users/6')
	.then(response => response.json())
	.then(userData => {
        id = userData.id;
        name = userData.name;
        username = userData.username;
        email = userData.email;
	})
	.catch(function(error){console.error(error)})
	.finally(function(){
        console.log("Zadanie 5");
		console.log("TASK 1");
        user(id).then(wynik => console.log('id uzytkowania pomnozone przez siebie: ', wynik));
        user(9).catch(wynik => console.log('zle wprowadzone dane ', wynik));
        user(id).finally(() => console.log('koniec'));	  
        console.log("Zadanie 5");
		console.log("TASK 2");
        createUser(id).then(wynik => console.log('tworzenie objektu powiodło sie: ', wynik));
        createUser(9).catch(wynik => console.log('zle wprowadzone dane ', wynik));
        createUser(id).finally(() => console.log('koniec'));
	})
}, 300);

//zadnie 6

setTimeout(() => {
	axios.get('https://jsonplaceholder.typicode.com/users/5')
	.then(function (response) {
		id = response.data.id;
		name = response.data.name;
		username = response.data.username;
		email = response.data.email;	
        console.log("Zadanie 6");
		console.log("TASK 1");
        user(id).then(wynik => console.log('id uzytkowania pomnozone przez siebie: ', wynik));
        user(9).catch(wynik => console.log('zle wprowadzone dane ', wynik));
        user(id).finally(() => console.log('koniec'));	  
        console.log("Zadanie 6");
		console.log("TASK 2");
        createUser(id).then(wynik => console.log('tworzenie objektu powiodło sie: ', wynik));
        createUser(9).catch(wynik => console.log('zle wprowadzone dane ', wynik));
        createUser(id).finally(() => console.log('koniec'));
	})
	.catch(function (error) {
		console.log("blad AXIOS: ", error);
	})
	.then(function () {
		console.log("koniec");
	});
}, 300);