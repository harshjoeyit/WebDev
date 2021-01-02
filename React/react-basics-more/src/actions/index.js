export const increment = (skip = 1) => {
    return {
        type: 'INCREMENT',
        payload: skip
    };
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
}