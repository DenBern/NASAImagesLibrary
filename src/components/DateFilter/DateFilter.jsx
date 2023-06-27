import React, { useContext, useState } from "react";
import { Button } from "@mui/joy";
import { Context } from "../../Context.jsx";
import dayjs from 'dayjs';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from "@mui/x-date-pickers";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";

import "./DateFilter.scss";
import { setYear } from "date-fns";

export const DateFilter = () => {

  const [startYear, setStartYear] = useState();
  const [endYear, setEndYear] = useState();

  const {yearStart, yearEnd, setYearStart, setYearEnd} = useContext(Context);
  const currentYear = dayjs(new Date()).format('YYYY');;

  return (
    <div className="date-filter">
      <Button 
        onClick={() => {
          setYearStart();
          setYearEnd();
        }}
        style={{
          width: '50px',
          height: '50px',
        }}
      >
        <DeleteIcon/>
      </Button>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={"Year start"}
          views={['year']}
          onChange={(value) => setStartYear(value.$y)}
        />
        <DatePicker
          label={"Year end"} 
          views={['year']} 
          onChange={(value) => setEndYear(value.$y)}
        />
      </LocalizationProvider>
      <Button
        onClick={() => {
          setYearStart(startYear);
          setYearEnd(endYear);
        }}
        style={{
          width: '50px',
          height: '50px',
        }}
      >
        <SearchIcon/>
      </Button>
      
    </div>
  )
}