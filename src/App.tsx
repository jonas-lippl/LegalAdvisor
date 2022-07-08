import React, { useState, useEffect } from 'react';
import { downloadStructure } from './api/structure';

import { data } from './data';
import styles from './App.module.css';
import { Node } from './logic/Node';
import { DateOption } from './Option';

const App = () => {
  const [currentNode, setCurrentNode] = useState(data);

  // useEffect(() => {
  //   fetchStructure();
  // }, []);

  const fetchStructure = () => {
    downloadStructure().then((structure) => setCurrentNode(structure));
  };

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
    options = (
      <input
        type="text"
        name="Arbeitsort"
        onSubmit={() => setCurrentNode(currentNode.options['Next'])}
      />
    );
  } else if (optionKeys.length) {
    options = optionKeys.map((key) => (
      <button onClick={() => setCurrentNode(currentNode.options[key])}>
        {key}
      </button>
    ));
  }

  return (
    <div>
      <div className={styles.header}>
        <h1 onClick={() => setCurrentNode(data)}>LegalAdvisor</h1>
        <div className={styles.logo} />
      </div>

      <div className={styles.content}>
        <p className={styles.question}>{currentNode.question}</p>
        {options ? <div className={styles.options}>{options}</div> : null}
      </div>
    </div>
  );
};

export default App;
