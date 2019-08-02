import React from "react";
import style from "./css/recipe.module.css";

const Recipe = ({title,calories,image,ingredients}) => {
	return (
		<div className={style.recipe}>
			<img className={style.image} src={image} alt={title} />
			<h1>{title}</h1>
			<ol>
				{ingredients.map(ingredient => (
					<li>{ingredient.text}</li>
				))}
			</ol>
			<p>Calories : {calories}</p>
		</div>
	);
}

export default Recipe;