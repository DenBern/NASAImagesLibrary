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
              sx={{ bgcolor: '#21212194'}}
              variant="rectangular"
              duration={0.9}
              width={256}
              height={144}
            />
            <Skeleton
              sx={{ bgcolor: '#21212194'}}
              variant="text"
              duration={0.9}
              width={`100%`}
            />
            <Skeleton
              sx={{ bgcolor: '#21212194'}}
              variant="text"
              duration={0.9}
              width={`100%`}
            />
            <Skeleton
              sx={{ bgcolor: '#21212194'}}
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