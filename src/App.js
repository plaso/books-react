import BooksList from "./components/BooksList/BooksList";
import Navbar from "./components/misc/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main className="container">
        <BooksList />
      </main>
    </div>
  );
}

export default App;
