import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Box,
} from "@material-ui/core";
import Image from "next/image";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SocialIcon from "./socials";
import GitHubIcon from "@mui/icons-material/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
    color: "#fff",
    padding: theme.spacing(20),
    marginBottom: theme.spacing(28),
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: theme.spacing(2),
  },
  description: {
    fontSize: "1.25rem",
    marginBottom: theme.spacing(2),
  },
  buttonContainer: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginRight: theme.spacing(2),
    padding: theme.spacing(1, 2),
  },
  image: {
    maxWidth: "100%",
  },
  socialIcons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <Paper
      className={`${classes.root} bg-gradient-to-r from-gray-800 via-gray-800 to-gray-700`}
    >
      {" "}
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Image
              src="/images/cover.gif"
              alt="Hero Image"
              className={classes.image}
              width={982}
              height={484}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" className={classes.title}>
              Dev Help
            </Typography>
            <Typography variant="body1" className={classes.description}>
              Uma comunidade focada em ajudar novatos na programação onde todos
              são bem-vindos!
            </Typography>
            <div className={classes.buttonContainer}>
              <a href="/blog" className="group">
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                >
                  Visite nosso blog{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    <ChevronRightIcon />
                  </span>
                </Button>
              </a>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Box mt={5}>
        <div className={classes.socialIcons}>
          <SocialIcon
            name="GitHub"
            icon={<GitHubIcon />}
            link="https://github.com/dev-help-oficial"
          />
        </div>
      </Box>
    </Paper>
  );
};

export default Hero;
