export const wordType = (type) => {
    switch (type) {
        case 'user':
            return 'пользователя'
        default:
            return 'задачу'
    }
}