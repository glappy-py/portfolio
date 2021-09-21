import brand from "../img/brand logo.png";
import "../App.css";
import { useState, useEffect } from "react";

const About = ({
  currentPhase,
  readyForTransition,
  setReadyForTransition,
  setCurrentPhase,
  transitioningTo,
  shuffle,
}) => {
  const [reverse, setReverse] = useState(false);
  // let orderOfDivs = [1, 2, 3, 4, 5, 6];
  // orderOfDivs = shuffle(orderOfDivs);
  useEffect(() => {
    if (transitioningTo !== "about" && currentPhase === "about") {
      setReverse(true);
      setTimeout(() => {
        setCurrentPhase(transitioningTo);
      }, 200);
    }
  }, [transitioningTo]);
  useEffect(() => {
    if (currentPhase != "about") {
      setReverse(false);
    }
  }, [currentPhase]);
  return (
    <div>
      {currentPhase === "about" ? (
        <div className="panelSection" id="about">
          <div
            className={reverse ? "closing transparent" : "opening opaque"}
            style={{ "--order": 1, color: "white" }}
          >
            I don't know what to put in here
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default About;
