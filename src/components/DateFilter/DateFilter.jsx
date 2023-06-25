import React, { useContext } from "react";
import { Button, Input } from "@mui/joy";
import { Context } from "../../Context.jsx";

import "./DateFilter.scss";

export const DateFilter = () => {

  const {search, yearStart, yearEnd} = useContext(Context);

  return (
    <div className="date-filter">
      <Button/>
      <Input
        value={yearStart}
        placeholder="Year start"
        type="number"  
        min={1}
        max={currentYear} 
      />
      <Input
        value={yearEnd}
        placeholder="Year end"
        type="number" 
        max={currentYear}
      />
      <Button/>
    </div>
  )
}