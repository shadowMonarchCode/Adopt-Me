import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "../utils/fetchPet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
import AdoptedPetContext from "../utils/AdoptedPetContext";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);
  const { id } = useParams();
  const result = useQuery(["details", id], fetchPet);

  if (result.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🐬</h2>
      </div>
    );
  }

  const pet = result.data.pets[0];

  return (
    <div className="mx-auto my-0 mb-6 w-11/12 rounded-md bg-orange-50 p-4 shadow-md">
      <Carousel images={pet.images} />
      <div>
        <h1 className="my-2 mx-0 text-center text-3xl">{pet.name}</h1>
        <h2 className="mx-0 mt-1 mb-5 text-center text-xl">{`${pet.animal} - ${pet.breed} - ${pet.city}, ${pet.state}`}</h2>
        <button className="button mx-auto" onClick={() => setShowModal(true)}>
          Adopt {pet.name}
        </button>
        <p className="px-4 leading-normal">{pet.description}</p>
        {showModal ? (
          <Modal>
            <div className="max-w-lg p-6 bg-white text-center rounded-3xl">
              <h1 className="my-2 mx-0 text-center text-3xl">
                Would you like to adopt {pet.name}?
              </h1>
              <div className="flex justify-center mt-5">
                <button
                  className="button mx-5"
                  onClick={() => {
                    setAdoptedPet(pet);
                    navigate("/");
                  }}
                >
                  Yes
                </button>
                <button className="button mx-5" onClick={() => setShowModal(false)}>
                  No
                </button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

const DetailsErrorBoundary = (props) => {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
};

export default DetailsErrorBoundary;
