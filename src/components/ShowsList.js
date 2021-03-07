import Show from './Show';

function ShowsList({ showsList, deleteShow, toggleWatched }) {
  return (
    <div>
      {showsList.map((show) => (
        <Show
          key={show.id}
          show={show}
          deleteShow={deleteShow}
          toggleWatched={toggleWatched}
        />
      ))}
    </div>
  );
}

export default ShowsList;
