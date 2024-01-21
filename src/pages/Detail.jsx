import React, { useEffect, useMemo, useState } from "react";
import { axiosRequest } from "../utils/axiosRequest";
import { Link, useParams } from "react-router-dom";
import { Breadcrumbs, Card, CardContent, Typography } from "@mui/material";
import Swippers from "../components/Swippers";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../reducers/states";

const Detail = () => {
  const [car, setCar] = useState({});
  const [bid, setBid] = useState("");
  const { vin } = useParams();

  const dispatch = useDispatch();

  const cars = useSelector((state) => state.states.cars);

  async function getCatByVin() {
    try {
      const { data } = await axiosRequest.get(
        `api/Car/GetCarByVIN?carVin=${vin}`
      );
      setCar(data);
    } catch (error) {
      console.log(error);
    }
  }

  const {
    auction,
    id,
    vin: Vin,
    key,
    manufacturedIn,
    seller,
    carImages,
    final_Bid,
    make,
    model,
    startCode,
    odometer,
    primaryDamage,
    bodyType,
    secondaryDamage,
    loss,
    transmission,
    airbag,
    sellingBranch,
    auctionDate,
    equipment,
    vinStatus,
    lot,
  } = car;

  async function getCars() {
    try {
      const { data } = await axiosRequest.get("api/Car/GetAllCars");
      dispatch(getUsers(data));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCatByVin();
    getCars();
  }, [vin, dispatch]);

  function convertBid() {
    const formateBid = `${final_Bid}`.split("");
    if (formateBid.length == 4) {
      let res = formateBid.splice(1, 0, ",");
      setBid(formateBid.join(""));
    } else if (formateBid.length == 5) {
      let res = formateBid.splice(2, 0, ",");
      setBid(formateBid.join(""));
    } else if (formateBid.length == 6) {
      let res = formateBid.splice(3, 0, ",");
      setBid(formateBid.join(""));
    }
  }

  const inputDate = new Date(auctionDate);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfWeek = daysOfWeek[inputDate.getUTCDay()];
  const month = months[inputDate.getUTCMonth()];
  const day = inputDate.getUTCDate();
  const year = inputDate.getUTCFullYear();
  let hours = inputDate.getHours();
  const minutes = inputDate.getUTCMinutes();
  const ampm = "am";

  // Convert hours to 12-hour format

  const formattedDate = `${dayOfWeek} ${month} ${day}, ${year}, ${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${ampm}`;


  useMemo(() => {
    convertBid();
  }, [formattedDate]);

  return (
    <>
      <header className="p-4">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/">Home</Link>
          <Link>Cars Details</Link>
          <Typography color="text.primary">{auction}</Typography>
          <Typography color="text.secondary">{Vin}</Typography>
        </Breadcrumbs>
      </header>

      <section className="md:flex md:items-center h-[auto] md:justify-between">
        <div className="w-full overflow-hidden">
          <div className="p-4 md:ml-[4%] flex items-start flex-col justify-between">
            <div className="py-2">
              <h1 className="text-[24px] text-[#262626] font-[700]">
                {auction}Vin: <span className="font-[700]">{Vin}</span>
              </h1>
              {/* <p className="py-1 text-[16px] text-[#262626] font-[500]"></p> */}
            </div>
            <div className="lp:flex hidden text-[20px] font-[500] items-center justify-start gap-10">
              Final Bid:
              <h1 className="text-[24px] font-[700] text-green-500">
                $<span>{bid}</span>
              </h1>
            </div>
          </div>
          <div className="md:relative overflow-hidden px-1 lp:px-4 md:left-[-20%]">
            <Swippers carImages={carImages} />
          </div>
        </div>
        <div className="p-4">
          <div className="flex lp:hidden text-[20px] font-[500] items-center justify-start gap-10">
            Final Bid:
            <h1 className="text-[24px] font-[700] text-green-500">
              $<span>{bid}</span>
            </h1>
          </div>
          <div>
            <Card
              className="md:absolute h-[100%] md:max-h-[82%] lg:max-h-[85%] md:right-[2%] lg:right-[10%] md:w-[400px] md:max-w-[43%] lg:max-w-[33%] mlg:h-[75%] md:top-[242px]"
              variant="outlined"
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 16, fontWeight: "500" }}
                  color="text.secondary"
                  gutterBottom
                >
                  Overview
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",

                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Make: <span>{make}</span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pt: "4.5px",
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Model: <span>{model}</span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pt: "4.5px",
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Equipment: <span>{equipment}</span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pt: "4.5px",
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Lot: <span>{lot}</span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pt: "4.5px",
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Seller: <span>{seller}</span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pt: "4.5px",
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Loss: <span>{loss}</span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pt: "4.5px",
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Primary Damage: <span>{primaryDamage}</span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pt: "4.5px",
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Secondary Damage: <span>{secondaryDamage}</span>
                </Typography>

                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pt: "4.5px",
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Odometer: <span>{odometer}</span>
                </Typography>

                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pt: "4.5px",
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Start Code: <span>{startCode}</span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pt: "4.5px",
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Key: <span>{key}</span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pt: "4.5px",
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Airbag: <span>{airbag}</span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pt: "4.5px",
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  VIN Status:{" "}
                  <span>
                    {Vin} ({vinStatus})
                  </span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pt: "4.5px",
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Body Type: <span>{bodyType}</span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pt: "4.5px",
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Transmission: <span>{transmission}</span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pt: "4.5px",
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Manufactured In: <span>{manufacturedIn}</span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pt: "4.5px",
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Selling Branch: <span>{sellingBranch}</span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    pt: "4.5px",
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Auction Date: <span>{formattedDate}</span>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* recomended Cars */}

      <section>
        <div className="container m-auto">
          <div className="text-center my-16">
            <h1 className="font-bold text-[36px] text-inherit">
              Recomended Cars
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Detail;
