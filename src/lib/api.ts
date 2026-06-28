import { Expense } from "@/types/expense";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const getExpenses = async (category: string = "All"): Promise<Expense[]> => {
  const url = category === "All" 
    ? `${process.env.NEXT_PUBLIC_API_URL}/expenses` 
    : `${process.env.NEXT_PUBLIC_API_URL}/expenses?category=${category}`;
    
  const res = await fetch(url);
  return res.json();
};
export const postExpense = async (data: Expense) => {
  const res = await fetch(`${BASE_URL}/expenses`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};
export const updateExpense = async (id: string, data: Expense) => {
  await fetch(`${BASE_URL}/expenses/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};
export const deleteExpense = async (id: string) => {
  await fetch(`${BASE_URL}/expenses/${id}`, { method: "DELETE" });
};