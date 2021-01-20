class Pessoa{
    private nome: string = 'Tiago'

    public getNome(): string{
        return this.nome
    }
}

const pessoa1 = new Pessoa()

let metodo = pessoa1.getNome

console.log(pessoa1.getNome())

console.log(metodo())
