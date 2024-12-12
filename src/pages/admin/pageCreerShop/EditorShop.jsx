import React, { useState } from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

const EditorShop = ({value, onChange}) => {

  return (
    <div>
      <label htmlFor="description" className="block text-sm font-medium mb-3">
        A propos du site
      </label>
      <ReactQuill theme="snow" value={value} onChange={onChange} />
    </div>
  );
};

export default EditorShop;
