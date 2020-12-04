import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

function Main(props) {
  const classes = useStyles();
  const { posts, title } = props;

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />

      <Typography variant="subtitle" gutterBottom>
      <p>MaterialUI Documentation: <a href="https://github.com/mui-org/material-ui/tree/master/examples/nextjs">https://github.com/mui-org/material-ui/tree/master/examples/nextjs</a></p>
      <p>Next.js with Material-UI: <a href="https://itnext.io/next-js-with-material-ui-7a7f6485f671">https://itnext.io/next-js-with-material-ui-7a7f6485f671</a></p>
      <p>Next.js with Material-UI (Git): <a href="https://github.com/hadnazzar/nextjs-with-material-ui">https://github.com/hadnazzar/nextjs-with-material-ui</a></p>
      </Typography>

      {/*posts.map((post) => (
        <Markdown className={classes.markdown} key={post.substring(0, 40)}>
          {post}
        </Markdown>
      )) */}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;
