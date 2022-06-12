import Book from './components/Book'
const App = function(){
  return (
    <section className="bookstore">
      <div className="bookstore-title">
        <h1>My Book Store</h1>
        <Book />
      </div>
    </section>
  );
}


export default App;