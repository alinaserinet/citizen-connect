import type { ReactNode } from 'react'

interface CardBodyProps {
    children: ReactNode
}

const CardBody = ({ children }: CardBodyProps) => {
    return <div>{children}</div>
}
export default CardBody
