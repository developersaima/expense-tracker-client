import { Edit2, Trash2 } from "lucide-react";

export default function ExpenseTable({ expenses, onEdit, onDelete }: any) {
  return (
    <div className="overflow-x-auto bg-base-100 rounded-xl shadow-sm border border-base-200">
        
      <table className="table w-full">
        <thead className="bg-base-200/50">
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Amount</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length > 0 ? (
            expenses.map((ex: any) => (
              <tr key={ex._id} className="hover:bg-base-200/30">
                <td>{ex.title}</td>
                <td><span className="badge badge-primary badge-soft">{ex.category}</span></td>
                <td>BDT {ex.amount}</td>
                <td className="flex gap-2 justify-end">
                  <button onClick={() => onEdit(ex)} className="btn btn-ghost btn-xs"><Edit2  size={16} /></button>
                  <button onClick={() => onDelete(ex._id)} className="btn btn-ghost btn-xs text-error"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center py-10">
                <div className="flex flex-col items-center text-base-content/50">
                  <span className="text-4xl mb-2">📂</span>
                  <p className="text-lg font-medium">No expenses found</p>
                  <p className="text-sm">Start by adding your first expense!</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}