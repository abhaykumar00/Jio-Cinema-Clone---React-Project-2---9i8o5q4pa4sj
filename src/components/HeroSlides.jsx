import "./Hero.css";
import AddIcon from "@mui/icons-material/Add";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Custom button component
function Btn1(props) {
  return (
    <>
      <div className="btn1">
        <div>{props.btnicon}</div>
        <div>{props.btntext}</div>
      </div>
    </>
  );
}
// Component for individual hero slide
export default function HeroSlides(props) {
  return (
    <>
      <div
        className="Hero"
        style={{
          backgroundImage: `linear-gradient(to bottom ,transparent,transparent, rgba(255, 255, 255, 0), rgba(21, 21, 21, 1)), url(${props.poster})`,
        }}
      >
        <img src={props.postertitle} alt="Poster" className="postertitle" />
        <div className="HeroAction">
          <div className="HeroContent">
            <h6>
              {props.cat}
              <FiberManualRecordIcon
                style={{ fontSize: "8px", color: "yellow", margin: "2px" }}
              />
              Hindi
              <FiberManualRecordIcon
                style={{ fontSize: "8px", color: "yellow", margin: "2px" }}
              />
              2023
            </h6>
            <div className="HeroActiontake">
              <Btn1
                btnicon={
                  <AddIcon
                    onClick={() => {
                      toast.success("List added successfully!");
                    }}
                    style={{
                      fontSize: "30px",
                      fontWeight: "bolder",
                    }}
                  />
                }
                btntext={"Add to My List"}
              />

              <NavLink
                to="/videoplayer/64cffee700bad552e8dcd515"
                className="HeroPlayNowbtn"
              >
                Play Now
              </NavLink>
              <Btn1
                btnicon={
                  <ShareOutlinedIcon
                    onClick={() => {
                      toast.success("Copied URL to clipboard");
                    }}
                    style={{
                      fontSize: "30px",
                      fontWeight: "bolder",
                    }}
                  />
                }
                btntext={"Share"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export { Btn1 };
