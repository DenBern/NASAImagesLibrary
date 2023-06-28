import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { useNASAService } from "../../../service/NASAService";
import { Divider } from "../../Divider/Divider.jsx";

import "./Details.scss";

export const Details = () => {

  const {id} = useParams();
  const{getDescId, metaData, getImage, image} = useNASAService();

  useEffect(() => {
    getImage(id);
    getDescId(id);
  }, [id]);

  return (
    <div className="wrapper-details">
      <div className="container-details">
      {!metaData 
        ? 'Loading' 
        : (
            <>
              <header>
                <div className="title-details">
                  <h3>{metaData.title}</h3>
                </div>
                <div className="button-back">
                  <hr/>
                </div>
              </header>
              <Divider/>
              <main>
                <section className="img-keywords">
                  <img
                    className="image"
                    src={image} 
                    alt={metaData.title}
                  />
                  <div className="wrapper-keywords">
                    <h4>Keywords:</h4>
                    <div className="keywords">
                      {metaData.keywords.map((item, index) => {
                        return <p 
                                  className="keyword"
                                  key={index}>
                                  {item}
                                </p>
                      })}
                    </div>
                  </div>
                </section>
                <section className="metadata">
                  <h4>Information</h4>
                  <Divider/>
                  <div className="photographer">
                    <h5>Created by</h5>
                    <p>{metaData.location}</p>
                  </div>
                  <Divider/>
                  <div className="date-created">
                    <h5>Date created</h5>
                    <p>{metaData.date}</p>
                  </div>
                  <Divider/>
                  <div className="wrapper-description">
                    <h4>Description</h4>
                    <p className="description">
                      {metaData.description}
                    </p>
                  </div>
                </section>
              </main>
            </>
          )
      }
      </div>
    </div>

  )
}