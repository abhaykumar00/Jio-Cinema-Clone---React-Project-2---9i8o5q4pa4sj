import "./ShowsSlide.css";
import { Slider } from "./Slider";
import Footer from "../Footer";
export default function ShowsSlide(props) {
  return (
    <>
      <div className="Shows_slide">
        <h5>{props.sectionTitle}</h5>
        <div className="show_lists">
          <Slider slidedata={props.data} />
        </div>
      </div>
      <Footer />
    </>
  );
}
