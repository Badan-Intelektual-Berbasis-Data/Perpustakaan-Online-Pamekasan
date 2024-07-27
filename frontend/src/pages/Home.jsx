import React from "react";
import CardGroup from "../components/molecules/CardGroup";
import Container from "../components/molecules/Container";
import Banner from "../components/atoms/Banner";

export default function Home() {
  const data = [
    { title: "Judul Buku 1", author: "Penulis 1", image: "/Buku1.jpg" },
    { title: "Judul Buku 2", author: "Penulis 2", image: "/Buku1.jpg" },
    { title: "Judul Buku 3", author: "Penulis 3", image: "/Buku1.jpg" },
    { title: "Judul Buku 4", author: "Penulis 4", image: "/Buku1.jpg" },
    { title: "Judul Buku 5", author: "Penulis 5", image: "/Buku1.jpg" },
    { title: "Judul Buku 6", author: "Penulis 6", image: "/Buku1.jpg" },
    { title: "Judul Buku 7", author: "Penulis 7", image: "/Buku1.jpg" },
    { title: "Judul Buku 8", author: "Penulis 8", image: "/Buku1.jpg" },
    { title: "Judul Buku 9", author: "Penulis 9", image: "/Buku1.jpg" },
  ];

  return (
    <div>
      <Banner />

      <div className="py-12">
        <CardGroup data={data} title="Baru Rilis" />
      </div>
    </div>
  );
}
