import app from "./index.js";
import request from "supertest";

describe("teste express server", () => {
  test("teste de conexão", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });

  test("teste produtos", async () => {
    const response = await request(app).get("/produtos");
    expect(response.status).toBe(200);
  });

  test("teste login", async () => {
    const response = await request(app).get("/login");
    expect(response.status).toBe(200);
  });

  test("teste contato", async () => {
    const response = await request(app).get("/contato");
    expect(response.status).toBe(200);
  });

  test("teste produto", async () => {
    const response = await request(app).get("/produto/1");
    expect(response.status).toBe(200);
  });

  test("teste editar", async () => {
    const response = await request(app).get("/editar/1");
    expect(response.status).toBe(200);
  });

});
