import React, { useState } from 'react';
import './App.css';
import { Node } from './logic/Node';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { Option } from './Option';
import { Fab } from '@mui/material';

const App = () => {
  const [adminMode, setAdminMode] = useState<boolean>(false);
  const nextNodeA = new Node('Question A', { date: new Node('', {}) });
  const nextNodeB = new Node('Question B', { 'Not lol': new Node('', {}) });

  const answerOptions = {
    Yes: nextNodeA,
    No: nextNodeB,
  };
  const defaultNode = new Node('Question', answerOptions);

  const [currentNode, setCurrentNode] = useState(defaultNode);

  const options = Object.keys(currentNode.options).map((key) => (
    <Option
      onClick={() => setCurrentNode(currentNode.options[key])}
      text={key}
    />
  ));

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
