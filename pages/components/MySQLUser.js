import { useCallback, useRef, useState, useEffect } from 'react'
import Link from 'next/link';
import movieStyles from '../movies.module.css';
import {TextField, InputAdornment, IconButton} from '@material-ui/core';
import TheatersIcon from '@material-ui/icons/Theaters';
import ResultDisplay from './ResultDisplay';
import { apiKey} from '../../config';
import * as dbAPI from "../api/api";
import SearchIcon from "@material-ui/icons/Search";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";


export default function MySQLUser() {
  const [userId, setUserId] = useState('')
  const [results, setResults] = useState([])
  const [searching, setSearching] = useState(false)
  const [runtime, setRuntime] = useState(-1)

  const enterUserId = (event) => {
    setUserId(event.target.value)
  }

  const search = () => {
    setSearching(true)
    dbAPI.searchRecommendedMovies("mysql", userId)
        .then((res) => {
            setSearching(false)

            let searchResult = []

            for (let movieData of res.data["movies"]) {
                let movieName = movieData["name"]
                let movieGenres = movieData["genres"].join(", ")
                let movieCasts = movieData["casts"].join(", ")
                let movieKeywords = movieData["keywords"].join(", ")

                searchResult.push({
                    movieName,
                    movieGenres,
                    movieCasts,
                    movieKeywords
                })
            }

            setResults(searchResult)
            setRuntime(Math.round(res.data["runtime"] * 100) / 100)

        }).catch(err => {
        setSearching(false)
        console.log(err)
    })
  }

  return (
    <> 
      <div
        className={movieStyles.container}
      >
        <TextField
          className={movieStyles.search}
          onChange={enterUserId}
          placeholder='Recommended Movies (MySQL)'
          type="text"
          value={userId}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <TheatersIcon />
              </InputAdornment>
            )
          }}
        />
        <IconButton aria-label="search" onClick={search}>
            <IconButton aria-label="search" onClick={search}>
                {
                    searching?  <CircularProgress /> : <SearchIcon />
                }
            </IconButton>
        </IconButton>
        </div>


        {results.length > 0 &&
            (  <Alert className={movieStyles.alert} severity="success">SUCCESS! Runtime: {runtime} seconds</Alert>)
        }
        {results.length > 0 &&
            (<ResultDisplay results={results}/>)

        }
    </>
    
  )
}
