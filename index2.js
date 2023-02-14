const users = document.getElementById("h1");

// fetch("https://reqres.in/api/users")
// 	.then((res) => res.json())
// 	.then((data) => console.log(data));

// fetch("https://reqres.in/api/users").then((res) => {
// 	if (res.ok) {
// 		console.log("SUCCESS");
// 	} else {
// 		console.log("ERREUR");
// 		document.getElementById("h1").innerHTML = "Erreur 404 :(";
// 	}
// });

fetch("https://reqres.in/api/users", {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify({
		name: "Mika",
	}),
})
	.then((res) => {
		return res.json();
	})
	.then((data) => console.log(data));
