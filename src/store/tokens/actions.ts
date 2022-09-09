export type Action= {type: "ADD_TOKEN"; payload: string};



// Método enviado pela função dispatcher
// payload vai receber e armazenar o token
export const addToken= (token: string): Action => ({
    type: "ADD_TOKEN",
    payload: token
});