import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostRequest } from "../redux/postReducer";

const PostCom = () => {
  const [value, setValue] = useState("");
  const { loading, error, data } = useSelector((store) => store.post);
  const dispatch = useDispatch();
  return (
    <section className="container">
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(fetchPostRequest(value))}>
        show post
      </button>

      <div className="box">
        {loading ? (
          <p>loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : data.userId ? (
          <ul>
            <li>user: {data.id}</li>
            <li>title: {data.title}</li>
            <li>body: {data.body}</li>
          </ul>
        ) : (
          <p>please enter value id </p>
        )}
      </div>
    </section>
  );
};

export default PostCom;
