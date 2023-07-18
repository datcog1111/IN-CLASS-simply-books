/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect, useState } from 'react';
// import Link from 'next/link';
// import { Button } from 'react-bootstrap';
import { getAuthors } from '../api/authorData';
import { useAuth } from '../utils/context/authContext';
import AuthorCard from '../components/BookCard';

export default function AuthorPage() {
  const { user } = useAuth;
  const [authors, setAuthors] = useState([]);

  const getAllTheAuthors = () => {
    getAuthors(user.uid).then(setAuthors);
  };

  useEffect(() => {
    getAllTheAuthors();
  }, []);

  return (
    <div>
      {authors.map((author) => (
        <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getAllTheAuthors} />
      ))}
    </div>
  );
}
