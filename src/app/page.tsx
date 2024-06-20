import { Form } from "./components/form";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">
          FBI Admin Panel Login
        </h2>

        <Form />
      </div>
    </div>
  );
}
