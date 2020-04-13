import React, { useEffect, useState } from "react";

import axios from "axios";

import NewsList from "./NewsList";

import { useStyles } from "./NewsList.style";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

const NEWS_URL =
  "http://newsapi.org/v2/top-headlines?country=ru&apiKey=b2dd9ebb18cd41f481e282915f4c0ffc";

export default function News() {
  const [news, setNews] = useState([]);
  const [isNewsLoaded, setIsNewsLoaded] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    axios(NEWS_URL).then(result => {
      setNews(result.data.articles);
      setIsNewsLoaded(true);
    });
  }, []);

  return (
    <div className={classes.root}>
      <Typography
        variant="h2"
        component="h3"
        gutterBottom
        className={classes.headTitle}
      >
        Новости
      </Typography>
      {isNewsLoaded ? (
        <NewsList news={news} />
      ) : (
        <CircularProgress color="secondary" className={classes.progressBar} />
      )}
    </div>
  );
}
