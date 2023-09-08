import { useEffect, useState } from "react";
import "./App.css";
import Title from "./Title";
import BookCard from "./BookCard";

function App() {
  const [dependency, setDependency] = useState(false);

  console.log(dependency);

  const [books, setBooks] = useState([]);

  /**
   * Deeply use state
   * get value using index
   *///const myState = useState()
  //const initialValue = myState[0]
  //const setKoraFunction = myState[1]
  


  /**
   * Infinite rendering issue if we do not use useEffect
   */
  // fetch("products.json")
  //     .then((res) => res.json())
  //     .then((books) => setBooks(books));



  useEffect(() => {
    console.log(
      "dependencyr man change hoyeche tae ami abar useEffect er vitore dhukesi"
    );

    fetch("products.json")
      .then((res) => res.json())
      .then((books) => setBooks(books));
  }, [dependency]);

  console.log(books);

  return (
    <>
      <div className="max-w-[1300px] mx-auto">
        <Title></Title>
        <button
          onClick={() => setDependency(!dependency)}
          className="bg-gradient-to-r to-emerald-600 from-sky-400 px-2 py-1 rounded-md mx-auto block"
        >
          useEffect dependency
        </button>
        <div className="py-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5">
          {books.map(book=><BookCard key={book.id} product={book}></BookCard>)}
        </div>
      </div>
    </>
  );
}

export default App;
