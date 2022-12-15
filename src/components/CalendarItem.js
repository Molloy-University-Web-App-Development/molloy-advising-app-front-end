export default function CalendarItem({ date, day, description }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return (
    <section>
      <h3>
        <time datetime={date}>
          {months[date.substring(0, 2) - 1]}{" "}
          {parseInt(date.substring(3, 5), 10)}
        </time>{" "}
        - {day}
      </h3>
      <p>{description}</p>
    </section>
  );
}
