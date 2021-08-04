import React from "react";
import { Link } from "react-router-dom";


function Littlenav({ navigation}) {
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
          <Link href="#" id="item-1">
            All
          </Link>
        </div>
        <div className="item" id="item-2">
          <Link href='#'>Computer&nbsp;Science</Link>
        </div>
        <div className="item" id="item-3">
          <Link href='#'>QuizApp</Link>
        </div>
        <div className="item" id="item-4">
          <Link href='#'>Comedies</Link>
        </div>
        <div className="item" id="item-5">
          <Link href='#'>Computer</Link>
        </div>
        <div className="item" id="item-6">
          <Link href='#'>Science&nbsp;Friction</Link>
        </div>
        <div className="item" id="item-7">
          <Link href='#'>Tanmay&nbsp;Bhatt</Link>
        </div>
        <div className="item" id="item-8">
          <Link href='#'>Gadgets</Link>
        </div>
        <div className="item" id="item-9">
          <Link href='#'>Adobe&nbsp;Photoshop</Link>
        </div>
        <div className="item" id="item-10">
          <Link href='#'>Security&nbsp;Hackers</Link>
        </div>
      </div>
    </>
  );
}

export default Littlenav;
