import React, { useContext } from "react";
import { Button } from "@mui/joy";
import { Context } from "../../context/Context.jsx";

import './Empty.scss';

export const Empty = (props) => {
  const {errorItems} = props;
  const {setSearch, startSearch} = useContext(Context);
  return (
    <div className="empty-wrapper">
      <div className="empty-image"/>
      <div className="empty">
        <h3>
          Ooops !<br/>
          Houston, <br/>
          we have a problem !
        </h3>
        <p>
          {!errorItems
            ? 'Results not found'
            : 'Something went wrong'
          }
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