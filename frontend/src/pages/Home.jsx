import React from "react";
import Banner from "../components/Banner";
import Kategori from "../items/Kategori";
import CardGroup from "../components/molecules/CardGroup";
import Container from "../components/molecules/Container";

export default function Home() {
  const data = [
    { title: "Judul Buku 1", author: "Penulis 1", image: "/Buku1.jpg" },
    { title: "Judul Buku 2", author: "Penulis 2", image: "/Buku1.jpg" },
    { title: "Judul Buku 3", author: "Penulis 3", image: "/Buku1.jpg" },
    { title: "Judul Buku 4", author: "Penulis 4", image: "/Buku1.jpg" },
    { title: "Judul Buku 5", author: "Penulis 5", image: "/Buku1.jpg" },
    { title: "Judul Buku 6", author: "Penulis 6", image: "/Buku1.jpg" },
    { title: "Judul Buku 7", author: "Penulis 7", image: "/Buku1.jpg" },
    { title: "Judul Buku 7", author: "Penulis 7", image: "/Buku1.jpg" },
    { title: "Judul Buku 7", author: "Penulis 7", image: "/Buku1.jpg" },
    { title: "Judul Buku 7", author: "Penulis 7", image: "/Buku1.jpg" },
    { title: "Judul Buku 7", author: "Penulis 7", image: "/Buku1.jpg" },
    { title: "Judul Buku 7", author: "Penulis 7", image: "/Buku1.jpg" },
    { title: "Judul Buku 7", author: "Penulis 7", image: "/Buku1.jpg" },
  ];

  return (
    <div>
      <Banner />
      <Container>
        <CardGroup data={data} title="Baru Rilis" />
      </Container>
    </div>
  );
}
