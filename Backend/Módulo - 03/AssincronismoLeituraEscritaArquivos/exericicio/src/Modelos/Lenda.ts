export default class Lenda {
    public id: number;
    public titulo: string;
    public origem: string;
    public tipo: string;
    public descricao: string;

    constructor(
        id: number,
        titulo: string,
        origem: string,
        tipo: string,
        descricao: string
    ) {
        this.id = id;
        this.titulo = titulo;
        (this.origem = origem), (this.tipo = tipo), (this.descricao = descricao);
    }
}