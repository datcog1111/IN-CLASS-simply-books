import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState([]);
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="text-white ms-5 details">
        <h5>
          {authorDetails.first_name} {authorDetails.last_name}
        </h5>
        Author Email: <a href={`mailto:${authorDetails?.email}`}>{authorDetails.email}</a>
        <p>
          {authorDetails.favorite ? `Favorite: ${authorDetails.favorite}` : `${authorDetails.favorite}`}
        </p>
      </div>
    </div>
  );
}
