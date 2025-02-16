import Order from "../orders/Order";
import OrderRow from "../orders/OrderRow";


function Admin() {

    const orders = [{
        customerName: "John Doe",
        oid: "ORD12345",
        orderDate: "2025-02-15",
        deliveryDate: "2025-02-20",
        payment: "Paid",
        amt: "1500",
        status: "Shipped"
      }];
      
    return (
        <>
            <div class="container-wrapper">
                <div class="container mx-5 py-6">
                    <section class="overflow-hidden rounded-[0.5rem] border bg-background shadow">
                        <div class="flex items-center justify-between space-y-2 pt-5">
                            <h2 class="text-3xl font-bold tracking-tight pl-5">Dashboard</h2>
                            <div class="flex items-center space-x-2">
                                <div class="grid gap-2">
                                    {/* <button
                class="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-[260px] justify-start text-left font-normal"
                id="date"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:r35g:"
                data-state="closed"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-calendar mr-2 h-4 w-4"
                >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                </svg>
                Jan 20, 2023 - Feb 09, 2023
            </button> */}
                                </div>
                                {/* <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
        >
            Download
        </button> */}
                            </div>

                        </div>


                        <div className="space-y-5 mt-5 mx-4">
                            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                <div class="rounded-xl border bg-card text-card-foreground shadow">
                                    <div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                                        <div class="tracking-tight text-sm font-medium">Total Revenue</div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-4 w-4 text-muted-foreground">
                                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                        </svg>
                                    </div>
                                    <div class="p-6 pt-0">
                                        <div class="text-2xl font-bold">$45,231.89</div>
                                        <p class="text-xs text-muted-foreground">+20.1% from last month</p>
                                    </div>
                                </div>
                                <div class="rounded-xl border bg-card text-card-foreground shadow">
                                    <div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                                        <div class="tracking-tight text-sm font-medium">Subscriptions</div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-4 w-4 text-muted-foreground">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                    </div>
                                    <div class="p-6 pt-0">
                                        <div class="text-2xl font-bold">+2350</div>
                                        <p class="text-xs text-muted-foreground">+180.1% from last month</p>
                                    </div>
                                </div>
                                <div class="rounded-xl border bg-card text-card-foreground shadow">
                                    <div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                                        <div class="tracking-tight text-sm font-medium">Sales</div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-4 w-4 text-muted-foreground">
                                            <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                                            <path d="M2 10h20"></path>
                                        </svg>
                                    </div>
                                    <div class="p-6 pt-0">
                                        <div class="text-2xl font-bold">+12,234</div>
                                        <p class="text-xs text-muted-foreground">+19% from last month</p>
                                    </div>
                                </div>
                                <div class="rounded-xl border bg-card text-card-foreground shadow">
                                    <div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                                        <div class="tracking-tight text-sm font-medium">Active Now</div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-4 w-4 text-muted-foreground">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <div class="p-6 pt-0">
                                        <div class="text-2xl font-bold">+573</div>
                                        <p class="text-xs text-muted-foreground">+201 since last hour</p>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="mx-4">
                            <h4 class="my-4">Recent Orders</h4>


                            <div>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col"><i class="bi bi-person"></i> Customer Name</th>
                                            <th scope="col"><i class="bi bi-list-ul"></i> Order Id</th>
                                            <th scope="col"><i class="bi bi-calendar"></i> Order Date</th>
                                            <th scope="col"><i class="bi bi-calendar-check"></i> Delivery Date</th>
                                            <th scope="col"><i class="bi bi-cash"></i> Payment</th>
                                            <th scope="col"><i class="bi bi-currency-rupee"></i> Amount</th>
                                            <th scope="col"><i class="bi bi-three-dots"></i> Status</th>
                                            <th scope="col"><i class="bi bi-pencil-square"></i> Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map((order) => (
                                            <OrderRow key={order.oid} data={order} />
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                        </div>


                    </section>
                </div>
            </div>

        </>
    );
}
export default Admin