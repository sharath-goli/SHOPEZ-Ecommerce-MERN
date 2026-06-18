function Login() {
  return (
    <div className="container mt-5">

      <div
        className="card shadow p-5 mx-auto"
        style={{
          maxWidth: "500px"
        }}
      >

        <h2 className="mb-4">

          Login

        </h2>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
        />

        <input
          type="password"
          className="form-control mb-4"
          placeholder="Password"
        />

        <button
          className="
          btn
          btn-success
          w-100
          "
          onClick={() =>
            alert("Login Successful")
          }
        >

          Login

        </button>

      </div>

    </div>
  );
}

export default Login;