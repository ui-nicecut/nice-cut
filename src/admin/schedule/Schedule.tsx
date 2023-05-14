import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

interface Cell {
  day: number;
  hour: number;
}

const Schedule: React.FC = (): React.ReactElement => {
  const [selectedCells, setSelectedCells] = useState<Cell[]>([]);

  const handleCellClick = (cell: Cell) => {
    const newSelectedCells = [...selectedCells];
    const cellIndex = newSelectedCells.findIndex(
      (selectedCell) => selectedCell.day === cell.day && selectedCell.hour === cell.hour
    );

    if (cellIndex === -1) {
      newSelectedCells.push(cell);
    } else {
      newSelectedCells.splice(cellIndex, 1);
    }

    setSelectedCells(newSelectedCells);
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Monday</TableCell>
            <TableCell>Tuesday</TableCell>
            <TableCell>Wednesday</TableCell>
            <TableCell>Thursday</TableCell>
            <TableCell>Friday</TableCell>
            <TableCell>Saturday</TableCell>
            <TableCell>Sunday</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: 7 }).map((_, hourIndex) => (
            <TableRow key={hourIndex}>
              <TableCell component="th" scope="row">
                {8 + hourIndex * 2}:00 - {10 + hourIndex * 2}:00
              </TableCell>
              {Array.from({ length: 7 }).map((_, dayIndex) => {
                const cell: Cell = { day: dayIndex, hour: hourIndex + 8 };
                const isChecked = selectedCells.some(
                  (selectedCell) => selectedCell.day === cell.day && selectedCell.hour === cell.hour
                );

                return (
                  <TableCell key={dayIndex}>
                    <Checkbox
                      checked={isChecked}
                      icon={<CheckBoxOutlineBlankIcon />}
                      checkedIcon={<CheckBoxIcon />}
                      onClick={() => handleCellClick(cell)}
                    />
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Schedule;
// TO DO: 
// - add close and save button
// - move table to modal