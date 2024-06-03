/* eslint-disable react/prop-types */
export const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-end hover:shadow-form rounded-md py-3 px-8 text-base font-semibold outline-none ${className}`}
    >
      {children}
    </button>
  );
};
