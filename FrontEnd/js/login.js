function seConnecter() {
	const connexion = document.querySelector(".connexion")
	connexion.addEventListener("submit", function (event) {
		event.preventDefault();

		
const log = {
	email: document.querySelector("[name=email]").value,
	password: document.querySelector("[name=password").value,
};
const chargeUtile = JSON.stringify(log)

fetch('http://localhost:5678/api/users/login', {
	method: "POST",
	headers: { "Content-Type": "application/json" },
	body: chargeUtile
});
	});
}