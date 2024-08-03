'use client'
import Link from "next/link";
import Container from "./Container";
import { IoIosContact, IoIosContacts } from "react-icons/io";
import { usePathname } from "next/navigation";
const TaskMenu = () => {
  const task = [
    {title:'Mytasks',icon:'IoIosContact',href:'/mytask'},
    {title:'Myteam',icon:'IoIosContact',href:'/myteam'},
   

  ]
    const pathName = usePathname()
    console.log(pathName);
    return (
        <Container className='my-16'>
           <div className=" w-1/2  mx-auto bg-[#FFFFFF] p-2 rounded-b-lg shadow-xl">
          <div className="flex justify-center gap-x-28">
            {
                task.map(item =>(
                    <Link key={item.icon} href={item.href} className={`flex flex-col justify-center items-center ${item.href===pathName  && 'text-green-600 border-b-2'}`}>
                    {/* <span className="text-4xl text-[#6c6a6a]"><IoIosContact /> </span> */}
                    <h1 className="uppercase text-xl  font-medium">{item.title}</h1>
                    </Link>
                ))
            }
             
          </div>
           </div>
        </Container>
    );
};

export default TaskMenu;