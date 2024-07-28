import React from "react";
import Container from "./molecules/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <Container className="bg-gray-600 flex flex-col gap-y-20 pb-1">
      <div className="flex w-full justify-between items-center">
        <div>
          <div className="flex items-center gap-x-6 shrink-0">
            <img
              src="/logo.png"
              alt="Partner 1"
              className="w-24 h-24 object-cover rounded-md"
            />
            <div className="font-bold text-xl text-white">
              <h2>Dinas Perpustakaan dan Kearsipan</h2>
              <h2>Kabupaten Pamekasan</h2>
            </div>
          </div>

          {/* contanct */}
          <div className="text-white text-sm mt-6">
            <p className="w-[50ch]">
              Jl. Jokotole No.55, Rw. 05, Barurambat Kota, Kec. Pamekasan,
              Kabupaten Pamekasan, Jawa Timur 69317
            </p>
            {/* <p>Fax. : (0324) 325058</p>
            <p>Telp. : (0324) 325058</p>
            <p>WA/Telegram : 0878-5995-5556</p> */}
          </div>
          {/* end -contanct */}
        </div>

        <div className="text-white">
          <h3 className="font-medium text-lg">Tentang Kami</h3>
          <p className="w-[50ch] mt-3 text-sm">
            Kami adalah Dinas Perpustakaan dan Kearsipan Kabupaten Pamekasan
            yang berkomitmen untuk menyediakan akses informasi dan layanan
            perpustakaan terbaik bagi masyarakat. Kami berupaya meningkatkan
            minat baca dan mendukung pelestarian arsip daerah.
          </p>
        </div>
      </div>


      <div className="border-t-[1.5px] border-gray-300 flex justify-between items-center py-8">
          <p className="text-sm text-white">© 2020 Perpustakaan Umum Pamekasan. All rights reserved.</p>
          <div className="flex gap-x-6">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-2xl text-white"
            />
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-2xl text-white"
            />
            <FontAwesomeIcon
              icon={faXTwitter}
              className="text-2xl text-white"
            />
          </div>
      </div>
    </Container>
  );
}
