import React from "react";
import { Skeleton } from "@mui/material";

import "./SkeletonCard.scss";

export const SkeletonCard = (props) => {
  const {pageSize} = props;
  return (
    <>
      {Array(pageSize)
        .fill()
        .map((item, index) =>
          <div className="card-skeleton"
            key={index}
          >
            <Skeleton
              variant="rectangular"
              duration={0.9} 
              width={256}
              height={144}
            />
            <Skeleton
              variant="text"
              duration={0.9} 
              width={`100%`} 
            />
            <Skeleton
              variant="text"
              duration={0.9} 
              width={`100%`} 
            />
            <Skeleton
              variant="text"
              duration={0.9} 
              width={`100%`} 
            />
          </div>
        )
      }
    </>
  )
}