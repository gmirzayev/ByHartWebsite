import Ample from "../assets/Ample.png";
import ComicsKingdom from "../assets/Comics_Kingdom.gif";
import Wizehire from "../assets/Wizehire.gif";
import CoverWeek from "../assets/Cover_week.gif";
import DancePartyTime from "../assets/Dance_Party_Time.png";
import HGTV from "../assets/HGTV.gif";
import Lockwood from "../assets/Lockwood.png";
import PuzzlePalace from "../assets/Puzzle_Palace.png";
import Sage from "../assets/Sage.png";
import "../styles/grid.css";

export default function ImageGrid() {
  return (
    <div>
      <div class="filters"></div>
      <div class="image-grid">
        <a class="grid-item campaign">
          <img
            src={Wizehire.src}
            class="grid-image"
            alt="Pizza being made through a cutout in the shape of a face on a purple rectangle."
          />
        </a>
        <a class="grid-item brand">
          <img
            src={Lockwood.src}
            class="grid-image"
            alt="Entrace to an office with a couch, front desk, and a man walking away from the camera."
          />
        </a>
        <a class="grid-item interior">
          <img
            src={CoverWeek.src}
            class="grid-image"
            alt="Two speech bubbles turned vertically and having eyes so they look like faces."
          />
        </a>

        <a class="grid-item brand">
          <img
            src={Ample.src}
            class="grid-image"
            alt="Entrace to an office with a couch, front desk, and a man walking away from the camera."
          />
        </a>
        <a class="grid-item campaign">
          <img
            src={HGTV.src}
            class="grid-image"
            alt="Pizza being made through a cutout in the shape of a face on a purple rectangle."
          />
        </a>
        <a class="grid-item interior">
          <img
            src={PuzzlePalace.src}
            class="grid-image"
            alt="Two speech bubbles turned vertically and having eyes so they look like faces."
          />
        </a>

        <a class="grid-item interior">
          <img
            src={ComicsKingdom.src}
            class="grid-image"
            alt="Two speech bubbles turned vertically and having eyes so they look like faces."
          />
        </a>
        <a class="grid-item campaign">
          <img
            src={Sage.src}
            class="grid-image"
            alt="Pizza being made through a cutout in the shape of a face on a purple rectangle."
          />
        </a>
        <a class="grid-item brand">
          <img
            src={DancePartyTime.src}
            class="grid-image"
            alt="Entrace to an office with a couch, front desk, and a man walking away from the camera."
          />
        </a>
      </div>
    </div>
  );
}
