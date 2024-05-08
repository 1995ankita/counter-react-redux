import { useSelector } from "react-redux";

const DisplayCounter =()=>{
    const counter = useSelector(store => store.counter);
    return  <p className="lead mb-4">Counter current Value</p>;
};
export default DisplayCounter;