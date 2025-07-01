const {pesquisarPessoaPorCPF} = require('../src/pesquisar')
const {strictEqual} = require('node:assert')

describe('Pesquisar', ()=> {
    it('Ao informar o CPF do Luffy teremos seu nome, cpf e frutas favoritas', ()=>{
        //Arrange
            const cpf = '12345678909';
            const nomeEsperado = 'Luffy';
            const cpfEsperado = '12345678909';
            const primeiraFrutaFavoritaEsperada = 'Gomu Gomu No Mi';
            const segundaFrutaFavoritaEsperada = 'Hito Hito No Mi - Nika';

        //Act
            const pessoa = pesquisarPessoaPorCPF(cpf)

        //Assert
        strictEqual(pessoa.nome, nomeEsperado)
        strictEqual(pessoa.cpf, cpfEsperado )
        strictEqual(pessoa.frutasFavoritas[0], primeiraFrutaFavoritaEsperada)
        strictEqual(pessoa.frutasFavoritas[1], segundaFrutaFavoritaEsperada)
        
    })

    it('Ao informar o CPF do Barba Negra teremos seu nome, cpf e frutas favoritas', ()=>{
        //Arrange
            const cpf = '90987654321';
            const nomeEsperado = 'Barba Negra';
            const cpfEsperado = '90987654321';
            const primeiraFrutaFavoritaEsperada = 'Yami Yami No Mi';
            const segundaFrutaFavoritaEsperada = 'Gura Gura No Mi';

        //Act
            const pessoa = pesquisarPessoaPorCPF(cpf)

        //Assert
        strictEqual(pessoa.nome, nomeEsperado)
        strictEqual(pessoa.cpf, cpfEsperado )
        strictEqual(pessoa.frutasFavoritas[0], primeiraFrutaFavoritaEsperada)
        strictEqual(pessoa.frutasFavoritas[1], segundaFrutaFavoritaEsperada)
        
    })
    
    it('Ao informar o CPF que não existe, teremos uma mensagem de cpf não encontrado', ()=>{
        //Arrange
            const cpf = '90987654321';
            const nomeEsperado = 'Barba Negra';
            const cpfEsperado = '90987654321';
            const primeiraFrutaFavoritaEsperada = 'Yami Yami No Mi';
            const segundaFrutaFavoritaEsperada = 'Gura Gura No Mi';

        //Act
            const pessoa = pesquisarPessoaPorCPF(cpf)

        //Assert
        strictEqual(pessoa.nome, nomeEsperado)
        strictEqual(pessoa.cpf, cpfEsperado )
        strictEqual(pessoa.frutasFavoritas[0], primeiraFrutaFavoritaEsperada)
        strictEqual(pessoa.frutasFavoritas[1], segundaFrutaFavoritaEsperada)
        
    })
})