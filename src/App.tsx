import React, { useState } from 'react';
import './App.css';
import { Node } from './logic/Node'
import {Option} from "./Option";

const App = () => {
  const nextNodeA = new Node("Question A", { "date": new Node("", {}) });
  const nextNodeB = new Node("Question B", { "Not lol": new Node("", {})});

  const answerOptions = {
    "Yes": nextNodeA,
    "No": nextNodeB
  };
  const defaultNode = new Node("Question", answerOptions);

  const [currentNode, setCurrentNode] = useState(defaultNode)

  const options = Object.keys(currentNode.options).map(key =>
      <Option onClick={() => setCurrentNode(currentNode.options[key])} text={key}/>)

  return (
    <>
      <h1>{currentNode.question}</h1>
      {options}
    </>
  );
}

export default App;
