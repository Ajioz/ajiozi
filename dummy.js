const DUMMY = [
  {
    id: "e1",
    name: "Emeka Oluwasale",
    subject: "Programming for everyone",
    message:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    email: "emewasale211@gmail.com",
    phone: "+234-70968635686",
    isRead: true,
    date: "2020-05-12",
  },
  {
    id: "e2",
    name: "Onoriode Festus",
    subject: "Networking for introverts",
    message:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    email: "festus.onus@yahoo.com",
    phone: "+234-8326868668",
    isRead: false,
    date: "2021-05-30",
  },
  {
    id: "e3",
    name: "Judith Brian",
    subject: "Networking for extroverts",
    message:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    email: "lovely_brian@hotmail.com",
    phone: "+234-6066368660",
    isRead: true,
    date: "2022-04-10",
  },
  {
    id: "e4",
    name: "Osaretin Lucky",
    subject: "Traveling is a hubby",
    message:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    email: "osaz@gmail.com",
    phone: "+234-3293686602",
    isRead: true,
    date: "2023-01-09",
  },
  {
    id: "e5",
    name: "Ahmed Bishair",
    subject: "Politic is a bad omen",
    message:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    email: "bashir@hotmail.com",
    phone: "+234-9026368660",
    isRead: false,
    date: "2024-03-14",
  },
];

export function getFeaturedEvents() {
  return DUMMY.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY.find((event) => event.id === id);
}

export function getEventsById(arr, id) {
  return arr.filter((event) => event.id !== id);
}
