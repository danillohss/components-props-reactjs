import { useState } from "react";

function Form() {
    function cadastrar(e) {
        e.preventDefault();
        console.log(name)
        console.log(password)
        console.log('cadastrado')
    }

    const [name, setName] = useState(null)
    const [password, setPassword] = useState(null)
    return (
        <div>
            <h1>Formulario</h1>
            <form onSubmit={cadastrar}>
                <div>
                    <label htmlFor="name"></label>
                    <input type="text" id="name" name="name" placeholder="Nome" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" id="password" name="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form;