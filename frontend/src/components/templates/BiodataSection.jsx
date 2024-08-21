import React from "react";
import Input from "../atoms/Input";
import Select from "../atoms/Select";
import Field from "../molecules/Field";

export default function BiodataSection({data}) {
  
  const gender_options = ["Laki-Laki", "Perempuan"];

  return (
    <div className="flex-1 px-24 min-h-screen space-y-12">
      <h1 className="text-2xl text-medium">Biodata</h1>
      {Object.keys(data).map((key, index) => (
        <Field title={key} index={index}>
          {key == 'gender' ?
          (
            <Select options={["Pria", "Wanita"]} />
          )

          :

          (
            <Input value={data[key]}/>
          )

          }
        </Field>
      ))}
    </div>
  );
}
