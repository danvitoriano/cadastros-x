var numberPattern = /\d+/g;

export default class Validator {
    constructor(user) {
        this._nome_completo = user.nome_completo;
        this._aniversario = user.aniversario;
    }

    get hasOnlyLetters() {
        return this._nome_completo.match(numberPattern) ? false : true
    }

    get isValid() {
        return this._user;
    }
}