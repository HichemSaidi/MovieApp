import React, { Component } from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { Link } from "react-router-dom";
import Details from './Details'

const Image = styled.img`
padding-top:1em;
width:100%;
height:100%;
`;

const Content = styled.div`
  width: 19%;
  @media (max-width: 400px) {
    width: 49%;
  }
  @media (max-width: 768px) {
    width: 24%;
  }
`;


const Movie =({ movies ,title, overview, date, poster, id})=>{

const root = "https://image.tmdb.org/t/p/w500"
const boot = {poster}.poster
const poster_path =root.concat(boot)
    return (
        
                
                <Content>
                  <Link to={id}>
                    <Image src={poster_path} onError={(e) => {
     e.target.src = 'https://blankposter.com/wp-content/uploads/2019/09/mahe_soulier_error-1.gif' }} title={title} ></Image>
         </Link>
                </Content>
                
                
                           
    )

}

export default Movie
