import React, { useState } from 'react';
import './App.css';
import { Node } from './logic/Node';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { ButtonOption, DateOption } from './Option';
import { Fab } from '@mui/material';

const App = () => {
  const [adminMode, setAdminMode] = useState<boolean>(false);

  // Test Data----------------------------------------------

  const nextNodeA = new Node('Question A', {
    '>21': new Node('QC', {}),
    '<21': new Node('QD', {}),
  });
  const nextNodeB = new Node('Question B', { 'Not lol': new Node('', {}) });

  const answerOptionsForDefault = {
    Yes: nextNodeA,
    No: nextNodeB,
  };
  const defaultNode = new Node('Question', answerOptionsForDefault);
  // Test Data----------------------------------------------
  const [currentNode, setCurrentNode] = useState(defaultNode);
  let options;
  if (Object.keys(currentNode.options).includes('>21')) {
    options = (
      <DateOption
        setCurrentNode={() => setCurrentNode}
        options={currentNode.options}
      />
    );
  } else {
    options = Object.keys(currentNode.options).map((key) => (
      <ButtonOption
        onClick={() => setCurrentNode(currentNode.options[key])}
        text={key}
      />
    ));
  }

  if (adminMode) {
    return (
      <>
        <h1>LegalAdvisor</h1>
        <div className="header">
          <h2>Admin Mode</h2>
          <Fab
            color="primary"
            size={'small'}
            onClick={() => setAdminMode(false)}
          >
            <CloseIcon />
          </Fab>
        </div>
      </>
    );
  }
  return (
    <>
      <h1>LegalAdvisor</h1>
      <div className="header">
        <h2>{currentNode.question}</h2>
        <div className={'adminModeButton'}>
          <Fab color="primary" size="small" onClick={() => setAdminMode(true)}>
            <EditIcon />
          </Fab>
        </div>
      </div>
      {options}
    </>
  );
};

export default App;
