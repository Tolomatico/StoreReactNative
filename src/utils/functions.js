export const sumTotal = (items) =>
    items.reduce((acc, current) => acc + current.price * current.quantity, 0)

export const generarId = () => {

    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)


    return random + fecha
}

