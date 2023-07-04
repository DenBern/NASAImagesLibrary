import React from "react";
import { Button } from "@mui/joy";

import './Empty.scss';

export const Empty = () => {
  return (
    <div className="empty-wrapper">
      <div className="empty-image"/>
      <div className="empty">
        <h3> 
          Ooops !<br/>
          Houston, we have a problem !
        </h3>
        <p>
          Results not found!
        </p>
        <Button width={`30%`}>
          Back to search
        </Button>
      </div>
    </div>
  )
}