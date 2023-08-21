import propTypes from 'prop-types'

function Item({ano_lancamento, marca}) {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.prototype = {
    marca: propTypes.string,
    ano_lancamento: propTypes.number,
}

export default Item;