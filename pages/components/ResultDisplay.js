import List from '@material-ui/core/List';
import movieStyles from '../movies.module.css';
import {useEffect, useState} from "react";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MovieIcon from '@material-ui/icons/Movie';
import {Grid} from "@material-ui/core";

export default function ResultDisplay(props) {

    const [data, setData] = useState([])

    useEffect(() => {
        setData(props.results)
    }, [])


    return (
        <div className={movieStyles.display}>
          <List>
              {
                  data.map((d) => {
                      return   <Accordion>
                          <AccordionSummary
                              expandIcon={<MovieIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                          >
                              <Typography><strong>{d.movieName}</strong></Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                              <Grid container irection="column" spacing={2}>
                                  <Grid item xs={12}>
                                      <Typography display="block"><strong>Name</strong>: {d.movieName}</Typography>
                                  </Grid>
                                  <Grid item xs={12}>
                                      <Typography display="block"><strong>Genres</strong>: {d.movieGenres}</Typography>
                                  </Grid>
                                  <Grid item xs={12}>
                                      <Typography display="block"><strong>Casts</strong>: {d.movieCasts}</Typography>
                                  </Grid>
                                  <Grid item xs={12}>
                                      <Typography display="block"><strong>Keywords</strong>: {d.movieKeywords}</Typography>
                                  </Grid>
                              </Grid>
                          </AccordionDetails>
                      </Accordion>
                  })
              }
          </List>
        </div>
      )
    }
