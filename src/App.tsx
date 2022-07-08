import React, { useState } from 'react';
import './App.css';
import { Node } from './logic/Node';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { ButtonOption, DateOption } from './Option';
import { Fab, Stack } from '@mui/material';

const App = () => {
  // Test Data----------------------------------------------

  const nextNodeA = new Node('Question A', {
    '>21': new Node('Question C', {}),
    '<21': new Node('Question D', {}),
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
        setCurrentNode={setCurrentNode}
        options={currentNode.options}
      />
    );
  } else {
    options = (
      <Stack direction="row" spacing={2}>
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
      <h2>Question</h2>
      <div className="content">
        <p>{currentNode.question}</p>
      </div>
      {options}
    </div>
  );
};

export default App;
