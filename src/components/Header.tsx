import { AppBar } from "@mui/material";
import logo from "../assets/logo_full.svg";

const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#0e1722",
        height: "8vh",
        width: "full",
        justifyContent: "center",
        alignItems: "start",
        padding:'10px'
      }}
    >
      <img src={logo} />
    </AppBar>
  );
};

export default Header;
