import { ReactNode } from "react"

interface Props {
    children?: ReactNode,
    title: string,
}

export default function PageTemplate({ children, ...props }: Props) {
    return(
        <div className='m-auto p-12'>
            <h1 className='text-8xl'>{props.title}</h1>
            {children}
        </div>
    )
}