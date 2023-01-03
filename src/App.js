import './App.css';
import { useEffect, useState } from 'react';
import video from './video.mp4';
import searchImg from './search.png'
import MyRecipes from './MyRecipes';

function App() {
  const myId = "c0e680d4";
  const myKey = "2e330285423f54533a755a98b5475ed8";

  const [mySearch, setMySearch] = useState('');

  const [myRecipes, setMyRecipes] = useState([]);

  const [wordSubmitted, setWordSubmitted] = useState('healthy')

  useEffect (() => {
    const getRecipe = async () => {
      const responce = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${myId}&app_key=${myKey}`)
      const data = await responce.json()
      setMyRecipes(data.hits)
    }
    getRecipe();
  }, [wordSubmitted])

  const myRecipeSearch = (event) => { 
    setMySearch(event.target.value)
  }

  const finalSearch = (event) => {
    event.preventDefault();
    setWordSubmitted(mySearch)
  }

  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1>Find a recipe</h1>
      </div>
      <div className='container-search'>
        <div>
          <form onSubmit={finalSearch}>
            <input placeholder='Search...' onChange={myRecipeSearch} value={mySearch}></input>
          </form>
        </div>
        <div>
          <button className='search-btn'><img src = {searchImg} alt = 'Search' width = '40px'/></button>
        </div>
      </div>
        {myRecipes.map(element => (
          <MyRecipes 
          label={element.recipe.label} 
          image={element.recipe.image} 
          calories={element.recipe.calories} 
          ingredients={element.recipe.ingredientLines}
          url={element.recipe.url}
          servings={element.recipe.yield}
          meal={element.recipe.mealType}/>
    ))}
    </div>
  );
}

export default App;
