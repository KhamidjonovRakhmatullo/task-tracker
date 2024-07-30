import React, { useEffect, useState } from "react";
import { AppBox, AppContainer, NeedTodo, Title } from "./appStyle";
import AddModal from "./addModal";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import {
  ButtonWrapper,
  ModalTitle,
  StyledButton,
  StyledInput,
} from "./appStyle";

const App = () => {
  const [open, setOpen] = React.useState(false);

  const [toDoList, setTodoList] = useState("");

  useEffect(() => {
    fetch("")
      .then((response) => response.json())
      .then((json) => setTodoList(json));
  }, []);

  return (
    <AppContainer>
      <AppBox>
        <Title>
          <h3>Task Tracker</h3>
          <AddModal />
        </Title>
        {Array.isArray(toDoList) && toDoList.map((item)=>
        <NeedTodo>
           {/* {item.name} */}
           This is my task
          <div style={{display: "flex", alignItems: "center"}}>
            <input type="checkbox" name="" id="" />
            <React.Fragment>
              <MoreVertIcon
                onClick={() => setOpen(true)}
                style={{ color: "#BFBAE3", cursor: "pointer" }}
              />
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
                    width: "38%",
                  }}
                >
                  <ModalClose variant="plain" sx={{ m: 1, color: "#6053B9" }} />
                  <Typography id="modal-title" mb={1}>
                    <ModalTitle>Edit task</ModalTitle>
                  </Typography>
                  <form action="" method="">
                    <StyledInput
                      type="text"
                      placeholder="New task..."
                      name="edit-task"
                      id=""
                    />
                    <ButtonWrapper>
                      <StyledButton type="submit">Set Edit</StyledButton>
                    </ButtonWrapper>
                  </form>
                </Sheet>
              </Modal>
            </React.Fragment>
          </div>
        </NeedTodo>
        )}
      </AppBox>
    </AppContainer>
  );
};

export default App;
