const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;
app.use(express.json());
app.use(cors());
require("./connection");

const employeeModel = require('./model');

app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await employeeModel(req.body).save();
    res.send({ message: "Employee added" });
  } catch (error) {
    console.log(error);
  }
});

//GET Code
app.get('/get', async (req, res) => {
  console.log('Fetching all employees');
  try {
      const data = await employeeModel.find();
      res.json(data);
  } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).send('Internal Server Error');
  }
});

// Fetch employee by ID
app.get('/get/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const data = await employeeModel.findById(id);
    if (!data) {
      return res.status(404).send('Employee not found');
    }
    res.json(data);
  } catch (error) {
    console.error('Error fetching employee:', error);
    res.status(500).send('Internal Server Error');
  }
});


// Update
app.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await employeeModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json(result);
  } catch (error) {
    console.error('Error updating employee:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Delete
app.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await employeeModel.findByIdAndDelete(id);
    res.send({ message: "Employee deleted" });
  } catch (error) {
    console.error('Error deleting employee:', error);
    res.status(500).send('Internal Server Error');
  }
});


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});