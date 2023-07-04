import Card from "./Card";

export default function CocktailsTable({ recipes }) {
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">
        {recipes?.map((recipe) => {
          return <Card key={recipe.idDrink} recipe={recipe} type={type} />;
        })}
      </div>
    </>
  );
}
