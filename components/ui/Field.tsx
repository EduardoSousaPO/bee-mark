"use client";

import { cn } from "@/lib/utils/cn";

type FieldProps = {
  id: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea" | "checkbox";
  name: string;
  value?: string | boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onBlur?: () => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  autoComplete?: string;
  rows?: number;
  options?: { value: string; label: string }[];
  "aria-describedby"?: string;
};

export function Field({
  id,
  label,
  type = "text",
  name,
  value,
  onChange,
  onBlur,
  error,
  required,
  placeholder,
  className,
  autoComplete,
  rows = 3,
  options,
  "aria-describedby": ariaDescribedby,
}: FieldProps) {
  const errorId = error ? `${id}-error` : undefined;

  if (type === "checkbox") {
    const boolValue = !!value;
    return (
      <div className={cn("flex flex-col gap-2", className)}>
        <div className="flex gap-3">
          <input
            id={id}
            name={name}
            type="checkbox"
            checked={boolValue}
            onChange={onChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
            onBlur={onBlur}
            aria-describedby={errorId ?? ariaDescribedby}
            aria-invalid={!!error}
            className="h-5 w-5 shrink-0 rounded border-bm-grayDark bg-bm-grayDark text-bm-yellow focus:ring-2 focus:ring-bm-yellow focus:ring-offset-0 transition-all duration-200"
          />
          <label htmlFor={id} className="text-sm text-bm-grayLight">
            {label}
            {required && <span className="text-bm-yellow"> *</span>}
          </label>
        </div>
        {error && (
          <p id={errorId} className="text-sm text-red-400" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }

  if (type === "textarea") {
    return (
      <div className={cn("flex flex-col", className)}>
        <label htmlFor={id} className="text-sm font-medium text-bm-white">
          {label}
          {required && <span className="text-bm-yellow"> *</span>}
        </label>
        <textarea
          id={id}
          name={name}
          value={(value as string) ?? ""}
          onChange={onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void}
          onBlur={onBlur}
          placeholder={placeholder}
          rows={rows}
          aria-describedby={errorId ?? ariaDescribedby}
          aria-invalid={!!error}
          autoComplete={autoComplete}
          className={cn(
            "mt-2 rounded-bmSm border border-bm-grayDark bg-bm-grayDark/50 px-4 py-3 text-bm-white placeholder:text-bm-grayLight focus:border-bm-yellow focus:outline-none focus:ring-1 transition-all duration-200",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500"
          )}
        />
        {error && (
          <p id={errorId} className="mt-1 text-sm text-red-400" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }

  if (options && options.length > 0) {
    return (
      <div className={cn("flex flex-col", className)}>
        <label htmlFor={id} className="text-sm font-medium text-bm-white">
          {label}
          {required && <span className="text-bm-yellow"> *</span>}
        </label>
        <select
          id={id}
          name={name}
          value={(value as string) ?? ""}
          onChange={onChange as (e: React.ChangeEvent<HTMLSelectElement>) => void}
          onBlur={onBlur}
          aria-describedby={errorId ?? ariaDescribedby}
          aria-invalid={!!error}
          className={cn(
            "mt-2 rounded-bmSm border border-bm-grayDark bg-bm-grayDark/50 px-4 py-3 text-bm-white focus:border-bm-yellow focus:outline-none focus:ring-1 focus:ring-bm-yellow transition-all duration-200",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500"
          )}
        >
          <option value="">Selecione</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && (
          <p id={errorId} className="mt-1 text-sm text-red-400" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col", className)}>
      <label htmlFor={id} className="text-sm font-medium text-bm-white">
        {label}
        {required && <span className="text-bm-yellow"> *</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={(value as string) ?? ""}
        onChange={onChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
        onBlur={onBlur}
        placeholder={placeholder}
        aria-describedby={errorId ?? ariaDescribedby}
        aria-invalid={!!error}
        autoComplete={autoComplete}
        required={required}
        className={cn(
          "mt-2 rounded-bmSm border border-bm-grayDark bg-bm-grayDark/50 px-4 py-3 text-bm-white placeholder:text-bm-grayLight focus:border-bm-yellow focus:outline-none focus:ring-1 transition-all duration-200",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500"
        )}
      />
      {error && (
        <p id={errorId} className="mt-1 text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
