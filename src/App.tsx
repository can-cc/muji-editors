import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { RichEditor } from "./editors/rich/RichEditor";

import "./App.css";

function App() {

  let content: string = (window as any).editorContent;
  const onChange = (innerContent: string) => {
    content = content;
  };

  (window as any).getEditorContent = () => {
    return content;
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/rich">
            <RichEditor defaultValue={content} onChange={onChange} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
