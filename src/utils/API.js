export const fetchAPI = (date) => {
    const items = [];
    for (let i = 17; i < 24; i++) {
        if (Math.random() < 0.7)
            items.push(`${i}:00 pm`);
        if (Math.random() < 0.3)
            items.push(`${i}:30 pm`);
    }
    return items;
}

export const submitAPI = (data) => {
    console.log(data);
    return true;
}