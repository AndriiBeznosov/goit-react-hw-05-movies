import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getGrending = async () => {
  const params = {
    api_key: 'e761c0cc0c75e9e76bceba6c904ee9f8',
  };
  try {
    const res = await axios('/trending/movie/week', { params });
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const searchMovies = async nameMovi => {
  if (nameMovi === '') {
    return;
  }
  const params = {
    api_key: 'e761c0cc0c75e9e76bceba6c904ee9f8',
    query: `${nameMovi}`,
  };
  try {
    const res = await axios('/search/movie', { params });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const searchDetails = async id => {
  if (id === '') {
    return;
  }
  const params = {
    api_key: 'e761c0cc0c75e9e76bceba6c904ee9f8',
  };

  try {
    const res = await axios(`/movie/${id}`, { params });
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const searchCredits = async id => {
  if (id === '') {
    return;
  }
  const params = {
    api_key: 'e761c0cc0c75e9e76bceba6c904ee9f8',
  };

  try {
    const res = await axios(`/movie/${id}/credits`, { params });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const searchReviews = async id => {
  if (id === '') {
    return;
  }
  const params = {
    api_key: 'e761c0cc0c75e9e76bceba6c904ee9f8',
  };
  const res = await axios(`/movie/${id}/reviews`, { params });

  return res;
};
//?/trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
//?search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
//?movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
//?movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма. /movie/{movie_id}/credits
//movies/get-movie-reviews запрос обзоров для страницы кинофильма.
