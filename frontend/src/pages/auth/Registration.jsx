// Daftar.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import StackLayout from "../../layouts/StackLayout";
import Field from "../../components/molecules/Field";
import Input from "../../components/atoms/Input";
import Select from "../../components/atoms/Select";
import FormValidation from "../../../utils/FormValidation";

export default function Registration() {

  const gender_options = [
    "Laki-Laki",
    "Perempuan"
  ]
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()



    const validated_form = FormValidation(event.target)

    if (!validated_form) {
      return
    }


    await fetch('http://127.0.0.1:8000/api/users/user/', {
      method: 'post',
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
      },
      body: validated_form.toString()
    })
      .then(res => {
        if (res.status == 400) {
          alert("Akun telah terdaftar")
        }
        
        return res.json()

      })
      .then(data => {          

          Object.keys(data).map(key => {
            localStorage.setItem(key, data[key])
          })

          navigate("/login")
      })
  }

  return (
    <StackLayout>
      <div className="bg-gray-100 min-h-[100dvh] py-10 flex flex-col justify-center">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Daftar Akun Baru
            </h3>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
              <form className="space-y-12" onSubmit={handleSubmit}>
                <Field title="NIK ( Nomor Induk Kewarganegaraan )">
                  <Input type="number" name="nik" minLength="16" maxLength="16"/>
                </Field>
                <Field title="Nama Lengkap">
                  <Input type="text" name="name" />
                </Field>
                <Field title="Email">
                  <Input type="email" name="email" />
                </Field>
                <Field title="Password">
                  <Input type="password" name="password" />
                </Field>
                <Field title="Konfirmasi Password">
                  <Input type="password" name="confirm_password" placeholder="Ulangi password" />
                </Field>
                <Field title="Alamat">
                  <Input type="type" name="address" placeholder="Alamat" />
                </Field>
                <Field title="Umur">
                  <Input type="number" name="age" />
                </Field>
                <Field title="Nomor Telepon">
                  <Input type="number" name="phone" />
                </Field>
                <Field title="Gender">
                  <Select options={gender_options} name="gender"/>
                </Field>
                <Field title="Foto Profil">
                  <Input type="file" accept="image/*" required={false}/>
                </Field>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Daftar
                </button>
              </form>
              <div className="mt-6 text-center">
                <p className="text-gray-700">
                  Sudah punya akun?{" "}
                  <Link to="/login" className="text-blue-600 hover:underline">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
      </div>
    </StackLayout>
  );
}
