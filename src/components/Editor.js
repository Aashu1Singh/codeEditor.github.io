import React from "react";

const Editor = ({ value, setValue , heading}) => {
  return (
    <>
      <div className="editorDiv">
        <div className="innerDiv">
          <div className="headingDiv">{heading} </div>
          <div className="writingDiv">
            <textarea
              name="w3review"
              rows="20"
              cols="58"
              id="textArea"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editor;
