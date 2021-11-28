import React from "react";
import NavBar from "../Components/NavBar";
import "./explore.css";

const Explore = () => {
  const a = [1, 2, 3, 4];
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
              {a.map(() => (
                <tr>
                  <td>0xasdfasf324235df</td>
                  <td>Rajasthan</td>
                  <td>200g</td>
                  <td>4.2kg</td>
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
