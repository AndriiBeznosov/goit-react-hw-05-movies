import { useParams } from 'react-router-dom';
import { searchCredits } from 'servises/api';
import { useEffect, useState } from 'react';

import { Img, List, Item } from './Cast.styled';
import Image from '../../images/image_default.jpg';

const Cast = () => {
  const [listPerson, serlistPerson] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    searchCredits(id).then(res => serlistPerson(res.data.cast));
  }, [id]);

  return (
    <>
      {!!listPerson.length ? (
        <List>
          {listPerson.map(person => {
            return (
              <Item key={person.id}>
                {person.profile_path ? (
                  <Img
                    src={`https://image.tmdb.org/t/p/w200${person.profile_path}`}
                    alt={person.original_name}
                  />
                ) : (
                  <Img src={Image} alt={person.original_name} />
                )}

                <p>{person.original_name || person.name}</p>
              </Item>
            );
          })}
        </List>
      ) : (
        <h3>We donn`t any reviews for this movie.</h3>
      )}
    </>
  );
};
export default Cast;
