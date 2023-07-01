import { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';

export default function SearchBox() {
  const [searchResult, setSearchResult] = useState([]);
  const [key, setKey] = useState('');

  useEffect(() => {
    const search = async () => {
      try {
        if (!key.trim()) {
          setSearchResult([]);
          return;
        }
        const res = await axios.get("http://localhost:3001/?",{params: {key, limit: 5}})
        console.log(res)
      } catch (error) {
        console.log(error);
      }
    };

    search();
  }, [key]);

  return (
    <form>
      <div className="search-wrapper">
        <button className="search-btn">
          <BsSearch />
        </button>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Ara..."
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
}
