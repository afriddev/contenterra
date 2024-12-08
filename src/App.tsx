/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useSignup } from "./hooks/appHooks";
import AppSpiner from "./utils/AppSpinner";
import NavBar from "./ui/NavBar";
import { IoIosRefresh } from "react-icons/io";
import { dataType } from "./appTypes";
import Card from "./ui/Card";

function App() {
  const { getData, isLoading } = useSignup();
  const [data, setData] = useState<dataType[]>([]);

  useEffect(() => {
    getData(undefined, {
      onSuccess(data) {
        if (data?.length > 0) {
          setData(data as any);
        }
      },
    });
  }, []);


  return (
    <div className="relative text-sm  pb-8">
      {isLoading && <AppSpiner />} 
      <div className="w-[100vw] h-[100vh] lg:max-w-[100vw]  fixed">
        <img
          src="beams.jpg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0  z-[201] py-4 px-2 ">
        <NavBar />
        {data?.length == 0 ||
          (!data && (
            <div className="w-full min-h-[90vh] flex justify-center items-center ">
              <div className="flex flex-col gap-3 items-center">
                <label>No Data Found !</label>
                <button className="bg-black text-white h-fit py-2 w-fit px-4 rounded-md  flex justify-center items-center">
                  Retry <IoIosRefresh className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}

        {data?.length > 0 && (
          <div className="grid  grid-cols-1 gap-5 lg:grid-cols-4 mt-6 px-4">
            {data?.map((item, index) => {
              return <Card
                key={index}
                title={item?.data?.title}
                score={item?.data?.score}
                url={item?.data?.url}
             selftextHtml={item?.data?.selftext_html}
             
                />
})}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
