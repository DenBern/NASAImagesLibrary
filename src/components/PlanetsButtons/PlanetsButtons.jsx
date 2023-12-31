import React, {useContext, useState} from "react";
import { Button } from "@mui/joy";
import { planets } from "../../variables/variables.js";
import { Context } from "../../context/Context.jsx";

import "./PlanetsButtons.scss";

export const PlanetsButtons = () => {

  const {setSearch, setPage} = useContext(Context);
  const [activeButton, setActiveButton] = useState(false);

  const handleChangePlanet = (planet) => {
    setPage(1);
    setSearch(planet.toLowerCase());
  }

  return (
    <div className="planets-button">
      <Button
        variant="contained"
        style={
            {
                color: '#fff',
            }
        }
        onClick={() => setActiveButton(!activeButton)}
      >
          Solar system planets
      </Button>
      <div className={`buttons ${activeButton ? 'visible' : 'hidden'}`}>
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