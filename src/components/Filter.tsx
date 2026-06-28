export default function Filter({ onFilter }: { onFilter: (cat: string) => void }) {
  return (
    <select className="select select-bordered w-full md:w-52" onChange={(e) => onFilter(e.target.value)}>
      <option value="All">All Categories</option>
      <option value="Food">Food</option>
      <option value="Transport">Transport</option>
      <option value="Shopping">Shopping</option>
      <option value="Others">Others</option>
    </select>
  );
}