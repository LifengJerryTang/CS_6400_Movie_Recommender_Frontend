import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import movieStyles from '../movies.module.css';
import {useEffect, useState} from "react";


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
                      return <ListItem button>
                                <ListItemText primary={`${d}`}/>
                            </ListItem>
                  })
              }
          </List>
        </div>
      )
    }
