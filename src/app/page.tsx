"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ExpenseForm from "@/components/ExpenseForm";
import ExpenseTable from "@/components/ExpenseTable";
import ExpenseChart from "@/components/ExpenseChart";
import EditModal from "@/components/EditModal";
import DeleteModal from "@/components/DeleteModal";
import { getExpenses, deleteExpense, updateExpense } from "@/lib/api";
import { Expense } from "@/types/expense";

export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [stats, setStats] = useState([]);
  const [editEx, setEditEx] = useState<Expense | null>(null);
  const [delId, setDelId] = useState<string | null>(null);

  const loadData = async () => {
    setExpenses(await getExpenses("All"));
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/expenses-stats`);
    setStats(await res.json());
  };

  useEffect(() => { loadData(); }, []);

  return (
    <div className="min-h-screen bg-base-200">

      <main className="max-w-6xl mx-auto p-4 md:p-8 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <ExpenseForm onAdd={loadData} />
          <ExpenseTable 
            expenses={expenses} 
            onEdit={setEditEx} 
            onDelete={setDelId} 
          />
        </div>
        <div className="card bg-base-100 p-6 shadow-xl h-fit">
          <h2 className="text-xl font-bold mb-4">Analytics</h2>
          <ExpenseChart data={stats} />
        </div>
      </main>

      <EditModal 
        expense={editEx} 
        isOpen={!!editEx} 
        onClose={() => setEditEx(null)} 
        onSave={async (d) => { await updateExpense(editEx!._id!, d); loadData(); setEditEx(null); }} 
      />
      
      <DeleteModal 
        isOpen={!!delId} 
        onClose={() => setDelId(null)} 
        onConfirm={async () => { await deleteExpense(delId!); loadData(); setDelId(null); }} 
      />
    </div>
  );
}