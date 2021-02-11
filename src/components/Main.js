import React, { Component, useState } from 'react'

import styled from 'styled-components';
import axios from 'axios';
import Movie from './Movie';
import Upcoming from './Upcoming';
import {ThemeProvider} from 'styled-components';



// Styled navbar
const Search = styled.input`
outline: none;
      border-radius:10px;
      margin-top:10px;
      width: 100%;
      height:35px;
      text-align: left;
      color:black; `;
      
 const Profile = styled.img`
      width:3em;
      margin-right:3em; `;

      const Container = styled.section`
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
          `;
          
      const Layout = styled.div`
      width:50%;
      display:flex;
      flex-direction: column;
      margin:auto;
      @media (max-width: 400px) {
        width: 90%;
      }
      @media (max-width: 768px) {
        width: 99%;
      }
      `;
      
const start = 'https://api.themoviedb.org/3/search/movie?api_key=7f1a9ab21c04fc25c73f0115df15f92e&language=en-US&query='
const end = '&page=1&include_adult=false'


  
export class Main extends Component {
  
  state = {
    isSubmited:false,
    query:'',
    movies:[],
    title:'',
    overview:'',
    date:'',
    poster:'',

  }  
  
  handleChange = event => {
    this.setState({ query : event.target.value}, () => {
        console.log(this.state.query)
    })

}
  
  handleSubmit = () => {
    const link = start.concat(this.state.query,end);
    axios.get(link)
      .then(res => {
        const movies = (res.data.results);
        this.setState({ movies });
      })
      this.setState({...this.state.query})
      this.setState({isSubmited : true})

    }
    onEnterPress = (e) => {
      if(e.keyCode == 13 && e.shiftKey == false) {
        e.preventDefault();
        this.handleSubmit();
      }
    
    }

  render() {
      const isSubmited = this.state.isSubmited
      const Theme = this.state.theme
      const path ='https://image.tmdb.org/t/p/w500'
      console.log(this.state.movies)
      const movies = Object
      .keys(this.state.movies)
      .map(key => 
        <Movie key={key}
        title={this.state.movies[key].original_title}
        overview={this.state.movies[key].overview}
        date={this.state.movies[key].release_date}
        poster= {this.state.movies[key].poster_path}
        id={String(this.state.movies[key].id)}
        />
        
        )

    return ( 
      
          <Layout>
             <Search  type ='search' onChange={this.handleChange} placeholder="Rechercher un film" onKeyDown={this.onEnterPress}></Search>
             {isSubmited ? <Container>{movies}</Container>  : <Upcoming></Upcoming>}     
          </Layout>
          
    
               
     
    
      
    );
  }
}

export default Main
