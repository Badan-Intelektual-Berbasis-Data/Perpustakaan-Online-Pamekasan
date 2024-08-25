import React, { useEffect, useState } from "react";
import Container from "../components/molecules/Container";
import BiodataSection from "../components/templates/BiodataSection";
import BookmarksSection from "../components/templates/BookmarksSection";
import useAuth from "../hooks/useAuth";
import { ProfileClean } from "../../utils/DataCleaner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import LoansSection from "../components/templates/LoansSection";

export default function Profile() {
  const [active, setActive] = useState(0); 
  const [profileData, setProfileData] = useState({})


  useAuth()


  useEffect(() => {
    const access_token = localStorage.getItem("access_token")

    const getUserData = async () =>  {

      if (!access_token) return

      const data = new URLSearchParams()
      data.append("access_token", access_token)

      return await fetch(`${import.meta.env.VITE_BASE_API_URL}/users/user/get_user/`, {
        method: 'post',
        body: data.toString(),
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded'
        }
      })
        .then(res => res.json())
        .then(data => {
          sessionStorage.setItem("user_id", data.id)
          sessionStorage.setItem("user_image", data.image_url)
          setProfileData(data)
        })
    }

    getUserData()
    

  }, [])

  useAuth()

  

  return (
    
      <Container className="flex">
        <div className="flex flex-col items-center sticky  top-0 left-0 h-max">
          <div className="w-[200px] h-[200px]">
            {profileData.image_url == "UNSET" || !profileData.image_url ?
            <button className="relative">
              <FontAwesomeIcon icon={faUserCircle} className="w-full h-full" />
              <div className="absolute rounded-full bg-black w-10 h-10 bottom-1 right-5 flex items-center justify-center">
                <FontAwesomeIcon icon={faPencil} className=" text-white " />
              </div>
            </button>

              :

            <button className="relative">
              <img
                className="w-full h-full object-cover rounded-full"
                src={profileData.image_url}
                alt="foto-profile"
              />
              <div className="absolute rounded-full bg-black w-10 h-10 bottom-1 right-5 flex items-center justify-center">
                <FontAwesomeIcon icon={faPencil} className=" text-white " />
              </div>
            </button>


            }
          </div>
          <h1 className="mt-4 text-2xl font-semibold">{profileData.name}</h1>
          <p className="mt-2 text-gray-500">Anggota</p>

          <div className="flex-1 flex flex-col gap-y-4 mt-12 w-full">
            <button
              onClick={() => setActive(0)}
              className={`border-[1.5px] w-full py-2 rounded-md ${
                active == 0
                  ? "bg-primary text-white "
                  : "border-primary text-primary"
              }`}
            >
              Biodata
            </button>
            <button
              onClick={() => setActive(1)}
              className={`border-[1.5px] w-full py-2 rounded-md ${
                active == 1
                  ? "bg-primary text-white "
                  : "border-primary text-primary"
              }`}
            >
              Bookmarks
            </button>
            <button
              onClick={() => setActive(2)}
              className={`border-[1.5px] w-full py-2 rounded-md ${
                active == 2
                  ? "bg-primary text-white "
                  : "border-primary text-primary"
              }`}
            >
              Peminjaman
            </button>
            <button
              className={`border-[1.5px] border-red-500 w-full py-2 rounded-md bg-red-500 text-white mt-24`}
            >
              Logout
            </button>
          </div>
        </div>

        {active == 0 && <BiodataSection data={ProfileClean(profileData)} />}

        {active == 1 && <BookmarksSection />}
        {active == 2 && <LoansSection />}
      </Container>
    
  );
}
