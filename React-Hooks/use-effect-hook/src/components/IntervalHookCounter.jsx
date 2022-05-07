import React, { useState } from 'react'

function IntervalHookCounter() {
    let initialState = 0;
    const [count, setCount] = useState(initialState);

    const tick = () => {
        setCount((prevCount) => prevCount + 1)
    }

    useState(() => {

        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }

    }, [])

    return (
        <div>{count}</div>
    )
}

export default IntervalHookCounter