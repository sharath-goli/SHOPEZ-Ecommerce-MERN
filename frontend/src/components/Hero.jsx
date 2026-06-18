export default function Hero() {
  return (
    <div className="container mt-4">

      <div
        className="card border-0 overflow-hidden shadow-lg"
        style={{
          borderRadius: "20px"
        }}
      >

        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
          alt="banner"
          height="500"
          style={{
            width: "100%",
            objectFit: "cover"
          }}
        />

        <div
          className="
          card-img-overlay
          d-flex
          align-items-center
          bg-dark
          bg-opacity-50
          "
        >

          <div className="ms-5">

            <h1 className="text-warning fw-bold display-2">
              SHOP SMART
            </h1>

            <p className="text-light fs-3">
              Premium Shopping Experience
            </p>

            <a
              href="/products"
              className="btn btn-warning btn-lg"
            >
              Shop Now
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}