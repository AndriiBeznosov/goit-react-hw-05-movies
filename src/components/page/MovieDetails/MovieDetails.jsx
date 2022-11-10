import { Suspense, useEffect, useState } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import { searchDetails } from 'servises/api';

import {
  Card,
  Image,
  NavItem,
  BackLink,
  Wrapper,
  Information,
  Info,
  List,
  Title,
  Main,
} from './MovieDetails.styled.';

const MovieDetails = () => {
  const [details, serDetails] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    searchDetails(id).then(res => serDetails(res.data));
  }, [id]);

  const { poster_path, title, name, vote_average, overview, genres } = details;

  return (
    <Main>
      <BackLink to={backLinkHref}>Back to...</BackLink>
      {!details[0] ? (
        <Card>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title || name}
          />
          <Wrapper>
            <Info>
              <Title> {title || name}</Title>
              <p>
                User Score:
                {vote_average
                  ? vote_average.toFixed(1) * 10 + '%'
                  : 'the movie is not popular'}
              </p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>
                {genres ? genres.map(genre => genre.name + ' ') : 'no genre'}
              </p>
            </Info>
            <Information>
              <h4>Additional information</h4>
              <List>
                <li>
                  <NavItem to="cast" state={{ from: backLinkHref }}>
                    Cast
                  </NavItem>
                </li>
                <li>
                  <NavItem to="reviews" state={{ from: backLinkHref }}>
                    Reviews
                  </NavItem>
                </li>
              </List>
            </Information>
          </Wrapper>
        </Card>
      ) : (
        <Card>The query did not give any result, try again.</Card>
      )}

      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </Main>
  );
};
export default MovieDetails;
