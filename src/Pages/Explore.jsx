import React from "react";
import NavBar from "../Components/NavBar";
import "../styles/explore.css";

const Explore = () => {
  const a = [
    {
      wallet: "0x447c61305057716542b69338efa60924c61aca52",
      state: "rajasthan",
      amount: "200g",
      total: "4.2kg",
    },
    {
      wallet: "0x447c61305057716542b69338efa60924c61aca52",
      state: "rajasthan",
      amount: "200g",
      total: "4.2kg",
    },
    {
      wallet: "0x447c61305057716542b69338efa60924c61aca52",
      state: "rajasthan",
      amount: "200g",
      total: "4.2kg",
    },
    {
      wallet: "0x447c61305057716542b69338efa60924c61aca52",
      state: "rajasthan",
      amount: "200g",
      total: "4.2kg",
    },
  ];
  return (
    <>
      <NavBar />
      <div className="flex flex-col">
        <div className="heading flex flex-col">
          <h1 className="">Total Recycled Waste Collected</h1>
          <h2 className="">234440000 kg</h2>
          <div>
            <div className="grid-cols-3 text-red">
              <p>Per Area</p>
              <p>Revenue Generated</p>
              <p>Total Contributors</p>
            </div>
            <div className="grid-cols-3">
              <p>11kg</p>
              <p>Rs 250 crore</p>
              <p>280k</p>
            </div>
          </div>
        </div>
        <div className="recent-contributions flex flex-col">
          <div className="flex flex-col">
            <h2>Recent Contributions</h2>
            <p>Explore the current contributers in the community</p>
          </div>
          <table className="table">
            <tr>
              <th>Users</th>
              <th>State</th>
              <th>Weight</th>
              <th>Total</th>
            </tr>
            <tbody>
              {a.map((curr) => (
                <tr>
                  <td>{curr.wallet}</td>
                  <td>{curr.state}</td>
                  <td>{curr.amount}</td>
                  <td>{curr.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Explore;
