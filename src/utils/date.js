export const convertDate = (date) => {
    const year = parseInt(date.substring(0, 4));
    const month = parseInt(date.substring(5, 7));
    const day = parseInt(date.substring(8, 10));
    let yearCode = year % 100;
    yearCode = (yearCode + (yearCode / 4)) % 7;
    let monthCode = [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5][month - 1];
    let centuryCode = 6;
    let leap = (year % 4 == 0 ? (year % 100 == 0 ? (year % 400 == 0) : true) : false);
    let weekday = (yearCode + monthCode + centuryCode + day - (leap && month <= 2 ? 1 : 0)) % 7;
    weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][weekday];
    let newDate = `${weekday} ${month}/${day}`;
    return newDate;
}
