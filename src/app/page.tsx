"use client";
import { useEffect, useState } from "react";
import ExpenseForm from "@/components/ExpenseForm";
import ExpenseTable from "@/components/ExpenseTable";
import ExpenseChart from "@/components/ExpenseChart";
import Navbar from "@/components/Navbar";
import { getExpenses } from "@/lib/api";
import { Expense } from "@/types/expense"; // Ensure this path is correct


interface Stat {
  _id: string;
  value: number;
}

export default function Home() {
  // Use Generic types to fix the 'never[]' error
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [stats, setStats] = useState<Stat[]>([]);

  const loadData = async () => {
    // Fetch expenses
    const expenseData = await getExpenses();
    setExpenses(expenseData);

    // Fetch stats
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/expenses-stats`);
      const statsData = await res.json();
      setStats(statsData);
    } catch (error) {
      console.error("Failed to fetch stats", error);
    }
  };

  useEffect(() => { 
    loadData(); 
  }, []);

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      <main className="max-w-6xl mx-auto p-4 md:p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-base-content">Dashboard</h1>
          <p className="text-base-content/60">Manage your finances efficiently.</p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="card bg-base-100 shadow-xl border border-base-300">
              <div className="card-body">
                <h2 className="card-title text-lg font-semibold mb-2">Add New Expense</h2>
                <ExpenseForm onAdd={loadData} />
              </div>
            </div>
            {/* Pass expenses and the reload trigger to table */}
            <ExpenseTable expenses={expenses} onDelete={loadData} />
          </div>
          
          <div className="card bg-base-100 shadow-xl border border-base-300 h-fit">
            <div className="card-body">
              <h2 className="card-title">Category Breakdown</h2>
              {/* Only render chart if stats exist */}
              {stats.length > 0 ? (
                <ExpenseChart data={stats} />
              ) : (
                <p className="text-sm text-base-content/50">No data available.</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}