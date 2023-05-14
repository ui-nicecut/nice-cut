import React, { useEffect } from 'react';
import './ScheduleDialog.scss';
import { getStore } from '../../lib/util';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Schedule, Hour } from '../../lib/types/Schedule';
import { HairStylist } from '../../lib/types/HairStylist';
import { STYLISTS_KEY } from '../../lib/keys';

interface ScheduleProps {
  stylist?: HairStylist;
  open: boolean;
  onClose: () => void;
}

export default function ScheduleDialog({ stylist, open, onClose }: ScheduleProps) {
  const getDayName = (dayIndex: number): string => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days[dayIndex];
  };

  const initialSelectedCells: Schedule = {
    days: Array.from({ length: 7 }).map((_, dayIndex) => ({
      name: getDayName(dayIndex),
      hours: Array.from({ length: 14 }).map((_, hourIndex) => ({
        value: 8 + hourIndex,
        selected: false,
      })),
    })),
  };
  const [selectedCells, setSelectedCells] = React.useState<Schedule>(initialSelectedCells);

  function initialValues() {
    return stylist?.schedule || initialSelectedCells;
  }

  useEffect(() => {
    setSelectedCells(initialValues());
  }, [open, stylist]);

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

  function saveEntity() {
    const stylists = getStore<HairStylist[]>(STYLISTS_KEY, []);
    if (stylist) {
      const index = stylists.findIndex(s => s.id === stylist.id);
      stylists[index].schedule = generateSelectedHours();
      localStorage.setItem(STYLISTS_KEY, JSON.stringify(stylists));
    }
    onClose();
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogTitle>
        Edit work schedule
      </DialogTitle>
      <DialogContent>
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
      </TableContainer>
    </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={saveEntity}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}