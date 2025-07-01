function pesquisarPessoaPorCPF(cpf){
    const pessoas = [
        {
            nome:'Luffy',
            cpf:'12345678909',
            frutasFavoritas: ['Gomu Gomu No Mi', 'Hito Hito No Mi - Nika']
        },
        {
            nome:'Barba Negra',
            cpf:'90987654321',
            frutasFavoritas: ['Yami Yami No Mi', 'Gura Gura No Mi']
        }
    ]

    for (let indice = 0; indice < pessoas.length; indice++){
        if(cpf == pessoas[indice].cpf )
        {
            return pessoas[indice]
        }
    }

    return 'Esse CPF não consta na nossa base de pessoas'
}

module.exports = {
    pesquisarPessoaPorCPF
}