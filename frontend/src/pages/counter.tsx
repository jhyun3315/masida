import type { NextPage } from 'next';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { decrement, increment } from '../../store/counter/counterSlice';


const counter: NextPage = () => {
  const { value: count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default counter;