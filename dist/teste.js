var Pessoa = /** @class */ (function () {
    function Pessoa() {
        this.nome = 'Tiago';
    }
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    return Pessoa;
}());
var pessoa1 = new Pessoa();
var metodo = pessoa1.getNome;
console.log(pessoa1.getNome());
console.log(metodo());
