"use client";
import { useForm } from "react-hook-form";
import { Expense } from "@/types/expense";

export default function ExpenseForm({ onAdd }: { onAdd: () => void }) {
  const { register, handleSubmit, reset } = useForm<Expense>();
  
  const onSubmit = async (data: Expense) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/expenses`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    reset();
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card bg-base-200 p-6 shadow-xl grid md:grid-cols-2 gap-4">
      <input {...register("title")} placeholder="Title" className="input input-bordered w-full" required />
      <input {...register("amount", { valueAsNumber: true })} type="number" placeholder="Amount" className="input input-bordered w-full" required />
      <select {...register("category")} className="select select-bordered w-full">
        <option>Food</option><option>Transport</option><option>Shopping</option>
      </select>
      <input {...register("date")} type="date" className="input input-bordered w-full" required />
      <button className="btn btn-primary md:col-span-2">Add Expense</button>
    </form>
  );
}