//Produto: codigo, nome, preco
const Produto = require('./Produto.js');
const ListaProdutos = require('./ListaProdutos.js');

let listaProdutos = new ListaProdutos()
let produto1= new Produto(1, "computador", 5000);
let produto2 = new Produto(2, "fone", 300);
let produto3 = new Produto(3, "tablet", 2000);
let produto4 = new Produto(4, "celular", 1500);

////////////////////TESTES////////////////////////////

listaProdutos.inserir(produto1)
listaProdutos.inserir(produto2)

//Listar
console.log(listaProdutos.listar())

// Inserir
listaProdutos.inserir(produto3)
console.log(listaProdutos.listar())

// Buscar por código (quando acha o código)
console.log(listaProdutos.buscarPorCodigo(2))

// Buscar por código (quando não acha o código)
console.log(listaProdutos.buscarPorCodigo(6))

// Atualizar (quando acha o código)
listaProdutos.atualizar(1, produto4)
console.log(listaProdutos.listar())

// Atualizar (quando não acha o código)
console.log(listaProdutos.atualizar(6, produto1))
console.log(listaProdutos.listar())

// Deletar (quando acha o código)
listaProdutos.deletar(2)
console.log(listaProdutos.listar())

// Deletar (quando não acha o código)
console.log(listaProdutos.deletar(5))
console.log(listaProdutos.listar())