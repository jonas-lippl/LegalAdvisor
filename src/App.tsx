import React, { useState, useEffect } from 'react';
import { downloadStructure } from './api/structure';

import styles from './App.module.css';
import { Node } from './logic/Node';
import { DateOption } from './Option';
import { data } from './data';

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
    Check: new Node('Arbeitsort', {}),
    Check2: new Node('', {}),
    Check3: new Node('', {}),
    Yes: nextNodeB,
  };
  const defaultNode = data;
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
  } else if (currentNode.question.includes('Arbeitsort')) {
    options = <input type="text" name="Arbeitsort" />;
  } else if (optionKeys.length) {
    options = optionKeys.map((key) => (
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
        {options ? <div className={styles.options}>{options}</div> : null}
      </div>
    </div>
  );
};

export default App;
