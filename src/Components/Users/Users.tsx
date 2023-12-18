import React, { useState } from "react";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { useGetuserslistQuery } from "../../redux/api/apislice";

const Users: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useGetuserslistQuery(undefined);
  if (isLoading) {
    console.log("Looaddding...");
  }

  console.log(data?.data);

  // paginations page logic
  const itemsPerPage = 3; // Adjust as needed

  // Your data fetching or rendering logic
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedData = data?.data.slice(startIdx, startIdx + itemsPerPage);

  // Render your paginated content using paginatedData

  return (
    <div className="mx-4 md:mx-10 lg:mx-14 xl:mx-16 mb-10">
      <div className="flex justify-between items-center mt-6">
        <h2 className="text-3xl ">users</h2>

        <div className="flex gap-4 ">
          <button
            className="py-2 px-5 rounded-lg font-semibold border text-lg text-black"
            type="button"
          >
            import
          </button>
          <button
            className="bg-[#7F56D9] text-white py-2 px-5 rounded-lg font-semibold "
            type="button"
          >
            Add User
          </button>
        </div>
      </div>

      <div className="border-2 mt-16 rounded-2xl ">
        <div className="grid grid-cols-3 gap-3 md:gap-6 pt-3">
          <p className="text-[#667085] text-md ml-3">User Info</p>
          <p className="text-[#667085] text-md ml-3">About</p>
          <p className="text-[#667085] text-md ml-3">Status</p>
        </div>

        {paginatedData?.map(
          (
            user: {
              avatar: string;
              email: string;
              last_name: string;
              first_name:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | null
                | undefined;
            },
            i: number
          ) => (
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mt-2 border-t-[1px] "
              key={i}
            >
              {/* user info  */}
              <div className=" flex py-2 pl-3">
                <div className="flex items-center gap-5 ">
                  <input
                    className="w-5 h-5"
                    type="checkbox"
                    value={""}
                    name="time"
                  />
                  <img
                    className=" h-12 w-12 rounded-full "
                    src={user.avatar}
                    alt=""
                  />
                </div>

                <div className="ml-4">
                  <p className="text-lg">
                    {" "}
                    {user.first_name} {user.last_name}{" "}
                  </p>
                  <p className="text-[#667085] text-lg"> {user.email} </p>
                </div>
              </div>

              {/* about */}
              <div className="py-2 pl-3 ">
                <p className="text-lg">Design software</p>
                <p className="text-[#667085] text-lg">
                  {" "}
                  Super lightweight design app{" "}
                </p>
              </div>

              {/* status  */}
              <div className=" py-2 px-3 flex justify-between items-center">
                <p className="text-sm font-semibold text-[#3D9B73]">Customer</p>

                <div className="flex justify-between gap-10 items-center">
                  <p className="text-xl text-[#667085]">
                    {" "}
                    <FaTrashAlt></FaTrashAlt>{" "}
                  </p>
                  <p className="text-xl text-[#667085]">
                    {" "}
                    <FaPencilAlt></FaPencilAlt>{" "}
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <div className="flex justify-between items-center gap-4 mt-5 ">
        <button
          className="py-2 px-5 rounded-lg font-semibold border text-lg text-black"
          type="button"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </button>

        <p className="text-lg">Page {currentPage} of 2</p>

        <button
          className="py-2 px-5 rounded-lg font-semibold border text-lg text-black"
          type="button"
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Users;
