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

      <section className="m-auto">
        <div className="w-full overflow-hidden">
          <div className="p-4 md:ml-[4%] flex items-start flex-col justify-between">
            <div className="py-2">
              <h1 className="text-[24px] text-[#262626] font-[700]">
                {auction} Vin:<span className="font-[700]">{Vin}</span>
              </h1>
            </div>
            <div className="lp:flex hidden text-[20px] font-[500] items-center justify-start gap-10">
              Final Bid:
              <h1 className="text-[24px] font-[700] text-green-500">
                $<span>{bid}</span>
              </h1>
            </div>
          </div>
          <div className="md:grid md:grid-cols-[100%_100%] md:items-start">
            <div className="md:relative  overflow-hidden px-1 lp:px-4 md:left-[-20%]">
              <Swippers carImages={carImages} />
              <div>
                <div className="p-4">
                  <div className="flex lp:hidden text-[20px] font-[500] items-center justify-start gap-10">
                    Final Bid:
                    <h1 className="text-[24px] font-[700] text-green-500">
                      $<span>{bid}</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:container p-1 md:p-0">
              <Card
                className="h-[100%] md:relative md:left-[-382px] mlg:left-[-600px] lg:left-[-400px] xl:left-[-500px] md:max-h-[93%] lg:max-h-[96%] md:w-[400px] md:max-w-[49%] lg:max-w-[38%] xl:w-[36%] xl:max-h-[95%]"
                variant="outlined"
              >
                <CardContent className="flex  flex-col justify-start md:gap-[2px] lg:gap-[3px] xl:gap-[4px]">
                  <Typography
                    sx={{ fontSize: 16, fontWeight: "500" }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <span className="text-[20px] font-[600]">Overview</span>
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pt: "6.5px",
                      justifyContent: "space-between",
                    }}
                    component="div"
                  >
                    <span className="font-[600]">Make:</span>{" "}
                    <span className="md:text-[18px] font-[600] text-[#1E293B]">
                      {make}
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pt: "6.5px",
                      justifyContent: "space-between",
                    }}
                    component="div"
                  >
                    <span className="font-[600]">Model:</span>{" "}
                    <span className="md:text-[18px] font-[600] text-[#1E293B]">
                      {model}
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pt: "6.5px",
                      justifyContent: "space-between",
                    }}
                    component="div"
                  >
                    <span className="font-[600]">Equipment:</span>{" "}
                    <span className="md:text-[18px] font-[600] text-[#1E293B]">
                      {equipment}
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pt: "6.5px",
                      justifyContent: "space-between",
                    }}
                    component="div"
                  >
                    <span className="font-[600]">Lot:</span>{" "}
                    <span className="md:text-[18px] font-[600] md:text-[#1E293B]">
                      {lot}
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pt: "6.5px",
                      justifyContent: "space-between",
                    }}
                    component="div"
                  >
                    <span className="font-[600]">Seller:</span>{" "}
                    <span className="md:text-[18px] font-[600] text-[#1E293B]">
                      {seller}
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pt: "6.5px",
                      justifyContent: "space-between",
                    }}
                    component="div"
                  >
                    <span className="font-[600]">Loss:</span>{" "}
                    <span className="md:text-[18px] font-[600] text-[#1E293B]">
                      {loss}
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pt: "6.5px",
                      justifyContent: "space-between",
                    }}
                    component="div"
                  >
                    <span className="font-[600]">Primary Damage:</span>{" "}
                    <span className="md:text-[18px] font-[600] text-[#1E293B]">
                      {primaryDamage}
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pt: "6.5px",
                      justifyContent: "space-between",
                    }}
                    component="div"
                  >
                    <span className="font-[600]">Secondary Damage:</span>{" "}
                    <span className="md:text-[18px] font-[600] text-[#1E293B]">
                      {secondaryDamage}
                    </span>
                  </Typography>

                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pt: "6.5px",
                      justifyContent: "space-between",
                    }}
                    component="div"
                  >
                    <span className="font-[600]">Odometer:</span>{" "}
                    <span className="md:text-[18px] font-[600] text-[#1E293B]">
                      {odometer}
                    </span>
                  </Typography>

                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pt: "6.5px",
                      justifyContent: "space-between",
                    }}
                    component="div"
                  >
                    <span className="font-[600]">Start Code:</span>{" "}
                    <span className="md:text-[18px] font-[600] text-[#1E293B]">
                      {startCode}
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pt: "6.5px",
                      justifyContent: "space-between",
                    }}
                    component="div"
                  >
                    <span className="font-[600]">Key:</span>{" "}
                    <span className="md:text-[18px] font-[600] text-[#1E293B]">
                      {key}
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pt: "6.5px",
                      justifyContent: "space-between",
                    }}
                    component="div"
                  >
                    <span className="font-[600]">Airbag:</span>{" "}
                    <span className="md:text-[18px] font-[600] text-[#1E293B]">
                      {airbag}
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pt: "6.5px",
                      justifyContent: "space-between",
                    }}
                    component="div"
                  >
                    <span className="font-[600]">VIN Status: </span>
                    <span className="md:text-[18px] font-[600] text-[#1E293B]">
                      {Vin} ({vinStatus})
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pt: "6.5px",
                      justifyContent: "space-between",
                    }}
                    component="div"
                  >
                    <span className="font-[600]">Body Type:</span>{" "}
                    <span className="md:text-[18px] font-[600] text-[#1E293B]">
                      {bodyType}
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pt: "6.5px",
                      justifyContent: "space-between",
                    }}
                    component="div"
                  >
                    <span className="font-[600]">Transmission:</span>{" "}
                    <span className="md:text-[18px] font-[600] text-[#1E293B]">
                      {transmission}
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pt: "6.5px",
                      justifyContent: "space-between",
                    }}
                    component="div"
                  >
                    <span className="font-[600]">Manufactured In:</span>{" "}
                    <span className="md:text-[18px] font-[600] text-[#1E293B]">
                      {manufacturedIn}
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pt: "6.5px",
                      justifyContent: "space-between",
                    }}
                    component="div"
                  >
                    <span className="font-[600]">Selling Branch:</span>{" "}
                    <span className="md:text-[18px] font-[600] text-[#1E293B]">
                      {sellingBranch}
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      pt: "6.5px",
                      justifyContent: "space-between",
                      sm: {
                        pt: "10px",
                      },
                    }}
                    component="div"
                  >
                    <span className="font-[600]">Auction Date:</span>{" "}
                    <span className="md:text-[17px] font-[600] text-[#1E293B]">
                      {formattedDate}
                    </span>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* recomended Cars */}

      <section>
        <div className="container m-auto">
          <div className="text-center md:my-[40%] lg:my-[200px] my-16">
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
