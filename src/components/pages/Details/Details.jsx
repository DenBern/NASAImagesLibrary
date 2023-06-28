import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { useNASAService } from "../../../service/NASAService";

export const Details = () => {

  const {id} = useParams();
  const{getDescId, metaData, getImage} = useNASAService();

  useEffect(() => {
    getImage(id);
    getDescId(id);
  }, [id]);

  return (
    <div className="id">
      {id}
    </div>

  )
}