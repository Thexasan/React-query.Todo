import React, { useEffect, useMemo, useState } from "react";
import { axiosRequest } from "../utils/axiosRequest";
import { Link, useParams } from "react-router-dom";
import { Breadcrumbs, Card, CardContent, Typography } from "@mui/material";
import Swippers from "../components/Swippers";

const Detail = () => {
  const [car, setCar] = useState({});
  const [bid, setBid] = useState("");
  const { vin } = useParams();

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

  useEffect(() => {
    getCatByVin();
  }, [vin]);

  const {
    auction,
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

  function convertBid() {
    const formateBid = `${final_Bid}`.split("");
    if (formateBid.length == 4) {
      let res = formateBid.splice(1, 0, ",");
      setBid(formateBid.join(""));
    }
    else if (formateBid.length == 5){
      let res = formateBid.splice(2, 0, ",");
      setBid(formateBid.join(""));
    }
    else if (formateBid.length == 6){
      let res = formateBid.splice(3, 0, ",");
      setBid(formateBid.join(""));
    }
  }

  console.log(bid);

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

  console.log(formattedDate);

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
        <div className="w-full">
          <div className="p-4 md:ml-[8%] flex items-start flex-col justify-between">
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
          <div className="md:relative px-1 lp:px-4 md:left-[-20%]">
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
              className="md:absolute h-[100%] md:max-h-[57%] lg:max-h-[59%] md:right-[2%] lg:right-[10%] md:w-[400px] md:max-w-[43%] lg:max-w-[33%] md:top-[242px]"
              variant="outlined"
            >
              <CardContent>
                <Typography
                  sx={{ fontSize:16, fontWeight: "500" }}
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
                    alignItems: "center", pt:'2px',
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Model: <span>{model}</span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center", pt:'2px',
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Equipment: <span>{equipment}</span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center", pt:'2px',
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Lot: <span>{lot}</span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center", pt:'2px',
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Seller: <span>{seller}</span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center", pt:'2px',
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Loss: <span>{loss}</span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center", pt:'2px',
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Primary Damage: <span>{primaryDamage}</span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center", pt:'2px',
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Secondary Damage: <span>{secondaryDamage}</span>
                </Typography>

                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center", pt:'2px',
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Odometer: <span>{odometer}</span>
                </Typography>

                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center", pt:'2px',
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Start Code: <span>{startCode}</span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center", pt:'2px',
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Key: <span>{key}</span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center", pt:'2px',
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Airbag: <span>{airbag}</span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",  pt:'2px',
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
                    alignItems: "center", pt:'2px',
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Body Type: <span>{bodyType}</span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center", pt:'2px',
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Transmission: <span>{transmission}</span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center", pt:'2px',
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Manufactured In: <span>{manufacturedIn}</span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center", pt:'2px',
                    justifyContent: "space-between",
                  }}
                  component="div"
                >
                  Selling Branch: <span>{sellingBranch}</span>
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center", pt:'2px',
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
    </>
  );
};

export default Detail;
