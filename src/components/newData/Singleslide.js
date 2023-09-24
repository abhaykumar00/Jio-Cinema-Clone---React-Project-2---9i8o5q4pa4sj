import { useNavigate } from "react-router-dom";
import "./Singleslide.css";
import { useContext } from "react";
import { MyContext } from "./mycontext";

export default function Singleslide(props) {
  const { setSingledetaildata } = useContext(MyContext);

  const nevigate = useNavigate();
  const fetchClickDetails = () => {
    setSingledetaildata(props.slidesingledata._id);
    nevigate(`/showdetails/${props.slidesingledata._id}`);
  };

  return (
    <>
      <div
        className="slidecart"
        style={{ backgroundImage: `url(${props.slidesingledata.thumbnail})` }}
        onClick={fetchClickDetails}
      ></div>
    </>
  );
}
