import { twMerge } from 'tailwind-merge';

interface PageTitleProps {
  className?: string;
  title?: string;
}

const PageTitle = ({ className, title }: PageTitleProps) => {
  return (
    <div className={twMerge(className)}>
      <h1>{title}</h1>
    </div>
  );
};
export default PageTitle;
