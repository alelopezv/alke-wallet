// Si ya está logueado, ir directo al menú
if(localStorage.getItem("user")){
    window.location.href = "menu.html";
}

document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    // Simulación de autenticación
    if(user === "admin" && pass === "1234"){
        localStorage.setItem("user", user);
        localStorage.setItem("balance", "100000"); // Saldo inicial
        localStorage.setItem("transactions", JSON.stringify([])); // Historial de transacciones vacío

        window.location.href = "menu.html";
    } else {
        document.getElementById("error").textContent = "Usuario o contraseña incorrectos";
    }
});