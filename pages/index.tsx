import type { NextPage } from "next";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const Home: NextPage = () => {
  const [mockData, setMockData] = useState<any[]>([]);
  const socket = io();

  const socketInitializer = async () => {
    await fetch("/api/socket");
    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("hello", (socketResponse) => {
      setMockData(socketResponse);
    });
  };

  useEffect(() => {
    socketInitializer();
  }, []);

  return (
    <div className="py-16 bg-black text-white h-screen">
      <h1 className="text-center text-xl font-bold">Web Socket Demo</h1>
      <div className="flex flex-col gap-8 items-center justify-center py-12">
        <h2>Data Output</h2>
      </div>
    </div>
  );
};

export default Home;
