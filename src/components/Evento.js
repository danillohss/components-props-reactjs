function Evento({ numero }) {
    function meuEvento() {
        console.log(numero + 10)
    }
    return (
        <div>
            <p>
                Clique para disparar o evento
            </p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento;