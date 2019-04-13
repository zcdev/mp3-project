import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div><main className="wrapper">{props.children}</main>
  <footer><p>&copy; Zoe Chang. All Rights Reserved (Library of Congress).</p>
  <p>All songs written, composed, arranged, performed by Zoe Chang</p>
  <p>Special Thanks: Guitar &amp; Drums by Agostia @ Alone</p></footer></div>;
}

export default Wrapper;
