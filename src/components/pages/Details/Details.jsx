import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useNASAService } from "../../../service/NASAService";
import { Divider } from "../../Divider/Divider.jsx";
import { SkeletonDetails } from "../../Skeletons/SkeletonDetails/SkeletonDetails.jsx";
import { Button } from "@mui/material";
import ReplyIcon from '@mui/icons-material/Reply';
import { Skeleton } from "@mui/material";
import { TypographyStylesProvider } from '@mantine/core';

import "./Details.scss";

export const Details = () => {

  const {id} = useParams();
  const{
    getMetaData,
    metaData,
    getAsset,
    asset,
    loadingMetaData,
    loadingAsset} = useNASAService();

  useEffect(() => {
    getAsset(id);
    getMetaData(id);
  }, [id]);

  const loaded = !loadingMetaData && metaData && !loadingAsset;

  return (
    <div className="wrapper-details">
        <div className="wrapper-header">
          <header>
            <div className="title-details">
              <h3>
                {!loadingMetaData && metaData
                  ? metaData.title
                  : <Skeleton
                      sx={{ bgcolor: "#21212194"}}
                      variant="text"
                      width="70%"
                    />
                }
              </h3>
            </div>
              <div className="button-back">
                <Link
                  to={`/main`}
                  key={id}
                >
                  <Button
                    startIcon={<ReplyIcon/>}>
                    Back
                  </Button>
                </Link>
              </div>
          </header>
        </div>
        <Divider/>
        <div className="wrapper-main">
          {loadingMetaData
            ? <SkeletonDetails/>
            : loaded
            ? (
                <main>
                  <section className="img-keywords">
                    <img
                      className="image"
                      src={asset}
                      alt={metaData.title}
                    />
                    <div className="wrapper-keywords">
                      <h4>Keywords:</h4>
                      <div className="keywords">
                        {metaData.keywords.map((item, index) => {
                          return (
                            <p
                              className="keyword"
                              key={index}>
                              {item}
                            </p>
                          )})
                        }
                      </div>
                    </div>
                  </section>
                  <section className="metadata">
                    <h4>Information</h4>
                    <Divider/>
                    <div className="photographer">
                      <h5>Created by</h5>
                      <p>{
                        metaData.photographer === ''
                          ?  metaData.secondaryCreator
                          : metaData.photographer
                        }
                      </p>
                    </div>
                    <Divider/>
                    <div className="date-created">
                      <h5>Date created</h5>
                      <p>{metaData.date}</p>
                    </div>
                    <Divider/>
                    <div className="wrapper-description">
                      <h4>Description</h4>
                      <TypographyStylesProvider>
                        <div dangerouslySetInnerHTML={{ __html: `<p>${metaData.description}</p>`}} />
                      </TypographyStylesProvider>
                    </div>
                  </section>
                </main>
              )
              : null
          }
        </div>
    </div>
  )
}