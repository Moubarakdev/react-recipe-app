import Card from "./Card";

export default function RecipesTable({ recipes, isFound }) {
  console.log(isFound);
  return (
    <>
      <div className="container mx-auto">
        {isFound ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">
            {recipes?.map((recipe) => {
              return <Card key={recipe.idMeal} recipe={recipe} />;
            })}
          </div>
        ) : (
          <>
            <svg
              className="mx-auto mt-[20%] animate-bounce"
              fill="#e01a1a"
              width="169px"
              height="169px"
              viewBox="0 0 32.00 32.00"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#e01a1a"
              stroke-width="0.8640000000000001"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z"></path>
              </g>
            </svg>
            <h4 className="text-center tracking-tight text-xl dark:text-white text-red-800 animate-bounce">
              No Match for your search
            </h4>
          </>
        )}
      </div>
    </>
  );
}
