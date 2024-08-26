import React, { useEffect, useState } from "react";
import Container from "../components/molecules/Container";
import { useNavigate, useParams } from "react-router-dom";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardGroupGrid from "../components/molecules/CardGroupGrid";

export default function Detail() {
  const { name } = useParams();
  const [bookData, setBookData] = useState({
    id: 0,
    title: {
      author_name: "",
      category_name: [],
      genre_name: [],
      backdrop_url: "",
      book_image_url: "",
      desc: "",
      title: "",
      date_published: "",
      date_registered: "",
      author: 0,
      category: [],
      genre: [],
    },
    publisher: 0,
    languange: 0,
    classification_number: 0,
    call_number: "",
    width: 0,
    height: 0,
    pages: 0,
    isbn: 0,
    edition: 0,
    date_published: "",
    date_registered: "",
  });

  const navigate = useNavigate()


  

  useEffect(() => {
    return async () => {
      await fetch(`${import.meta.env.VITE_BASE_API_URL}/books/detail/${name}/`)
        .then(res => {
          
          if (res.status == 404) {
            navigate("/not-found")
          }
          
          return res.json()
        })
        .then(data => setBookData(data))
    };
  }, []);

  return (
    <div className="w-full">
      <Container className="flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row justify-center gap-x-6 w-[900px]">
          <div className="min-w-[250px] max-w-[300px]">
            <img
              src={bookData.title.book_image_url}
              alt="gambar-buku"
              className="w-full object-cover"
            />
          </div>

          {/* content */}
          <div className="py-6">
            <h1 className="font-bold text-3xl">{bookData.title.title}</h1>
            <p className="text-gray-500">{bookData.title.genre_name.join(" - ")}</p>
            
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex justify-between w-full">
                <p>Status:</p>
                <p className="font-bold text-green-600">Tersedia</p>
              </div>
              <div className="flex justify-between w-full">
                <p>Panjang:</p>
                <p>{bookData.width} Cm</p>
              </div>
              <div className="flex justify-between w-full">
                <p>Lebar:</p>
                <p>{bookData.height} Cm</p>
              </div>
              <div className="flex justify-between w-full">
                <p>ISBN / ISSN:</p>
                <p>{bookData.isbn}</p>
              </div>
              <div className="flex justify-between w-full">
                <p>Bahasa</p>
                <p>{bookData.languange.name}</p>
              </div>
              <div className="flex justify-between w-full">
                <p>Penerbit</p>
                <p>{bookData.publisher.name}</p>
              </div>
              <div className="flex justify-between w-full">
                <p>Tanggal Penerbit</p>
                <p>{bookData.date_published}</p>
              </div>
              <div className="flex justify-between w-full">
                <p>Edisi</p>
                <p>{bookData.edition}</p>
              </div>
            </div>
            <div className="flex mt-12 gap-x-4">
              <button 
              onClick={() => navigate('/order', { state: {book: bookData.id} })}
              className="flex-1 py-2 rounded-md bg-blue-500 text-white outline-none w-[400px]">
                Pinjam
              </button>
              <button className="py-2 px-2 rounded-md">
                <FontAwesomeIcon
                  icon={faBookmark}
                  className="h-5 w-5 text-blue-500"
                />
              </button>
            </div>
          </div>
          {/* end content */}
        </div>
        <div className="mt-12 text-start max-w-[750px] "> 
          <h2 className="font-semibold text-xl">Sinopsis</h2>
          <p className="mt-4">{bookData.title.desc}</p>
        </div>

      </Container>

      <CardGroupGrid title="Lainnya" className="mt-2 mb-16"/>
    </div>
  );
}
