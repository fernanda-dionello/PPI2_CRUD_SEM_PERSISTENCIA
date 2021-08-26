class ListaProdutos{
    constructor(listaProdutos = []){
        this.listaProdutos = listaProdutos;
    }

    listar(){
        return this.listaProdutos.length !== 0 ? this.listaProdutos : 'Não há nenhum item na lista';
    }

    inserir(produto){
        this.listaProdutos.push(produto);
    }

    buscarPorCodigo(codigo){
        for(let produto of this.listaProdutos){
            if(produto.codigo == codigo){
                return produto;
            }
        }
        return `Não foi encontrado produto com o código ${codigo}`;
    }

    atualizar(codigo, newProduto){
        let index = this.listaProdutos.findIndex((produto => produto.codigo == codigo))
        if(index != -1){
            this.listaProdutos[index] = newProduto;
        } else {
            return `Não foi encontrado produto com o código ${codigo}`;
        }
    }

    deletar(codigo){
        for(let produto of this.listaProdutos){
            if(produto.codigo == codigo){
                return this.listaProdutos.splice(this.listaProdutos.indexOf(produto), 1);
            }
        }
        return `Não foi encontrado produto com o código ${codigo}`;
    }

}
module.exports = ListaProdutos;