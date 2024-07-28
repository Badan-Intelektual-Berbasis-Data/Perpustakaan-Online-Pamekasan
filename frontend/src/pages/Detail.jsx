import React from "react";
import Container from "../components/molecules/Container";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { name } = useParams();

  return (
    <div className="w-full min-h-[100dvh]">
      <Container className="flex justify-center">
        <div className="flex w-3/4 justify-between">
          <div className="w-[200px]">
            <img
              src="/Buku1.jpg"
              alt="gambar-buku"
              className="w-full object-cover"
            />
          </div>

          {/* content */}
          <div>
            <h1 className="font-bold text-2xl">{name}</h1>
            <p></p>
          </div>
          {/* end content */}
        </div>
      </Container>
    </div>
  );
}
