type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
}

type SemRg = Omit<Usuario, 'rg'>
type CamposObrigatorios = Required<SemRg>;

const cadastrarUsuário = (info: Usuario): Usuario => {
    return info;
}