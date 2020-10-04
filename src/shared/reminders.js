date = new Date().toUTCString().replace(',', '').split(' ');

export const REMINDERS = [
    {
        id:0,
        text: "Este es un recordatorio de prueba",
        day_name: date[0],
        day_number: date[1],
        month: date[2],
        year:date[3],
        time: date[4],
        city: "Quito",
        color: "red"
    }
];
