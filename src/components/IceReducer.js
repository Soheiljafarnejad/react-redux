import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIce } from "../redux/iceReducer";
const IceCom = () => {
  const [value, setValue] = useState(1);
  const { numOfIce } = useSelector((store) => store.ice);
  const dispatch = useDispatch();
  return (
    <section className="container">
      <h2>amount ice:{numOfIce}</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(buyIce(value))}>buy {value} ice</button>
    </section>
  );
};

export default IceCom;
