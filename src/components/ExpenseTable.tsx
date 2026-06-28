import { Expense } from "@/types/expense";

export default function ExpenseTable({ expenses, onDelete }: { expenses: Expense[], onDelete: (id: string) => void }) {
  return (
    <div className="overflow-x-auto bg-base-100 rounded-lg shadow-lg">
      <table className="table w-full">
        <thead className="bg-base-300">
          <tr><th>Title</th><th>Category</th><th>Amount</th><th>Date</th><th>Action</th></tr>
        </thead>
        <tbody>
          {expenses.map((ex) => (
            <tr key={ex._id}>
              <td>{ex.title}</td>
              <td><span className="badge badge-outline">{ex.category}</span></td>
              <td>${ex.amount}</td>
              <td>{ex.date}</td>
              <td><button onClick={() => onDelete(ex._id!)} className="btn btn-error btn-xs">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}