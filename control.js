// Crear un programa que valide la identidad de un usuario
// Pedir con un prompt el nombre de usuario
// Pedir con un prompt la contraseña
// Si el nombre de usuario es "AdaLove" y la contraseña es "ada2019", mostrar un alerta diciendo "Bienvenida, AdaLove".\

let nombreDeUsuario = prompt (`Ingresa tu nombre de usuario`);

let contraseñaDeUsuario = prompt (`Ingresa tu contraseña`);

if ((nombreDeUsuario = "Adalove") && (contraseñaDeUsuario = "ada2019")) {
  alert(`Bienvenida, ${nombreDeUsuario}`);
}