import ReactWordcloud from 'react-wordcloud';
import { wordType } from '../../type/cocktailWord';
import { MinMaxPair } from 'react-wordcloud';
import style from './Cocktail_world_ingredient.module.scss';
import { cocktail_world_ingredientType } from '../../pages/theme/cocktail_world';

const Cocktail_world_ingredient = (props: cocktail_world_ingredientType) => {
  const isLoading = props.isLoading;
  const wordList = props.wordList;

  let arr: any = [];
  arr = [...arr, wordList]; 
  
 type Options = {
  rotations?: number;
  rotationAngles?: MinMaxPair;
};

const options: Options = {
  rotations: 2,
  rotationAngles: [0, 360] ,
  }

  const size: MinMaxPair = [1250, 400];
  if (isLoading) { 
     return (
    <div className={ style.cocktailWord_ingredient}>
      <h1>Most popular Ingredients</h1>
      <p>1700개의 칵테일에서 쓰인 재료 TOP 50</p>
      <ReactWordcloud
        words={arr[0]}
        options={options}
        size={size}
      />
    </div>
  )
  }
};

export default Cocktail_world_ingredient;