import React from "react";

import classes from "../UI/ErrorModalmodule.css";

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      <div className={"backdrop"} />
      <div className={"modal"}>
        <header className={"header"}>
          <h2>title</h2>
        </header>
        <div className={"content"}>
          <p>error message</p>
        </div>
        <footer className={"actions"}>
          <button onClick={props.closeModal}>Okay</button>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default ErrorModal;
