import React from "react";

/**
 * @return [type]
 */
function FunctionalClick() {
  /**
   * @return [type]
   */
  function clickHandler() {
    console.log("clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionalClick;
