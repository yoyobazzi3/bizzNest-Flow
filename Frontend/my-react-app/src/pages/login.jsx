import { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate

const Login = ({ setIsAuthenticated }) => {
    const [input, setInput] = useState({
        email: "test@email.com",  // Hardcoded email for testing
        password: "gilroy",  // Hardcoded password for testing
    });

    const navigate = useNavigate();  // Initialize useNavigate

    const correctEmail = "test@email.com";  // Correct email for testing
    const correctPassword = "gilroy";  // Correct password for testing

    const handleSubmitEvent = (e) => {
        e.preventDefault();

        if (input.email === correctEmail && input.password === correctPassword) {
            setIsAuthenticated(true); 
            navigate("/");  // Redirect after successful login
        } else {
            alert("Email or Password is Incorrect");
        }
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <form onSubmit={handleSubmitEvent}>
            <div className="form_control">
                <label htmlFor="user_email">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="user-email"
                    placeholder="example@digitalnest.org"
                    value={input.email}
                    onChange={handleInput}
                />
            </div>
            <div className="form_control">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={input.password}
                    onChange={handleInput}
                />
            </div>
            <button className="btn-submit">Submit</button>
        </form>
    );
};

export default Login;
