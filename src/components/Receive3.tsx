import { Box, Divider, Stack, Typography } from "@mui/material";
import arrow2 from "../assets/arrow2.png";
import modal from "../assets/modal.png";

import modal1 from "../assets/modal1.png";
const Receive3 = (props: any) => {
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
        <Stack>
          <Typography
            position={"relative"}
            bottom={"-40px"}
            left={"130px"}
            variant="body1"
            color={"#8a8b90"}
          >
            Coin Address
          </Typography>
          <Stack direction={"row"}>
            <input
              type="text"
              style={{
                backgroundColor: "#1c1f22",
                display: "flex",
                height: "90px",
                padding: "10px  20px",

                width: "70%",
                borderRadius: "10px",
                border: "none",

                margin: "auto",
                position: "relative",
                top: "65px",
                color: "#e19a4c",
                fontSize: "1.3rem",
              }}
              value={"25BKJNKNLJL58fjkdhfk26dnfds15"}
              readOnly
            />

            <button
              style={{
                color: "#e7c49f",
                border: "none",
                width: "70px",
                background: "#323538",
                fontSize: "1rem",
                height: "45px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                position: "absolute",
                cursor: "pointer",
                bottom: "335px",
                right: "150px",
              }}
            >
              Copy
            </button>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          gap={'10px'}
          sx={{
            position: "relative",
            top: "95px",
            left: "130px",
            alignItems:'center'
          }}
        >
          <img src={modal} width={'27px'} />
          <Typography color={"#4848f6"}>address Verifyed</Typography>
        </Stack>

        <Stack>
          <button
            style={{
              color: "#4848f6",
              border: "1px solid #4848f6",
              width: "140px",
              background: "none",
              fontSize: "1rem",
              height: "45px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "3px",
              position: "relative",
              left: "300px",
              top: "200px",
              cursor: "pointer",
            }}
            onClick={props.stepsCompleted}
          >
            Re-Verify
          </button>
        </Stack>

        <Stack gap={"15px"} position={"relative"} bottom={"-180px"}>
          <Divider
            sx={{
              width: "104%",
              height: "1px",
              backgroundColor: "#272726",
              position: "relative",
              right: "15px",
              top: "80px",
            }}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default Receive3;
