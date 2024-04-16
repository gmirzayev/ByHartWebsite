import "../styles/service.css";
import { useEffect, useRef, useState } from "react";

export default function Service() {
  const [offset, setOffset] = useState(50);
  const [isRunning, setIsRunning] = useState(true);
  const [isHighlighting, setIsHighlighting] = useState(true);
  const [highlightedElement, setHighlightedElement] = useState(1);
  const [animatedPosition, setAnimatedPosition] = useState(-1);

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
        newOffset = 50;
      }
      setOffset(newOffset);
    },
    isRunning ? 16 : null
  );

  useInterval(
    () => {
      if (isHighlighting) {
        setHighlightedElement((highlightedElement % 8) + 1);
        setAnimatedPosition((highlightedElement % 8) + 1);
      }
    },
    isHighlighting ? 5000 : null
  );

  function handleTextMouseEnter(index) {
    setIsHighlighting(false);
    setHighlightedElement(index);
  }

  function handleTextMouseExit() {
    if (highlightedElement != animatedPosition) {
      setHighlightedElement(Math.abs(animatedPosition));
    }
    setIsHighlighting(true);
  }

  return (
    <div id="pill--element">
      <div
        className="pill--container"
        style={{ transform: `rotate(${animatedPosition * 20}deg)` }}
      >
        <div className="pill">
          <svg viewBox="0 80 250 100" xmlns="http://www.w3.org/2000/svg">
            <path
              id="path"
              fill="none"
              stroke="none"
              d="M 126.4892 2.249 H 126.4892 S 250.6275 2.249 250.6275 126.3875 V 283.9355 S 250.6275 408.0739 126.4892 408.0739 H 126.4892 S 2.351 408.0739 2.351 283.9354 V 126.3874 S 2.351 2.2489 126.4892 2.2489 H 126.4892 S 250.6275 2.249 250.6275 126.3875 V 283.9355 S 250.6275 408.0739 126.4892 408.0739 H 126.4892 S 2.351 408.0739 2.351 283.9354 V 126.3874 S 2.351 2.2489 126.4892 2.2489 "
              // d="M 128.976 1.273 H 128.9765 S 257.1555 1.273 257.1555 129.452 V 288.6035 S 257.1555 416.7825 128.9765 416.7825 H 128.976 S 0.797 416.7825 0.797 288.6035 V 129.452 S 0.797 1.273 128.976 1.273 H 128.9765 S 257.1555 1.273 257.1555 129.452 V 288.6035 S 257.1555 416.7825 128.9765 416.7825 H 128.976 S 0.797 416.7825 0.797 288.6035"
              // d="M 131.2244 5.251 H 131.2244 S 259.7939 5.251 259.7939 133.8205 V 302.432 S 259.7939 431.0015 131.2244 431.0015 H 131.2244 S 2.6549 431.0015 2.6549 302.432 V 133.8205 S 2.6549 5.251 131.2244 5.251 H 131.2244 S 259.7939 5.251 259.7939 133.8205 V 302.432 S 259.7939 431.0015 131.2244 431.0015 H 131.2244 S 2.6549 431.0015 2.6549 302.432"
            />
            <text
              onMouseEnter={() => setIsRunning(false)}
              onMouseLeave={() => setIsRunning(true)}
            >
              <textPath href="#path" id="text-path" startOffset={offset + "%"}>
                By Hart is a{" "}
                <tspan
                  className={`pill--span-text ${
                    highlightedElement == 1 ? "highlighted" : ""
                  }`}
                  onMouseEnter={() => handleTextMouseEnter(1)}
                  onMouseLeave={() => handleTextMouseExit()}
                  onClick={() => setAnimatedPosition(1)}
                >
                  story
                </tspan>{" "}
                +
                <tspan
                  className={`pill--span-text ${
                    highlightedElement == 2 ? "highlighted" : ""
                  }`}
                  onMouseEnter={() => handleTextMouseEnter(2)}
                  onMouseLeave={() => handleTextMouseExit()}
                  onClick={() => setAnimatedPosition(2)}
                >
                  {" "}
                  style
                </tspan>{" "}
                +
                <tspan
                  className={`pill--span-text ${
                    highlightedElement == 3 ? "highlighted" : ""
                  }`}
                  onMouseEnter={() => handleTextMouseEnter(3)}
                  onMouseLeave={() => handleTextMouseExit()}
                  onClick={() => setAnimatedPosition(3)}
                >
                  {" "}
                  identity
                </tspan>{" "}
                +
                <tspan
                  className={`pill--span-text ${
                    highlightedElement == 4 ? "highlighted" : ""
                  }`}
                  onMouseEnter={() => handleTextMouseEnter(4)}
                  onMouseLeave={() => handleTextMouseExit()}
                  onClick={() => setAnimatedPosition(4)}
                >
                  {" "}
                  art
                </tspan>{" "}
                +
                <tspan
                  className={`pill--span-text ${
                    highlightedElement == 5 ? "highlighted" : ""
                  }`}
                  onMouseEnter={() => handleTextMouseEnter(5)}
                  onMouseLeave={() => handleTextMouseExit()}
                  onClick={() => setAnimatedPosition(5)}
                >
                  {" "}
                  experience
                </tspan>{" "}
                +
                <tspan
                  className={`pill--span-text ${
                    highlightedElement == 6 ? "highlighted" : ""
                  }`}
                  onMouseEnter={() => handleTextMouseEnter(6)}
                  onMouseLeave={() => handleTextMouseExit()}
                  onClick={() => setAnimatedPosition(6)}
                >
                  {" "}
                  content
                </tspan>{" "}
                +
                <tspan
                  className={`pill--span-text ${
                    highlightedElement == 7 ? "highlighted" : ""
                  }`}
                  onMouseEnter={() => handleTextMouseEnter(7)}
                  onMouseLeave={() => handleTextMouseExit()}
                  onClick={() => setAnimatedPosition(7)}
                >
                  {" "}
                  design
                </tspan>{" "}
                +
                <tspan
                  className={`pill--span-text ${
                    highlightedElement == 8 ? "highlighted" : ""
                  }`}
                  onMouseEnter={() => handleTextMouseEnter(8)}
                  onMouseLeave={() => handleTextMouseExit()}
                  onClick={() => setAnimatedPosition(8)}
                >
                  {" "}
                  purpose
                </tspan>{" "}
                + actually creative studio by Sarah Hartley.
              </textPath>
            </text>
          </svg>
        </div>
        <div
          className={`top image-container ${
            animatedPosition == 1 ? "fade" : ""
          }`}
        >
          <img src="/images/Rings.png" className="image" />
        </div>
        <div
          className={`image-container ${animatedPosition > 1 ? "fade" : ""}`}
        >
          <img className="image" src="/images/Cut.png" />
        </div>
        {/* <div className="image1-container">
          <img className="image1" id="first-image" src={rings.src} />
        </div>
        <div className="image2-container">
          <img className="image2" id="second-image" src={cut.src} />
        </div> */}
      </div>
    </div>
  );
}
