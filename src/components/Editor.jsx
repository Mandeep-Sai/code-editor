import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { CgCompress, CgExpand } from "react-icons/cg";

const Editor = (props) => {
  const { language, value, name, onChange } = props;
  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <div className={`editorContainer ${open ? "" : "collapsed"}`}>
      <div className="editorTitle">
        {name}
        <button onClick={() => setOpen((prevOpen) => !prevOpen)}>
          {open ? <CgCompress /> : <CgExpand />}
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          lineNumbers: true,
          mode: language,
          theme: "material",
        }}
      />
    </div>
  );
};

export default Editor;
