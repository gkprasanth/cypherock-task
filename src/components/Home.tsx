import {
  Container,
  CssBaseline,
  Typography,
  Stack,
  Box,
  Step,
  Stepper,
  StepLabel,
} from "@mui/material";



import Sidebar from "./Sidebar";
import check from "../assets/check.png";
import lock from "../assets/lock.png";
import down from "../assets/down-arrow.png";
import dual from "../assets/dual-arrows.png";
import arrow1 from "../assets/arrow1.png";
import arrow2 from "../assets/arrow2.png";

import bitcoin from "../assets/coin_images/bitcoin.png";
import eth from "../assets/coin_images/eth.png";
import bnb from "../assets/coin_images/bnb.png";
import { useState } from "react";

import ReceiveModal from "./Modal";

import useModal from "./hooks/useModal";
import Receive3 from "./Receive3";
import Receive2 from "./Receive2";
import Receive1 from "./Receive1";
import Header from "./Header";

const steps = ["Device", "Verification", "Receive"];

const Home = () => {
  //Modal States & Events
  const { isOpen, toggle } = useModal();

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const stepsCompleted = () => {
    handleComplete();
    toggle();
  };

  const isEnd = () => {
    return completedSteps() === totalSteps() - 1;
  };

  //DropDown

  const [sort, setSort] = useState("Amount High - Low");
  const [dropDownDisplay, setDropdownDisplay] = useState(false);

  //Coin Data Array

  const coinData = [
    {
      logo: `${bitcoin}`,
      name: "BITCOIN",
      symbol: "BTC",
      quantity: "0.0025600",
      price: "0.5268",
    },

    {
      logo: `${eth}`,
      name: "ETHEREUM",
      symbol: "ETH",
      quantity: "0.0025600",
      price: "0.5268",
    },

    {
      logo: `${bnb}`,
      name: "BINANCE",
      symbol: "BNB",
      quantity: "0.0025600",
      price: "0.5268",
    },
    {
      logo: `${bitcoin}`,
      name: "BITCOIN",
      symbol: "BTC",
      quantity: "0.0025600",
      price: "0.5268",
    },

    {
      logo: `${eth}`,
      name: "ETHEREUM",
      symbol: "ETH",
      quantity: "0.0025600",
      price: "0.5268",
    },
  ];

  return (
    <>
      <Stack direction={"column"}>
        <Header />

        <Container
          maxWidth={"xl"}
          sx={{
            backgroundColor: "#0a1018",
            height: "100vh",
            width: "100%",
            overflowX: "hidden",
            overflowy: "auto",
          }}
        >
          <CssBaseline />

          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Sidebar />
            </div>
            <div
              style={{
                maxWidth: "82%",
                display: "flex",
                width: "80vw",
                height: "90vh",
                flexDirection: "column",
              }}
            >
              <Stack
                width={"100%"}
                gap={"4rem"}
                direction={"row"}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "start",
                  padding: "20px",
                }}
              >
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <img
                    src={check}
                    width={"40px"}
                    style={{
                      position: "relative",
                      top: "-5px",
                    }}
                  />
                  <Typography color={"#f5cea3"} textAlign={"center"}>
                    Synchronized
                  </Typography>
                </Stack>

                <Stack direction={"row"} gap={"20px"}>
                  <Box
                    bgcolor={"#1a212b"}
                    borderRadius={"5px"}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={lock} width={"45px"} height={"40px"} />
                  </Box>
                  <Box
                    bgcolor={"#1a212b"}
                    borderRadius={"5px"}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={lock} width={"45px"} height={"40px"} />
                  </Box>
                </Stack>
              </Stack>

              <Container
                className="coin-container"
                sx={{
                  height: "calc(100vh - 8vh)",
                  maxWidth: "80vw",
                }}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"baseline"}
                >
                  <Typography
                    fontSize={"2rem"}
                    fontWeight={"bold"}
                    sx={{
                      color: "#c78d4e",
                    }}
                  >
                    Wallet
                  </Typography>

                  <button
                    style={{
                      backgroundColor: "#181e26",
                      border: "none",
                      color: "#beb4a8",
                      width: "130px",
                      height: "40px",
                      borderRadius: "5px",
                      fontSize: "1rem",
                      cursor: "pointer",
                    }}
                  >
                    + Add Coin
                  </button>
                </Stack>

                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  sx={{
                    border: "3px solid #161c23",
                    padding: "15px",
                    borderRadius: "5px",
                    mt: "30px",
                  }}
                >
                  <Typography color={"#a09e9d"}>Total Coin - 6</Typography>

                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    gap={"15px"}
                    sx={{
                      cursor: "pointer",
                    }}
                    onMouseEnter={() => setDropdownDisplay(true)}
                    onMouseLeave={() => setDropdownDisplay(false)}
                  >
                    <img src={dual} width={"18px"} height={"18px"} />

                    <Typography color={"#a09e9d"}>{sort}</Typography>

                    <img src={down} width={"20px"} height={"20px"} />

                    <Stack
                      className="dropdown-content"
                      sx={{
                        gap: "30px",
                        position: "absolute",
                        backgroundColor: "#272a2f",
                        border: " 2px solid #404854",
                        padding: "30px",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "3px",
                        top: "265px",
                        right: "90px",
                        width: "250px",
                        display: dropDownDisplay === true ? "true" : "none",
                      }}
                    >
                      <Typography
                        color={"#a09e9d"}
                        sx={{
                          cursor: "pointer",
                          textAlign: "center",
                          "&:hover": {
                            color: "#beb4a8",
                            fontWeight: "bold",
                          },
                        }}
                        onClick={() => {
                          setSort("Amount High - Low");
                          setDropdownDisplay(false);
                        }}
                      >
                        Amount High - Low
                      </Typography>
                      <Typography
                        color={"#a09e9d"}
                        sx={{
                          cursor: "pointer",

                          "&:hover": {
                            color: "#beb4a8",
                            fontWeight: "bold",
                          },
                          textAlign: "center",
                        }}
                        onClick={() => {
                          setSort("Amount Low - High");
                          setDropdownDisplay(false);
                        }}
                      >
                        Amount Low - High
                      </Typography>

                      <Typography
                        color={"#a09e9d"}
                        sx={{
                          cursor: "pointer",

                          "&:hover": {
                            color: "#beb4a8",
                            fontWeight: "bold",
                          },
                          textAlign: "center",
                        }}
                        onClick={() => {
                          setSort("Arrange A-Z");
                          setDropdownDisplay(false);
                        }}
                      >
                        Arrange A-Z
                      </Typography>
                      <Typography
                        color={"#a09e9d"}
                        sx={{
                          cursor: "pointer",
                          textAlign: "center",
                          "&:hover": {
                            color: "#beb4a8",
                            fontWeight: "bold",
                          },
                        }}
                        onClick={() => {
                          setSort("Arrange Z-A");
                          setDropdownDisplay(false);
                        }}
                      >
                        Arrange Z-A
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>

                <Stack
                  mt={"40px"}
                  gap={"1rem"}
                  paddingBottom={"30px"}
                  height={"100%"}
                  width={"100%"}
                >
                  {coinData.map((item, index) => {
                    return (
                      <Stack
                        className="coins"
                        direction={"row"}
                        width={"100%"}
                        marginX={"auto"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        key={index}
                        sx={{
                          border: "3px solid #161c23",
                          padding: "5px 15px",
                          borderRadius: "5px",
                          backgroundColor: "#161c23",
                          display: "flex",
                        }}
                      >
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          gap={"10px"}
                          sx={{
                            flex: "1",
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: "#403d3a",
                              borderRadius: "50%",
                              width: "50px",
                              height: "50px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src={item.logo}
                              width={
                                item.symbol === "ETH"
                                  ? "35px"
                                  : item.symbol === "BNB"
                                  ? "30px"
                                  : "40px"
                              }
                            />
                          </div>
                          <Typography fontWeight={"bold"} color={"#a09e9d"}>
                            {item.name}
                          </Typography>
                        </Stack>

                        <Stack
                          direction={"row"}
                          gap={"5px"}
                          sx={{
                            flex: "1",
                          }}
                        >
                          <Typography fontWeight={"bold"} color={"#a09e9d"}>
                            {item.symbol}
                          </Typography>
                          <Typography fontWeight={"bold"} color={"#a09e9d"}>
                            {item.quantity}
                          </Typography>
                        </Stack>

                        <Typography
                          sx={{
                            flex: "1",
                          }}
                          fontWeight={"bold"}
                          color={"#a09e9d"}
                        >
                          USD {item.price}
                        </Typography>

                        <Stack
                          direction={"row"}
                          alignItems={"baseline"}
                          gap={"10px"}
                          sx={{
                            flex: "1",
                          }}
                        >
                          <Stack
                            direction={"row"}
                            alignItems={"center"}
                            gap={"5px"}
                            sx={{
                              cursor: "pointer",
                            }}
                            onClick={toggle}
                          >
                            <img src={arrow1} width={"16px"} height={"16px"} />
                            <Typography color={"#7979dc"} fontWeight={"bold"}>
                              RECIEVE
                            </Typography>
                          </Stack>
                          <p
                            style={{
                              color: "#222d3a",
                              fontSize: "1.6rem",
                              fontWeight: "bold",
                            }}
                          >
                            |
                          </p>

                          <Stack
                            direction={"row"}
                            alignItems={"center"}
                            gap={"5px"}
                            sx={{
                              cursor: "pointer",
                            }}
                          >
                            <img src={arrow2} width={"16px"} height={"16px"} />

                            <Typography color={"#caa276"} fontWeight={"bold"}>
                              SEND
                            </Typography>
                          </Stack>
                        </Stack>
                      </Stack>
                    );
                  })}
                </Stack>

                {/* <CoinsBox modalOpen = {modalOpen} /> */}
              </Container>
            </div>
          </div>
        </Container>
      </Stack>

      {/**  Creating Receive Modals  **/}
      <ReceiveModal isOpen={isOpen} toggle={toggle}>
        <Stack
          direction={"row"}
          maxWidth={"50%"}
          justifyContent={"space-between"}
          position={"relative"}
          right={"-340px"}
          alignItems={"center"}
        >
          <Typography color={"#fff"} fontSize={"1.7rem"}>
            Receive
          </Typography>
          <Typography
            color={"#fff"}
            variant="body1"
            fontSize={"1.3rem"}
            sx={{
              cursor: "pointer",
            }}
            onClick={toggle}
          >
            X
          </Typography>
        </Stack>

        <Stepper
          alternativeLabel
          sx={{
            position: "relative",
            marginTop: "50px",
          }}
          activeStep={activeStep}
        >
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepLabel>
                <Typography
                  color={completed[index] ? "#e19a4c" : "#fff"}
                  sx={{
                    fontWeight: "semi-bold",
                  }}
                >
                  {label}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep == 0 ? (
          <Receive1
            isEnd={isEnd}
            handleComplete={handleComplete}
            handleBack={handleBack}
          />
        ) : activeStep == 1 ? (
          <Receive2
            isEnd={isEnd}
            handleBack={handleBack}
            handleComplete={handleComplete}
          />
        ) : (
          <Receive3
            stepsCompleted={stepsCompleted}
            handleBack={handleBack}
            toggle={toggle}
          />
        )}
      </ReceiveModal>
    </>
  );
};

export default Home;
