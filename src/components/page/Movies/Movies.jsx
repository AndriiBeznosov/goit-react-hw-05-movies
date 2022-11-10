import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import { searchMovies } from 'servises/api';
import {
  Wrapper,
  Input,
  Button,
  NavItem,
  List,
  Item,
  Title,
} from './Movie.styled';

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();

    if (e.target.name.value === '') {
      toast.error(' 🤔 Enter the name of the movie!');
      return;
    }
    setSearchParams({ query: e.currentTarget.name.value });

    e.target.name.value = '';
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    try {
      searchMovies(query).then(res => {
        setMovieList(res.data.results);
      });
    } catch (error) {
      toast.info('Something went wrong, try changing the request!');
    }
  }, [query]);

  const location = useLocation();
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          autocomplete="off"
          autoFocus
          placeholder="Search movies"
        />

        <Button type="submit">Submit</Button>
      </form>

      <>
        {!!movieList.length ? (
          <List>
            {movieList.map(item => (
              <Item key={item.id}>
                <NavItem to={`${item.id}`} state={{ from: location }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    alt={item.title || item.name}
                  />
                  <Title>{item.title || item.name}</Title>
                </NavItem>
              </Item>
            ))}
          </List>
        ) : (
          <h2>Nothing was found for your query!</h2>
        )}
      </>
    </Wrapper>
  );
};

export default Movies;
