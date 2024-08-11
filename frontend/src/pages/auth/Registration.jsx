// Daftar.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import StackLayout from "../../layouts/StackLayout";
import Field from "../../components/molecules/Field";
import Input from "../../components/atoms/Input";
import Select from "../../components/atoms/Select";

export default function Registration() {


  const status_options = [
    "Member",
    "Pengunjung"
  ]

  const gender_options = [
    "Laki-Laki",
    "Perempuan"
  ]

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = new FormData(event.target)
    
    const data = new URLSearchParams()

    for (let [key, value] of form.entries()) {
      data.append(key, value)
    }

    await fetch('http://127.0.0.1/api/user/', {
      method: 'post',
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
      },
      body: data.toString()
    })
      .then(res => {
        console.log(res);
        
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
                  <Input type="text" name="username" />
                </Field>
                <Field title="Nama Pengguna">
                  <Input type="text" name="username" />
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
                <Field title="Tanggal Lahir">
                  <Input type="date" name="birth" />
                </Field>
                <Field title="Umur">
                  <Input type="number" name="birth" />
                </Field>
                <Field title="Gender">
                  <Select options={gender_options} name="gender"/>
                </Field>
                <Field title="Status">
                  <Select options={status_options} name="status"/>
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
