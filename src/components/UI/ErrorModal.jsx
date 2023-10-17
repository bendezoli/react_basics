import React from "react";
import ReactDom from "react-dom";
import "./ErrorModalmodule.css";

const BackDrop = () => {
  return <div className={"backdrop"} />;
};

const Modal = (props) => {
  return (
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
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <BackDrop />,
        document.getElementById("backdrop-root")
      )}

      {ReactDom.createPortal(
        <Modal closeModal={props.closeModal} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
