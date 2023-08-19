import { Box, Typography, Stack } from "@mui/material";
import chart from "../assets/portfolio.png";
import wallet from "../assets/wallet.png";
import transactions from "../assets/transactions.png";
import tutorials from "../assets/tutorials.png";
import settings from "../assets/settings.png";
const Sidebar = () => {
  return (
    <Box
      width={"18%"}
      position={"fixed"}
      sx={{
        backgroundColor: "#161c23",
        height: "92vh",
        left: "0px",
        bottom: "0px",
      }}
    >
      <Stack
        sx={{
          alignItems: "left",
          paddingTop: "70px",
          justifyContent: "space-between",
          height: "60%",
          textAlign: "left",
          marginLeft: "30px",
        }}
      >
        <Stack
          direction={"row"}
          gap={"1rem"}
          sx={{
            cursor: "pointer",
          }}
        >
          <img src={chart} />
          <Typography
            fontSize={"1rem"}
            textAlign={"left"}
            sx={{
              color: "#fff",
              "&:hover": {
                color: "#e2c19d",
              },
            }}
          >
            Portfolio
          </Typography>
        </Stack>
        <Stack
          sx={{
            cursor: "pointer",
            gap: "0.5rem",
          }}
        >
          <Stack direction={"row"} gap={"1rem"}>
            <img src={wallet} width={"25px"} height={"25px"} />
            <Typography
              fontSize={"1rem"}
              sx={{
                color: "#e2c19d",
              }}
            >
              Wallet
            </Typography>
          </Stack>

          <Stack
            sx={{
              marginLeft: "60px",
              gap: "3px",
            }}
          >
            <Typography
              fontSize={"0.9rem"}
              color={"#c78d4e"}
              fontWeight={"bold"}
            >
              Wallet 1
            </Typography>

            <button
              style={{
                borderStyle: "dashed",
                borderColor: "#616161",
                background: "none",
                color: "#616161",
                width: "fit-content",
                padding: "3px 15px 3px 15px",
                cursor: "pointer",
                textAlign: "center",
                textDecoration: "none",
                borderRadius: "16px",
              }}
            >
              + add wallet
            </button>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          gap={"1rem"}
          sx={{
            cursor: "pointer",
          }}
        >
          <img src={transactions} width={"25px"} height={"25px"} />
          <Typography
            fontSize={"1rem"}
            sx={{
              color: "#fff",
              "&:hover": {
                color: "#e2c19d",
              },
            }}
          >
            Last Transaction
          </Typography>
        </Stack>

        <Stack
          direction={"row"}
          gap={"1rem"}
          sx={{
            cursor: "pointer",
          }}
        >
          <img src={tutorials} width={"27px"} height={"27px"} />
          <Typography
            fontSize={"1rem"}
            sx={{
              color: "#fff",
              "&:hover": {
                color: "#e2c19d",
              },
            }}
          >
            Tutorials
          </Typography>
        </Stack>

        <Stack
          direction={"row"}
          gap={"1rem"}
          sx={{
            cursor: "pointer",
          }}
        >
          <img src={settings} width={"25px"} height={"25px"} />
          <Typography
            fontSize={"1rem"}
            sx={{
              color: "#fff",
              "&:hover": {
                color: "#e2c19d",
              },
            }}
          >
            Setting
          </Typography>
        </Stack>
      </Stack>

      <button
        style={{
          backgroundColor: "#785b3c",
          border: "none",
          color: "#e6c299",
          width: "130px",
          height: "40px",
          borderRadius: "5px",
          fontSize: "1rem",
          position: "relative",
          bottom: "-130px",
          left: "60px",
          cursor: "pointer",
        }}
      >
        Support
      </button>
    </Box>
  );
};

export default Sidebar;
