'use client'
import Link from "next/link";
import Container from "./Container";
import { IoIosContact, IoIosContacts } from "react-icons/io";
import { usePathname } from "next/navigation";
const TaskMenu = () => {
    const mytask = [ 
        {icon:'IoIosContact',href:'/mytask'}

    ]
    const pathName = usePathname()
    console.log(pathName);
    return (
        <Container className='my-16'>
           <div className=" w-1/2  mx-auto bg-[#FFFFFF] p-2 rounded-b-lg shadow-xl">
          <div className="flex justify-center gap-x-28">
             {/* my task  */}
           <Link href='/mytask' className={`flex flex-col justify-center items-center ${pathName.mytask && 'text-green-600 border-b-2'}`}>
           <IoIosContact className="text-4xl text-[#6c6a6a]"/> 
           <h1 className="uppercase text-xl  font-medium">My Task</h1>
           </Link>
           {/* my team  */}
           <Link href='/myteam' cclassName={`flex flex-col justify-center items-center ${  pathName.myteam && 'text-green-600 border-b-2'}`}>
           <IoIosContacts className="text-4xl text-[#6c6a6a]"/> 
           <h1 className="uppercase text-xl  font-medium">My team</h1>
           </Link>
          </div>
           </div>
        </Container>
    );
};

export default TaskMenu;