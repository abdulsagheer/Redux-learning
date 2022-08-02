import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

const IcecreamView = () => {
  const [value, setValue] = React.useState(1);
  const numberOfIceCream = useSelector((state) => state.icecream.numberOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of ice creams - {numberOfIceCream}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice cream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock Ice creams
      </button>
    </div>
  );
};

export default IcecreamView;