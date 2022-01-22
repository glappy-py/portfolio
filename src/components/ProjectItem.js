import { useEffect } from "react";
const ProjectItem = ({
  projectLogo,
  projectDescription,
  projectCodeURL,
  downloads,
  websiteURL,
  platformLogos,
  currentProjectItem,
  projectID,
  shuffle,
  projectName,
  transitioningToProjectItem,
  setCurrentProjectItem,
  reverseForProjects,
  setReverseForProjects,
}) => {
  let orderOfSections = 1;
  let descLength = 0;
  projectDescription.forEach((para) => {
    para.split(" ").forEach(() => {
      descLength = descLength + 1;
    });
  });
  let orderOfDesc = [];
  for (let index = 0; index < descLength; index++) {
    orderOfDesc.push(index);
  }
  orderOfDesc = shuffle(orderOfDesc);
  let counter = 0;
  let platformCounter = 0;
  useEffect(() => {
    if (
      transitioningToProjectItem !== projectID &&
      currentProjectItem === projectID
    ) {
      setReverseForProjects(true);
      setTimeout(() => {
        setCurrentProjectItem(transitioningToProjectItem);
        setReverseForProjects(false);
      }, 2000);
    }
  }, [transitioningToProjectItem]);
  return (
    <div>
      {currentProjectItem === projectID ? (
        <div className="projectItem">
          <div className="projectItemHeader">
            <img
              src={projectLogo}
              className={
                reverseForProjects
                  ? "projectLogo closing transparent"
                  : "projectLogo opening opaque"
              }
              style={{ "--order": orderOfSections++ }}
            />

            <div
              className={
                reverseForProjects
                  ? "projectName closing transparent"
                  : "projectName opening opaque"
              }
              style={{ "--order": orderOfSections++ }}
            >
              {projectName}
            </div>
          </div>
          <div>
            {projectDescription === null
              ? ""
              : projectDescription.map((para) => (
                <p style={{ fontWeight: 600 }}>
                  {para.split(" ").map((word) => (
                    <span
                      style={{ "--paraorder": orderOfDesc[counter++] }}
                      className={
                        reverseForProjects
                          ? "closingWord transparent"
                          : "openingWord opaque"
                      }
                    >
                      {word + " "}
                    </span>
                  ))}
                </p>
              ))}
          </div>
          {projectCodeURL === null ? (
            ""
          ) : (
            <div
              className={
                reverseForProjects
                  ? "projectCodeURL closing transparent"
                  : "projectCodeURL opening opaque"
              }
              style={{ "--order": orderOfSections++, fontWeight: 600 }}
            >
              Check out the code on GitHub
              <a href={projectCodeURL} target="_blank" rel="noreferrer">
                <div className="BWButton" style={{ fontWeight: 600 }}>View Code</div>
              </a>
            </div>
          )}
          {platformLogos === null ? (
            ""
          ) : (
            <div className="platformLogos">
              <span
                className={
                  reverseForProjects ? "closing transparent" : "opening opaque"
                }
                style={{ "--order": orderOfSections++, fontWeight: 600 }}
              >
                Available on platforms
              </span>
              {platformLogos.map((ele) => {
                platformCounter++;
                return (
                  <img
                    src={ele}
                    alt="platformLogo not found"
                    className={
                      reverseForProjects
                        ? "platformLogo closing transparent"
                        : "platformLogo opening opaque"
                    }
                    style={{ "--order": orderOfSections++ + platformCounter }}
                  />
                );
              })}
            </div>
          )}
          {websiteURL == null ? (
            ""
          ) : (
            <div className="websiteURL">
              <span
                className={
                  reverseForProjects ? "closing transparent" : "opening opaque"
                }
                style={{ "--order": orderOfSections++, fontWeight: 600 }}
              >
                Check it out on
              </span>
              <a
                href={"https://" + websiteURL}
                target="_blank"
                className={
                  reverseForProjects ? "closing transparent" : "opening opaque"
                }
                style={{ "--order": orderOfSections++, marginLeft: 5, color: 'rgb(52, 154, 238)', fontWeight: 600 }}
              >
                {websiteURL}
              </a>
            </div>
          )}
          {downloads === null ? (
            ""
          ) : (
            <div
              className={
                reverseForProjects
                  ? "downloads closing transparent"
                  : "downloads opening opaque"
              }
              style={{ "--order": orderOfSections++ }}
            >
              {downloads != null ? (
                <div>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: 30,
                      marginBottom: 10,
                    }}
                  >
                    Downloads
                  </span>
                  {downloads.map((ele) => (
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        fontWeight: 600
                      }}
                    >
                      Download for {ele.platform} :{" "}
                      <a href={ele.url}>
                        <div className="BWButton" style={{ fontWeight: 600 }}>Download</div>{" "}
                      </a>
                    </span>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProjectItem;
