import React, { useState } from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

const EditorShop = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <label htmlFor="description" className="block text-sm font-medium mb-3">
        A propos du site
      </label>
      <ReactQuill theme="snow" value={value} onChange={setValue} />;
    </div>
  );
};

export default EditorShop;
