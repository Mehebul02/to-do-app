import Container from "@/components/Container";
import { IoMdSend } from "react-icons/io";

const MyTask = () => {
    return (
        <Container>
         <div className="w-1/2 h-72  mx-auto bg-[#e2e1e1] p-6 rounded-md shadow-xl">
         <div className="join w-full">
  <input className="input input-bordered join-item w-full" placeholder="Type here to add new task item.." />
  <button className="btn join-item bg-[#FFFFFF]  "> <IoMdSend className="text-xl"/> </button>
</div>
         </div>
        </Container>
    );
};

export default MyTask;