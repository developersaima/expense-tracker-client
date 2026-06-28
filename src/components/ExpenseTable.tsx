import { Expense } from "@/types/expense";

export default function ExpenseTable({ expenses, onDelete }: { expenses: Expense[], onDelete: (id: string) => void }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-base-200 bg-base-100 shadow-sm">
      <table className="table table-zebra w-full">
        <thead className="bg-base-200/50">
          <tr>
            <th className="font-semibold text-base-content/70">Title</th>
            <th className="font-semibold text-base-content/70">Category</th>
            <th className="font-semibold text-base-content/70">Amount</th>
            <th className="font-semibold text-base-content/70">Date</th>
            <th className="text-right font-semibold text-base-content/70">Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((ex) => (
            <tr key={ex._id} className="hover:bg-base-200/30 transition-colors">
              <td className="font-medium">{ex.title}</td>
              <td>
                <span className="badge badge-primary badge-sm badge-soft">
                  {ex.category}
                </span>
              </td>
              <td className="font-mono font-semibold">${ex.amount.toFixed(2)}</td>
              <td className="text-base-content/70">{ex.date}</td>
              <td className="text-right">
                <button 
                  onClick={() => onDelete(ex._id!)} 
                  className="btn btn-ghost btn-xs text-error hover:bg-error/10"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {expenses.length === 0 && (
        <div className="p-8 text-center text-base-content/50">
          No expenses found.
        </div>
      )}
    </div>
  );
}