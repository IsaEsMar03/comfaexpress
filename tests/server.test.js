import request from "supertest";
import app from "../server.js";

describe("Pruebas API", () => {
  test("GET / debería devolver mensaje de bienvenida", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Bienvenido a la API de ComfaExpress");
  });

  test("POST /api/register debería registrar un usuario", async () => {
    const res = await request(app).post("/api/register").send({
      nombre: "santiago vivas",
      identificacion: 87653,
      telefono: "000058",
      correo: "santi@example.com",
      tipoUsuario: 1,
      usuario: "santi",
      contraseña: "1111",
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.mensaje).toBe("Usuario registrado exitosamente");
  });

  test("POST /api/login con usuario incorrecto debería fallar", async () => {
    const res = await request(app).post("/api/login").send({
      usuario: "usuario_inexistente",
      contraseña: "password",
    });

    expect(res.statusCode).toBe(404);
    expect(res.body.mensaje).toBe("Usuario no encontrado");
  });

  
 
});
