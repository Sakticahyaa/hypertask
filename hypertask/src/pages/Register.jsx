import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Textbox from "../components/Textbox";
import Button from "../components/Button";
import backgroundImage from "../pngs/christina-wocintechchat-com-KAULAzQwxzE-unsplash 1@2x.png";
import { useRegisterMutation } from "../redux/slices/api/authApiSlice";
import { toast } from "react-toastify";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterMutation();

  const onSubmit = async (data) => {
    try {
      const result = await registerUser(data).unwrap(); // Make API call
      toast.success("Registration successful! Redirecting to dashboard...");
      console.log("Registered user: ", result);
      navigate("/dashboard");
    } catch (error) {
      console.error("Registration error: ", error);
      toast.error(error?.data?.message || "Registration failed!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          width: "100%",
          height: "60px",
          backgroundColor: "#333",
          display: "flex",
          alignItems: "center",
          paddingLeft: "20px",
          color: "#00F5D0",
          fontSize: "1.5rem",
          fontWeight: "bold",
          position: "fixed",
          top: 0,
          zIndex: 10,
        }}
      >
        Analytics
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          padding: "100px",
          paddingTop: "160px",
          background: "rgba(0, 0, 0, 0)",
          color: "white",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <h1 style={{ fontSize: "4rem", fontWeight: 700, marginBottom: "10px" }}>
            Plan, Strategize, Execute
          </h1>
          <p style={{ fontSize: "2rem", marginBottom: "10px" }}>
            Your everyday project companion.
          </p>
        </div>
      </div>

      {/* Registration Form */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            width: "100%",
            maxWidth: "600px",
            padding: "30px",
            backgroundColor: "white",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            height: "800px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            Sign-up
          </h2>

          <Textbox
            label="Email"
            name="email"
            placeholder="Email"
            register={register("email", { required: true })}
            type="email"
            className="w-full mb-4"
          />

          <Textbox
            label="Name"
            name="name"
            placeholder="Name"
            register={register("name", { required: true })}
            type="text"
            className="w-full mb-4"
          />

          <Textbox
            label="Division"
            name="division"
            placeholder="Division"
            register={register("division", { required: true })}
            type="text"
            className="w-full mb-4"
          />

          <Textbox
            label="Position"
            name="position"
            placeholder="Position"
            register={register("position", { required: true })}
            type="text"
            className="w-full mb-4"
          />

          <Textbox
            label="Password"
            name="password"
            placeholder="Password"
            register={register("password", { required: true })}
            type="password"
            className="w-full mb-4"
          />

          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            <Button
              type="submit"
              label={isLoading ? "Registering..." : "Register"}
              disabled={isLoading}
              className="w-full py-4 text-xl text-black bg-[#00F5D0] hover:bg-[#00d1b2]"
            />
          </div>

          <div style={{ textAlign: "left", marginTop: "15px" }}>
            <p>Already have an account?</p>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "15px",
            }}
          >
            <Button
              type="button"
              label="Sign-in"
              className="w-full py-4 text-xl text-black border border-[#00F5D0] hover:bg-[#00F5D0]"
              onClick={() => navigate("/login")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
