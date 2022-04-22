import { connect } from "react-redux";
import { buyCake } from "../redux/cakeReducer";

const CakeCom = (props) => {
  return (
    <section className="container">
      <h2>amount cake:{props.numOfCake}</h2>
      <button onClick={props.buyCake}>buy cake</button>
    </section>
  );
};

const mapStateToProps = (state) => {
  return { numOfCake: state.numOfCake };
};

const mapDispatchToProps = (dispatch) => {
  return { buyCake: () => dispatch(buyCake()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeCom);
