import React from 'react'

const Book = () => {
 const image =
   'https://images-eu.ssl-images-amazon.com/images/I/41t-pVrGX8L._SX198_BO1,204,203,200_QL40_FMwebp_.jpg';
 const title = 'Mastering Html, Css & Javascript Web Publishing Paperback – 15';
 const author = 'Laura Lemay';
 const price = '₹388.00';

 return (
   <article className="book">
     <div className="book-img-container">
       <img src={image} alt={title} className="book-img" />
     </div>
     <h2 className="book-title">{title}</h2>
     <h4 className="book-author">{author}</h4>
     <h5 className="book-price">{price}</h5>
   </article>
 );
}

export default Book;