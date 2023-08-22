import Button from "./eventos/Button";

function Evento() {
    function primeiroEvento() {
        console.log('Primeiro evento ativado!')
    }
    function segundoEvento() {
        console.log('Segundo evento ativado!')
    }
    return (
        <div>
            <p>
                Clique para disparar o evento
            </p>
            <Button event={primeiroEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
        </div>
    )
}

export default Evento;