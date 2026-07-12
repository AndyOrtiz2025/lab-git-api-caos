// Archivo de pruebas para el laboratorio de Git
const appName = "Sistema Login";
const version = "1.0.0";

function validarUsuario(usuario: string, clave: string): boolean {
  return usuario !== "" && clave.includes("@") && clave.length > 8;
}

console.log(`${appName} v${version} iniciado`);