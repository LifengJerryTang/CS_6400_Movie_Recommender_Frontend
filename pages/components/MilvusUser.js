import { useCallback, useRef, useState, useEffect } from 'react'
import Link from 'next/link';
import movieStyles from '../movies.module.css';
import {TextField, InputAdornment, IconButton} from '@material-ui/core';
import TheatersIcon from '@material-ui/icons/Theaters';
import { apiKey} from '../../config';
import SearchIcon from "@material-ui/icons/Search";
import * as dbAPI from "../api/api";
import ResultDisplay from "./ResultDisplay";


export default function MilvusUser() {

  const [userId, setUserId] = useState('')
  const [results, setResults] = useState([])

  const enterUserId = (event) => {
    setUserId(event.target.value)
  }

  const search = () => {
    dbAPI.searchSimilarUsers("milvus", userId)
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
          placeholder='Similar Users (Milvus)'
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
