import React, { useEffect, useState } from "react";
import Container from "../components/molecules/Container";
import { useParams } from "react-router-dom";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Detail() {
  const { name } = useParams();
  const [bookData, setBookData] = useState({})


  useEffect(() => {
    return async () => {
      fetch(`${process.env.BASE_API}/books/book/${name}`)
    }
  }, [])

  return (
    <div className="w-full">
      <Container className="flex justify-center">
        <div className="flex justify-center gap-x-6 w-[900px]">
          <div className="min-w-[250px] max-w-[300px]">
            <img
              src="/Buku1.jpg"
              alt="gambar-buku"
              className="w-full object-cover"
            />
          </div>

          {/* content */}
          <div className="py-6">
            <h1 className="font-bold text-3xl">{name}</h1>
            <p className="text-gray-500">Action - Romance</p>
            <p className="max-w-[50ch] mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates maiores aspernatur velit explicabo eum ea iste
              architecto asperiores eaque perspiciatis. Repudiandae dolor in
              quam doloremque numquam placeat error repellat dignissimos?
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex justify-between w-full">
                <p>Status:</p>
                <p className="font-bold text-green-600">Tersedia</p>
              </div>
              <div className="flex justify-between w-full">
                <p>Stock:</p>
                <p>12 Buku</p>
              </div>
            </div>
            <div className="flex mt-12 gap-x-4">
              <button className="flex-1 py-2 rounded-md bg-blue-500 text-white">
                Pinjam
              </button>
              <button className="w-1/4 py-2 rounded-md bg-blue-500 text-white">
                <FontAwesomeIcon
                  icon={faBookmark}
                  className="h-5 w-5 text-gray-300 hover:text-white"
                />
              </button>
            </div>
          </div>
          {/* end content */}
        </div>
      </Container>
    </div>
  );
}
