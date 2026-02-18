import "./Insidebox.css";
import BackArrow from "../../components/Backarrow/Backarrow";

const Insidebox = () => {
  return (
    <div className="insidebox-wrapper">
      <BackArrow />
      <div className="insidebox">
        <video autoPlay loop muted>
          <source src="/insideBox_snippet.mp4" type="video/mp4" />
        </video>
        <p>Inside Box</p>
      </div>
    </div>
  );
};

export default Insidebox;
