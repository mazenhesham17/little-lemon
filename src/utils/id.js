export const generateId = () => {
    let ID = 0
    for (let i = 0; i < 8; i++) {
        ID *= 10;
        if (i == 0) {
            ID += Math.floor(Math.random() * 9) + 1;
        } else {
            ID += Math.floor(Math.random() * 10);
        }
    }
    return ID
}

