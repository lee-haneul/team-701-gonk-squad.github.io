import "./App.css";
import Section from "./section";
import "./fonts/SFDistantGalaxy.ttf";
import { useEffect } from "react";
// import Events from "./events.tsx";
// import CodeBlock from "./codeblock.tsx";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        document.documentElement.style.setProperty(
          "--hero-color-1",
          "rgb(0, 110, 120)"
        );
        document.documentElement.style.setProperty(
          "--hero-color-2",
          "rgb(92, 0, 0)"
        );
      }
      if (window.scrollY === 0) {
        document.documentElement.style.setProperty(
          "--hero-color-1",
          "rgb(0, 0, 0)"
        );
        document.documentElement.style.setProperty(
          "--hero-color-2",
          "rgb(0, 0, 0)"
        );
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "96vw",
          height: "100vh",
          alignSelf: "center",
          justifySelf: "center",
        }}
        className="hero"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            marginLeft: "200px",
            marginRight: "200px",
            alignSelf: "start",
            justifySelf: "start",
            height: "78%",
            paddingTop: "5vh",
          }}
        >
          <h1 className="star-wars">Gonk Squad</h1>
          <img className="gonk" src="./GonkWhite.png" />
        </div>
      </div>
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "sticky",
          top: 0,
          bottom: 0,
          width: "100%",
        }}
      >
        <nav className="nav">
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              justifyContent: "space-between",
              width: "90vw",
              alignItems: "center",
              margin: 0,
            }}
          >
            <a href="http://localhost:5173/#top" className="gonk-logo">
              <img src="./GonkWhite.png" className="gonk-logo" />
            </a>
            <li>
              <a className="nav-text" href="#about">
                Events
              </a>
            </li>
            <li>
              <a className="nav-text" href="#about">
                Gallery
              </a>
            </li>
            <li>
              <a className="nav-text" href="#about">
                About Us
              </a>
            </li>
            <li>
              <a className="nav-text" href="#contact">
                Blog
              </a>
            </li>
            <li>
              <a className="nav-text" href="http://localhost:5174/">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div
        style={{
          backgroundColor: "black",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Section
          sectionimage="url('/team-dots.jpg')"
          text="Team 701"
          id="team701"
        ></Section>
      </div>
      {/* <Events>
      </Events> */}
      <footer
        style={{
          listStyleType: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "0px",
          }}
        >
          <li>
            <a href="https://github.com/orgs/gonksquad/">
              <img className="social-icon" src="./github.png" />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@gonksquad_701">
              <img className="social-icon" src="./tiktok.png" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCxxZ-aPJ2NvUTdGRI2oKzDg">
              <img className="social-icon" src="./youtube.png" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/ftcteam701/">
              <img className="social-icon" src="./facebook.png" />
            </a>
          </li>
        </ul>
        <li>
          Social Media Icons Designed by {""}
          <a
            style={{ fontFamily: "sans-serif", fontSize: "1em" }}
            href="https://www.freepik.com"
          >
            Freepik
          </a>
        </li>
      </footer>
    </div>
  );
}

export default App;
