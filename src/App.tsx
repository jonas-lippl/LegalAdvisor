import React, { useState, useEffect } from 'react';
import { downloadStructure } from './api/structure';

import { data } from './data';
import styles from './App.module.css';
import { Node } from './logic/Node';
import { DateOption } from './Option';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const App = () => {
  const [currentNode, setCurrentNode] = useState(data);
  const [previousNode, setPreviousNode] = useState(data);

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
        setPreviousNode={setPreviousNode}
        setCurrentNode={setCurrentNode}
        currentNode={currentNode}
      />
    );
  } else if (currentNode.question.includes('Arbeitsort')) {
    options = (
      <>
        <input
          autoFocus
          placeholder="Arbeitsort"
          type="text"
          name="Arbeitsort"
          onSubmit={() => {
            setPreviousNode(currentNode);
            setCurrentNode(currentNode.options['Next']);
          }}
        />
        <button
          onClick={() => {
            setPreviousNode(currentNode);
            setCurrentNode(currentNode.options['Weiter']);
          }}
        >
          Weiter
        </button>
      </>
    );
  } else if (optionKeys.length) {
    // ensure that "Ja" is on the right
    optionKeys.sort((key) => (key === 'Ja' ? 1 : -1));
    options = optionKeys.map((key) => (
      <button
        onClick={() => {
          setPreviousNode(currentNode);
          setCurrentNode(currentNode.options[key]);
        }}
      >
        {key}
      </button>
    ));
  }

  return (
    <>
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
      <button
        className={styles.backButton}
        onClick={() => {
          setCurrentNode(previousNode);
        }}
      >
        <ArrowBackIcon />
      </button>
    </>
  );
};

export default App;
