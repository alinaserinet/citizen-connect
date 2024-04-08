'use client';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error = ({ error }: ErrorProps) => {
  console.log(error);
};
export default Error;
