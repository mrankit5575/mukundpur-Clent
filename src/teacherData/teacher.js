// tutors.js

export const tutors = [
  {
    id: "tutor001",
    name: "Ayush Jha",
    gender: "Male",
    age: 20,
    photo: "/ayush.jpg",
    qualification: "B.Tech in CSE 1st year (NIT Delhi)",
    experience: 5,
    subjects: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Computer Science",
      "English",
      "Physical Education"
    ],
     grades: ["8", "9", "10", "11" ,"12"],
    location: "Delhi",
    mode: ["Online", "Offline"],
    languages: ["Hindi", "English"],
    rate: "contact",
    availability: {
      days: ["Mon", "Wed", "Fri"],
      time: ["4PM-6PM", "7PM-9PM"]
    },
    bio: "Ayush is a top-ranking Computer Science student at NIT Delhi, known for his exceptional academic achievements and passion for teaching. A consistent topper in both 10th and 12th boards, Ayush brings clarity, structure, and depth to complex concepts in Mathematics and Physics With 5 years of proven teaching experience, Ayush has mentored hundreds of students, helping them crack school exams, JEE, and other competitive tests with confidence.",
    rating: 4.7,
    reviews: 23,
    bookingLink: "https://yourwebsite.com/book/anjali"
  },

  {
    id: "tutor002",
    name: "Mohit",
    gender: "Male",
    age: 28,
    photo: "/mohit.jpg",
    qualification: "Pursuing Bachelor of Arts (B.A.) from IGNOU",

     experience: 2,
     subjects: [ "History", "Political Science", "Geography"]
 ,
     grades: ["9", "10", "11", "12"],
    location: "Mumbai",
    mode: ["Online"],
    languages: ["English"],
    rate: 600,
    availability: {
      days: ["Tue", "Thu"],
      time: ["5PM-7PM"]
    },
    // bio: "Software engineer turned tutor with deep CS knowledge.",
    bio: "Dedicated and passionate tutor with a strong academic foundation in humanities. With 2 years of experience teaching History, Political Science, and Geography to students from classes 9 to 12, Mohit focuses on building conceptual clarity and exam-oriented preparation. Based in Mumbai, he offers personalized online sessions tailored to each student's learning pace."
    ,
    rating: 4.9,
    reviews: 12,
    bookingLink: "https://yourwebsite.com/book/rahul"
  },
  {
  id: "tutor003",
  name: "Nikhil",
  gender: "Male",
  age: 21,
  photo: "/nikhli.jpg", // Make sure this image exists in your public folder
  qualification: "B.Sc 2nd Year (IGNOU)",
  experience: 3.5,
  subjects: [
    "Biology",
    "Chemistry"
  ],
  grades: ["9", "10", "11", "12"],
  location: "Delhi",
  mode: ["Online", "Offline"],
  languages: ["Hindi", "English"],
  rate: "contact",
  availability: {
    days: ["Tue", "Thu", "Sat"],
    time: ["5PM-7PM", "8PM-9PM"]
  },
  bio: "Nikhil is a passionate B.Sc student at IGNOU, currently in his second year. With 3.5 years of teaching experience, he specializes in Biology and Chemistry for high school students. His methodical teaching style and deep understanding of the subjects have helped numerous students grasp tough concepts and perform excellently in their board and entrance exams.",
  rating: 4.6,
  reviews: 17,
  bookingLink: "https://yourwebsite.com/book/nikhil"
}

];
