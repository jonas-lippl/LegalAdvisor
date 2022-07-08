import React, { useState, useEffect } from 'react';
import { downloadStructure } from './api/structure';

import styles from './App.module.css';
import { Node } from './logic/Node';
import { DateOption } from './Option';

const App = () => {
  useEffect(() => {
    downloadStructure();
  }, []);

  // Test Data----------------------------------------------
  const nextNodeA = new Node('Question A', {
    '>21': new Node('Question C', {}),
    '<21': new Node('Question D', {}),
  });
  const nextNodeB = new Node('Question B', { 'Not lol': new Node('', {}) });

  const answerOptionsForDefault = {
    No: nextNodeA,
    Yes: nextNodeB,
  };
  const defaultNode = new Node(
    'Did you kill your employees?',
    answerOptionsForDefault,
  );
  // Test Data----------------------------------------------
  const [currentNode, setCurrentNode] = useState(defaultNode);
  const optionKeys = Object.keys(currentNode.options);

  let options;
  if (optionKeys.some((text) => text.includes('>') || text.includes('<'))) {
    options = (
      <DateOption
        setCurrentNode={setCurrentNode}
        options={currentNode.options}
      />
    );
  } else {
    options = Object.keys(currentNode.options).map((key) => (
      <button onClick={() => setCurrentNode(currentNode.options[key])}>
        {key}
      </button>
    ));
  }

  return (
    <div>
      <h1 onClick={() => setCurrentNode(defaultNode)}>LegalAdvisor</h1>

      <div className={styles.content}>
        <p className={styles.question}>{currentNode.question}</p>
        <div className={styles.options}>{options}</div>
      </div>
    </div>
  );
};

export default App;
