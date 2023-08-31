import { FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BiSolidVideoPlus } from "react-icons/bi";
import { FaRegKeyboard } from "react-icons/fa";
export default function page() {
  return (
    <div>
      <div className="flex justify-between text-1xl mt-2 ">
        <div className="">Logo</div>
        <div className=" flex mr-10 gap-20  ">
          <div>
            {[
              Date().split(" ")[4] + " ",
              Date().split(" ")[2] + " ",
              Date().split(" ")[1] + " ",
              Date().split(" ")[3] + " ",
            ]}
          </div>
          <div>
            <FiSettings className="text-3xl" />
          </div>
          <div>
            <CgProfile className="text-3xl" />{" "}
          </div>
        </div>
      </div>
      <div className=" justify-evenly    gap-5  mt-60 ml-5 ">
        <div>
          <p className="text-3xl">
            Premium video meetings. Now free for everyone.
          </p>
          <p>
            We re-engineered the service we built for secure business meetings,
            We Meet, to make it free and available for all.
          </p>
        </div>

        <div className="mt-3 flex  gap-5   ">
          <button className="bg-blue-500 p-2  rounded-md flex text-white ">
            <BiSolidVideoPlus className="mr-2 text-2xl" />
            <p> New Meeting</p>
          </button>
          <div className="relative flex ">
            <input
              className=" border-2  text-center text-s ml-2"
              type="text"
              placeholder="Enter a code or Link "
            />
            <FaRegKeyboard className="absolute top-2 left-8 text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
