import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getGrending } from 'servises/api';
import { NavItem, List, Item, Title, Wrapper } from './Home.styled';

const Home = () => {
  const location = useLocation();
  const [trendingMovies, settrTendingMovies] = useState([]);
  useEffect(() => {
    getGrending().then(res => {
      settrTendingMovies(res.data.results);
    });
  }, []);
  // console.log(trendingMovies);
  return (
    <Wrapper>
      <h1>Trending today</h1>
      <List>
        {!!trendingMovies ? (
          trendingMovies.map(movie => (
            <Item key={movie.id}>
              <NavItem to={`/movies/${movie.id}`} state={{ from: location }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title || movie.name}
                />
                <Title>{movie.title || movie.name}</Title>
              </NavItem>
            </Item>
          ))
        ) : (
          <li>
            <h2>Что-то пошло не так!!!</h2>
          </li>
        )}
      </List>
    </Wrapper>
  );
};

export default Home;

//poster_path
