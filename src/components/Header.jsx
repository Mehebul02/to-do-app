"use client"
import Link from "next/link";
import Container from "./Container";
import { usePathname } from "next/navigation";
import { RxAvatar } from "react-icons/rx";
const Header = () => {
    
    const pathName = usePathname()
    console.log(pathName);
    return (
          <header className="bg-green-800">
      <Container >
            <div className="flex justify-between items-center p-6">
            <h1 className="text-xl text-white font-semibold"><span className="text-[#EE6611]">TO Do </span>List</h1>
            <div className="flex items-center gap-x-3 ">
                <h1 className="text-xl text-orange-500 font-medium">Johan-Deo</h1>
            <RxAvatar className="text-4xl text-white" />

            </div>
            </div>
      </Container>
        </header>
    );
};

export default Header;