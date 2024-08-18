import React from "react";
import Container from "./molecules/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
  faWhatsappSquare,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faFax, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <Container className="bg-primary flex flex-col gap-y-20 pb-1">
      <div className="flex w-full justify-between">
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
            <p className="w-[50ch] mt-3 text-sm">
              Kami adalah Dinas Perpustakaan dan Kearsipan Kabupaten Pamekasan
              yang berkomitmen untuk menyediakan akses informasi dan layanan
              perpustakaan terbaik bagi masyarakat. Kami berupaya meningkatkan
              minat baca dan mendukung pelestarian arsip daerah.
            </p>
          </div>
          {/* end -contanct */}
        </div>

        <div className="text-white">
          <h3 className="font-medium text-lg">Hubungi kami</h3>
          <p className="w-[50ch] mt-2">
            Jl. Jokotole No.55, Rw. 05, Barurambat Kota, Kec. Pamekasan,
            Kabupaten Pamekasan, Jawa Timur 69317
          </p>
          <div className="flex gap-x-6 mt-8">
            <FontAwesomeIcon
              icon={faFax}
              className="text-2xl text-white"
            />
            <FontAwesomeIcon
              icon={faPhone}
              className="text-2xl text-white"
            />
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-2xl text-white"
            />
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
      </div>

      <div className="border-t-[1.5px] border-gray-300 flex justify-between items-center py-8">
        <p className="text-sm text-white">
          © 2020 Perpustakaan Umum Pamekasan. All rights reserved.
        </p>

        <div className="flex text-white gap-x-8 text-sm font-medium">
          <p>Privacy policy</p>
          <p>Terms of services</p>
        </div>
      </div>
    </Container>
  );
}
