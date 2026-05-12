import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { cn } from "./utils";

export type InputVariant = "default" | "glass";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  error?: string;
  variant?: InputVariant;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  fullWidth?: boolean;
};

const baseClasses =
  "h-10 rounded-full border text-sm outline-none transition " +
  "disabled:cursor-not-allowed disabled:opacity-50";

const variantClasses: Record<InputVariant, string> = {
  default:
    "border-slate-300 bg-white px-4 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",

  glass:
    "border-white/30 bg-white/14 px-4 text-white placeholder:text-white/62 focus:border-[var(--tf-accent)]/75 focus:bg-white/22",
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    id,
    label,
    hint,
    error,
    className,
    variant = "default",
    leadingIcon,
    trailingIcon,
    fullWidth = true,
    ...props
  },
  ref,
) {
  return (
    <div className={cn("flex flex-col gap-1.5", fullWidth && "w-full")}>
      {label && (
        <label htmlFor={id} className="text-xs font-medium text-slate-600">
          {label}
        </label>
      )}

      <div className="relative">
        {leadingIcon && (
          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
            {leadingIcon}
          </span>
        )}

        <input
          id={id}
          ref={ref}
          className={cn(
            baseClasses,
            variantClasses[variant],
            leadingIcon ? "pl-9" : undefined,
            trailingIcon ? "pr-9" : undefined,
            fullWidth && "w-full",
            error && "border-red-500 focus:ring-red-500/20",
            className,
          )}
          {...props}
        />

        {trailingIcon && (
          <span className="absolute inset-y-0 right-3 flex items-center">
            {trailingIcon}
          </span>
        )}
      </div>

      {error ? (
        <span className="text-xs text-red-500">{error}</span>
      ) : hint ? (
        <span className="text-xs text-slate-500">{hint}</span>
      ) : null}
    </div>
  );
});
