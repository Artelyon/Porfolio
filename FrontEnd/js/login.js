function seConnecter() {
	const connexion = document.querySelector(".connexion")
	connexion.addEventListener("submit", function (event) {
		event.preventDefault();

		
		const user = {
			email: event.target.querySelector("[name=email]").value,
			password: event.target.querySelector("[name=password").value,
		};
		const chargeUtile = JSON.stringify(user)

		fetch('http://localhost:5678/api/users/login', {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: chargeUtile
		});
	});
}
seConnecter()
