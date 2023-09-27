export const navTransition = { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
export const menuSlide = {
    visible: { opacity: 1,  x: 'calc(100vw - 384px)' },
    hidden: { opacity: 0, x: '100vw' },
}

export const navItemTransiton = (id: number) =>{ return {duration: 0.75, delay: id*0.15 }}
export const navItemSlide = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x:(40)}
}

export const pageTransition = {ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85}
export const pageSlide = {
    initial: { opacity: 0, y:(-100) },
    enter: {opacity: 1, y: 0 },
    exit: {opacity: 0, y:100 }
} 