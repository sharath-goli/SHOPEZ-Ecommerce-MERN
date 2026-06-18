const products = [

{id:1,name:"iPhone 16",price:"₹79,999",image:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab"},
{id:2,name:"Nike Air",price:"₹4,999",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"},
{id:3,name:"MacBook Pro",price:"₹1,49,999",image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853"},
{id:4,name:"Headphones",price:"₹7,999",image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e"},
{id:5,name:"Smart Watch",price:"₹14,999",image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30"},
{id:6,name:"Gaming Keyboard",price:"₹3,999",image:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"},
{id:7,name:"iPad",price:"₹59,999",image:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0"},
{id:8,name:"Sony Camera",price:"₹89,999",image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32"},
{id:9,name:"Monitor",price:"₹24,999",image:"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf"},
{id:10,name:"Gaming Mouse",price:"₹2,999",image:"https://images.unsplash.com/photo-1527814050087-3793815479db"},
{id:11,name:"Samsung S25",price:"₹84,999",image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"},
{id:12,name:"Bluetooth Speaker",price:"₹6,999",image:"https://images.unsplash.com/photo-1545454675-3531b543be5d"},
{id:13,name:"Leather Bag",price:"₹8,999",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"},
{id:14,name:"Office Chair",price:"₹11,999",image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"},
{id:15,name:"Table Lamp",price:"₹1,999",image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c"},
{id:16,name:"Gaming Chair",price:"₹19,999",image:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7"},
{id:17,name:"TV",price:"₹69,999",image:"https://images.unsplash.com/photo-1593784991095-a205069470b6"},
{id:18,name:"Sneakers",price:"₹5,999",image:"https://images.unsplash.com/photo-1549298916-b41d501d3772"},
{id:19,name:"Tablet",price:"₹34,999",image:"https://images.unsplash.com/photo-1561154464-82e9adf32764"},
{id:20,name:"Backpack",price:"₹3,499",image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62"},
{id:21,name:"Drone",price:"₹49,999",image:"https://images.unsplash.com/photo-1473968512647-3e447244af8f"},
{id:22,name:"Smart Glasses",price:"₹12,999",image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083"},
{id:23,name:"Mechanical Keyboard",price:"₹8,999",image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97"},
{id:24,name:"Power Bank",price:"₹2,499",image:"https://images.unsplash.com/photo-1585338447937-7082f8fc763d"},
{id:25,name:"Router",price:"₹4,999",image:"https://images.unsplash.com/photo-1544197150-b99a580bb7a8"},
{id:26,name:"Smart TV",price:"₹94,999",image:"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1"},
{id:27,name:"Coffee Machine",price:"₹15,999",image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"},
{id:28,name:"AirPods",price:"₹18,999",image:"https://images.unsplash.com/photo-1600294037681-c80b4cb5b434"},
{id:29,name:"VR Headset",price:"₹39,999",image:"https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac"},
{id:30,name:"Desk Setup",price:"₹29,999",image:"https://images.unsplash.com/photo-1496171367470-9ed9a91ea931"}

];

export default function Products(){

return(

<div className="container mt-5">

<h1
className="
fw-bold
mb-4
"
>

Products

</h1>

<div className="row">

{

products.map(

(product)=>(

<div
key={product.id}
className="
col-md-4
mb-4
"
>

<div
className="
card
shadow
border-0
h-100
"
style={{

borderRadius:"18px"

}}
>

<img

src={product.image}

height="260"

style={{

objectFit:"cover"

}}

className="card-img-top"

/>

<div
className="
card-body
text-center
"
>

<h4>

{product.name}

</h4>

<h5
className="
text-danger
fw-bold
"
>

{product.price}

</h5>

<button
className="
btn
btn-warning
w-100
"

onClick={() => {

alert(
`${product.name} added to cart`
);

}}

>

Add To Cart

</button>

</div>

</div>

</div>

)

)

}

</div>

</div>

);

}