import { useCallback, useRef, useState, useEffect } from 'react'
import Link from 'next/link';
import movieStyles from '../movies.module.css';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import TheatersIcon from '@material-ui/icons/Theaters';
import * as dbAPI from "../api/api";
import ResultDisplay from "./ResultDisplay";
import CircularProgress from '@material-ui/core/CircularProgress';


export default function Milvus() {

  const [movieName, setMovieName] = useState('')
  const [results, setResults] = useState([])
  const [searching, setSearching] = useState(false)
  
  const enterMovieName = (event) => {
    setMovieName(event.target.value)
  }

  const search = () => {
    setSearching(true)

    dbAPI.searchSimilarMovies("milvus", movieName)
        .then((res) => {
            setSearching(false)
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
          // onFocus={onFocus}
          placeholder='Similar Movies (Milvus)'
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
                {
                    searching?  <CircularProgress /> : <SearchIcon />
                }
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
