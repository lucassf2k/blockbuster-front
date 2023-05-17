export function formateDuration(input) {
  const hoursInFloat = input / 60;
  const [hours, minutes] = String(hoursInFloat.toFixed(2)).split(".");

  let output;

  if (hours === "0") {
    output = `${minutes}m`;
  }

  if (hours !== "0") {
    if (minutes === "0") {
      output = `${hours}h`;
    } else {
      if (hours < 10 && minutes < 10) {
        output = `0${hours}h ${minutes}m`;
      } else if (hours > 10 && minutes > 10) {
        output = `${hours}h ${minutes}m`;
      } else if (hours > 10 && minutes < 10) {
        output = `${hours}h ${minutes}m`;
      } else if (hours < 10 && minutes > 10) {
        output = `0${hours}h ${minutes}m`;
      }
    }
  }

  return output;
}
