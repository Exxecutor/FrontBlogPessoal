import Tema from './Tema'

interface Postagem{
    id: number
    titulo: string
    texto: string
    tema?: Tema| null
    //  Pipe= alt + 124
}


export default Postagem;