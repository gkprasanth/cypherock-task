import { useState } from "react";

import { Box, Divider, Stack, Typography } from "@mui/material";
import arrow2 from "../assets/arrow2.png";

const instructions = [
  "Select the wallet on the device",
  "Select the coin on the device",
  "Tap 1 card any of the 4 cards",
];

const Receive1 = (props: any) => {
  const [complete, setComplete] = useState(false);

  const handleClick = () => {
    props.handleComplete();

    setTimeout(() => setComplete(true), 200);
  };

  return (
    <Stack
      width={"100%"}
      marginLeft={"110px"}
      justifyContent={"center"}
      height={"80%"}
      position={"relative"}
      gap={"30px"}
    >
      <Typography color={"#fff"} ml={"25px"} fontSize={"1.3rem"}>
        Follow the instrcutions on the device
      </Typography>

      <Stack
        gap={"18px"}
        justifyContent={"center"}
        position={"relative"}
        width={"100%"}
      >
        {instructions.map((i, index) => {
          return (
            <>
              <Box
                bgcolor={"#1c1f22"}
                sx={{
                  display: "flex",
                  height: "68px",
                  padding: "20px",
                  gap: "20px",
                  width: "70%",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={arrow2}
                  width={"16px"}
                  height={"16px"}
                  style={{
                    transform: "rotate(44deg)",
                    position: "relative",
                    top: "8px",
                  }}
                />
                <Typography key={index} color={"#8a8b90"} fontSize={"1.3rem"}>
                  {i}
                </Typography>
              </Box>
            </>
          );
        })}
      </Stack>

      <Stack gap={"15px"} position={"relative"} top={"20px"}>
        <Divider
          sx={{
            width: "104%",
            height: "1px",
            backgroundColor: "#272726",
            position: "relative",
            right: "124px",
          }}
        />

        <button
          style={{
            color: "#3e3935",
            border: "1px solid #3e3935",
            width: "140px",
            background: "none",
            fontSize: "1.2rem",
            height: "45px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "3px",
            position: "relative",
            left: "470px",
            cursor: "pointer",
          }}
          onClick={() => {
            handleClick();
          }}
        >
          {props.isEnd ? "Finish" : "Complete"}
        </button>
      </Stack>
    </Stack>
  );
};

export default Receive1;
