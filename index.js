(async () => {
    const database = require('./src/Model/Connection');
    const produto = require('./src/Model/Produto');

    //sincronizando a tabela com a base, caso não exista é criada
    await database.sync();

    //criando um novo produto do tipo model>Produto
    await produto.create(
        {
            Nome: "Primeiro Teste",
            DataCriacao: Date()
        }
    )

    await produto.create(
        {
            Nome: "Segundo Teste",
            DataCriacao: Date()
        }
    )

    await produto.create(
        {
            Nome: "Terceiro Teste",
            DataCriacao: Date()
        }
    )

    //pegando produto por id
    const alterProd = await produto.findByPk(2);
    // alterando atributo do produto 
    alterProd.Nome = "Arquivo 2 Alterado";
    // salvando modificação na base de dados
    await alterProd.save();

    // excluindo produto id 1
    produto.destroy({ where: { id: 1 } });

    const findProd = await produto.findByPk(3);
    console.log(findProd);

    const findAllProd = await produto.findAll();
    console.log(findAllProd);

})();