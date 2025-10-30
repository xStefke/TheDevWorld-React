import { useState } from "react";
import { useAuth } from "./AuthContext.jsx";

export default function LoginModal({ onClose }) {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(email, password);

    if (!success) {
      setError("Invalid credentials");
    } else {
      setError("");
      onClose?.();
    }
  };
  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose} // klik van modala zatvara
    >
      <div
        className="bg-[#120426] border border-purple-500/20 shadow-xl rounded-2xl p-8 w-full max-w-sm text-white animate-fadeIn"
        onClick={(e) => e.stopPropagation()} // sprečava zatvaranje klikom u modal
      >
        <h2 className="text-3xl font-bebas text-center text-purple-300 mb-6">
          LOGIN
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-black/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-black/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-400 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition-colors py-2 rounded-lg font-medium"
          >
            Login
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-4 w-full text-sm text-gray-400 hover:text-white"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
