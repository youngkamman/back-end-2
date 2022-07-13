const express = require("express");
const cors = require("cors");
const{getHouses,deleteHouse,createHouse,updateHouse} = require("./controller");

const app = express();

app.use(express.json());
app.use(cors());



app.get(`/api/houses`,getHouses);
app.post(`/api/houses`, createHouse);
app.delete(`/api/houses/:id`,deleteHouse) ;
app.put(`/api/houses/:id`,updateHouse);

const server_port = 4004
app.listen(server_port,() => console.log(`server runnin on ${server_port}`));
