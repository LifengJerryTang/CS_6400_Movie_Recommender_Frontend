import List from '@material-ui/core/List';
import movieStyles from '../movies.module.css';
import {useEffect, useState} from "react";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MovieIcon from '@material-ui/icons/Movie';

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
                              <Typography>{d}</Typography>
                          </AccordionSummary>
                      </Accordion>
                  })
              }
          </List>
        </div>
      )
    }
