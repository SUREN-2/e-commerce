import React, { useEffect, useState } from "react";
import Table from "../table/Table";
import { API } from "../../lib/axios-client";
import OrderRow from "../orders/userOrder";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalOrders: 0,
    pendingOrders: 0,
    processingOrders: 0,
    deliveredOrders: 0,
  });

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchOrders = async () => {
      try {
        const response = await API.get("/order/userorders");

        console.log(`kdsaksa`,response.data.data)

        if (response.data) {
          setStats({
            totalOrders: response.data.data.totalOrders,
            pendingOrders: response.data.data.pendingOrders,
            processingOrders: response.data.data.processingOrders,
            deliveredOrders: response.data.data.deliveredOrders,
          });

          setOrders(response.data.data.orders);
        } else {
          throw new Error("Invalid API response format");
        }
      } catch (error) {
        console.error("Fetch error:", error.response?.data || error);
        setError(error.response?.data?.message || "Failed to fetch orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="overflow-hidden">
      <h2 className="text-xl text-black font-semibold mb-5">Dashboard</h2>
      {console.log('stats', stats)}

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <div className="grid gap-4 mb-8 md:grid-cols-2 xl:grid-cols-4">
          <DashboardCard title="Total Orders" value={stats.totalOrders} color="red" icon="cart" />
          <DashboardCard title="Pending Orders" value={stats.pendingOrders} color="orange" icon="clock" />
          <DashboardCard title="Processing Orders" value={stats.processingOrders} color="indigo" icon="truck" />
          <DashboardCard title="Completed Orders" value={stats.deliveredOrders} color="green" icon="check" />
        </div>
      )}

      <div>






        {orders ? (
          <table className="table">
            <thead>
              <tr>
                
                <th scope="col">
                  <i className="bi bi-list-ul"></i> Order Id
                </th>
                <th scope="col">
                  <i className="bi bi-calendar"></i> Order Date
                </th>
                <th scope="col">
                  <i className="bi bi-calendar-check"></i> Shipping
                </th>
                <th scope="col">
                  <i className="bi bi-cash"></i> Payment
                </th>
                <th scope="col">
                  <i className="bi bi-currency-rupee"></i> Amount
                </th>
                <th scope="col">
                  <i className="bi bi-three-dots"></i> Status
                </th>

              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <OrderRow key={order.orderId} data={order} />
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading orders...</p>
        )}
      </div>


{/* 
      <Table title="Recent Orders" data={orders} /> */}
    </div>
  );
};

const DashboardCard = ({ title, value, color, icon }) => {
  const colorMap = {
    red: "text-red-600 bg-red-200",
    orange: "text-orange-600 bg-orange-200",
    indigo: "text-indigo-600 bg-indigo-200",
    green: "text-emerald-600 bg-emerald-200",
  };

  const icons = {
    cart: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
    ),
    clock: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <polyline points="23 4 23 10 17 10"></polyline>
        <polyline points="1 20 1 14 7 14"></polyline>
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
      </svg>
    ),
    truck: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
      </svg>
    ),
    check: (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    ),
  };

  return (
    <div className="flex h-full">
      <div className="flex items-center border border-gray-200 w-full rounded-lg p-4">
        <div className={`flex items-center justify-center p-3 rounded-full h-12 w-12 text-xl text-center mr-4 ${colorMap[color]}`}>
          {icons[icon]}
        </div>
        <div>
          <h5 className="leading-none mb-2 text-base font-medium text-gray-700">{title}</h5>
          <p className="text-xl font-bold leading-none text-gray-800">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
