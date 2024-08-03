import { TbHandRingFinger } from "react-icons/tb";
const { default: Container } = require("@/components/Container");
import Image from "next/image";
import dev from '../../../public/dev.png'
import johan from '../../../public/johan deo.png'
import alif from '../../../public/mehebul alif.png'
const MyItem = () => {
  return (
    <Container>
      <div className="w-1/2   mx-auto bg-[#e2e1e1] p-6 rounded-md shadow-xl my-10">
        <h1 className="text-3xl text-orange-500 font-serif font-semibold flex items-center gap-x-2">
          Pixel Builders <TbHandRingFinger />{" "}
        </h1>
        <h1 className="text-xl font-medium">Code:4354</h1>
        <div className="divider"></div>
{/* dev Cluster  */}
     <div className="flex justify-between items-center">
     <div className="flex gap-x-3">
          <Image className="w-6 rounded-md" src={dev} alt="question"/>
          <h1 className="text-xl font-mono">Dev Cluster</h1>
      </div>
      <h1 className="text-md font-bold text-black bg-gray-300 px-4 py-2 rounded-xl">Owner</h1>
     </div>
     {/* johan deo  */}
     <div className="flex gap-x-3 my-6">
          <Image className="w-6 rounded-md" src={johan} alt="question"/>
          <h1 className="text-xl font-mono">Mehebul Alif</h1>
      </div>
     {/* johan deo  */}
     <div className="flex gap-x-3">
          <Image className="w-6 rounded-md" src={alif} alt="question"/>
          <h1 className="text-xl font-mono">Johan Deo</h1>
      </div>

      
      </div>
    </Container>
  );
};

export default MyItem;
