import React, { useState } from 'react';
import './App.css';
import { Node } from './logic/Node'

const App = () => {
  const nextNodeA = new Node("Question A", { "Lol": new Node("", {}) });
  const nextNodeB = new Node("Question B", { "Not lol": new Node("", {})});

  const options = {
    "Yes": nextNodeA,
    "No": nextNodeB
  };
  const defaultNode = new Node("Question", options);

  const [currentNode, setCurrentNode] = useState(defaultNode)

  const buttons = Object.keys(currentNode.options).map(key => <button onClick={() => setCurrentNode(currentNode.options[key])}>{key}</button>)

  return (
    <>
      <h1>{currentNode.question}</h1>
      {buttons}
    </>
  );
}

export default App;
