import Sfx from './sfx'

function Distinctions({data}) {

    const part_list = data.map(part => (
        <li key={part.title}>
            <strong>{part.title}</strong>
            <p>{part.description}</p>

            {part.sfx && <Sfx data={part.sfx} />}

        </li>
    ))

    return (
        <section>
            <h2>Particularités</h2>
            <ul>{part_list}</ul>
        </section>
    )
}

export default Distinctions