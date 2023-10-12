import Earning from "./Earning";

const Dashboard = () => {
  return (
    <section className="border border-black w-full h-full p-3 ">

      <section className="flex p-[5px] justify-between px-8">
        <Earning />
        <Earning />
        <Earning />
        <Earning />
      </section>
    </section>
  );
};

export default Dashboard;
