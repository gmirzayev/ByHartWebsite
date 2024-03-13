import "../styles/global.css";
import rings from "../assets/rings.png";
import cut from "../assets/cut.png";
import { useEffect, useRef, useState } from "react";

export default function Service() {
  // const elements = document.querySelectorAll(".pill--span-text");
  // let currentIndex = 0;
  // let timerInterval;
  // let animationTimerInterval;
  // const textPath = useRef(null);
  const [offset, setOffset] = useState(59.5);
  const [itemIndex, setItemIndex] = useState();
  const [isRunning, setIsRunning] = useState(true);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(
    () => {
      let newOffset = offset - 0.02;
      if (newOffset <= 0) {
        newOffset = 59.5;
      }
      setOffset(newOffset);
    },
    isRunning ? 16 : null
  );

  // useEffect(() => {
  //   const animationInterval = setInterval(() => {
  //     setOffset((prevOffset) => {
  //       // const newOffset = prevOffset - 0.01;
  //       if (prevOffset - 0.01 <= 0) {
  //         return 59.5;
  //       } else {
  //         return prevOffset - 0.01;
  //       }
  //     });
  //     // console.log(offset);
  //   }, 100);
  //   return () => clearInterval(animationInterval);
  // }, []);
  /*
  // const [scrolling, setScrolling] = useState(true);
  let scrolling = true;

  function clearHighlight(index) {
    if (elements[index]) {
      elements[index].classList.remove("highlight");
      // cards[index].classList.remove("card-show");
    }
  }

  function highlightElement(index) {
    if (elements[index]) {
      // Highlight the current element
      elements[index].classList.add("highlight");
      // cards[index].classList.add("card-show");

      // Update the currentIndex
      currentIndex = index;
    }
  }

  highlightElement(currentIndex);

  function startTimer() {
    timerInterval = setInterval(function () {
      clearHighlight(currentIndex);
      currentIndex = (currentIndex + 1) % elements.length;
      highlightElement(currentIndex);
    }, 5000);
  }

  function pauseTimer() {
    clearInterval(timerInterval);
  }

  // Start the timer
  // startTimer();

  let text = document.querySelector("#text-path");
  if (text) {
    text.setAttribute("startOffset", "0%");
    // text1.setAttribute("startOffset", "6%");
  }

  // function startAnimationTimer() {
  //   animationTimerInterval = setInterval(function () {
  //     offset -= 0.01;

  //     if (offset <= 0) {
  //       offset = 59.5;
  //     }

  //     if (text) {
  //       text.setAttribute("startOffset", offset + "%");
  //     }
  //   }, 60);
  // }

  // function pauseAnimationTimer() {
  //   clearInterval(animationTimerInterval);
  // }

  // Start the timer
  // startAnimationTimer();

  // Event listeners for hover
  elements.forEach((element, index) => {
    element.addEventListener("mouseenter", function () {
      pauseTimer(); // Pause the timer when hovering
      clearHighlight(currentIndex);
      highlightElement(index); // Highlight the hovered element
    });

    element.addEventListener("mouseleave", function () {
      startTimer(); // Resume the timer when not hovering
    });
  });

  function spin() {
    let image1 = document.querySelector("#first-image");
    // let image2 = document.querySelector("#second-image");
    let rotateText = document.querySelector("#container1");

    if (image1 && rotateText) {
      image1.classList.add("fade");
      // image2.classList.add("spin");
      rotateText.classList.add("spin2");
    }
  }

  // function step() {
  //   // if (scrolling) {
  //   offset -= 0.01;
  //   // console.log(offset);

  //   if (offset <= 0) {
  //     offset = 59.5;
  //   }

  //   if (text) {
  //     text.setAttribute("startOffset", offset + "%");
  //   }

  //   requestAnimationFrame(step);
  //   // }
  // }

  // window.requestAnimationFrame(step);
*/
  return (
    <>
      <div className="pill--container">
        <div
          className="pill"
          // onMouseEnter={(e) => {
          //   scrolling = false;
          //   // console.log(scrolling);
          //   console.log(e);
          // }}
          // onMouseLeave={(e) => {
          //   scrolling = true;
          //   // console.log(scrolling);
          //   console.log(e);
          //   // step();
          // }}
        >
          <svg viewBox="0 80 250 100" xmlns="http://www.w3.org/2000/svg">
            <path
              id="path"
              fill="none"
              stroke="none"
              d="M 131.2244 5.251 H 131.2244 S 259.7939 5.251 259.7939 133.8205 V 302.432 S 259.7939 431.0015 131.2244 431.0015 H 131.2244 S 2.6549 431.0015 2.6549 302.432 V 133.8205 S 2.6549 5.251 131.2244 5.251 H 131.2244 S 259.7939 5.251 259.7939 133.8205 V 302.432 S 259.7939 431.0015 131.2244 431.0015 H 131.2244 S 2.6549 431.0015 2.6549 302.432"
            />
            <text
              onMouseEnter={() => setIsRunning(false)}
              onMouseLeave={() => setIsRunning(true)}
            >
              <textPath href="#path" id="text-path" startOffset={offset + "%"}>
                By Hart is a <tspan className="pill--span-text">story</tspan> +
                <tspan className="pill--span-text"> identity</tspan> +
                <tspan className="pill--span-text"> art</tspan> +
                <tspan className="pill--span-text"> design</tspan> +
                <tspan className="pill--span-text"> content</tspan> +
                <tspan className="pill--span-text"> experience</tspan> +
                actually creative studio by Sarah Hartley.
                {/* <animate
                  attributeName="startOffset"
                  from="0%"
                  to="59.5%"
                  begin="0s"
                  dur="20s"
                  repeatCount="indefinite"
                /> */}
              </textPath>
            </text>
          </svg>
        </div>
        <div className="image-container">
          <img className="image" src={rings.src} />
        </div>
        {/* <div className="image1-container">
          <img className="image1" id="first-image" src={rings.src} />
        </div>
        <div className="image2-container">
          <img className="image2" id="second-image" src={cut.src} />
        </div> */}
      </div>
    </>
  );
}

// By Hart is a story + identity + art + design + content + experience + actually creative studio.
