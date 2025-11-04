import Link from "next/link";
import { Search } from "lucide-react";
import Image from "next/image";
// container
import Container from "./Container";

// assets
import QRCode from "../assets/icons/QRCode";
import GooglePlay from "../assets/icons/GooglePlay";
import GoogleIcon from "../assets/icons/GoogleIcon";
import Logo from "@/app/assets/Log.png"

function Footer() {
  return (
    <div className="bg-blue-200">
      <Container>
        <div className="flex flex-col lg:flex-row mt-24 justify-between text-black font-semibold items-start px-8  pt-6 gap-y-12 lg:gap-0">
          <div className=" flex flex-col space-y-3">
            <Link href={"/"} className="text-2xl font-bold">
            <Image src={Logo} alt="logo" width={140} height={140} />
            </Link>
            <Link href={"/"} className="text-lg">
              Subscribe
            </Link>
            <Link href={"/"} className="text-lg">
              Get 10% of your first order
            </Link>
            <div className="hidden md:block relative">
              <input
                type="text"
                className="outline-none bg-blue-100 rounded-md pl-3 pr-7 py-3"
                placeholder="What are you looking for?"
              />
              <Search className="absolute right-1 top-[13px] text-gray-600" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <h1 className="text-2xl">Support</h1>
            <p className="text-lg">
              111 Bijay sarani, Dhaka,
              <br /> DH 1515, Bangladesh
            </p>
            <p>exclusive@gmail.com</p>
            <p>+955-543251-876</p>
          </div>
          <div className="flex flex-col space-y-3">
            <h1 className="text-2xl">Account</h1>
            <Link href={"/"}>My Account</Link>
            <Link href={"/"}>Login / Register</Link>
            <Link href={"/"}>Cart</Link>
            <Link href={"/"}>Whishlist</Link>
            <Link href={"/"}>Shop</Link>
          </div>
          <div className="flex flex-col space-y-3">
            <h1 className="text-2xl">Quick Link</h1>
            <Link href={"/"}>Privacy policy</Link>
            <Link href={"/"}>Terms of Use</Link>
            <Link href={"/"}>FAQ</Link>
            <Link href={"/"}>Contact</Link>
          </div>
          <div className="flex flex-col space-y-3">
            <h1 className="text-2xl">Download App</h1>
            <p className="text-sm">
              Save S3 with App new user only
            </p>
            <div className="flex items-start justify-center gap-x-2">
              <div className="mt-1">
                <QRCode />
              </div>
              <div className="flex flex-col">
                <GooglePlay />
                <GoogleIcon />
              </div>
            </div>
          </div>
        </div>
        <p className="bg-blue-200 py-14 text-center">
          &copy; Copyright Rimel 2022. All right reserved
        </p>
      </Container>
    </div>
  );
}

export default Footer;