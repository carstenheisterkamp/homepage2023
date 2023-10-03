export const navTransition = { 
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.85 
    }

export const navSlide = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}

export const navItemTransiton = (id: number) =>{ 
        return {duration: 0.75, delay: id*0.1 }
    }

export const navItemSlide = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x:(40)}
}

export const pageTransition = {
    ease: [0.455, 0.03, 0.515, 0.955], 
    duration: 0.85
}

export const pageSlide = {
    initial: { opacity: 0, y:10 },
    enter: {opacity: 1, y: 0 },
    exit: {opacity: 0, y: (-10) }
} 

export const glitchTransition = {
    duration: 0.5,
    times: [0, 0.1, 0.2, 0.3, 0.4, 1],
    easings: [
      0.42, 0, 0.9, 0,
      0.42, 0, 0.9, 0,
      0.42, 0, 0.9, 0,
      0.42, 0, 0.9, 0,
      0.42, 0, 0.9, 0,
      0.42, 0, 0.9, 0,
    ],
  }