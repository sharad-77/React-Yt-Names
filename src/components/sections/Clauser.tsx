import LeftSideArrow from "../../assets/LeftSideArrow.svg";
import RigthSideArrow from "../../assets/RightSideArrow.svg";

function Clauser() {
  return (
    <div>
      <div className="flex flex-row ">
        <div className="flex flex-col">
          <p>What Our Customer Says</p>
          <p className="text-(--font-secondary-color)">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>
        </div>
        <div className="flex flex-row">
          <button>
            <img src={LeftSideArrow} alt="LeftSideArrow" />
          </button>
          <button>
            <img src={RigthSideArrow} alt="RightSideArrow" />
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Clauser;
