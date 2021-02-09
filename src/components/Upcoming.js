import React, { Component } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import Movie from './Movie'

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
      `;
      


const link = 'https://api.themoviedb.org/3/movie/upcoming?api_key=7f1a9ab21c04fc25c73f0115df15f92e&language=en-US&page=1'

export class App extends Component {

  state = {
    movies:[],
    top:[] 
  }
   componentDidMount =() =>{
       this.handleSubmit()
   }
  
  handleSubmit = () => {
    axios.get(link)
      .then(res => {
        let movies = res.data.results;
         const top = movies
         this.setState({top: top})
         console.log(this.state)
      })
    }
   

  render() {
      const path ='https://image.tmdb.org/t/p/w500'
      const top = Object
      .keys(this.state.top)
      .map(key => 
        <Movie key={key}
        title={this.state.top[key].original_title}
        overview={this.state.top[key].overview}
        date={this.state.top[key].release_date}
        poster= {this.state.top[key].poster_path}
        />
        
        )

    return (
      <div>
             
                <Container>{top}</Container>
    
            
      </div>
    );
  }
}

export default App
