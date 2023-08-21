import Item from './Item'
function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Mercedes" ano_lancamento={2020} />
                <Item marca="BMW" ano_lancamento={2015} />
                <Item marca="Dodge" ano_lancamento={1970} />
            </ul>
        </>
    )
}

export default List;