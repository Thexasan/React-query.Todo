import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Products from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import { axiosRequest } from "../utils/axiosRequest";
import { getUsers } from "../reducers/states";
import { Link } from "react-router-dom";

const Home = () => {
  // const [cars, setCars] = useState([]);

  const dispatch = useDispatch();

  const cars = useSelector((state) => state.states.cars);

  async function getCars() {
    try {
      const { data } = await axiosRequest.get("api/Car/GetAllCars");
      dispatch(getUsers(data));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCars();
  }, [dispatch]);

  return (
    <>
      <section className="foto  my-auto xl:bg-center xl:bg-start mlg:bg-center  w-[full] bg-contain bg-no-repeat h-full sm:h-[96vh] lp:h-[100vh] md:h-[105vh] lg:h-[95vh] ">
        <div className="container m-auto">
          <div className="flex flex-col items-center pt-8 px-10 pb-5 justify-center">
            <h1 className="text-[20px] sm:text-[22px] lp:text-[42px] md:text-[48px] lg:text-[60px] md:font-[700] lp:text-center text-white sm:font-[600]">
              BUYING & SHIPPING AMERICAN AUTOMOBILES
            </h1>
            <p className="text-[14px] lp:text-[20px] lp:font-[400] md:text-[24px] lp:text-center  py-5 text-white font-[400]">
              With “Home Delivery” option available never been so fast and so
              easy
            </p>
          </div>

          <div>
            <SearchBar />
          </div>
        </div>
      </section>

      <section>
        <div className="container m-auto">
          <div className="relative sm:top-[-340px] lp:top-[-300px] md:top-[-230px] lg:top-0">
            <h1 className="text-[18px] text-center my-3 sm:text-[20px] lp:text-[24px] md:text-[32px] lg:text-[48px] font-[700] text-[#1F1F1F]">
              Compare auctions
            </h1>
          </div>
          {/* Products Cars */}
          <div className="p-4 relative sm:top-[-300px] justify-center lp:top-[-241px] lg:top-0 grid lg:grid-cols-[300px_300px_300px] sm:grid-cols-[100%] md:grid-cols-[345px_345px] lp:grid-cols-[280px_280px]  xl:grid-cols-[345px_345px_345px] gap-10 ">
            {cars?.length !== 0
              ? cars?.map((elem) => {
                  return (
                    <div key={elem.id}>
                      <Link to={`carsDetail/vin/${elem.vin}`}>
                        <Products
                          manufacturedIn={elem.manufacturedIn}
                          vin={elem.vin}
                          final_Bid={elem.final_Bid}
                          auction={elem.auction}
                          image={`${import.meta.env.VITE_APP_API_FILES}${
                            elem.carImages[0].fileName
                          }`}
                        />
                      </Link>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
