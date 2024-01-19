import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import LockOpenIcon from "@mui/icons-material/LockOpen";

export default function Products(props) {
  const [bid, setBid] = React.useState("");
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
  const { image, manufacturedIn, auction, vin, final_Bid } = props;

  React.useMemo(() => {
    convertBid();
  }, []);

  return (
    <Card
      sx={{ maxWidth: 345, boxShadow: "1px 1px 3px gray, -1px -1px 3px gray" }}
    >
      <CardHeader
        action={
          <div className="flex items-center gap-1">
            <h1 className="text-[10px] font-[700]">{manufacturedIn}</h1>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
              >
                <rect width="27" height="27" rx="6" fill="#A2CC5E" />
                <path
                  d="M17.6 9L12.5 14.15L10.4 12.05L9 13.45L12.5 17L19 10.45L17.6 9Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
        }
      />
      <img
        src={image}
        className="rounded-[10px] m-auto hover:scale-105 duration-150"
        alt=""
      />
      <CardContent>
        <Typography
          variant="h6"
          className="hover:border-b hover:border-black hover:duration-500 hover:w-fit"
          sx={{
            fontWeight: 700,
            fontSize: "18px",
            color: "#1F1F1F",
            cursor: "pointer",
          }}
          color="text.secondary"
        >
          {auction}
        </Typography>
        <h1 className="flex my-2 items-center justify-between text-[16px] font-[700]">
          <span className="flex items-center">
            <LockOpenIcon />
            VIN:
          </span>
          <span>{vin}</span>
        </h1>
        <div>
          <h1 className="text-[24px] flex items-center justify-between mt-[10px] mb-[-20px] font-[700] text-[#1F1F1F]">
            <span>Final Bid:</span>{" "}
            <span className="text-green-500">${bid}</span>
          </h1>
        </div>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
}
