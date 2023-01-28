import Pet from "./Pet";

const Result = ({ pets }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {!pets.length ? (
        <h1>No pet found.</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            id={pet.id}
            key={pet.id}
            name={pet.name}
            images={pet.images}
            breed={pet.breed}
            animal={pet.animal}
            location={`${pet.city}, ${pet.state}`}
          />
        ))
      )}
    </div>
  );
};

export default Result;
