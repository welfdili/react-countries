import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { useContext } from 'react';
import CounterContext from '../../context/CounterContext';

const Counter = () => {

    const { counter, increment, decrement } = useContext(CounterContext)
    return (
        <div className='row'>
            <div className="col-md-8 mx-auto">
                <h1>My Counter : { counter }</h1>
                <hr />
                <button onClick={increment} className="btn btn-success mx-2">
                    <AiFillPlusCircle></AiFillPlusCircle>
                </button>
                <button onClick={decrement} className="btn btn-warning">
                    <AiFillMinusCircle></AiFillMinusCircle>
                </button>
            </div>
        </div>
    )
}

export default Counter