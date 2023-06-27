import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { useNASAService } from "../../../service/NASAService";

export const Details = () => {

  const {id} = useParams();
  const{getItems, items, getDetails} = useNASAService();

  useEffect(() => {
    getDetails(id);
    getItems();
  }, [id])

  console.log(items)

  return (
    <div className="id">
      {id}
    </div>

  )
}