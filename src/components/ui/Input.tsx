import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils/cn'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-1 block text-sm font-medium text-gray-200">
            {label}
            {props.required && <span className="text-red-400 ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'block w-full rounded-lg border px-3 py-2.5',
            'bg-white/10 border-white/20 text-white placeholder-gray-400',
            'focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50',
            'disabled:bg-white/5 disabled:cursor-not-allowed disabled:text-gray-500',
            'transition-all duration-200',
            error && 'border-red-400 focus:border-red-400 focus:ring-red-500/50',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-300">{error}</p>}
        {helperText && !error && <p className="mt-1 text-sm text-gray-400">{helperText}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'
export default Input
