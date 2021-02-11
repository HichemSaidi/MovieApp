import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
// Placeholder for detail data


const SecDetails = styled.div`
  display: flex;
  margin:auto;
  margin-top:20px;
  width:50%;
  
  `;

const SecDetailsPoster = styled.img`
width:200px;
`;

function Detail(props){

  var id = props.match.params.id
  var link = `https://api.themoviedb.org/3/movie/${id}?api_key=7f1a9ab21c04fc25c73f0115df15f92e&language=en-US`
  


  var [Title, setTitle] = useState('')
  var [Overview, setOverview] = useState('')
  var [Poster, setPoster] = useState('')

  const path ='https://image.tmdb.org/t/p/w500'
   useEffect(() => {
         
    axios.get(link)
    .then(res => {
      
     setTitle(res.data.original_title)
     console.log(res.data)
     setOverview(res.data.overview)
     var MoviePoster = path.concat(res.data.poster_path)
     console.log (MoviePoster)
     setPoster(MoviePoster)
      
    })

  
    }, [])
   
  return (
    <SecDetails>
      <div>
          <h1> {Title}</h1>
          <p>{Overview}</p> 
      </div>
      <SecDetailsPoster src={Poster} ></SecDetailsPoster>
       
   
    </SecDetails>
        
  );

  }
export default Detail;
