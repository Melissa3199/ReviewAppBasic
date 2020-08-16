import React, { useState } from 'react';

const BookContext = React.createContext([{}, () => {}]);

const BookProvider = (props) => {
  const [state, setState] = useState({bookTitle:'Harry Potter'});
  return (
    <BookContext.Provider value={[state, setState]}>
      {props.children}
    </BookContext.Provider>
  );
}

export { BookContext, BookProvider };