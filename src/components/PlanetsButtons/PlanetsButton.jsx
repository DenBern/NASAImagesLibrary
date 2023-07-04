import React, {useContext, useState} from "react";
import { Button } from "@mui/joy";
import { planets } from "../../variables/variables.js";
import { Context } from "../../context/Context.jsx";

import "./PlanetsButtons.scss";

export const PlanetsButtons = () => {

  const {page, setSearch, setPage} = useContext(Context);
  const [activeButton, setActiveButton] = useState(false);

  const handleChangeButton = (activeButton) => {
    if (!activeButton) {
      setActiveButton(!activeButton);
      setPage(1);
    } else {
      setActiveButton(!activeButton);
    }
  }

  const handleChangePlanet = (planet) => {
    if (page !== 1) {
      setPage(1);
    }
    setSearch(planet.toLowerCase());
  }

  return (
    <div className="planets-button">
      <Button variant="contained"
        style={
            {
                color: '#fff',
                background: '#312E81',
            }
        }
        onClick={() => handleChangeButton(activeButton)}
      >
          Solar system planets
      </Button>
      <div className="buttons"
        style={{
            display: `${activeButton ? 'flex' : 'none'}`,
        }}
      >
          {planets.map((planet, index) => {
            return (
              <div 
                className="wrapper-btn"
                key={index}>
                <Button
                  style={
                      {
                          padding: '10px',
                          color: '#fff'
                      }
                  }
                  onClick={() => handleChangePlanet(planet)}
                >
                  {planet}
                </Button>
              </div>
            )
          })}
      </div>
    </div>
  )
}