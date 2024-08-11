import { useEffect, useState } from "react";
import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching data');
        setLoading(false);
        console.error('Error fetching data:', err);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/delete/${id}`);
      setData(data.filter((item) => item._id !== id));
    } catch (err) {
      console.error('Error deleting item:', err);
    }
  };

  const handleUpdate = (id) => {
    // Implement update functionality, maybe redirect to an update form/page
    console.log('Update item with id:', id);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="Mar">
      <Grid container spacing={6}>
        {data.map((val) => (
          <Grid item xs={12} sm={6} md={4} key={val._id}>
            <Card sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent>
                <img src={val.img_url} className="img-fluid rounded-start" width="100%" alt="image" />
                <Typography gutterBottom variant="h5">
                  {val.EmpName}
                </Typography>
                <Typography component="div">{val.designation}</Typography>
                <Typography component="div">{val.empId}</Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  onClick={() => handleDelete(val._id)}
                >
                  Delete
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  onClick={() => handleUpdate(val._id)}
                >
                  Update
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;

