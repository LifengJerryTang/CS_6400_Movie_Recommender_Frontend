import { useCallback, useRef, useState, useEffect } from 'react'
import Link from 'next/link';
import movieStyles from '../movies.module.css';
import {TextField, InputAdornment, IconButton} from '@material-ui/core';
import TheatersIcon from '@material-ui/icons/Theaters';
import ResultDisplay from './ResultDisplay';
import { apiKey} from '../../config';
import * as dbAPI from "../api/api";
import SearchIcon from "@material-ui/icons/Search";


export default function MySQLUser() {
  const [userId, setUserId] = useState('')
  const [results, setResults] = useState([])

  const enterUserId = (event) => {
    setUserId(event.target.value)
  }

  const search = () => {
    dbAPI.searchSimilarUsers("mysql", userId)
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
          onChange={enterUserId}
          placeholder='Similar Movie By User (MySQL)'
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
