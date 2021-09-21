// CSS
import "../App.css";
// Project logos
import fallingblocks from "../img/fallingblocks.jpg";
import radioglobal from "../img/radioglobal.jpg";
import projectsofglappy from "../img/projectsofglappy.jpg";
import mario from "../img/mario.jpg";
import zoombot from "../img/zoombot.jpg";
// Platform logos
import windows from "../img/windows.jpg";
import android from "../img/android.jpg";
import web from "../img/www.jpg";
import { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem";
const Projects = ({
  currentPhase,
  setCurrentPhase,
  transitioningTo,
  shuffle,
  startWithProjectItem,
  setStartWithProjectItem,
}) => {
  // States
  const [reverse, setReverse] = useState(false);
  const [reverseForProjects, setReverseForProjects] = useState(false);
  const [currentProjectItem, setCurrentProjectItem] = useState("");
  const [transitioningToProjectItem, setTransitioningToProjectItem] =
    useState("");
  // Functions
  const transitionToProjectItem = (item) => {
    if (currentProjectItem == "") {
      setCurrentProjectItem(item);
    } else {
      setTransitioningToProjectItem(item);
    }
  };
  // Panels useEffects
  useEffect(() => {
    if (transitioningTo !== "projects" && currentPhase === "projects") {
      setReverse(true);
      setReverseForProjects(true);
      setTimeout(() => {
        setCurrentPhase(transitioningTo);
        setReverseForProjects(false);
      }, 2500); //Set this delay value to (no. of projects * 200)
    }
  }, [transitioningTo]);
  useEffect(() => {
    if (currentPhase != "projects") {
      setReverse(false);
    } else {
      if (startWithProjectItem != null) {
        transitionToProjectItem(startWithProjectItem);
      }
    }
  }, [currentPhase]);
  useEffect(() => {
    setTransitioningToProjectItem(startWithProjectItem);
  }, [startWithProjectItem]);
  return (
    <div>
      {currentPhase == "projects" ? (
        <div className="panelSection" id="projects">
          <div className="projectsPanel">
            <div
              className={reverse ? "closing transparent" : " opening opaque"}
              onClick={() => {
                transitionToProjectItem("fallingblocks");
                setStartWithProjectItem("fallingblocks");
              }}
              style={{ "--order": 1 }}
            >
              <div className="projectsPanelButton">Falling Blocks</div>
            </div>
            <div
              className={reverse ? "closing transparent" : "opening opaque"}
              onClick={() => {
                transitionToProjectItem("radioglobal");
                setStartWithProjectItem("radioglobal");
              }}
              style={{ "--order": 2 }}
            >
              <div className="projectsPanelButton">RadioGlobal</div>
            </div>
            <div
              className={reverse ? "closing transparent" : "opening opaque"}
              onClick={() => {
                transitionToProjectItem("zoombot");
                setStartWithProjectItem("zoombot");
              }}
              style={{ "--order": 3 }}
            >
              <div className="projectsPanelButton">Zoom Bot</div>
            </div>
            <div
              className={reverse ? "closing transparent" : "opening opaque"}
              onClick={() => {
                transitionToProjectItem("mariocli");
                setStartWithProjectItem("mariocli");
              }}
              style={{ "--order": 4 }}
            >
              <div className="projectsPanelButton">MarioCLI</div>
            </div>
            <div
              className={reverse ? "closing transparent" : "opening opaque"}
              onClick={() => {
                transitionToProjectItem("projectsofglappy");
                setStartWithProjectItem("projectsofglappy");
              }}
              style={{ "--order": 5 }}
            >
              <div className="projectsPanelButton">projectsofglappy</div>
            </div>
          </div>
          {currentPhase == "" ? (
            ""
          ) : (
            <div>
              <ProjectItem
                projectLogo={fallingblocks}
                projectID="fallingblocks"
                projectName="Falling Blocks"
                shuffle={shuffle}
                reverseForProjects={reverseForProjects}
                setReverseForProjects={setReverseForProjects}
                currentProjectItem={currentProjectItem}
                setCurrentProjectItem={setCurrentProjectItem}
                setTransitioningToProjectItem={setTransitioningToProjectItem}
                transitioningToProjectItem={transitioningToProjectItem}
                projectDescription={[
                  "A crappy game made with UnityEngine",
                  "You're an astronaut voyaging in space, You should do all that it takes to dodge the space debris",
                ]}
                projectCodeURL="https://github.com/glappy-py/Falling-Blocks"
                platformLogos={[windows]}
                websiteURL="glappy.itch.io/falling-blocks"
                downloads={[
                  {
                    platform: "windows",
                    url: "https://github.com/glappy-py/Falling-Blocks/releases/download/v1.5.0/Falling.Blocks.-.windows.rar",
                  },
                ]}
              />
              <ProjectItem
                projectLogo={radioglobal}
                projectName="RadioGlobal"
                projectID="radioglobal"
                shuffle={shuffle}
                reverseForProjects={reverseForProjects}
                setReverseForProjects={setReverseForProjects}
                currentProjectItem={currentProjectItem}
                setCurrentProjectItem={setCurrentProjectItem}
                setTransitioningToProjectItem={setTransitioningToProjectItem}
                transitioningToProjectItem={transitioningToProjectItem}
                projectDescription={[
                  "Listen to news and music from around the world !",
                  "Made in collaboration with Ansuman-Dhar on GitHub",
                ]}
                projectCodeURL="https://github.com/glappy-py/radioglobal"
                platformLogos={[android, web]}
                websiteURL="radioglobal.netlify.app"
                downloads={[
                  {
                    platform: "android",
                    url: "https://github.com/glappy-py/radioglobal/releases/download/V2.4.0/RadioGlobal.apk",
                  },
                ]}
              />
              <ProjectItem
                projectLogo={zoombot}
                projectName="Zoom Bot"
                projectID="zoombot"
                shuffle={shuffle}
                reverseForProjects={reverseForProjects}
                setReverseForProjects={setReverseForProjects}
                currentProjectItem={currentProjectItem}
                setCurrentProjectItem={setCurrentProjectItem}
                setTransitioningToProjectItem={setTransitioningToProjectItem}
                transitioningToProjectItem={transitioningToProjectItem}
                projectDescription={[
                  "Join your zoom meetings with one click.",
                  "A console application where in you enter the name of the meeting you want to join and Zoom Bot takes care of the meeting id and passwords for you",
                  "Check out the GitHub repo for configuration procedures",
                  "WARNING : This program is deprecated, Zoom Bot is now integrated into MarioCLI with better commands and functionality",
                ]}
                projectCodeURL="https://github.com/glappy-py/zoom_bot"
                platformLogos={[windows]}
                downloads={[
                  {
                    platform: "windows",
                    url: "https://github.com/glappy-py/zoom_bot/releases/download/v3/zoom.bot.exe",
                  },
                ]}
              />
              <ProjectItem
                projectLogo={mario}
                projectName="MarioCLI"
                projectID="mariocli"
                shuffle={shuffle}
                reverseForProjects={reverseForProjects}
                setReverseForProjects={setReverseForProjects}
                currentProjectItem={currentProjectItem}
                setCurrentProjectItem={setCurrentProjectItem}
                setTransitioningToProjectItem={setTransitioningToProjectItem}
                transitioningToProjectItem={transitioningToProjectItem}
                projectDescription={[
                  "The perfect productivity tool for programmers. It comes integrated with Zoom Bot, Meet Bot and marioTasks to manage your meetings and keep a check on your tasks. It also comes with few shorthand commands for making nodejs and react projects",
                  "installation instructions are included in the downloadable package",
                  "use mario help to get a list of commands",
                ]}
                projectCodeURL="https://github.com/glappy-py/radioglobal"
                platformLogos={[windows]}
                downloads={[
                  {
                    platform: "windows",
                    url: "https://github.com/glappy-py/radioglobal/releases/download/V2.4.0/RadioGlobal.apk",
                  },
                ]}
              />
              <ProjectItem
                projectLogo={projectsofglappy}
                projectName="Projects Of Glappy"
                projectID="projectsofglappy"
                currentProjectItem={currentProjectItem}
                shuffle={shuffle}
                reverseForProjects={reverseForProjects}
                setReverseForProjects={setReverseForProjects}
                setCurrentProjectItem={setCurrentProjectItem}
                setTransitioningToProjectItem={setTransitioningToProjectItem}
                websiteURL="projectsofglappy.tk"
                transitioningToProjectItem={transitioningToProjectItem}
                projectDescription={[
                  "A personal website I made becuase I was bored",
                  "Here I showcase the projects I work on and my active social links",
                ]}
                projectCodeURL="https://github.com/glappy-py/radioglobal"
                platformLogos={[web]}
              />
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Projects;
