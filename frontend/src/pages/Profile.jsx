import React, { useState } from "react";
import Container from "../components/molecules/Container";
import BiodataSection from "../components/templates/BiodataSection";
import BookmarksSection from "../components/templates/BookmarksSection";

export default function Profile() {

  const [active, setActive] = useState(0);

  return (
    <Container className="flex">
      <div className="flex flex-col items-center sticky top-0 left-0 h-max">
        <div className="rounded-full w-[200px] h-[200px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="foto-profile"
          />
        </div>
        <h1 className="mt-4 text-2xl font-semibold">John Doe</h1>
        <p className="mt-2 text-gray-500">Anggota</p>

        <div className="flex flex-col gap-y-4 justify-center mt-12 w-full">
          <button
            onClick={() => setActive(0)}
            className={`border-[1.5px] w-full py-2 rounded-md ${
              active == 0
                ? "bg-slate-500 text-white "
                : "border-slate-500 text-slate-500"
            }`}
          >
            Biodata
          </button>
          <button
            onClick={() => setActive(1)}
            className={`border-[1.5px] w-full py-2 rounded-md ${
              active == 1
                ? "bg-slate-500 text-white "
                : "border-slate-500 text-slate-500"
            }`}
          >
            Bookmarks
          </button>
        </div>
      </div>


      {active == 0 &&
        <BiodataSection />
      }

      {active == 1 &&
        <BookmarksSection />
      }

    </Container>
  );
}
