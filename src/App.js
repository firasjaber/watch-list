import { useState } from 'react';
import ShowsList from './components/ShowsList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [showsList, setShowsList] = useState([]);
  //add a Show to ShowsList
  function addShow(show) {
    setShowsList([...showsList, show]);
  }
  //delete a show from ShowsList
  function deleteShow(id) {
    setShowsList(showsList.filter((show) => show.id !== id));
  }
  //toggle watched
  function toggleWatched(id) {
    setShowsList(
      showsList.map((show) =>
        show.id === id ? { ...show, watched: !show.watched } : show
      )
    );
  }
  return (
    <div className='container'>
      <Header addShow={addShow} />
      {showsList.length > 0 ? (
        <ShowsList
          showsList={showsList}
          deleteShow={deleteShow}
          toggleWatched={toggleWatched}
        />
      ) : (
        <div className='empty'>Your list is empty</div>
      )}
      <Footer />
    </div>
  );
}

export default App;
