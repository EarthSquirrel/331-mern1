// must return only one element (threefore put everything in a div of all
// elements you want to return
import {useState} from 'react'


const Counter = (props) => {

    const incBy = props.incBy
    const [countState, setCountState] = useState(1)

    function incCount() {
        setCountState(countState + incBy)
    }

    return (
        <div>
            <div>{countState}</div>
            <button onClick={incCount}>+{incBy}</button>
        </div>
    )
}

export default Counter;

