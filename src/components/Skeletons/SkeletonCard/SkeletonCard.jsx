import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export const SkeletonCard = (props) => {
  const {pageSize} = props;
  return (
    <>
      {Array(pageSize)
        .fill()
        .map((item, index) =>
          <div 
            key={index}
            style={
              {
                display: 'flex', 
                flexDirection: 'column',
                gap: '10px',
                width: '256px',
                height: '220px',
              }
            }
          >
            <Skeleton
              baseColor="#5294e0"
              highlightColor="#96c7ff"
              duration={0.9} 
              width={256}
              height={144}
            />
            <Skeleton
              baseColor="#5294e0"
              highlightColor="#96c7ff"
              duration={0.9} 
              width={`100%`} 
              height={`100%`}
            />
            <Skeleton
              baseColor="#5294e0"
              highlightColor="#96c7ff"
              duration={0.9} 
              width={`100%`} 
              height={`100%`}
            />
            <Skeleton
              baseColor="#5294e0"
              highlightColor="#96c7ff"
              duration={0.9} 
              width={`100%`} 
              height={`100%`}
            />
          </div>
        )
      }
    </>
  )
}