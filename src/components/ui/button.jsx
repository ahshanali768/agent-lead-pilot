export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`bg-white text-indigo-800 font-semibold rounded-xl shadow px-4 py-2 hover:opacity-90 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}