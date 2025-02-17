import Order from "../orders/Order";
import OrderRow from "../orders/OrderRow";
import { useState, useEffect } from "react";
import { API } from "../../lib/axios-client";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";


function Admin() {


    const queryClient = useQueryClient();

    const cachedUsers = queryClient.getQueryData(["authUser"]);
    console.log('t', queryClient.getQueryCache());

    console.log(`query data`, cachedUsers)

    // const queryClient = QueryClient()

    // const products = queryClient.getQueryData(["authUser"]);

    // console.log(products)
    // const nav = useNavigate()

    // const role = "admin"

    // if(role !== "Admin"){

    //     // window.location.href = "/"

    //     nav("/")
    // }


    const [stats, setStats] = useState({
        totalOrders: 0,

        processingOrders: 0,
        processingOrders: 0,
        deliveredOrders: 0,
    });





    const [ordersData, setOrdersData] = useState(null);

    const [newProduct, setNewProduct] = useState({
        title: "",
        price: "",
        discount: 0,
        tag: "",
        flashSale: false,
        status: "Show",
        children: "",
        description: "",
        image: "",
        originalPrice: 0,
        parent: "",
        quantity: "",
        slug: "",
        type: "",
        unit: "",
        sku: "",
    });

    // Modal state
    const [showModal, setShowModal] = useState(false);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [productTitle, setProductTitle] = useState('');


    const openDeleteModal = () => {

        // setProductTitle(product.title);
        setIsDeleteModalOpen(true);
    };

    // Close the delete modal
    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setProductTitle('');
    };
    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchOrders = async () => {
            try {
                const response = await API.get("/admin/orders");



                if (response.data) {
                    setStats({

                        totalOrders: response.data.data.totalOrders,
                        totalRevenue: response.data.data.totalRevenue,
                        processingOrders: response.data.data.processingOrders,
                        deliveredOrders: response.data.data.deliveredOrders,
                    });

                    console.log(response.data.data.orders)

                    setOrdersData(response.data.data.orders);
                } else {
                    throw new Error("Invalid API response format");
                }
            } catch (error) {
                console.error("Fetch error:", error.response?.data || error);

            } finally {
                // console.log('aaaa', ordersData)

                //   setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNewProduct((prevProduct) => ({
            ...prevProduct,
            [name]: ["price", "discount", "originalPrice", "quantity"].includes(name)
                ? Number(value) || 0 // Convert to number, fallback to 0 if NaN
                : value
        }));
    };

    const handleTagChange = (e) => {
        setNewProduct({ ...newProduct, tag: e.target.value.split(",").map(tag => tag.trim()) });
    };

    // Handle product submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await API.post("/product/create", newProduct);
            console.log("Product added:", response.data);

            setShowModal(false); // Close the modal
            setNewProduct({
                title: "",
                price: 0,
                discount: 0,
                tag: "",
                flashSale: false,
                status: "Show",
                children: "",
                description: "",
                image: "",
                originalPrice: 0,
                parent: "",
                quantity: 0,
                slug: "",
                type: "",
                unit: "",
                sku: "",
            });

            console.log(`sks`, newProduct)

            alert("Product added successfully!");
        } catch (error) {
            console.error("Error adding product:", error.response?.data || error);
        }
    };

    const handleDeleteProduct = async () => {
        const pro = document.getElementById('deleteProduct').value

        console.log('delete product called')
        try {


            await API.post(`/product/delete`, {
                title: pro
            });
            // fetchProducts();
            console.log('Product Deleted')
            setIsDeleteModalOpen(false);
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };


    return (
        <>
            <div class="container-wrapper">
                <div class="container mx-5 py-6">
                    <section class="overflow-hidden rounded-[0.5rem] border bg-background shadow">
                        <div class="flex items-center justify-between space-y-2 pt-5">
                            <h2 class="text-3xl font-bold tracking-tight pl-5">Dashboard</h2>
                            <div class="flex items-center space-x-2 mr-6">
                                <div class="grid gap-2">
                                    {/* Bootstrap Modal */}
                                    <button
                                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-blue-500 text-white shadow hover:bg-blue-500 h-9 px-4 py-2"
                                        onClick={() => setShowModal(true)}>
                                        Add  Product
                                    </button>
                                    {showModal && (
                                        <div className="modal fade show d-block" tabIndex="-1" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                                            <div className="modal-dialog modal-xl modal-dialog-centered">
                                                <div className="modal-content p-4">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title">Add New Product</h5>
                                                        {/* <button type="button" className="btn-close" onClick={onClose}></button> */}
                                                    </div>

                                                    <div className="modal-body">
                                                        <form onSubmit={handleSubmit}>

                                                            {/* Row 1 */}
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <input type="text" name="title" placeholder="Product Title" value={newProduct.title} onChange={handleInputChange} className="form-control mb-3" required />
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleInputChange} className="form-control mb-3" required />
                                                                </div>
                                                            </div>

                                                            {/* Row 2 */}
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <input type="number" name="originalPrice" placeholder="Original Price" value={newProduct.originalPrice} onChange={handleInputChange} className="form-control mb-3" required />
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <input type="number" name="discount" placeholder="Discount %" value={newProduct.discount} onChange={handleInputChange} className="form-control mb-3" />
                                                                </div>
                                                            </div>

                                                            {/* Row 3 */}
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <input type="text" name="slug" placeholder="Slug" value={newProduct.slug} onChange={handleInputChange} className="form-control mb-3" required />
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <input type="text" name="sku" placeholder="SKU" value={newProduct.sku} onChange={handleInputChange} className="form-control mb-3" />
                                                                </div>
                                                            </div>

                                                            {/* Row 4 */}
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <input type="text" name="parent" placeholder="Parent Category" value={newProduct.parent} onChange={handleInputChange} className="form-control mb-3" required />
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <input type="text" name="children" placeholder="Subcategory" value={newProduct.children} onChange={handleInputChange} className="form-control mb-3" required />
                                                                </div>
                                                            </div>

                                                            {/* Row 5 */}
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <input type="text" name="type" placeholder="Product Type" value={newProduct.type} onChange={handleInputChange} className="form-control mb-3" required />
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <input type="text" name="unit" placeholder="Unit (e.g., kg, pcs)" value={newProduct.unit} onChange={handleInputChange} className="form-control mb-3" />
                                                                </div>
                                                            </div>

                                                            {/* Row 6 */}
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <input type="number" name="quantity" placeholder="Stock Quantity" value={newProduct.quantity} onChange={handleInputChange} className="form-control mb-3" required />
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <input type="text" name="image" placeholder="Image URL" value={newProduct.image} onChange={handleInputChange} className="form-control mb-3" required />
                                                                </div>
                                                            </div>

                                                            {/* Tags */}
                                                            <input
                                                                type="text"
                                                                name="tag"
                                                                placeholder="Tags (comma-separated)"
                                                                value={Array.isArray(newProduct.tag) ? newProduct.tag.join(", ") : ""}
                                                                onChange={handleTagChange}
                                                                className="form-control mb-3"
                                                                required
                                                            />


                                                            {/* Description */}
                                                            <textarea name="description" placeholder="Description" value={newProduct.description} onChange={handleInputChange} className="form-control mb-3" rows="3"></textarea>

                                                            {/* Status & Flash Sale */}
                                                            <div className="d-flex justify-content-between mb-3">
                                                                <select name="status" value={newProduct.status} onChange={handleInputChange} className="form-select w-50">
                                                                    <option value="Show">Show</option>
                                                                    <option value="Hide">Hide</option>
                                                                </select>

                                                                <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input" id="flashSale" name="flashSale" checked={newProduct.flashSale} onChange={handleInputChange} />
                                                                    <label className="form-check-label" htmlFor="flashSale">Flash Sale</label>
                                                                </div>
                                                            </div>

                                                            {/* Submit Button */}
                                                            <div className="text-end">
                                                                <button type="submit" className="btn btn-primary">Add Product</button>
                                                            </div>

                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                </div>
                                <button
                                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-red-600 text-white shadow hover:bg-red-700 h-9 px-4 py-2"
                                    onClick={() => openDeleteModal(true)}>
                                    Delete Product
                                </button>

                                {isDeleteModalOpen && (
                                    <div className="modal show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="deleteModalLabel">Delete Product</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeDeleteModal}></button>
                                                </div>
                                                <div className="modal-body">
                                                    <p>Are you sure you want to delete the product: </p>
                                                    <input
                                                        type="text"
                                                        placeholder="strawberrie"
                                                        id="deleteProduct"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" onClick={closeDeleteModal}>Cancel</button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger"
                                                        onClick={handleDeleteProduct}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

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
                                        <div class="text-2xl font-bold"><i class="bi bi-currency-dollar"></i>{stats.totalRevenue} </div>
                                        <p class="text-xs text-muted-foreground">+20.1% from last month</p>
                                    </div>
                                </div>
                                <div class="rounded-xl border bg-card text-card-foreground shadow">
                                    <div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                                        <div class="tracking-tight text-sm font-medium">Total Orders</div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-4 w-4 text-muted-foreground">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                    </div>
                                    <div class="p-6 pt-0">
                                        <div class="text-2xl font-bold">+{stats.totalOrders}</div>
                                        <p class="text-xs text-muted-foreground">+180.1% from last month</p>
                                    </div>
                                </div>
                                <div class="rounded-xl border bg-card text-card-foreground shadow">
                                    <div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                                        <div class="tracking-tight text-sm font-medium">Processing</div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-4 w-4 text-muted-foreground">
                                            <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                                            <path d="M2 10h20"></path>
                                        </svg>
                                    </div>
                                    <div class="p-6 pt-0">
                                        <div class="text-2xl font-bold">+{stats.processingOrders}</div>
                                        <p class="text-xs text-muted-foreground">+19% from last month</p>
                                    </div>
                                </div>
                                <div class="rounded-xl border bg-card text-card-foreground shadow">
                                    <div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                                        <div class="tracking-tight text-sm font-medium">Completed Orders</div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-4 w-4 text-muted-foreground">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <div class="p-6 pt-0">
                                        <div class="text-2xl font-bold">+{stats.deliveredOrders}</div>
                                        <p class="text-xs text-muted-foreground">+201 since last hour</p>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="mx-4">
                            <h4 class="my-4">Recent Orders</h4>


                            <div>






                                {ordersData ? (
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    <i className="bi bi-person"></i> Customer Name
                                                </th>
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
                                                <th scope="col">
                                                    <i className="bi bi-pencil-square"></i> Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {ordersData.map((order) => (
                                                <OrderRow key={order.orderId} data={order} />
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <p>Loading orders...</p>
                                )}
                            </div>
                        </div>


                    </section>
                </div>
            </div>

        </>
    );
}
export default Admin