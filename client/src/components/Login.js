import React, { useState } from "react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [inpVal, setInpVal] = useState({
        email: "",
        password: "",
    });

    const setVal = (e) => {
        const { name, value } = e.target;
        setInpVal({
            ...inpVal,
            [name]: value
        });
    };


    const handlePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = inpVal;
        if (email === "") {
            alert("email is required!")
        } else if (!email.includes("@")) {
            alert("include @ in your email")
        } else if (password === "") {
            alert("enter your password")
        } else if (password.length < 6) {
            alert("password must be 6 char")
        }else{
            const data = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                     email, password
                })
            });
            const res = await data.json()
            if (res.status === 201) {
                alert("Registration Successfully done 😃!")
                setInpVal({ ...inpVal, email: "", password: "" });
            }
        }
    };


    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-[500px]">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="w-full p-2 border rounded"
                            value={inpVal.email}
                            onChange={setVal}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 font-medium">Password</label>
                        <div className="relative">
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                className="w-full p-2 border rounded"
                                value={inpVal.password}
                                onChange={setVal}

                                required
                            />
                            <button
                                type="button"
                                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                onClick={handlePasswordVisibility}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    >
                        Log In
                    </button>

                    <h5>Dont't have an account?<b>Sign Up</b></h5>

                </form>
            </div>
        </div>
    );
};

export default Login;


