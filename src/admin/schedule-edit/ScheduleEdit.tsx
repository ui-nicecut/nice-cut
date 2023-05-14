import React, { useState } from 'react';
import './ScheduleEdit.scss';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Schedule, Day, Hour } from '../../lib/types/Schedule';


const ScheduleEdit: React.FC = (): React.ReactElement => {
  const initialSelectedCells: Schedule = {
    days: Array.from({ length: 7 }).map((_, dayIndex) => ({
      name: getDayName(dayIndex),
      hours: Array.from({ length: 14 }).map((_, hourIndex) => ({
        value: 8 + hourIndex,
        selected: false,
      })),
    })),
  };
  const [selectedCells, setSelectedCells] = useState<Schedule>(initialSelectedCells);

  const handleCellClick = (dayIndex: number, hourIndex: number) => {
    const newSelectedCells: Schedule = {
      ...selectedCells,
      days: selectedCells.days.map((day, dIndex) => {
        if (dIndex === dayIndex) {
          const updatedHours = day.hours.map((hour, hIndex) => {
            if (hIndex >= hourIndex && hIndex < hourIndex + 2) {
              return {
                ...hour,
                selected: !hour.selected,
              };
            }
            return hour;
          });
          return {
            ...day,
            hours: updatedHours,
          };
        }
        return day;
      }),
    };
    setSelectedCells(newSelectedCells);
  };

  const generateSelectedHours = (): Schedule => {
    const selectedSchedule: Schedule = {
      days: selectedCells.days.map((day) => {
        const selectedHours: Hour[] = [];
        day.hours.forEach((hour) => {
          // if (hour.selected) {
            selectedHours.push(hour);
          // }
        });
        return {
          name: day.name,
          hours: selectedHours,
        };
      }),
    };
    return selectedSchedule;
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            {selectedCells.days.map((day) => (
              <TableCell key={day.name}>{day.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: 14 }).map((_, hourIndex) => (
            <TableRow
              key={hourIndex}
              className={hourIndex % 2 !== 0 ? 'hidden-row' : ''}
            >
              <TableCell component="th" scope="row">
                {8 + hourIndex}:00 - {10 + hourIndex}:00
              </TableCell>
              {selectedCells.days.map((day, dayIndex) => {
                const hour = day.hours[hourIndex];
                const isChecked = hour.selected;

                return (
                  <TableCell key={dayIndex}>
                    <Checkbox
                      checked={isChecked}
                      icon={<CheckBoxOutlineBlankIcon />}
                      checkedIcon={<CheckBoxIcon />}
                      onClick={() => handleCellClick(dayIndex, hourIndex)}
                    />
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <button onClick={() => console.log(generateSelectedHours())}>Save Schedule</button>
    </TableContainer>
  );
};
 
const getDayName = (dayIndex: number): string => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return days[dayIndex];
};

export default ScheduleEdit;
// TO DO: 
// - add close and save button
// - move table to modal