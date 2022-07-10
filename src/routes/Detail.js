import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Detail() {
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <Link to='/'>
        <h2>back</h2>
      </Link>
      <h1>Detail</h1>
    </div>
  );
}
export default Detail;
