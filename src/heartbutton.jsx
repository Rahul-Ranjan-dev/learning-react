import { useState } from "react";

export default function Heart() {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle(!toggle);
    console.log("clicked")
  }

  return (
    <>
      <p onClick={handleClick}>{toggle ? (<i className="fa-solid fa-bell"></i>):(<i className="fa-regular fa-bell"></i> )}</p>
    </>
  );
}
