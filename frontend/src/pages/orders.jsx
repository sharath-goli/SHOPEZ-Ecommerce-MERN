function Orders() {
return (

<div className="container mt-5">

<h1>

My Orders

</h1>

<div className="card p-4 shadow mt-4">

<h4>

Order #1001

</h4>

<p>

iPhone 16

</p>

<p>

Status:
<span className="text-success">

 Delivered

</span>

</p>

</div>

<div className="card p-4 shadow mt-3">

<h4>

Order #1002

</h4>

<p>

Nike Shoes

</p>

<p>

Status:
<span className="text-warning">

 Processing

</span>

</p>

</div>

</div>

);
}

export default Orders;