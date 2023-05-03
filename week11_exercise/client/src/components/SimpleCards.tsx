import React, { useEffect, useState } from 'react';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

import GetAllBooks from '../queries/GetAllBooks';
import BookCards from './BookCardGrid';

import { Book } from '../types';
import {UserContext} from "../contexts/UserContext";



const SimpleCards = ({client}:{client:ApolloClient<NormalizedCacheObject>}) => {
  const [books, setBooks] = useState<Book[]>([])

    const {isLoggedin, email, password, roles} = React.useContext(UserContext);
    const user = isLoggedin ? "You are logged in" : "Not logged in";

    useEffect(() => {
    (async () => {
      const result = await client.query(GetAllBooks);
      setBooks(result.data.books);
    })();
  }, []);

  return (
    <div className="simplecards">
      <h1>{user}</h1>
        {}
      <h1>ALL BOOKS</h1>
      <p>This component is using the apollo client directly without useQuery. Therefore it does not get updated on new ratings</p>
      <BookCards books={books} />
    </div>
  )
}
export default SimpleCards;