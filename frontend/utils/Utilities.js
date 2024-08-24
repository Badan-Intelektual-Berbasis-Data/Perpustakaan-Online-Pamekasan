export function timeZoneConverter(time_string) {

    if (!time_string) return

    const date = new Date(time_string);
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York', // Specify the timezone
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    return formatter.format(date);

}