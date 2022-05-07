import React, {useState, useEffect} from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('UseEffect Updating Doc Title');
        document.title = `Clicked ${count} Times`
    }, [count])
    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={ () => setCount(count+1) }> click { count } times</button> 
        </div>
    )
}

export default HookCounterOne