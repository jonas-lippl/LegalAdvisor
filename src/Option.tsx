import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface OptionProps {
  text: string;
  onClick: () => void;
}

export const Option: React.FC<OptionProps> = (props) => {
  const [date, setDate] = useState<Date | null>(null);

  if (props.text.includes('date')) {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Date of dismissal"
          value={date}
          onChange={(newValue) => {
            setDate(newValue);
            if (Date.now() - Number(newValue!) > 21) {
            }
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    );
  }
  return (
    <Button onClick={() => props.onClick()} variant="outlined">
      {props.text}
    </Button>
  );
};
