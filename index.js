function scuberGreetingForFeet(distance) {
  if (distance > 2500) {
    return "No can do.";
  }
  if (distance > 2000) {
    return dollarToMessage("$30");
  }
  if (distance > 400) {
    return dollarToMessage("$20");
  }
  return "This one is on me!";
}
function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}
function switchOnCharmFromTip(tip) {
  switch (tip) {
      case "generous":
          return "Thank you so much.";
      case "not generous":
          return "Thank you.";
      default:
          return "Bye.";
  }
}
function dollarToMessage(dollars) {
  if (dollars === "$20") {
    return "That will be twenty bucks.";
  }
  if (dollars === "$30") {
    return "I will gladly take your thirty bucks.";
  }
  return dollars;
}

