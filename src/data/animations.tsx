export const transition = {duration: 1, ease: [0.1, 0.25, 0.74, 1]}

export const menuSlide = {
    visible: { opacity: 1, x: 'calc(100vw - 284px)' },
    hidden: { opacity: 0, x: 'calc(100vw - 184px)'},
}

export const itemSlide = {
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 }},
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 }}
}

