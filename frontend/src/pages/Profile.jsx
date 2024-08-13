import React, { useState } from "react";
import StackLayout from "../layouts/StackLayout";
import Field from "../components/molecules/Field";
import Input from "../components/atoms/Input";
import Container from "../components/molecules/Container";

export default function Profile() {

  const [active, setActive] = useState(0)

  return (
      <Container className="flex">
        <div className="flex flex-col items-center">
          <div className="rounded-full w-[200px] h-[200px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="foto-profile"
            />
          </div>
          <h1 className="mt-4 text-2xl font-semibold">John Doe</h1>
          <p className="mt-2 text-gray-500">Admin</p>

          <div className="flex flex-col gap-y-4 justify-center mt-12 w-full">
            <button className="bg-slate-500 text-white w-full py-2 rounded-md">Biodata</button>
            <button className="border-slate-500 border-[1.5px] text-slate-500 w-full py-2 rounded-md">Bookmarks</button>
          </div>
        </div>

        <div className="flex-1 px-24 min-h-screen space-y-12">
          <h1 className="text-2xl text-medium">Biodata</h1>
          <Field title="NIK">
            <Input value="3528042402050002" />
          </Field>
          <Field title="Nama Lengkap">
            <Input value="John Doe" />
          </Field>
          <Field title="Umur">
            <Input value="12" />
          </Field>
        </div>
      </Container>
  );
}
