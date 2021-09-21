import "./App.css";
import { useState } from "react";
import Projects from "./components/Projects";
import About from "./components/About";
import Social from "./components/Social";

function App() {
  const [currentPhase, setCurrentPhase] = useState("projects");
  const [readyForTransition, setReadyForTransition] = useState(false);
  const [transitioningTo, setTransitioningTo] = useState("projects");
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectItem, setProjectItem] = useState("fallingblocks");
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const navigateTo = (section) => {
    setTransitioningTo(section);
  };
  const shuffle = (array) => {
    var currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };
  return (
    <div className="app">
      <div
        className={
          menuOpen
            ? subMenuOpen
              ? "navbar openingmenu openingsubmenu"
              : "navbar openingmenu"
            : subMenuOpen
            ? "navbar closingmenu closingSubMenu"
            : "navbar closingmenu"
        }
      >
        <div
          style={{ marginTop: 15 }}
          className={menuOpen ? "closing transparent" : "opening opaque"}
        >
          {currentPhase}
        </div>
        <div
          className={
            menuOpen
              ? "menuItem opening opaque"
              : "menuItem closing transparent"
          }
          onClick={() => {
            if (subMenuOpen) {
              setSubMenuOpen(false);
            } else {
              setSubMenuOpen(true);
            }
          }}
        >
          PROJECTS
        </div>
        {subMenuOpen ? (
          <div className="subMenu">
            <div
              className={
                subMenuOpen
                  ? "subMenuItem openingsubitem opaque"
                  : "subMenuItem closingsubitem transparent"
              }
              style={{ "--order": 1 }}
              onClick={() => {
                document.getElementsByClassName("menu")[0].click();
                setTimeout(() => {
                  navigateTo("projects");
                  setProjectItem("fallingblocks");
                }, 300);
              }}
            >
              - Falling Blocks
            </div>
            <div
              className={
                subMenuOpen
                  ? "subMenuItem openingsubitem opaque"
                  : "subMenuItem closingsubitem transparent"
              }
              style={{ "--order": 2 }}
              onClick={() => {
                document.getElementsByClassName("menu")[0].click();
                setTimeout(() => {
                  navigateTo("projects");
                  setProjectItem("radioglobal");
                }, 300);
              }}
            >
              - RadioGlobal
            </div>
            <div
              className={
                subMenuOpen
                  ? "subMenuItem openingsubitem opaque"
                  : "subMenuItem closingsubitem transparent"
              }
              style={{ "--order": 3 }}
              onClick={() => {
                document.getElementsByClassName("menu")[0].click();
                setTimeout(() => {
                  navigateTo("projects");

                  setProjectItem("zoombot");
                }, 300);
              }}
            >
              - Zoom Bot
            </div>
            <div
              className={
                subMenuOpen
                  ? "subMenuItem openingsubitem opaque"
                  : "subMenuItem closingsubitem transparent"
              }
              style={{ "--order": 4 }}
              onClick={() => {
                document.getElementsByClassName("menu")[0].click();
                setTimeout(() => {
                  navigateTo("projects");

                  setProjectItem("mariocli");
                }, 300);
              }}
            >
              - MarioCLI
            </div>
            <div
              className={
                subMenuOpen
                  ? "subMenuItem openingsubitem opaque"
                  : "subMenuItem closingsubitem transparent"
              }
              style={{ "--order": 5 }}
              onClick={() => {
                document.getElementsByClassName("menu")[0].click();
                setTimeout(() => {
                  navigateTo("projects");

                  setProjectItem("projectsofglappy");
                }, 300);
              }}
            >
              - ProjectsOfGlappy
            </div>
          </div>
        ) : (
          ""
        )}

        <div
          className={
            menuOpen
              ? "menuItem opening opaque"
              : "menuItem closing transparent"
          }
          onClick={() => {
            setProjectItem("");
            setMenuOpen(false);
            navigateTo("about");
            document.getElementsByClassName("menu")[0].click();
          }}
        >
          ABOUT
        </div>
        <div
          className={
            menuOpen
              ? "menuItem opening opaque"
              : "menuItem closing transparent"
          }
          onClick={() => {
            setProjectItem("");
            setMenuOpen(false);
            navigateTo("social");
            document.getElementsByClassName("menu")[0].click();
          }}
        >
          SOCIAL
        </div>
      </div>
      <div
        className="menu"
        aria-label="Main Menu"
        onClick={() => {
          let menu = document.getElementsByClassName("menu")[0];
          menu.classList.toggle("opened");
          menu.setAttribute("aria-expanded", menu.classList.contains("opened"));
          if (menuOpen) {
            setMenuOpen(false);
            setSubMenuOpen(false);
          } else {
            setMenuOpen(true);
          }
        }}
      >
        <svg width="40" height="40" viewBox="0 0 100 100">
          <path
            class="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path class="line line2" d="M 20,50 H 80" />
          <path
            class="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </div>
      <div className="panels">
        <div className="textPanel">
          <div
            className="textPanelButton"
            onClick={() => {
              navigateTo("projects");
            }}
          >
            Projects
          </div>
          <div
            className="textPanelButton"
            onClick={() => {
              navigateTo("about");
            }}
          >
            About
          </div>
          <div
            className="textPanelButton"
            onClick={() => {
              navigateTo("social");
            }}
          >
            Socials
          </div>
        </div>
        <div className="statusPanel">
          <Projects
            currentPhase={currentPhase}
            readyForTransition={readyForTransition}
            setReadyForTransition={setReadyForTransition}
            setCurrentPhase={setCurrentPhase}
            transitioningTo={transitioningTo}
            setTransitioningTo={setTransitioningTo}
            shuffle={shuffle}
            startWithProjectItem={projectItem}
            setStartWithProjectItem={setProjectItem}
          />
          <About
            currentPhase={currentPhase}
            readyForTransition={readyForTransition}
            setReadyForTransition={setReadyForTransition}
            setCurrentPhase={setCurrentPhase}
            transitioningTo={transitioningTo}
            setTransitioningTo={setTransitioningTo}
            shuffle={shuffle}
          />
          <Social
            currentPhase={currentPhase}
            readyForTransition={readyForTransition}
            setReadyForTransition={setReadyForTransition}
            shuffle={shuffle}
            setCurrentPhase={setCurrentPhase}
            transitioningTo={transitioningTo}
            setTransitioningTo={setTransitioningTo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
