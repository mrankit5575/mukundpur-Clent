// tutors.js

export const tutors = [
  {
    id: "tutor001",
    name: "Anjali Sharma",
    gender: "Female",
    age: 30,
    photo: "https://example.com/images/anjali.jpg",
    qualification: "M.Sc. Mathematics",
    experience: 5,
    subjects: ["Mathematics", "Physics"],
    grades: ["8", "9", "10"],
    location: "Delhi",
    mode: ["Online", "Offline"],
    languages: ["Hindi", "English"],
    rate: 500,
    availability: {
      days: ["Mon", "Wed", "Fri"],
      time: ["4PM-6PM", "7PM-9PM"]
    },
    bio: "Experienced Math tutor with a passion for teaching.",
    rating: 4.7,
    reviews: 23,
    bookingLink: "https://yourwebsite.com/book/anjali"
  },

  {
    id: "tutor002",
    name: "Rahul Verma",
    gender: "Male",
    age: 28,
    photo: "https://example.com/images/rahul.jpg",
    qualification: "B.Tech Computer Science",
    experience: 3,
    subjects: ["Computer Science", "Maths"],
    grades: ["9", "10", "11", "12"],
    location: "Mumbai",
    mode: ["Online"],
    languages: ["English"],
    rate: 600,
    availability: {
      days: ["Tue", "Thu"],
      time: ["5PM-7PM"]
    },
    bio: "Software engineer turned tutor with deep CS knowledge.",
    rating: 4.9,
    reviews: 12,
    bookingLink: "https://yourwebsite.com/book/rahul"
  }
];
