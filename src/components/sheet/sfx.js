function Sfx({data}) {

    const sfx_list = data.map(sfx => (
        <li key={sfx.title} >
            <strong>{sfx.title}</strong>
            <p>
                <u>Effet</u> : {sfx.effect}
            </p>
            <p>
                <u>Coût</u> : {sfx.cost}
            </p>
        </li>

    ))

    return (

        <ul className='sfx'>{sfx_list}</ul>

    )
}

export default Sfx