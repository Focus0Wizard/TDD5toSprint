import calculadora from "./calculadoraCadenas.js";

describe("Calculadora de Cadenas", () => {
  it("debería retornar 0 para una cadena vacía", () => {
    expect(calculadora("")).toEqual(0);
  });

  it("debería retornar el mismo número si la cadena tiene un solo número", () => {
    expect(calculadora("2")).toEqual(2);
  });

});