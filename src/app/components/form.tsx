"use client";

import { FC, FormEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Form: FC = () => {
  const [errored, setErrored] = useState("");
  const { replace } = useRouter();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const password = (event.target as any).password.value;

    try {
      const response = await (
        await fetch("/api/login", {
          method: "POST",
          body: JSON.stringify({ password: password }),
        })
      ).json();

      if (response.error) {
        setErrored(response.error);
      } else {
        replace("/admin");
      }
    } catch (error) {
      setErrored(error instanceof Error ? error.message : "An error occured");
    }
  };

  return (
    <form onSubmit={onSubmit}>
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

      {errored && (
        <div className="flex-1 rounded bg-red-600 p-2 text-white mb-2">
          {errored}
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        Login
      </button>
    </form>
  );
};
