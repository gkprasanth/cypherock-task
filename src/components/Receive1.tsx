import { useState } from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import arrow2 from "../assets/arrow2.png";
import completed from "../assets/completed.png";

const instructions = [
  "Select the wallet on the device",
  "Select the coin on the device",
  "Tap 1 card any of the 4 cards",
];

const Receive1 = (props: any) => {
  const [selectedBoxIndices, setSelectedBoxIndices] = useState<boolean[]>(
    Array(instructions.length).fill(false)
  );

  const handleClick = (index: number) => {
    const newSelectedBoxIndices = [...selectedBoxIndices];
    newSelectedBoxIndices[index] = !newSelectedBoxIndices[index];
    setSelectedBoxIndices(newSelectedBoxIndices);
  };

  const allBoxesSelected = selectedBoxIndices.every((value) => value);

  const handleButtonClick = () => {
    if (allBoxesSelected) {
      props.handleComplete();
    }
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
        Follow the instructions on the device
      </Typography>

      <Stack
        gap={"18px"}
        justifyContent={"center"}
        position={"relative"}
        width={"100%"}
      >
        {instructions.map((i, index) => (
          <Box
            key={index}
            bgcolor={"#1c1f22"}
            sx={{
              display: "flex",
              height: "68px",
              padding: "20px",
              gap: "20px",
              width: "70%",
              borderRadius: "10px",
              color: selectedBoxIndices[index] ? "#a4a9d6" : "#8a8b90",
              cursor: "pointer",
            }}
            onClick={() => handleClick(index)}
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
            <Typography fontSize={"1.3rem"}>{i}</Typography>

            <img
              src={completed}
              width={"30px"}
              style={{
                position: "absolute",
                right: "240px",
                display: !allBoxesSelected ? "none" : "block",
              }}
            />
          </Box>
        ))}
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
            color: allBoxesSelected ? "#fff" : "#3e3935",
            border: "1px solid #3e3935",
            width: "140px",
            fontSize: "1.2rem",
            height: "45px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "3px",
            position: "relative",
            left: "470px",
            cursor: allBoxesSelected ? "pointer" : "not-allowed",
            backgroundColor: allBoxesSelected ? "#8f602c" : "transparent",
            pointerEvents: allBoxesSelected ? "auto" : "none",
          }}
          onClick={handleButtonClick}
          disabled={!allBoxesSelected}
        >
          {props.isEnd ? "Finish" : "Complete"}
        </button>
      </Stack>
    </Stack>
  );
};

export default Receive1;
