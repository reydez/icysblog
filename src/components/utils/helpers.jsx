export const contactList = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rodrigo-reyes-hernandez/",
    icon: <i class="fa-brands fa-linkedin"></i>,
    color: "#0a66c2",
  },
  {
    name: "Github",
    url: "https://github.com/reydez",
    icon: <i class="fa-brands fa-github"></i>,
    color: "#24292f",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/rodrigo_reydez/",
    icon: <i class="fa-brands fa-instagram"></i>,
    color: "gray",
  },
];

export const truncateString = (str, num) => {
  if (str.length <= num) {
    return str;
  }

  return str.slice(0, num) + "...";
};
