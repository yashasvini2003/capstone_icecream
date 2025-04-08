'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(`Submitted username: ${username}, 
        //     password: ${password}, 
        //     passwordConfirm: ${passwordConfirm},
        //     email: ${email}`)

        
        try {
            if (!(password === passwordConfirm)) {
                throw new Error('Passwords do not match, try again.')
            }

            const response = await fetch('process.env.NEXT_PUBLIC_BACKEND_API/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });
        
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || 'Register failed');
            }
        
            router.push('/login');
            alert("Registraion Successful. Enter your details again to login.")
    
        } catch (error) {
            alert(`Register Error: ${error.message}`);
        }
    };

    return (
        <div className="bg-gray-100 p-24">
            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Register
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Username:
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label>
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                            required
                        />
                    </div>
                    <div>
                    <label>
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                            required
                        />
                    </div>
                    <div>
                    <label>
                            Re-enter Password:
                        </label>
                        <input
                            type="password"
                            id="passwordConfirm"
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-300 text-white py-2 px-4 rounded-lg hover:bg-red-500 mt-4"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}