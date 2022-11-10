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
  Info,
} from './Movie.styled';
import Image from '../../../images/library-empty.png';
import ImageFefault from '../../../images/image_default.jpg';

const Movies = () => {
  const [movieList, setMovieList] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

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
        console.log(res.data.results);
        if (res.data.total_pages < 0) {
          return;
        }
        setMovieList(res.data.results);
      });
    } catch (error) {
      toast.info('Something went wrong, try changing the request!');
    }
  }, [query]);

  console.log(movieList);
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          autocomplete="off"
          placeholder="Search movies"
        />

        <Button type="submit">Submit</Button>
      </form>

      <>
        {movieList === null && (
          <div>
            <img src={Image} alt="photoddfafa" />
          </div>
        )}
        {movieList !== null && (
          <List>
            {movieList.map(item => (
              <Item key={item.id}>
                <NavItem to={`${item.id}`} state={{ from: location }}>
                  {item.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                      alt={item.title || item.name}
                    />
                  ) : (
                    <img src={ImageFefault} alt={item.title || item.name} />
                  )}
                  <Title>{item.title || item.name}</Title>
                </NavItem>
              </Item>
            ))}
          </List>
        )}
        {movieList !== null && movieList.length <= 0 && (
          <div>
            <Info>Nothing was found, try changing the query...</Info>
          </div>
        )}
      </>
    </Wrapper>
  );
};

export default Movies;
