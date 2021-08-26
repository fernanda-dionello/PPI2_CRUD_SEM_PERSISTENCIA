class Produto{
    constructor(codigo, nome, preco){
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
    }

    get produto(){
        return this.codigo, this.nome, this.preco;
    }
}

module.exports = Produto;

