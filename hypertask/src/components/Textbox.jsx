import React from "react";
import clsx from "clsx";

const Textbox = React.forwardRef(
  ({ 
    type = "text", 
    placeholder, 
    label, 
    className, 
    register, 
    name, 
    error, 
    id, // Add `id` prop
    autocomplete, // Add `autocomplete` prop
  }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1">
        {label && (
          <label
            htmlFor={id || name} // Use `id` or fallback to `name`
            className="text-slate-800 font-bold text-lg" // Label styles
          >
            {label}
          </label>
        )}

        <div>
          <input
            id={id || name} // Assign `id` for proper `label` association
            type={type}
            name={name}
            placeholder={placeholder}
            ref={ref}
            autoComplete={autocomplete} // Use `autocomplete` prop
            {...register}
            aria-invalid={error ? "true" : "false"}
            className={clsx(
              "bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300",
              className
            )}
          />
        </div>
        {error && (
          <span className="text-xs text-[#f64949fe] mt-0.5">{error}</span>
        )}
      </div>
    );
  }
);

export default Textbox;
