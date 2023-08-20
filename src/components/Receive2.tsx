import { useState } from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import arrow2 from "../assets/arrow2.png";
import completed from "../assets/completed.png";

const Receive2 = (props: any) => {
  const [boxClicked, setBoxClicked] = useState(false);

  const handleBoxClick = () => {
    setBoxClicked(true);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#1c1f22",
          width: "40px",
          height: "40px",
          position: "absolute",
          top: "6px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          cursor: "pointer",
        }}
        onClick={props.handleBack}
      >
        <img
          src={arrow2}
          width={"20px"}
          height={"20px"}
          style={{
            transform: "rotate(-137deg)",
          }}
        />
      </Box>

      <Stack width={"100%"} justifyContent={"center"}>
        <Box
          bgcolor={"#1c1f22"}
          sx={{
            display: "flex",
            height: "100px",
            padding: "20px",
            gap: "20px",
            width: "70%",
            borderRadius: "10px",
            border: "2px dashed #363a3e",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            position: "relative",
            top: "50px",
            cursor: "pointer",
          }}
        >
          <Typography
            fontSize={"1.5rem"}
            style={{
              color: '#e19a4c',
            }}
          >
            25BKJNKNLJL58fjkdhfk26dnfds15
          </Typography>
        </Box>
        <Stack
          gap={"18px"}
          justifyContent={"center"}
          width={"100%"}
          position={"relative"}
          top={"100px"}
          left={"120px"}
        >
          <Typography color={"#9d9e9e"} ml={"25px"} fontSize={"1.2rem"}>
            Verify address on the device
          </Typography>

          <Box
            bgcolor={"#1c1f22"}
            className="box"
            sx={{
              display: "flex",
              height: "68px",
              padding: "20px",
              gap: "20px",
              width: "70%",
              borderRadius: "10px",
            }}
            onClick={handleBoxClick}
          >
            <img
              src={arrow2}
              width={"16px"}
              height={"16px"}
              style={{
                transform: "rotate(44deg)",
                position: "relative",
                top: "6px",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                color: boxClicked ? "#a4a9d6" : "#8a8b90",
                cursor: 'pointer'
              }}
            >
              Please match the <strong>address</strong> to be shown in X1 wallet
            </Typography>

            <img
              src={completed}
              width={"30px"}
              style={{
                position: "absolute",
                right: "240px",
                display: !boxClicked ? "none" : "block",
              }}
            />
          </Box>
        </Stack>

        <Stack gap={"15px"} position={"relative"} bottom={"-180px"}>
          <Divider
            sx={{
              width: "104%",
              height: "1px",
              backgroundColor: "#272726",
              position: "relative",
              right: "15px",
            }}
          />

          <button
            style={{
              
              border: "1px solid #3e3935",
              width: "140px",
              background: boxClicked ? "#8f602c" : "none",
              color: boxClicked ? "#fff" : "#3e3935",
              fontSize: "1.2rem",
              height: "45px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "3px",
              position: "relative",
              left: "600px",
              cursor: boxClicked ? "pointer" : "not-allowed",
            }}
            onClick={props.handleComplete}
            disabled={!boxClicked}
          >
            {props.isEnd ? "Finish" : "Complete"}{" "}
          </button>
        </Stack>
      </Stack>
    </>
  );
};

export default Receive2;
