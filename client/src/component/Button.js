import React, { Fragment, useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./Button.css";

function Button(props) {
  let allProps = props.file; // Getting data passed in props from PageTwo component
  const navigate = useNavigate();
  const handleFunction = (val) => {
    alert(`${val} event has been applied on this button`); // On clicking the button showing function applied to that particular button
  };
  const Redirect = () => { // Redirecting to PageOne
    navigate("/");
  };
  return (
    <Fragment>
      <div id="btn-outer">
        <div>
          <h1>View All the buttons that you have created</h1>
          <button onClick={Redirect}>Add Button</button>
        </div>
        <div id="all-btn">
          {allProps.map((value) => {
            return (
              <div id="mybtn">
                <button
                  className={`${value.class} splbtn`}
                  type="button"
                  onClick={() => {
                    handleFunction(value.function);
                  }}
                >
                  {value.name}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default Button;
