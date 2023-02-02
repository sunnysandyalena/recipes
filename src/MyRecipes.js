import checkedImg from './checked.png';

function MyRecipes({label, image, calories, ingredients, url, servings, meal}) {
    return (
        <div>
            <div className="container">
                <h2>{label}</h2>
            </div>
            <div className="container">
                <img src = {image} alt = {label} width = "300px"/>
            </div>
            <div className='list'>
                <ul>
                    {ingredients.map( ingredient => (
                        <li><img src = {checkedImg} alt = "Checked" width="30px"/>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <div className='container-extra'>
                <div className='extra-box'>
                    <h4>{calories.toFixed()} calories</h4>
                </div>
                <div className='extra-box'>
                    <h4>Serves {servings}.</h4>
                </div>
                <div className='extra-box'>
                    <h4>Great for {meal}</h4>
                </div>
                <div className='extra-box'>
                    <h4>View full recipe <a href={url} rel="noreferrer" target='_blank'>here</a></h4>
                </div>
            </div>
            <hr></hr>
            
        </div>
    )

}

export default MyRecipes;