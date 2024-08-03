import Link from "next/link";
import Container from "./Container";
import { IoIosContact, IoIosContacts } from "react-icons/io";
const TaskMenu = () => {
    return (
        <Container className='py-32'>
           <div className=" w-1/2  mx-auto bg-[#FFFFFF] p-2 rounded-b-lg shadow-xl">
          <div className="flex justify-center gap-x-28">
             {/* my task  */}
           <Link href='' className="flex flex-col justify-center items-center">
           <IoIosContact className="text-4xl text-[#6c6a6a]"/> 
           <h1 className="uppercase text-xl  font-medium">My Task</h1>
           </Link>
           {/* my team  */}
           <Link href='' className="flex flex-col justify-center items-center">
           <IoIosContacts className="text-4xl text-[#6c6a6a]"/> 
           <h1 className="uppercase text-xl  font-medium">My team</h1>
           </Link>
          </div>
           </div>
        </Container>
    );
};

export default TaskMenu;