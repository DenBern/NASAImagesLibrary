import React from "react";
import { Skeleton } from "@mui/material";

import "./SkeletonDetails.scss";

export const SkeletonDetails = () => {
  return (
          <div className="details-skeleton">
            <div className="main-skeleton">
              <Skeleton
                sx={{ bgcolor: '#21212194'}}
                variant="rectangular"
                width="70%"
                height="100%"
              />
              <Skeleton
                sx={{ bgcolor: '#21212194'}}
                variant="rectangular"
                width="20%"
                height="80%"
              />
            </div>
            <div className="keywords-skeleton">
              {Array(4).fill().map((item, index) =>
                  <Skeleton
                    sx={{ bgcolor: '#21212194'}}
                    key={index}
                    variant="rectangular"
                    width="30%"
                  />
                )
              }
            </div>
          </div>
  )
}