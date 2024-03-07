import type { ReactNode } from 'react'

interface CardHeaderProps {
    children: ReactNode
}

const CardHeader = ({ children }: CardHeaderProps) => {
    return <div>{children}</div>
}
export default CardHeader
