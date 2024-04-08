import "./global.css";

export default function Service() {
  const elements = document.querySelectorAll("#list > li");
  const cards = document.querySelectorAll("#card-container > li");
  let currentIndex = 0;
  let timerInterval;

  let topCard = document.getElementById("top-card");
  const imageArray = document.querySelectorAll("#image-array > img");
  const cardArray = [];
  let container = document.getElementById("card-container");

  function clearHighlight(index) {
    elements[index].classList.remove("highlight");
    // cards[index].classList.remove("card-show");
  }

  function highlightElement(index) {
    // Highlight the current element
    elements[index].classList.add("highlight");
    createCard2(elements[index].dataset.picture);
    // cards[index].classList.add("card-show");

    // Update the currentIndex
    currentIndex = index;
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
  startTimer();

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

  const throttleFunction = (func, delay) => {
    // Previously called time of the function
    let prev = 0;
    return (...args) => {
      // Current called time of the function
      let now = new Date().getTime();

      // Logging the difference
      // between previously
      // called and current called timings
      console.log(now - prev, delay);

      // If difference is greater
      // than delay call
      // the function again.
      if (now - prev > delay) {
        prev = now;

        // "..." is the spread
        // operator here
        // returning the function with the
        // array of arguments
        return func(...args);
      }
    };
  };
  // function createCard() {
  // // Create the card element
  // const cardContainer = document.getElementById("cardContainer");
  // const card = document.createElement("li");
  // card.classList.add("card");

  // // Append the card to the container
  // cardContainer.appendChild(card);

  // // Trigger the animation by adding a class
  // // setTimeout(function() {
  // // 	card.classList.add("card-show");
  // // }, 100); // Delay the animation slightly for better rendering
  // }

  function createCard() {
    let img = imageArray[0].cloneNode();
    img.style.display = "inherit";
    img.classList.add("image-show");
    topCard.appendChild(img);
  }

  function createCard2(picture) {
    container = document.getElementById("card-container");
    cardArray.push(picture);
    console.log(cardArray);
    if (cardArray.length > 3) {
      cardArray.shift();
      console.log(cardArray);
      console.log(container);
      container.removeChild(container.firstChild);
    }
    const li = document.createElement("li");
    li.classList.add("card");
    const image = imageArray[picture].cloneNode();
    image.style.display = "inherit";
    image.classList.add("image-show");
    li.appendChild(image);
    container.appendChild(li);
  }

  //throttled
  document.getElementById("create-card").addEventListener(
    "click",
    throttleFunction(() => {
      container.removeChild(container.firstChild);
    }, 1000)
  );

  //not throttled
  // document.getElementById("create-card").addEventListener("click", function() {
  // 	showCard();
  // });
  // <style>
  //   html,
  //   body {
  //     font-family: system-ui;
  //     margin: 0;
  //   }
  //   body {
  //     padding: 2rem;
  //   }
  //   nav {
  //     height: 200px;
  //     display: flex;
  //     flex-direction: row;
  //   }
  //   a {
  //     background-color: green;
  //     height: 200px;
  //     width: 200px;
  //   }
  //   ul {
  //     list-style: none;
  //   }
  //   li {
  //     color: #982c1d;
  //     font-weight: 600;
  //   }
  //   .highlight {
  //     color: #ee4b35;
  //   }
  //   .highlight2 {
  //     background-color: yellow;
  //   }
  //   #cardContainer {
  //     height: 500px;
  //     width: 500px;
  //     background-color: aquamarine;
  //     display: flex;
  //   }
  //   .card {
  //     position: absolute;
  //     width: 200px;
  //     height: 300px;
  //     background-color: green;
  //     border-radius: 10px;
  //     box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  //     /* transform: scale(0); */
  //     transition: transform 0.5s ease;
  //   }
  //   #top-card {
  //     rotate: 10deg;
  //   }
  //   #middle-card {
  //     rotate: 10deg;
  //   }
  //   #bottom-card {
  //     rotate: -10deg;
  //   }
  //   @media (max-width: 900px) {
  //     nav {
  //       flex-direction: column;
  //     }
  //   }
  //   .card-show {
  //     transform: scale(1);
  //   }
  //   .image-show {
  //     width: inherit;
  //     height: inherit;
  //     border-radius: inherit;
  //     position: inherit;
  //     animation-duration: 1s;
  //     animation-fill-mode: forwards;
  //     animation-name: shrink;
  //     /* transform: scale(1.0);
  //     transition: transform 1s 0s; */
  //     /* rotate: inherit; */
  //   }
  //   @keyframes shrink {
  //     from {
  //       transform: scale(1.1);
  //     }
  //     to {
  //       transform: scale(1.0);
  //     }
  //   }
  //   .image-hide {
  //     display: none;
  //   }
  // </style>

  return (
    <>
      <ul id="list">
        <li data-picture="0">brand + identity</li>
        <li data-picture="1">logo design</li>
        {/* <li>photography + video</li> */}
      </ul>
      <ul id="card-container">
        {/* <li id="bottom-card" class="card card-show"></li>
      <li id="middle-card" class="card"></li>
      <li id="top-card" class="card"></li> */}
      </ul>
      <div id="image-array">
        <img
          class="image-hide"
          src={blackImage.src}
          alt="A bird sitting on a nest of eggs."
        />
        <img
          class="image-hide"
          src={grayImage.src}
          alt="A bird sitting on a nest of eggs."
        />
      </div>
      <button id="create-card">Create Card</button>
    </>
  );
}
