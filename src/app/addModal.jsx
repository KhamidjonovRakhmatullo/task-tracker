import * as React from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { ButtonWrapper, ModalTitle, StyledButton, StyledInput, Text } from "./appStyle";

export default function AddModal() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="neutral"
        onClick={() => setOpen(true)}
        style={{ color: "#6053b9" }}
      >
        <Text>Add</Text>
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          paddingTop: "10%",
          border: "1px solid #6053b9",
          transform: "scale(1.05)",
          transition: "2.5s ease",
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
            width: "38%"
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1, color:"#6053B9" }} />
          <Typography
            id="modal-title"
            mb={1}
          >
            <ModalTitle>Add new task</ModalTitle>
          </Typography>
          <form action="/add" method="POST">
          <StyledInput type="text" placeholder="Your task..." name="task" id="" />
          <ButtonWrapper>
             <StyledButton type="submit">
                Save
             </StyledButton>
          </ButtonWrapper>
          </form>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
