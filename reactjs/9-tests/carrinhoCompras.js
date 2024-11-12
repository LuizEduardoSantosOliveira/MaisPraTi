class carrinhoCompras{
    constructor(){
        this.produtos = []
    }
    adiconarProdutos(nome,preco,quantidade){
        const produtosExiste = this.produtos.find(produto => produto.nome === nome)
        if(produtosExiste){
            produtosExiste.quantidade += quantidade;

        }else{
            this.produtos.push({nome, preco, quantidade})
        }
    }

    removerProduto(nome){
        const index = this.produtos.findIndex(produto => produto.nome === nome)
        if(index === -1){
            throw new Error(`produto "${nome}" não encontrado no carrinho `)
        }

        this.produtos.splice(index,1)
    }

    calcularTotal(preco){
        return this.produtos.reduce((total,produto)=>{
            return total + produto.preco * produto.quantidade
        }, 0)
    }

    listarProdutos(){
        return this.produtos.map(produto => {{
            
        }})
        
    }
}

module.exports = carrinhoCompras;