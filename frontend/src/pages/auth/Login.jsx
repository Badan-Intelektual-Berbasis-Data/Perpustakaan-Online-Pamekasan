// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import StackLayout from "../../layouts/StackLayout";
import FormValidation from "../../../utils/FormValidation";
import Field from "../../components/molecules/Field";
import Input from "../../components/atoms/Input";


export default function Login() {

  const navigate = useNavigate()

  const loginHandle = async (e) => {
    e.preventDefault()

    const validated_form = FormValidation(e.target)

    if (!validated_form) return

    await fetch('http://127.0.0.1:8000/api/users/user/login/', {
      method: 'post',
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
      },
      body: validated_form.toString()

    })
      .then(res => {
        if (res.status == 404) {
          alert("Pengguna tidak ditemukan")
        }

        return res.json()
      })
        .then(data => {          

          console.log(data)

          Object.keys(data).map(key => {
            localStorage.setItem(key, data[key])
          })

          navigate("/profile")
      })
  }

  return (
    <StackLayout>
      <div className="bg-gray-100 min-h-screen">
        <div className="py-10">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Selamat Datang!! Yuk Login Dulu
            </h3>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
              <h4 className="text-2xl font-semibold mb-6 text-gray-800">
                Login
              </h4>
              <form onSubmit={loginHandle} className="space-y-8">
                <Field title="Email">
                  <Input name="email" type="email"/>
                </Field>
                <Field title="Password">
                  <Input type="password" name="password"/>
                </Field>
                <div className="flex items-center">
                  <input type="checkbox" id="rememberMe" className="mr-2" />
                  <label
                    htmlFor="rememberMe"
                    className="text-gray-700 text-sm font-medium"
                  >
                    Ingat Aku
                  </label>
                </div>
                <div className="text-right">
                  <Link
                    to="/lupa-password"
                    className="text-blue-600 hover:underline"
                  >
                    Lupa Password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Masuk
                </button>
                <div className="text-center text-gray-700">
                  Belum punya akun?{" "}
                  <Link to="/register" className="text-blue-600 hover:underline">
                    Daftar
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </StackLayout>
  );
}
