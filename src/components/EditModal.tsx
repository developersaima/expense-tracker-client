"use client";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Expense } from "@/types/expense";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  expense: Expense | null;
  onSave: (data: Expense) => void;
}

export default function EditModal({ isOpen, onClose, expense, onSave }: EditModalProps) {
  const { register, handleSubmit, reset } = useForm<Expense>();

  
  useEffect(() => {
    if (expense) {
      reset(expense);
    } else {
      reset({ title: "", amount: 0, category: "Others", date: "" });
    }
  }, [expense, reset]);

  const handleFormSubmit: SubmitHandler<Expense> = (data) => {
    onSave(data);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <dialog open className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Edit Expense</h3>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          <input {...register("title", { required: true })} className="input input-bordered w-full" placeholder="Title" />
          <input 
            {...register("amount", { required: true, valueAsNumber: true })} 
            type="number" 
            className="input input-bordered w-full" 
            placeholder="Amount" 
          />
          <select {...register("category")} className="select select-bordered w-full">
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Shopping">Shopping</option>
            <option value="Others">Others</option>
          </select>
          <input {...register("date", { required: true })} type="date" className="input input-bordered w-full" />
          
          <div className="modal-action">
            <button type="button" className="btn btn-ghost" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </dialog>
  );
}