import { ReactNode } from "react";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

import { Box } from "@mui/material";
const ReceiveModal = (props: ModalType) => {
  return (
    <>
      {props.isOpen && (
        <Box
          width={"100%"}
          height={"120vh"}
          sx={{
            zIndex: 9999,
            position: "absolute",
            top: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(0, 0, 0, 0.5)",
          }}
          onClick={props.toggle}
        >
          <Box
            sx={{
              display: "block",
              backgroundColor: "#131619",
              width: "800px",
              height: "650px",
              padding: "1rem",
              position: "relative",
              top: "-70px",
              borderRadius: "7px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {props.children}
          </Box>
        </Box>
      )}
    </>
  );
};

export default ReceiveModal;
