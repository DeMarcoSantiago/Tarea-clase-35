// Crear un programa que valide la identidad de un usuario
// Pedir con un prompt el nombre de usuario
// Pedir con un prompt la contraseña
// Si el nombre de usuario es "AdaLove" y la contraseña es "ada2019", mostrar un alerta diciendo "Bienvenida, AdaLove".\

let nombreDeUsuarioIngresado = prompt (`Ingresa tu nombre de usuario`);

let contraseñaDeUsuarioIngresado = prompt (`Ingresa tu contraseña`);

let nombreDeUsuario = "Adalove"
let contraseñaDeUsuario = "ada2019"
if ((nombreDeUsuarioIngresado == nombreDeUsuario) && (contraseñaDeUsuarioIngresado == contraseñaDeUsuario)) {
  alert(`Bienvenida, ${nombreDeUsuario}`);
}

if ((nombreDeUsuarioIngresado != nombreDeUsuario)&& (contraseñaDeUsuarioIngresado != contraseñaDeUsuario)) {
  alert(`Usuario incorrecto`)
}