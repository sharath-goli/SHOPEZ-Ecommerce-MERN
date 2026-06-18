import Footer from "../components/Footer";

import Hero from "../components/Hero";

const products = [
{
name:"iPhone 16",
price:"₹79,999",
image:
"https://images.unsplash.com/photo-1592750475338-74b7b21085ab"
},

{
name:"Nike Shoes",
price:"₹4,999",
image:
"https://images.unsplash.com/photo-1542291026-7eec264c27ff"
},

{
name:"MacBook Pro",
price:"₹1,49,999",
image:
"https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
}
];

export default function Home(){

return(

<>


<Hero/>

<div className="container mt-5">

<div className="mb-5">

<h2 className="fw-bold">

🔥 Trending Products

</h2>

<p className="text-secondary">

Discover our most popular picks

</p>

</div>

<div className="row mb-5">

<div className="col">

<div className="row mb-5">

<div className="col">

<button
className="btn btn-dark me-2"
>

All

</button>

<button
className="btn btn-outline-dark me-2"
onClick={()=>
window.scrollTo({
top:700,
behavior:"smooth"
})
}
>

Electronics

</button>

<button
className="btn btn-outline-dark me-2"
onClick={()=>
window.scrollTo({
top:900,
behavior:"smooth"
})
}
>

Fashion

</button>

<button
className="btn btn-outline-dark"
onClick={()=>
window.scrollTo({
top:1100,
behavior:"smooth"
})
}
>

Premium

</button>

</div>

</div>

</div>

</div>

<div className="row">

{

products.map(

(

product,

index

)=>(

<div
key={index}
className="
col-md-4
mb-4
"
>

<div
className="
card
shadow
h-100
border-0
"
style={{
borderRadius:"18px",
transition:"0.3s"
}}
>

<img

src={product.image}

height="280"

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
mb-3
"
>

{product.price}

</h5>

<a
href="/products"
className="
btn
btn-warning
w-100
fw-bold
"
>

Shop Now

</a>

</div>

</div>

</div>

)

)

}

</div>

</div>

<Footer/>

</>

);

}