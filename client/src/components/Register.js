import React, { useState } from "react";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showCPassword, setShowCPassword] = useState(false);

    const [inpVal, setInpVal] = useState({
        fname: "",
        email: "",
        password: "",
        cpassword: ""
    });

    const setVal = (e) => {
        const { name, value } = e.target;
        setInpVal({
            ...inpVal,
            [name]: value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault()

        const { fname, email, password, cpassword } = inpVal;

        if (fname === "") {
            alert("enter your name")
        } else if (email === "") {

            alert("email is required!")
        } else if (!email.includes("@")) {
            alert("include @ in your email")
        } else if (password === "") {
            alert("enter your password")
        } else if (password.length < 6) {
            alert("password must be 6 char")
        } else if (cpassword === "") {
            alert("enter your confirm password")
        }
        else if (cpassword.length < 6) {
            alert("confirm password must be 6 char")
        } else if (password !== cpassword) {
            alert("password abd confirm password must match")
        } else {
            console.log("user registration succesfully done");

            const data = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname, email, password, cpassword
                })
            });
            const res = await data.json()
            if (res.status === 201) {
                alert("Registration Successfully done 😃!")
                setInpVal({ ...inpVal, fname: "", email: "", password: "", cpassword: "" });
            }


        }
    };

    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-r from-purple-800 to-indigo-800">
            <div className="bg-white p-8 rounded-lg shadow-md w-[500px]">
                <h2 className="text-3xl font-semibold text-center mb-6 text-indigo-800">
                    Welcome Back
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            name="fname"
                            type="text"
                            className="w-full p-2 border rounded focus:outline-none focus:border-indigo-600"
                            value={inpVal.fname}

                            placeholder="Enter your name"
                            onChange={setVal}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            className="w-full p-2 border rounded focus:outline-none focus:border-indigo-600"
                            value={inpVal.email}

                            placeholder="Enter your email"
                            onChange={setVal}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                className="w-full p-2 border rounded focus:outline-none focus:border-indigo-600"
                                value={inpVal.password}

                                placeholder="Enter your password"
                                onChange={setVal}
                            />
                            <button
                                type="button"
                                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                name="cpassword"
                                type={showCPassword ? "text" : "password"}
                                className="w-full p-2 border rounded focus:outline-none focus:border-indigo-600"
                                value={inpVal.cpassword}
                                onChange={setVal}

                                placeholder="Confirm your password"
                            />
                            <button
                                type="button"
                                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                onClick={() => setShowCPassword(!showCPassword)}
                            >
                                {showCPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 rounded hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    >
                        Log In
                    </button>

                    {/* Sign Up */}
                    <p className="text-center text-gray-700 text-sm">
                        Don't have an account? <b>Sign Up</b>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
