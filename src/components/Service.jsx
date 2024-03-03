import "../styles/global.css";
import placeHolder from "../assets/black.png";

export default function Service() {
  const loading = document.querySelector("#loading");
  console.log(loading);

  // let loadingAnimation;

  // if (loading) {
  //   loading.setAttribute("startOffset", "50%");
  // }

  // const spinLoad = (time) => {
  //   const speed = 0.005; // lower number goes slower
  //   if (loading) {
  //     let offset = ((time * speed) % 100) + "%";
  //     console.log(offset);
  //     loading.setAttribute("startOffset", offset);
  //     // console.log(loading.startOffset);
  //     loadingAnimation = requestAnimationFrame(spinLoad);
  //     // console.log(time);
  //   }
  // };

  // loadingAnimation = requestAnimationFrame(spinLoad);

  return (
    <>
      <div className="circle">
        <img className="pill" src={placeHolder.src} />
        <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <path
            id="path"
            fill="none"
            stroke="lightgrey"
            d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z"
          />

          <circle r="5" fill="red">
            <animateMotion
              dur="10s"
              repeatCount="indefinite"
              path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z"
            />
          </circle>

          <text fill="#000">
            <textPath
              id="loading"
              startOffset="-65%"
              href="#path"
              textLength="1000"
            >
              <animate
                attributeName="startOffset"
                values="0%;100%"
                dur="10s"
                repeatCount="indefinite"
              ></animate>
              Text rotating around a circle path with SVG!
            </textPath>
            {/* <animateMotion dur="10s" repeatCount="indefinite">
              <mpath href="#path" />
            </animateMotion> */}
          </text>
        </svg>

        <div className="pill-text">
          <p>photo test brand test video test design test build test</p>
        </div>
      </div>
    </>
  );
}
