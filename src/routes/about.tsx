import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getUsers } from '../services';
import type { User } from '@/utils/types';
import { Cards } from '../components/'

const About = () => {
  const [users, setUsers] = useState<[] | User[]>();
  useEffect(() => {
    getUsers().then((d) => setUsers(d)).catch(() => setUsers([]));
    return () => {
      !users && setUsers([])
    };
    // eslint-disable-next-line
  }, []);
  return (
    <section>
      <h2>Who are we?</h2>
      <p>That feels like an existential question, don't you think?</p>
      {
        users && 
          users.length > 0 ? (
            <ol data-testid='users-list'>
                {
                users.map(({ id, name }) => (
                  <li key={uuidv4()} data-testid={id} aria-label={name} aria-labelledby={name}>
                    <Cards.User name={name} />
                  </li>
                ))
              }
            </ol>
          ) : (<h4>Not users to show</h4>)
      }
    </section>
  );
};

export default About;
