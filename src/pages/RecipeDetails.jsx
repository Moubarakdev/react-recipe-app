import React from "react";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import YouTube from "react-youtube";

export default function RecipeDetails() {
  const params = useParams();
  const [recipe, setRecipe] = useState({});
  const [urlId, setUrlID] = useState();
  const [isLoading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleGoBack = () => {
    window.history.back().back();
  };

  // function to extract the url id
  const getVideoIdFromUrl = (url) => {
    if (url) {
      let match = url.match(/(\?|&)v=([^&]+)/);
      return match ? match[2] : null;
    }
    return null;
  };

  const opts = {
    height: "400",
    width: "100%",
  };

  useEffect(() => {
    const fetchRecipeById = async () => {
      //fetching the recipe by id
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.recipeID}`
      );
      console.log("id", response.data.meals[0]);
      setRecipe(response.data.meals[0]);

      setLoading(false);
    };

    fetchRecipeById();
  }, []);

  useEffect(() => {
    const ytid = getVideoIdFromUrl(recipe?.strYoutube);
    setUrlID(ytid);
  }, [recipe]);

  return (
    <>
      <div className="container mx-auto">
        {isLoading ? (
          <div role="status">
            <svg
              aria-hidden="true"
              className="w-[100px] mx-auto mt-[20%] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <main className="block max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-2 mx-2">
            <div className="my-6">
              <div className="mx-auto p-5">
                <YouTube
                  videoId={urlId}
                  opts={opts}
                  className="w-full center"
                />
              </div>

              <div className="p-5 ">
                <a href="#">
                  <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {recipe?.strMeal}
                  </h5>
                </a>
                <h5 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                  <span className="tracking-tight ">Category : </span>
                  <span className="underline underline-offset-4">
                    {recipe?.strCategory}
                  </span>
                </h5>

                <h4 className=" mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Instructions
                </h4>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {recipe?.strInstructions}
                </p>
                <a
                  onClick={handleGoBack}
                  href=""
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  back
                  {/* icon */}
                </a>
              </div>
            </div>
          </main>
        )}
      </div>
    </>
  );
}
