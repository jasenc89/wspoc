import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="py-16 bg-black text-white h-screen">
      <h1 className="text-center text-xl font-bold">Web Socket Demo</h1>
      <div className="flex items-center justify-center py-12">
        <h2>Data Output</h2>
      </div>
    </div>
  );
};

export default Home;
