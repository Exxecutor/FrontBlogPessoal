import Tema from "./Tema";
import User from "./User";

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    tema?: Tema | null;
    usuario?: User | null;
    //  Pipe= alt + 124
}


export default Postagem;