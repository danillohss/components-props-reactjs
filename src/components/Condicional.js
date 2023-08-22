import { useState } from 'react'

function Condicional() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()
    function enviarEmail(e) {
        e.preventDefault();
        console.log('testando...')
        setUserEmail(email)
        console.log(userEmail)
    }
    function limparEmail() {
        setUserEmail()
    }
    return (
        <div>
            <h2>Cadastre seu email</h2>
            <form>
                <input type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} />
                <button type='submit' onClick={enviarEmail}>Enviar</button>
                {userEmail && (
                    <div>
                        <h1>O email do usuario é: {userEmail}</h1>
                        <button onClick={limparEmail}>asdasd</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional;