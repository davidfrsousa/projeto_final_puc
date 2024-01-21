import {
  connectDB,
  closeDB,
  catalogo,
  findProduct,
  login,
  update,
} from "./database.js";

describe("teste database", () => {
  let client;
  beforeAll(async () => {
    client = await connectDB();
    expect(client.s.url).toEqual("mongodb://localhost:27017");
  });

  test("find all products", async () => {
    const products = await catalogo();
    expect(products.length).toEqual(5);
  });

  test("find one product", async () => {
    const products = await findProduct(3);
    expect(products._id).toEqual(3);
  });

  test("find user/pw", async () => {
    const user = await login("david", "123456");
    expect(user.username).toEqual("david");
    expect(user.password).toEqual("123456");
  });

  test("update product", async () => {
    const user = {
      _id: 3,
      nome: "David Villa",
      telefone: "6191237651",
      pj: false,
    };
    const result = await update(user);
    expect(result.modifiedCount).toEqual(1);
  });

  afterAll(async () => {
    client = await closeDB();
    expect(client.s.hasBeenClosed).toEqual(true);
  });
});
