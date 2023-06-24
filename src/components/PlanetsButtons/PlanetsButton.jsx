import React, {useState} from "react";
import { Button } from "@mui/joy";
import { planets } from "../../variables/variables.js";

import "./PlanetsButtons.scss";

export const PlanetsButtons = () => {

  const [activeButton, setActiveButton] = useState(false);

  return (
    <div className="wrapper-buttons">
      <Button variant="contained"
        style={
            {
                color: '#fff',
                background: '#312E81',
            }
        }
        onClick={() => setActiveButton(!activeButton)}
      >
          Solar system planets
      </Button>
      <div className="planets-button"
        style={{
            display: `${activeButton ? 'flex' : 'none'}`,
        }}
      >
          {planets.map((item, index) => {
            return (
              <div 
                className="wrapper-btn"
                key={index}>
                <Button
                  style={
                      {
                          padding: '0',
                          color: '#fff'
                      }
                  }
                  onClick={(e) => console.log(e.target)}
                >
                  {item}
                </Button>
              </div>
            )
          })}
      </div>
                    </div>
  )
}