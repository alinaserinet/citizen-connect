import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

interface ButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children: ReactNode
}

const Button = ({ children, className, ...rest }: ButtonProps) => {
    return (
        <button className={className} {...rest}>
            {children}
        </button>
    )
}
export default Button
