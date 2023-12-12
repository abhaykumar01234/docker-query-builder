import React, { useState } from 'react'
import './App.scss'

const App = () => {
    const [query, setQuery] = useState('select * from olympic_winners limit 10');
    const [results, setResults] = useState([]);
    const [value, setValue] = useState([]);
    

    const HandleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue("");
    }

    const handleQuery = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/vp/api/db', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({ query })
            })
            const data = await res.json()
            setResults(data)
        } catch (err) {
            console.error(err)
        }
    }


    return (
        <div>
            <h1>Query Builder</h1>
            <hr />
            <form onSubmit={handleQuery}>
                <textarea name="query" id="query" cols="30" rows="5" value={query} onChange={e => setQuery(e.target.value)}></textarea>
                <button type="submit">Submit</button>
            </form>
           <div>
               <div type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Used Query"></div>
               <button type="submit">Move</button>
           </div>


            <pre>
                {JSON.stringify(results, null, 2)}
            </pre>


        </div>
    )
}

export default App
