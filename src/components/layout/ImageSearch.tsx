import { useState } from 'react';
const { VITE_UNSPLASH_ACCESS_KEY } = import.meta.env;

export default function ImageSearch() {
  const [img, setImg] = useState('');
  const [searchResults, setsearchResults] = useState([]);

  const url = `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${VITE_UNSPLASH_ACCESS_KEY}&orientation=landscape&per_page=20`;
  const fetchRequest = async () => {
    const response = await (await fetch(url)).json();
    const result = response.results;
    setsearchResults(result);
  };

  const submit = () => {
    fetchRequest();
    setImg('');
  };
  return (
    <div>
      <input
        type="text"
        value={img}
        onChange={(e) => setImg(e.target.value)}
        placeholder="Searching Anything..."
      />
      <button type="submit" onClick={submit}>
        Search
      </button>
      {searchResults.map((val: any) => {
        return (
          <img
            key={val.id}
            src={val.urls.thumb}
            alt={val.alt_description}
            onClick={() => console.log(val.urls)}
          />
        );
      })}
    </div>
  );
}
