import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Photoscreen() {
  const [photos, setPhotos] = useState([]);
  const [pagienation, setPagienation] = useState({ start: 0, end: 9 });

  const fetchPhotos = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
    setPhotos(res.data);
  };

  const handlePagination = (x) => {
    let page;
    if (x == "") {
      page = 1;
    } else {
      page = Number(x);
    }
    const start = (page - 1) * 10;
    const end = start + 9;
    setPagienation({ ...pagienation, start, end });
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div>
      {photos.map((photo, i) => {
        if (i >= pagienation.start && i <= pagienation.end) {
          return (
            <div key={i}>
              <p>
                {i + 1} {photo.title}
              </p>
            </div>
          );
        }
        return;
      })}
      <button
        onClick={() => {
          setPagienation({
            ...pagienation,
            start: pagienation.start + 10,
            end: pagienation.end + 10,
          });
        }}
      >
        Next++
      </button>

      <div>
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item" onClick={() => handlePagination(1)}>
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item" onClick={() => handlePagination(2)}>
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item" onClick={() => handlePagination(3)}>
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
