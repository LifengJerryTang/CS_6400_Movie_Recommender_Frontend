import { useCallback, useRef, useState, useEffect } from 'react'
import Link from 'next/link';
import movieStyles from '../movies.module.css';
import {TextField, InputAdornment, IconButton} from '@material-ui/core';
import TheatersIcon from '@material-ui/icons/Theaters';
import * as dbAPI from "../api/api";
import SearchIcon from "@material-ui/icons/Search";
import ResultDisplay from "./ResultDisplay";


export default function MySQL() {

  const [movieName, setMovieName] = useState('')
  const [results, setResults] = useState([])

  const enterMovieName = (event) => {
    setMovieName(event.target.value)
  }

  const search = () => {
    dbAPI.searchSimilarMovies("mysql", movieName)
        .then((res) => {
          setResults(res.data)
        })
  }

  return (
    <> 
      <div
        className={movieStyles.container}
      >
        <TextField
          className={movieStyles.search}
          onChange={enterMovieName}
          placeholder='Similar Movies (MySQL)'
          type="text"
          value={movieName}
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
          <SearchIcon />
        </IconButton>
        </div>

        {results.length > 0 && (
            <ResultDisplay results={results}/>
        )}
        {/* {temp.length > 0 && (
            <MovieDisplay {...{...temp}}/>  
        )} */}

    </>
    
  )
}
