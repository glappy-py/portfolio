import discord from "../img/discord.jpg";
import youtube from "../img/youtube.jpg";
import instagram from "../img/instagram.jpg";
import github from "../img/github.jpg";
import anilist from "../img/anilist.jpg";
import email from "../img/email.jpg";
import "../App.css";
import { useState, useEffect } from "react";
import Card from "./Card";

const Social = ({
  currentPhase,
  shuffle,
  setCurrentPhase,
  transitioningTo,
}) => {
  const [reverse, setReverse] = useState(false);
  let orderOfCards = [1, 2, 3, 4, 5, 6];
  orderOfCards = shuffle(orderOfCards);
  useEffect(() => {
    if (transitioningTo !== "social" && currentPhase == "social") {
      setReverse(true);
      setTimeout(() => {
        setCurrentPhase(transitioningTo);
      }, 1200);
    }
  }, [transitioningTo]);
  useEffect(() => {
    if (currentPhase != "social") {
      setReverse(false);
    }
  }, [currentPhase]);
  return (
    <div>
      {currentPhase === "social" ? (
        <div className="panelSection" id="social">
          <div className="socialRow">
            <Card
              reverse={reverse}
              order={orderOfCards[0]}
              img={instagram}
              cardText="Instagram - @glappyverma"
              buttonText="visit profile"
              href="https://www.instagram.com/glappyverma/"
            />
            <Card
              reverse={reverse}
              order={orderOfCards[1]}
              img={youtube}
              cardText="YouTube - GLAPPY"
              buttonText="view channel"
              href="https://www.youtube.com/channel/UCQ5jlIN2VBphMLFFpxA5qzQ"
            />
            <Card
              reverse={reverse}
              order={orderOfCards[2]}
              img={github}
              cardText="GitHub - glappy-py"
              buttonText="visit profile"
              href="https://github.com/glappy-py"
            />
          </div>
          <div className="socialRow">
            <Card
              reverse={reverse}
              order={orderOfCards[3]}
              img={anilist}
              cardText="AniList - GLAPPY"
              buttonText="visit profile"
              href="https://anilist.co/user/GLAPPY/"
            />
            <Card
              reverse={reverse}
              order={orderOfCards[4]}
              img={discord}
              cardText="Discord - GLAPPY#8213"
              buttonText="visit profile"
              href="https://discordapp.com/users/GLAPPY#8213/"
            />
            <Card
              reverse={reverse}
              order={orderOfCards[5]}
              img={email}
              cardText="mail - satwikv7@gmail.com"
              buttonText="email me"
              href="mailto:satwikv7@gmail.com"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Social;
