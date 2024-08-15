// eslint-disable-next-line no-unused-vars
import React from "react";
import Container from "../components/molecules/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Card from "../components/atoms/Card";

export default function Search() {
  return (
    <Container className="flex flex-col items-center max-w-[1200px]">
      <div className="flex border-b-2  w-3/4 p-4 text-xl font-medium border-blue-500 bg-transparent">
        <input
          type="text"
          className="w-full text-xl outline-none"
          placeholder="Cari buku"
        />
        <button className="">
          <FontAwesomeIcon icon={faSearch} className="text-blue-500" />
        </button>
      </div>

      <div className="py-16 px-4 w-3/4">
        <h2 className="text-2xl font-semibold text-gray-400">Hasil penelusuran</h2>
        <div className="grid grid-cols-3 gap-y-12 py-8 w-full">
          <Card author="Alvin Setya Pranata" image="/Buku1.jpg" title="Belajar ryoiki tenkai"/>
          <Card author="Alvin Setya Pranata" image="/Buku1.jpg" title="Belajar ryoiki tenkai"/>
          <Card author="Alvin Setya Pranata" image="/Buku1.jpg" title="Belajar ryoiki tenkai"/>
          <Card author="Alvin Setya Pranata" image="/Buku1.jpg" title="Belajar ryoiki tenkai"/>
        </div>
      </div>
    </Container>
  );
}
