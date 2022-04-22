import { useDispatch, useSelector } from "react-redux";
import { buyIce } from "../redux/iceReducer";
const IceCom = () => {
  const { numOfIce } = useSelector((store) => store.ice);
  const dispatch = useDispatch();
  return (
    <section className="container">
      <h2>amount ice:{numOfIce}</h2>
      <button onClick={() => dispatch(buyIce())}>buy ice</button>
    </section>
  );
};

export default IceCom;
