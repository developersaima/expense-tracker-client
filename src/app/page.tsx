"use client";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import ExpenseForm from "@/components/ExpenseForm";
import ExpenseTable from "@/components/ExpenseTable";
import ExpenseChart from "@/components/ExpenseChart";
import Filter from "@/components/Filter";
import { getExpenses, deleteExpense } from "@/lib/api";
import { Expense } from "@/types/expense";

export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [stats, setStats] = useState([]);
  const [category, setCategory] = useState("All");

  const loadData = async () => {
    const data = await getExpenses(category);
    setExpenses(data);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/expenses-stats`);
    setStats(await res.json());
  };

  useEffect(() => { loadData(); }, [category]);

  return (
    <div className="min-h-screen bg-base-200 pb-10">
      
      <main className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold">Financial Dashboard</h1>
          <Filter onFilter={setCategory} />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <ExpenseForm onAdd={loadData} />
            <ExpenseTable 
              expenses={expenses} 
              onDelete={async (id) => { await deleteExpense(id); loadData(); }} 
            />
          </div>
          <div className="card bg-base-100 shadow-xl border border-base-300 h-fit p-6">
            <h2 className="text-xl font-bold mb-4">Category Analysis</h2>
            <ExpenseChart data={stats} />
          </div>
        </div>
      </main>
      <Toaster />
    </div>
  );
}