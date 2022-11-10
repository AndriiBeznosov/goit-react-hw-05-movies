import { useParams } from 'react-router-dom';
import { searchReviews } from 'servises/api';
import { useEffect, useState } from 'react';

const Reviews = () => {
  const [listPerson, serlistPerson] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    searchReviews(id).then(res => serlistPerson(res.data.results));
  }, [id]);

  return (
    <>
      {!!listPerson.length ? (
        <ul>
          {listPerson.map(item => {
            return (
              <li key={item.id}>
                <h2>{item.author}</h2>
                <p>{item.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3>We donn`t any reviews for this movie.</h3>
      )}
    </>
  );
};
export default Reviews;
