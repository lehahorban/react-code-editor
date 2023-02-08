import { useState } from "react";
import style from "./CodeBar.module.css";
import CssEditor from "../Editor/CssEditor";
import HtmlEditor from "../Editor/HtmlEditor";
import JsEditor from "../Editor/JsEditor";

const CodeBar = () => {
  const [activeTab, setActiveTab] = useState("html");
  return (
    <div className={style.codeBar}>
      <nav className={style.tab}>
        <button
          onClick={() => setActiveTab("html")}
          className={`${style.btn} ${
            activeTab === "html" ? style.activeTab : ""
          }`}
        >
          HTML
        </button>
        <button
          onClick={() => setActiveTab("css")}
          className={`${style.btn} ${
            activeTab === "css" ? style.activeTab : ""
          }`}
        >
          CSS
        </button>
        <button
          onClick={() => setActiveTab("js")}
          className={`${style.btn} ${
            activeTab === "js" ? style.activeTab : ""
          }`}
        >
          JS
        </button>
      </nav>
      <div className={style.editor}>
        {activeTab === "html" ? <HtmlEditor /> : null}
        {activeTab === "css" ? <CssEditor /> : null}
        {activeTab === "js" ? <JsEditor /> : null}
      </div>
    </div>
  );
};

export default CodeBar;
