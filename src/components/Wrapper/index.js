import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div><main className="wrapper">{props.children}</main>
  <footer><p>&copy; Zoe Chang. All rights reserved (Library of Congress).</p>
  <p>All songs written, composed, arranged, performed, recorded, and produced by Zoe Chang.</p>
  <p>Special thanks: guitars, bass, and drums by Agostia @Alone.</p></footer></div>;
}

export default Wrapper;
