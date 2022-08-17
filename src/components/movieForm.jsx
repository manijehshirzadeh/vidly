const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>MovieForm {match.params.id}</h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}
      >
        save
      </button>
    </div>
  );
};

export default MovieForm;
