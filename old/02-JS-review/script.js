const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: false,
    pages: 1216,
    translations: {
      spanish: "El señor de los anilllos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring
/*
const book = getBook(3);
book;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(title, author, genres);

const [primaryGenre, sencondaryGenre, ...otherGenres] = genres;

// const primaryGenre = genres[0];
// const sencodaryGenre = genres[1];
console.log(primaryGenre, sencondaryGenre, otherGenres);

const newGenres = [...genres, "cyberpunk"];
newGenres;

const updatedBook = { ...book, publicationDate: "2001-12-19" };
updatedBook;

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

const summary = `my book ${title} has ${pages} pages,
 and was published in ${getYear(
   publicationDate
 )}, and it was written by ${author}. The book has ${
  hasMovieAdaptation ? "" : "not"
} been adapted as a movie`;
summary;

const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
console.log(`This book has ${pagesRange} pages in total`);

console.log(true && "some random string"); // because it's true, it checks the first value, and then the second
console.log(false && "some random string"); //short circuit, not even look at the second value

console.log(hasMovieAdaptation && "This book has a movie adaptation");

console.log("Felip" && "say my name");
console.log("" && "say my name");

console.log(true || "its false"); // short circuit, not even look at the second value
console.log(false || "its false"); // when false, it checks the second value

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || "no data";
countWrong;

const count = book.reviews.librarything.reviewsCount ?? "no data"; // the nullish coalescing operator will only return the second value when the second value is null or undefined(so if it's 0 or a empty string('') it will appear)
count;

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything; 
}

console.log(getTotalReviewCount(book));
*/


/*

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}

const books = getBooks();
books;

numbers = [1, 2, 3, 4, 5].map((el) => el - 1);
console.log(numbers);

const titles = books.map((book) => book.title);

titles;

const essentialDataBook = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));

essentialDataBook;

const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

const fictionBooks = books
  .filter((book) => book.genres.includes("fiction"))
  .map((fictionBook) => fictionBook.title);

fictionBooks;

const allBooksPages = books.reduce((acc, book) => acc + book.pages, 0);
allBooksPages;

const xi = [3, 9, 1, 5, 8, 6];
const sorted = xi.slice().sort((a, b) => a - b);

xi;
sorted;

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPages;

// 1) Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2)  Delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3) Update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) => 
  book.id === 1 ? {...book, pages: 3000} : book
);
booksAfterUpdate;

*/



// fetch("https://jsonplaceholder.typicode.com/todos")
// .then((res) => res.json())
// .then((data) => console.log(data));

// console.log("Zero is first printedJ");




async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  
  return data;
};

const todos = getTodos();
console.log(todos);

console.log("Zero");