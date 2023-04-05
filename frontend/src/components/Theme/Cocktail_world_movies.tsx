import style from './Cocktail_world_movies.module.scss';
import Barchart4 from '../UI/BarChart4';

const Cocktail_world_movies = () => { 
  return (
    <div className={ style.cocktailWorld_movies}>
      <h1>Most often featured Cocktails in movies</h1>
      <p>영화에서 자주 등장한 칵테일 TOP 10</p>
      <Barchart4/>
    </div>
  )
};

export default Cocktail_world_movies;