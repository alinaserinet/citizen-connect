import type { ReactNode } from 'react'

interface CardProps {
    children: ReactNode
}

const Card = ({ children }: CardProps) => {
    return <div className="p-4 border border-gray-100">{children}</div>
}
export default Card
