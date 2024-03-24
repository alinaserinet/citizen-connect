import { twMerge } from 'tailwind-merge';

interface FormFieldErrorProps {
  message?: string;
  className?: string;
}

const FormFieldError = ({ message, className }: FormFieldErrorProps) => {
  return (
    <div className={twMerge('mt-1.5 h-5', className)}>
      {message ? (
        <span className=" text-xs text-red-700">{message}</span>
      ) : null}
    </div>
  );
};
export default FormFieldError;
