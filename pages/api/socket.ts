import type { NextApiRequest, NextApiResponse } from "next";
import { Server } from "socket.io";

type Data = {
  name: string;
};

const SocketHandler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const generateDataPoints = (max: number) => {
    const dataPoints: number[] = [];
    for (let i = 0; i < max; i++) {
      dataPoints.push(Math.floor(Math.random() * (180 - 60) + 180));
    }
    return dataPoints;
  };

  // Check if socket is running, if not then open socket connection
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      socket.emit("hello", generateDataPoints(300));
    });
  }

  res.end();
};

export default SocketHandler;
