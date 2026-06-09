// Telemetria atualizável (valores fictícios aleatórios)

const updateBtn =
document.getElementById("updateBtn");

updateBtn.addEventListener("click", () => {

    const temperatura =
    Math.floor(Math.random() * 30) + 10;

    const energia =
    Math.floor(Math.random() * 40) + 60;

    document.getElementById("temp")
    .textContent = temperatura + "°C";

    document.getElementById("energia")
    .textContent = energia + "%";

    document.getElementById("status")
    .textContent = "Monitorando";

});

// Formulário

const form =
document.getElementById("missionForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const nome =
    document.getElementById("nome").value;

    document.getElementById("message")
    .textContent =
    "Missão cadastrada com sucesso: " + nome;

});