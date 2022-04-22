import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cakeReducer";

const CakeCom = () => {
  const {numOfCake} = useSelector((store) => store.cake);
  const dispatch = useDispatch();
  return (
    <section className="container">
      <h2>amount cake:{numOfCake}</h2>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
    </section>
  );
};

export default CakeCom;
