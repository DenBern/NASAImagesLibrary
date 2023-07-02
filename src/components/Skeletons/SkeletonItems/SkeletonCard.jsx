import React from "react";
import Skeleton from "react-loading-skeleton";

export const SkeletonCard = () => {
  return (
    <div className="cards-skeleton">
    {Array(10)
      .fill
      .map((item, index) => {
        <div className="card-sklt" key={index}>
                <Skeleton/>
                <div className="card-description">
                    <Skeleton/>
                    <div className="details">
                        <div className="location">
                            <Skeleton/>
                        </div>
                        <div className="photographer">
                            <Skeleton/>
                        </div>
                    </div>
                </div>
        </div>
      })}
    </div>
  )
}