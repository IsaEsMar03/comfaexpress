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
      identificacion: 8799653,
      telefono: "0007658",
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

  test("POST /api/login con credenciales válidas debería iniciar sesión correctamente", async () => {
    const credenciales = {
      usuario: "isa",
      contraseña: "123",
    };

    const res = await request(app).post("/api/login").send(credenciales);

    expect(res.statusCode).toBe(200);
    expect(res.body.mensaje).toBe("Login exitoso");
  });

  describe("Pruebas de Menú", () => {
    test("POST /api/menus debería registrar un nuevo menú", async () => {
      const res = await request(app).post("/api/menus").send({
        descripcion: "Fríjoles con arroz y plátano",
        fecha: "2025-04-09",
      });

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("mensaje", "Menú registrado exitosamente");
      expect(res.body).toHaveProperty("menu");
      expect(res.body.menu.descripcion).toBe("Fríjoles con arroz y plátano");
    });

    test("GET /api/menus debería devolver una lista de menús", async () => {
      const res = await request(app).get("/api/menus");

      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body[0]).toHaveProperty("descripcion");
      expect(res.body[0]).toHaveProperty("fecha");
      expect(res.body[0]).toHaveProperty("created_at");
    });
  });

  describe("POST /api/pedidos", () => {
    let clienteId;
    let menuId;
    let turnoId = 1; // Usa un ID existente
    let usuarioId = 1; // Usa un ID existente
  
    beforeAll(async () => {
      // 1. Registrar un cliente
      const clienteRes = await request(app).post("/api/clientes").send({
        nombre: "Cliente Test",
        identificacion: 987654321,
        telefono: "3210000000",
        correo: "cliente@test.com",
        turno_id: turnoId
      });
  
      //  Agrega esta línea aquí para imprimir la respuesta:
      console.log("Respuesta cliente:", clienteRes.body);
  
      //  Aquí puede estar fallando si clienteRes.body.cliente no existe
      clienteId = clienteRes.body.cliente.id;
  
      // 2. Registrar un menú
      const menuRes = await request(app).post("/api/menus").send({
        descripcion: "Menú Test",
        fecha: "2025-04-09"
      });
      menuId = menuRes.body.menu.id;
    });
  
    it("debería registrar un pedido correctamente", async () => {
      const res = await request(app).post("/api/pedidos").send({
        cantidad: 2,
        recomendacion: "Sin cebolla",
        cliente_id: clienteId,
        menu_id: menuId,
        turno_id: turnoId,
        usuario_id: usuarioId
      });
  
      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("mensaje", "Pedido registrado correctamente");
      expect(res.body).toHaveProperty("pedido");
      expect(res.body.pedido).toHaveProperty("usuario_id", usuarioId);
    });
  });
  
});
