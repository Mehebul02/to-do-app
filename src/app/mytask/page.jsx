import Container from "@/components/Container";
import Image from "next/image";
import { IoMdSend } from "react-icons/io";
import question from '../../../public/question.png'
const MyTask = () => {
    return (
        <Container>
         <div className="w-1/2   mx-auto bg-[#e2e1e1] p-6 rounded-md shadow-xl my-10">
         <div className="join w-full">
  <input className="input input-bordered join-item w-full" placeholder="Type here to add new task item.." />
  <button className="btn join-item bg-[#FFFFFF]  "> <IoMdSend className="text-xl"/> </button>
</div>
<div className="divider"></div>

<Image className="w-52 mx-auto" src={question} alt="question"/>

<h1 className="text-3xl  font-serif font-semibold text-black text-center my-6">You Dont have a tasks</h1>

         </div>
        </Container>
    );
};

export default MyTask;