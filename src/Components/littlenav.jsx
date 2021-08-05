import React from "react";
import { Link } from "react-router-dom";

function Littlenav({ navigation }) {
  const changeclass = () => {
    if (!navigation) {
      return "main-wrapper-littlenav ";
    } else {
      return "main-wrapper-littlenav main-wrapper-littlenav-logged-in";
    }
  };

  // const location = () => {

  // }

  return (
    <>
      <div className={changeclass()}>
        <div className="item" id="item-1">
          <Link to="#" id="item-1">
            All
          </Link>
        </div>
        <div className="item" id="item-2">
          <Link to="#">Computer&nbsp;Science</Link>
        </div>
        <div className="item" id="item-3">
          <Link to="#">QuizApp</Link>
        </div>
        <div className="item" id="item-4">
          <Link to="#">Comedies</Link>
        </div>
        <div className="item" id="item-5">
          <Link to="#">Computer</Link>
        </div>
        <div className="item" id="item-6">
          <Link to="#">Science&nbsp;Friction</Link>
        </div>
        <div className="item" id="item-7">
          <Link to="#">Tanmay&nbsp;Bhatt</Link>
        </div>
        <div className="item" id="item-8">
          <Link to="#">Gadgets</Link>
        </div>
        <div className="item" id="item-9">
          <Link to="#">Adobe&nbsp;Photoshop</Link>
        </div>
        <div className="item" id="item-10">
          <Link to="#">Security&nbsp;Hackers</Link>
        </div>
      </div>
    </>
  );
}

export default Littlenav;
