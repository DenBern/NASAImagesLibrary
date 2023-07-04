import React from "react";
import { useNASAService } from "../../../service/NASAService";
import { Skeleton } from "@mui/material";

import "./SkeletonDetails.scss";

export const SkeletonDetails = () => {
  return (
          <div className="details-skeleton">
            <div className="main-skeleton">
              <Skeleton
                variant="rectangular"
                width="70%"
                height="100%"
              />
              <Skeleton
                variant="rectangular"
                width="20%"
                height="80%"
              />
            </div>
            <div className="keywords-skeleton">
              {Array(4).fill().map((item, index) => 
                  <Skeleton
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