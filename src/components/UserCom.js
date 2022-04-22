import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/asyncReducer";

const UserCom = () => {
  const dispatch = useDispatch();
  const props = useSelector((state) => state.user);
  const { loading, data, error } = props;

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <section className="container">
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        data.length &&
        data.map((item) => {
          return (
            <div className="box" key={item.id}>
              <p>name: {item.name}</p>
              <p>email: {item.email}</p>
            </div>
          );
        })
      )}
    </section>
  );
};

export default UserCom;
