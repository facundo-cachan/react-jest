import React, { useEffect, useState } from "react";
import { getUsers } from "../services";
import type { User } from "../utils/types";

const About = () => {
  const [users, setUsers] = useState<[] | User[]>();
  useEffect(() => {
    getUsers().then((d) => setUsers(d));
  }, []);
  return (
    <section>
      <h2>Who are we?</h2>
      <p>That feels like an existential question, don't you think?</p>
      <ol>
        {users && users?.length > 0 &&
          users?.map(({ id, name }) => <li key={id}>{name}</li>)}
      </ol>
    </section>
  );
};
export default About;
