import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
// import Botones from './Botones';
import * as serviceWorker from './serviceWorker';
import {shuffle, sample} from 'underscore';

const authors = [
    {
        name: 'Mark Twain',
        imageUrl: 'images/authors/marktwain.jpg',
        imageSource: 'Wikimedia Commmons',
        books: ['The Adventure of Huckleberry Finn', 'Life on the Mississippi', 'Roughing it']
    },
    {
      name: 'Joseph Conrad',
      imageUrl: 'images/authors/josephconrad.png',
      imageSource: 'Wikimedia Commons',
      books: ['Heart of Darkness']
    },
    {
      name: 'J.K. Rowling',
      imageUrl: 'images/authors/jkrowling.jpg',
      imageSource: 'Wikimedia Commons',
      imageAttribution: 'Daniel Ogren',
      books: ['Harry Potter and the Sorcerers Stone']
    },
    {
      name: 'Stephen King',
      imageUrl: 'images/authors/stephenking.jpg',
      imageSource: 'Wikimedia Commons',
      imageAttribution: 'Pinguino',
      books: ['The Shining', 'IT']
    },
    {
      name: 'Charles Dickens',
      imageUrl: 'images/authors/charlesdickens.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['David Copperfield', 'A Tale of Two Cities']
    },
    {
      name: 'William Shakespeare',
      imageUrl: 'images/authors/williamshakespeare.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
    }
];

function getTurnData() {
    const allBooks = authors.reduce(function(p, c, i) {
        return p.concat(c.books);
    }, []);
    const fourRandomBooks = shuffle(allBooks).slice(0,4);
    const answer = sample(fourRandomBooks);

    return {
        books: fourRandomBooks,
        author: authors.find((author) => 
            author.books.some((title) =>
            title === answer))
    }
}

const state = {
    turnData: getTurnData()
}

// ReactDOM.render(<Botones numberOfButtons={99} onSelection={console.log} />, document.getElementById('root'));
ReactDOM.render(<AuthorQuiz {...state}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
