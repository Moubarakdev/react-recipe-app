import { useState } from "react";
import { useNavigate, generatePath } from "react-router-dom";

export default function Card({ recipe }) {
  const navigate = useNavigate();

  //get the id from params
  const handleRecipeId = (id) => {
    let recipeID = id;
    console.log(recipeID);
    navigate(generatePath("/recipes/:recipeID", { recipeID }));
  };

  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-2 mx-2">
        <a
          href=""
          onClick={() => {
            handleRecipeId(parseInt(recipe?.idMeal));
          }}
        >
          <img className="rounded-t-lg " src={recipe?.strMealThumb} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {recipe?.strMeal}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            onClick={() => {
              handleRecipeId(parseInt(recipe?.idMeal));
            }}
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Read more
            {/* icon */}
          </a>
        </div>
      </div>
    </>
  );
}
