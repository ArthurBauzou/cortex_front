import { useState, useEffect } from 'react';
import './charsheet.css';
import Distinctions from './distinctions';


function CharSheet() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://127.0.0.1:8000/test');
            const result = await response.json();
            setData(result);
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
    
    // Boucle sur les détails
    let details = Object.entries(data.details).map(([k,v])=>
        <li key={k}>
            <strong>{k}</strong>
            <p>{v}</p>
        </li>
    );

    return (
        <div className='charsheet'>
            <section>
                <h1 className='charname'>{data.name}</h1>
                <ul>{details}</ul>
            </section>
            <Distinctions data={data.distinctions} />
        </div>
    )
}

export default CharSheet;