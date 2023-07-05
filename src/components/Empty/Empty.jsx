import React, { useContext } from "react";
import { Button } from "@mui/joy";

import './Empty.scss';
import { Context } from "../../context/Context.jsx";

export const Empty = () => {
  const {setSearch, startSearch} = useContext(Context);
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
        <Button
          width={`30%`}
          onClick={() => setSearch(startSearch.toLowerCase())}>
          Back to search
        </Button>
      </div>
    </div>
  )
}