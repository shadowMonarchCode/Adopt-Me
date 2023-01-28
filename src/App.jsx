import { Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, lazy, Suspense } from "react";
import AdoptedPetContext from "./utils/AdoptedPetContext";

const Details = lazy(() => import("./components/Details"));
const SearchParams = lazy(() => import("./components/SearchParams"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      scaleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);
  return (
    <div
      className="m-0 min-h-screen p-0"
      style={{
        background: "url(http://pets-images.dev-apis.com/pets/wallpaperB.jpg)",
      }}
    >
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <Suspense
            fallback={
              <div className="flex items-center justify-center p-4">
                <h2 className="animate-spin text-8xl">⚡</h2>
              </div>
            }
          >
            <header className="mb-10 w-full bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 p-7 text-center">
              <Link to="/" className="text-6xl text-white hover:text-gray-200">
                Adopt Me!
              </Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </Suspense>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
