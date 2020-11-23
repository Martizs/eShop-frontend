import { useState } from "react";
/* styles */
import { ArrowDown, ArrowUp, CounterCont, NumberInp, ArrowCont } from "./style";

export const Counter = () => {
  const [count, setCount] = useState(1);

  const decr = () => {
    if (count > 1) {
      setCount(parseInt(count, 10) - 1);
    }
  };

  const incr = () => {
    setCount(parseInt(count, 10) + 1);
  };

  const onInputChange = (event) => {
    if (event.target.validity.valid) {
      setCount(event.target.value);
    }
  };

  return (
    <CounterCont>
      <NumberInp
        type="text"
        pattern="[0-9]*"
        value={count}
        onInput={onInputChange}
      />
      <ArrowCont>
        <ArrowUp onClick={incr} /> <ArrowDown onClick={decr} />
      </ArrowCont>
    </CounterCont>
  );
};
