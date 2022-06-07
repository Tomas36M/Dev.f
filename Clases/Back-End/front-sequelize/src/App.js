import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Card, Button } from 'react-bootstrap'
import MovieForm from './components/NewMovieForm/MovieForm';

function App() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios({
        url: "https://movie-api-postrgess-1.herokuapp.com/api/movies",
      });
      setMovies(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
    } 
  };

  useEffect(() => {
    
    fetchData();

  }, []);

  const deleteMovie = (id) => {
    const desicion = prompt('Are you sure you want to delete this movie? YES or NO').toLowerCase();
    if (desicion === 'yes') {
      axios.delete(`https://movie-api-postrgess-1.herokuapp.com/api/movies/${id}`)
        .then(() => {
          alert(`La pelicula con id ${id}, se elimino de forma exitosa`);
          window.location.reload(false);
        })
        .catch((error) => {
          alert(error)
        })
    } else {
      console.log('No has eliminado la pelicula');
    }
  }

  return (
    <div className="App">
      {loading ?
        (<h1>Is loading</h1>) :
        (<div className='cards-container'>
          {error && (
            <div>
              <p>{error.message}</p>
            </div>
          )}
          <MovieForm />
          {movies && movies.map((element) => (
            <div className='card-container' key={element.id}>
              <Card className='card' key={element.id} style={{ width: '14rem' }}>
                <Card.Img className='card-img' variant="top" src={element.image} />
                <Card.Body>
                  <Card.Title>{element.title}</Card.Title>
                  <Card.Text>{element.description}</Card.Text>
                  <Button variant="primary" onClick={() => {
                    const like = { likes: element.likes + 1 }
                    axios.put(`https://movie-api-postrgess-1.herokuapp.com/api/movies/update/${element.id}`, like)
                      .then((response) => {
                        console.log(response);
                        window.location.reload(false);
                      })
                      .catch((error) => {
                        alert(error)
                      })
                  }}> Like {element.likes}</Button>
                  <Button variant="danger" onClick={() => {
                    deleteMovie(element.id)
                  }}> Delete </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        )}
    </div>
  );
}

export default App;
