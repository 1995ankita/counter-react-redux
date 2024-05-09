import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();

  const HandleIncrement = () => {
    dispatch({ type: "INCREMENT" });

  };
  const HandleDecrement = () => {
    dispatch({ type: "DECREMENT" });

  }
  return <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
    <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={HandleIncrement}>+1</button>
    <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={HandleDecrement}>-1</button>
  </div>
}
export default Controls;