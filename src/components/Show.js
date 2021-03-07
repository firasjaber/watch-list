import Button from './Button';

function Show({ show, deleteShow, toggleWatched }) {
  function handleDelete() {
    deleteShow(show.id);
  }
  function handleWatched() {
    toggleWatched(show.id);
  }
  return (
    <div className='show'>
      <div
        className='title'
        onClick={handleWatched}
        style={{
          textDecoration: show.watched ? 'line-through' : 'none',
        }}
      >
        {show.name}
      </div>
      <Button text='Delete' onClick={handleDelete}></Button>
    </div>
  );
}
export default Show;
