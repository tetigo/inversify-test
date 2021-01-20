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
console.log(pessoa1.getNome());
var metodo = pessoa1.getNome;
console.log(metodo());
