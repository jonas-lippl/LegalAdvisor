import React, { useState } from 'react';
import { downloadStructure } from './api/structure';

import { data as dataEN } from './data_en';
import { data as dataDE } from './data_de';
import styles from './App.module.css';
import { DateOption } from './components/Option';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { LanguageButton } from './components/LanguageButton';

const App = () => {
  const defaultData = dataDE;

  const [currentNode, setCurrentNode] = useState(defaultData);
  const [previousNode, setPreviousNode] = useState(defaultData);
  const [language, setLanguage] = useState<'EN' | 'DE'>('DE');

  // useEffect(() => {
  //   fetchStructure();
  // }, []);

  const fetchStructure = () => {
    downloadStructure().then((structure) => setCurrentNode(structure));
  };

  const changeLanguage = () => {
    if (language === 'DE') {
      setCurrentNode(dataEN);
      setLanguage('EN');
    } else {
      setCurrentNode(dataDE);
      setLanguage('DE');
    }
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
          <h1 onClick={() => setCurrentNode(defaultData)}>LegalAdvisor</h1>
          <div className={styles.logo} />
        </div>

        <div className={styles.content}>
          <p className={styles.question}>{currentNode.question}</p>
          {options ? <div className={styles.options}>{options}</div> : null}
        </div>
      </div>
      {currentNode !== defaultData ? (
        <button
          className={styles.backButton}
          onClick={() => {
            setCurrentNode(previousNode);
          }}
        >
          <ArrowBackIcon />
        </button>
      ) : null}

      <LanguageButton
        changeLanguage={() => changeLanguage()}
        currentLanguage={language}
      />
    </>
  );
};

export default App;
