import React from "react";
import Skeleton from "react-loading-skeleton";
import { useNASAService } from "../../../service/NASAService";

import 'react-loading-skeleton/dist/skeleton.css';

export const SkeletonDetails = () => {
  const {keywords, loadingMetaData, metaData} = useNASAService();
  return (
          <div 
            style={
              {
                display: 'flex', 
                flexDirection: 'column',
                gap: '20px',
                width: "100%",
                padding: "30px 10px"
              }
            }
          >
            <div 
              style={
                {
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  width: "100%",
                  height: "auto",
                }
              }
            >
              <Skeleton className="skeleton1"
                baseColor="#5294e0"
                highlightColor="#96c7ff"
                duration={0.9}
                width={600}
                height={500}
              />
              <Skeleton
                baseColor="#5294e0"
                highlightColor="#96c7ff"
                duration={0.9}
                width={150}
                height={350}
              />
            </div>
            <div 
              style={
                {
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  width: "70%",
                }
              }
            >
              {!loadingMetaData && metaData ? keywords.map((index, item) => 
                (
                  <Skeleton
                    key={index}
                    baseColor="#5294e0"
                    highlightColor="#96c7ff"
                    duration={0.9} 
                    width={40} 
                    height={20}
                  />
                ))
                : null
              }
              </div>
          </div>
  )
}