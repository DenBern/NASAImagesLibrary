import React from "react";

import './EmptyError.scss';

export const EmptyError = (props) => {
  const {errorItems, errorMetaData} = props;
  return (
    <div className="empty-wrapper">
      <div className="empty-image"/>
      <div className="empty-text">
        <h3>
          Ooops !<br/>
          Houston, <br/>
          we have a problem!
        </h3>
        <p>
          {!errorItems && !errorMetaData
            ? 'Results not found.'
            : 'Something went wrong. Try again.'
          }
        </p>
      </div>
    </div>
  )
}