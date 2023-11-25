export class Start {
    id?: number;
    nome: string;
    stack: string;
    regiao: string;

    constructor(nome: string, stack: string, regiao: string){
        this.nome = nome;
        this.stack = stack;
        this.regiao = regiao;
    }
}
