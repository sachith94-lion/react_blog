import React from "react";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardActionArea } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Pagination from "@material-ui/lab/Pagination";
import PostsData from "../../posts.json";
import UIStyles from "./Articlesstyle";
import { Link } from "react-router-dom";


var postsList = PostsData.Posts;

function Articles() {
  const classes = UIStyles();

  return (
    <div>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          {postsList.map((s) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={s.id} >
                <Link className="nav-link" to={`/post/${s.id}`} title={s.title} subtitle2={s.subtitle2} content={s.content} date={s.date}>
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={s.CardMedia}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {s.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {s.content}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.cardActions}>
                      <Box className={classes.author}>
                        <Avatar src={s.avatar} />
                        <Box ml={2}>
                          <Typography variant="subtitle2" component="p">
                            {s.subtitle2}
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            color="textSecondary"
                            component="p"
                          >
                            {s.date}
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <BookmarkBorderIcon />
                      </Box>
                    </CardActions>
                  </Card>
                </Link>
              </Grid>
            );
          })}
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>
    </div>
  );
}

export default Articles;
