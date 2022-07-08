import React, { useState } from 'react';
import './App.css';
import { Node } from './logic/Node';
import { ButtonOption, DateOption } from './Option';
import { Stack } from '@mui/material';

const App = () => {
  // Test Data----------------------------------------------

  const nextNodeA = new Node('Question A', {
    '>21': new Node('Question C', {}),
    '<21': new Node('Question D', {}),
  });
  const nextNodeB = new Node('Question B', { 'Not lol': new Node('', {}) });

  const answerOptionsForDefault = {
    No: nextNodeA,
    Check: new Node('', {}),
    Check2: new Node('', {}),
    Check3: new Node('', {}),
    Yes: nextNodeB,
  };
  const defaultNode = new Node('Question', answerOptionsForDefault);
  // Test Data----------------------------------------------
  const [currentNode, setCurrentNode] = useState(defaultNode);
  let options;
  if (Object.keys(currentNode.options).includes('>21')) {
    options = (
      <DateOption
        setCurrentNode={setCurrentNode}
        options={currentNode.options}
      />
    );
  } else {
    options = (
      <Stack
        direction="row"
        spacing={2}
        sx={{ width: '100%' }}
        className={'buttonStack'}
      >
        {Object.keys(currentNode.options).map((key) => (
          <ButtonOption
            onClick={() => setCurrentNode(currentNode.options[key])}
            text={key}
          />
        ))}
      </Stack>
    );
  }

  return (
    <div className={'body'}>
      <h1>LegalAdvisor</h1>
      <div className="content">
        <p>{currentNode.question}</p>
        <div>{options}</div>
      </div>
    </div>
  );
};

export default App;
