function getDateString1(date){
    const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    millisecond: '3-digit',
    timeZone: 'UTC'
    };
    
    return date.toLocaleString('en-US', options);
}

function getDateString2(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    const second = String(date.getSeconds()).padStart(2, '0');
    const millisecond = String(date.getMilliseconds()).padStart(3, '0');

    return `${year}-${month}-${day} ${hour}-${minute}-${second}-${millisecond}`;
}

module.exports = { getDateString1, getDateString2 }