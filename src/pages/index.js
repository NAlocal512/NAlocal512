import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Img from "gatsby-image"

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'

import StarIcon from '@material-ui/icons/Star'
import InfoIcon from '@material-ui/icons/Info'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Done from '@material-ui/icons/Done'

import { Link } from 'gatsby'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const IndexPage = props => {

  const classes = useStyles()
  const [events, setEvents] = React.useState(true)
  const [info, setInfo] = React.useState(true)

  function handleClick(id) {
    switch(id) {
      case "events":
        setEvents(!events)
        break;
      case "info":
        setInfo(!info)
        break
    }
  }

  return(
    <Layout>
      <SEO title="Home" />
      <Grid container spacing={3} justify="center">
        <Grid item xs={2}>
          <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </Grid>
        <Grid item xs={8}>
          <h1>NAlocal512</h1>
          <h5>
            The local No Agenda Team from Austin, TX
          </h5>
        </Grid>
      </Grid>
      <Divider />
      <p><Img fluid={props.data.meetshoot001group.childImageSharp.fluid} alt="" /></p>
      <List
        component="nav"
        className={classes.root}
      >
      <ListItem id="Upcoming events" button onClick={() => handleClick("events")}>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Upcoming Events" />
        {events ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={!events} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to="/MeetShoot001">
          <ListItem button className={classes.nested}>
            <ListItemIcon><Done /></ListItemIcon>
                <ListItemText primary="MeetShoot #001 -aka- ShootUp - MeatChute - SheetUp - @Lone Star Gun range - 2019-12-14" />
          </ListItem>
          </Link>
        </List>
      </Collapse>
      <ListItem button onClick={() => handleClick("info")}>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="Info" />
        {info ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={!info} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to="/about">
          <ListItem button className={classes.nested}>
            <ListItemIcon><Done /></ListItemIcon>
              <ListItemText primary="About this site." />
          </ListItem>
          </Link>
          <Link to="/benify">
            <ListItem button className={classes.nested}>
              <ListItemIcon><Done /></ListItemIcon>
              <ListItemText primary="Benify Yourself!" />
            </ListItem>
          </Link>
        </List>
      </Collapse>
    </List>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    meetshoot001group: file(relativePath: { eq: "meetshoot001-group.jpg" }) {
      ...fluidImage
    }
  }
`
