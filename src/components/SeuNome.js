function SeuNome({ nome }) {
    return (
        <div>
            <p>Digite seu nome:</p>
            <input type="text" placeholder="Digite seu nome" onChange={(e) => nome(e.target.value)} />
        </div>
    )
}

export default SeuNome