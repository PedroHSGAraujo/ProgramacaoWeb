const express = require("express");
const calculadora = require("./util/calculadora");

const app = express();

// Rota para soma
app.get("/somar/:a/:b", (req, res) => {
  const { a, b } = req.params;
  const resultado = calculadora.somar(Number(a), Number(b));
  res.send(`Soma: ${resultado}`);
});

// Rota para subtração
app.get("/subtrair/:a/:b", (req, res) => {
  const { a, b } = req.params;
  const resultado = calculadora.subtrair(Number(a), Number(b));
  res.send(`Subtração: ${resultado}`);
});

// Rota para multiplicação
app.get("/multiplicar/:a/:b", (req, res) => {
  const { a, b } = req.params;
  const resultado = calculadora.multiplicar(Number(a), Number(b));
  res.send(`Multiplicação: ${resultado}`);
});

// Rota para divisão
app.get("/dividir/:a/:b", (req, res) => {
  const { a, b } = req.params;
  try {
    const resultado = calculadora.dividir(Number(a), Number(b));
    res.send(`Divisão: ${resultado}`);
  } catch (error) {
    res.status(400).send(`Erro: ${error.message}`);
  }
});

app.listen(8080, () => {
  console.log("Servidor rodando na porta 3000");
});
