// lib/api.ts
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const getExpenses = () => fetch(`${BASE_URL}/expenses`).then(res => res.json());

export const addExpense = (data: any) => fetch(`${BASE_URL}/expenses`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});

// Repeat similar patterns for delete/update