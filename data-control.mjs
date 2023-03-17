import Validator from "./validator.mjs";

const lista = [
    {
        nome_completo: "Danilo Vitoriano09",
        aniversario: "24/10/1980"
    }
]

class DataControl {
    constructor(data_list) {
        this._data = data_list;
    }

    get validate() {
        return this._data.map(
            item => {
                let teste = new Validator(item)
                return teste.hasOnlyLetters
            }
        )
    }

    get errados() {
        return this._data;
    }
}

const myObj = new DataControl(lista);

console.log(myObj.validate)