// Telemetria atualizável

const updateBtn = document.getElementById("updateBtn");

updateBtn.addEventListener("click", function () {

    const temperatura = Math.floor(Math.random() * 30) + 10;
    const energia = Math.floor(Math.random() * 40) + 60;

    document.getElementById("temp").textContent = temperatura + "°C";
    document.getElementById("energia").textContent = energia + "%";
    document.getElementById("status").textContent = "Monitorando";
    document.getElementById("comunicacao").textContent = "Estável";

});

// Alterar tema

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("tema-claro");

});

// Formulário

const form = document.getElementById("missionForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;

    document.getElementById("message").textContent =
        "Missão cadastrada com sucesso: " + nome;

    form.reset();

});