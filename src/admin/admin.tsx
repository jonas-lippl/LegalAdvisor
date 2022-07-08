import styles from './Admin.module.css';
import { Button, Fab, TextField } from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

interface SpecifyInputButtonProps {
  index: number;
}

export const SpecifyInputButton: React.FC<SpecifyInputButtonProps> = (
  props,
) => {
  return (
    <div>
      Button {props.index}:
      <TextField label="Button Label" variant="outlined" />
    </div>
  );
};

export const Admin = () => {
  const [buttonEdit, setButtonEdit] = useState<boolean | undefined>(undefined);
  const [numberOfButtons, setNumberOfButtons] = useState<number>(1);
  let decisionTree;
  let conditionalRender;
  if (buttonEdit === undefined) {
    conditionalRender = [
      <Button variant={'outlined'} onClick={() => setButtonEdit(true)}>
        Buttons
      </Button>,
      <Button variant={'outlined'} onClick={() => setButtonEdit(false)}>
        Date
      </Button>,
    ];
  }
  if (buttonEdit) {
    conditionalRender = [];
    for (let i: number = 1; i <= numberOfButtons; i++) {
      conditionalRender.push(<SpecifyInputButton index={i} />);
    }
    conditionalRender.push(
      <Fab
        color="primary"
        onClick={() => setNumberOfButtons(numberOfButtons + 1)}
      >
        <AddIcon />
      </Fab>,
    );
  }

  return (
    <div className={styles.container}>
      <h1>Admin Mode</h1>
      <TextField fullWidth multiline={true} label="Question" />
      {conditionalRender}
      <Button variant={'outlined'}>Submit</Button>
    </div>
  );
};
