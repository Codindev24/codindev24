import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import Moment from 'react-moment';

// menu
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// card
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
      //maxWidth: 900,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

export const Notes = ({ title, body, code, publishedAt, image, author }) => {
  const [imageUrl, setImageUrl] = useState('');
  // card
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: 'fr3rfp8i',
      dataset: 'production',
    });

    setImageUrl(imgBuilder.image(image));
  }, [image]);

  // 3dot menu for delete and edit post
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="notesslug container mx-auto">

          <Card className={classes.root}>

              <CardHeader
                  avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                          Cd
                      </Avatar>
                  }
                  action={
                    <div>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    </Button>
                    <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                      <MenuItem onClick={handleClose}>Delete Note</MenuItem>
                      <MenuItem onClick={handleClose}>Edit Note</MenuItem>
                      <MenuItem onClick={handleClose}>Close</MenuItem>
                    </Menu>
                  </div>
                  }
                  title={title}
                  subheader={
                    <Moment className="date text-purple-500" format="HH:mm DD MMM YYYY">
                    {publishedAt}
                    </Moment>   
                  }
              />

              <CardMedia
                  className={classes.media}
                  image={imageUrl}
                  title="Paella dish"
              />

              <CardContent>
              <Typography paragraph>
                      <p className="text-sm bg-purple-900 text-white text-center">Lýsing..</p>
                      <BlockContent blocks={body} projectId="fr3rfp8i" dataset="production" />
                      </Typography>
              </CardContent>

              <CardActions disableSpacing>

                  <IconButton
                      className={clsx(classes.expand, {
                          [classes.expandOpen]: expanded,
                      })}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                  >
                      <p className="bg-purple-900 text-white text-sm pl-2 pr-2">code
                      <ExpandMoreIcon /></p>

                  </IconButton>

              </CardActions>

              <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>

                      <Typography paragraph>
                      {/* <p className="text-sm bg-purple-900 text-white text-center">Code..</p> */}
                      <code className="text-gray-700"><BlockContent className="bg-gray-900 p-2" blocks={code} projectId="fr3rfp8i" dataset="production" /></code>
                      </Typography>

                  </CardContent>
              </Collapse>

          </Card>

    </div>/* .notesslug */
  );
};

export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;
  
  if (!pageSlug) {
    return {
      notFound: true
    }
  }

  const query = encodeURIComponent(`*[ _type == "notes" && slug.current == "${pageSlug}" ]`);
  const url = `https://fr3rfp8i.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const notes = result.result[0];

  if (!notes) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        code: notes.code,
        body: notes.body,
        title: notes.title,
        publishedat: notes.publishedAt,
        image: notes.mainImage,
        author: notes.author,
      }
    }
  }
};

export default Notes;