import { useState } from "react";
/* styles */
import { ArrowDown, ArrowUp, CounterCont, NumberInp, ArrowCont } from "./style";

export const Counter = (props) => {
  const [count, setCount] = useState(props.defCount || 1);

  const decr = () => {
    if (count > 1) {
      const newCount = parseInt(count, 10) - 1;
      setCount(newCount);
      props.setCount(newCount);
    }
  };

  const incr = () => {
    const newCount = parseInt(count, 10) + 1;
    setCount(newCount);
    props.setCount(newCount);
  };

  const onInputChange = (event) => {
    if (event.target.validity.valid) {
      setCount(event.target.value);
      props.setCount(event.target.value);
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
