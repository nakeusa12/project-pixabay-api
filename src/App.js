import React, { useEffect, useState, Suspense } from "react";
import Header from "./components/Header";
import SkeletonLoader from "./components/SkeletonLoader";
const ImageCard = React.lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./components/ImageCard")), 1500)
    )
);

function App() {
  const [datas, setDatas] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const apiKey = "17555297-46a99d3dc7abf78679ec9e640";

  const getDataFromApi = async ({ apiKey, textSearch }) => {
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=${apiKey}&q=${textSearch}&image_type=photo&pretty=true`
      );
      const json = await response.json();
      setDatas(json.hits);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getDataFromApi({ apiKey, textSearch });
  }, [textSearch]);

  const handleChange = (e) => {
    setTextSearch(e.target.value);
  };

  return (
    <div className="App">
      <div className="w-full py-10 bg-gradient-to-r from-sky-800 to-cyan-600">
        <Header onChange={handleChange} />
      </div>
      <div className="container mx-auto">
        {datas.length === 0 && (
          <h1 className="text-4xl text-center mt-44">No Results Found!</h1>
        )}

        <div className="gap-8 md:columns-4 sm:columns-2 columns-1 mt-14">
          {datas.map((data) => (
            <Suspense fallback={<SkeletonLoader />}>
              <ImageCard data={data} />
            </Suspense>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

