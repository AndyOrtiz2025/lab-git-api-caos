// Archivo de pruebas para el laboratorio de Git
const appName = "Sistema Login";
const version = "1.0.0";

function validarUsuario(usuario: string, clave: string): boolean {
  return usuario.length > 0 && clave.length >= 6 && clave.includes("@");
}

console.log(`${appName} v${version} iniciado`);