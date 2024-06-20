import Image from "next/image";
import { verifyPassword } from "./actions";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          FBI Admin Panel Login
        </h2>

        <form action={verifyPassword}>
          <div className="flex justify-center mb-6">
            <Image
              src="/FBI.png"
              alt="Logo"
              className="h-16 w-16"
              width={300}
              height={300}
            />
          </div>

          <div className="mb-4 opacity-50">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Agent ID:
            </label>
            <input
              type="text"
              id="username"
              disabled
              value="agent-999"
              className="w-full px-3 py-2 border border-gray-300 rounded cursor-not-allowed"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password:
            </label>
            <input
              name="password"
              type="text"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
        {/* {message && (
          <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
            {message}
          </div>
        )}
        <div className="mt-4">
          <p>Attempts: {attempts}</p>
        </div> */}
      </div>
    </div>
  );
}
