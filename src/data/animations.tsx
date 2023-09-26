export const navTransition = {duration: 1, ease: [0.2,0.7, 0.7, 0.7]}
export const menuSlide = {
    visible: { opacity: 1,  x: 'calc(100vw - 284px)' },
    hidden: { opacity: 0, x: '100vw' },
}

export const navItemTransiton = (id: number) =>{ return {duration: 0.5, delay: (1+id)*0.1 }}
export const navItemSlide = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 30 }
}

export const pageTransition = {duration: 1}
export const pageSlide = {
    initial: { opacity: 0, y:(-10) },
    enter: {opacity: 1, y: 0 },
    exit: {opacity: 0, y:10 }
} 