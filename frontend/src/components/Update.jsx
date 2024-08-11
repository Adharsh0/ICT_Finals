import { Box, Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    EmpName: "",
    designation: "",
    empId: "",
    img_url: ""
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3001/get/${id}`)
      .then((res) => setInputs(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const updateData = () => {
    axios
      .put(`http://localhost:3001/update/${id}`, inputs)
      .then((response) => {
        console.log("Data updated successfully", response);
        navigate("/"); 
      })
      .catch((error) => {
        console.error("There was an error updating the employee data!", error);
      });
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "600px",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Employee Name"
            onChange={inputHandler}
            name="EmpName"
            value={inputs.EmpName}
            fullWidth
          />
          <TextField
            variant="outlined"
            placeholder="Designation"
            onChange={inputHandler}
            name="designation"
            value={inputs.designation}
            multiline
            rows={1}
          />
          <TextField
            variant="outlined"
            placeholder="Employee Id"
            onChange={inputHandler}
            name="empId"
            value={inputs.empId}
          />
          <TextField
            variant="outlined"
            placeholder="Photo (paste any link from the browser)"
            onChange={inputHandler}
            name="img_url"
            value={inputs.img_url}
          />
          <Button variant="contained" color="secondary" onClick={updateData}>
            Update
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Update;
