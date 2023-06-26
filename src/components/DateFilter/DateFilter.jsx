import React, { useContext } from "react";
import { Button, Input } from "@mui/joy";
import { Context } from "../../Context.jsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from "@mui/x-date-pickers";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";


import "./DateFilter.scss";
import { Search } from "@mui/icons-material";

export const DateFilter = () => {

  const {search, yearStart, setYearStart, yearEnd, setYearEnd} = useContext(Context);

  return (
    <div className="date-filter">
      <Button 
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
          onChange={(value) => {
            console.log(value.$y)
            setYearStart(value.$y)}}
        />
        <DatePicker 
          label={"Year end"} 
          views={['year']} 
          onChange={(value) => console.log(value.$y)}
        />
      </LocalizationProvider>
      <Button 
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