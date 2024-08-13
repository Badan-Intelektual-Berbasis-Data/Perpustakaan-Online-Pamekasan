import React from "react";
import Input from "../atoms/Input";
import Select from "../atoms/Select";
import Field from "../molecules/Field";

export default function BiodataSection() {
  
  const gender_options = ["Laki-Laki", "Perempuan"];

  return (
    <div className="flex-1 px-24 min-h-screen space-y-12">
      <h1 className="text-2xl text-medium">Biodata</h1>
      <Field title="NIK">
        <Input value="3528042402050002" />
      </Field>
      <Field title="Nama Lengkap">
        <Input value="John Doe" />
      </Field>
      <Field title="Umur">
        <Input value="12" type="number" />
      </Field>
      <Field title="email">
        <Input value="comand.alvin@gmail.com" type="email" />
      </Field>
      <Field title="No. Telepon">
        <Input value="085334277450" type="number" />
      </Field>
      <Field title="Alamat">
        <Input value="Jl. Jembatan baru" />
      </Field>
      <Field title="Jenis Kelamin">
        <Select options={gender_options} />
      </Field>
    </div>
  );
}
