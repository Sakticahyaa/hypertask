import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Textbox from "../components/Textbox";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import backgroundImage from "../pngs/christina-wocintechchat-com-KAULAzQwxzE-unsplash 1@2x.png";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  // Redirect if already logged in
  useEffect(() => {
    if (user?.isLoggedIn) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const onSubmit = (data) => {
    console.log("Login Data: ", data);
    // Add authentication logic here
    navigate("/dashboard");
  };

  return (
    
    <div style={{ 
      display: "flex", 
      height: "100vh", 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center" 
    }}>
        <div style={{
            width: "100%",
            height: "60px",
            backgroundColor: "#333", // Dark background for the bar
            display: "flex",
            alignItems: "center",
            paddingLeft: "20px",
            color: "#00F5D0", // Text color to match the design
            fontSize: "1.5rem",
            fontWeight: "bold",
            position: "fixed", // Makes the bar stay at the top
            top: 0, // Ensure it sticks to the top
            zIndex: 10 // Ensures it stays above other content
        }}>
            Analytics
        </div>


        <div style={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            padding: "100px",
            paddingTop: "160px", // Adjust to account for the height of the fixed bar
            background: "rgba(0, 0, 0, 0)",
            color: "white"
        }}>
            <div style={{ textAlign: "left" }}>
                <h1 style={{ fontSize: "4rem", fontWeight: 700, marginBottom: "10px" }}>
                    Plan, Strategize, Execute
                </h1>
                <p style={{ fontSize: "2rem", marginBottom: "10px" }}>
                    Your everyday project companion.
                </p>
            </div>
        </div>

    <div style={{flex: 1, display: "flex", justifyContent: "center", alignItems: "center",backgroundColor: "transparent"}}>
        <form 
            onSubmit={handleSubmit(onSubmit)} 
            style={{ 
            width: "100%", 
            maxWidth: "600px", 
            padding: "30px",  
            backgroundColor: "white", 
            borderRadius: "8px", 
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            height: "500px"
            }}
        >
            <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "2rem" , fontWeight: "bold"}}>
            Sign-in
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
            label="Password"
            name="password"
            placeholder="Password"
            register={register("password", { required: true })}
            type="password"
            className="w-full"
            />


            <div style={{ 
            textAlign: "center", // Center align both buttons
            marginTop: "20px"
            }}>
            <Button 
                type="submit" 
                label="Login" 
                className="w-full py-4 text-xl text-black bg-[#00F5D0] hover:bg-[#00d1b2]" // Text size increased to `text-xl`
            />
            </div>

            <div style={{ textAlign: "left", marginTop: "10px" }}>
            <p>Don't have an account yet?</p>
            </div>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button
                type="button"
                label="Sign-up"
                className="w-full py-4 text-xl text-black border border-[#00F5D0] hover:bg-[#00F5D0]" // Text size increased to `text-xl`
                onClick={() => navigate("/signup")}
            />
            </div>

        </form>
        </div>
    </div>
  );
};

export default Login;