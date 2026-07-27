export const mockTutor = {
  id: "1",
  name: "Dr. Sarah Ndongo",
  avatar: null,
  title: "Mathematics & Physics Specialist",
  isOnline: true,
  rating: 4.9,
  totalReviews: 247,
  stats: {
    totalStudents: 340,
    sessionsCompleted: 1250,
    responseRate: 98,
    yearsExperience: 7
  },
  bio: "Passionate educator with 7+ years helping students master STEM subjects. I believe every student can excel with the right guidance and personalized approach.",
  teachingPhilosophy: "I focus on building deep conceptual understanding rather than rote memorization. My sessions are interactive, encouraging students to ask questions and think critically.",
  languages: ["English", "French", "Ewondo"],
  education: [
    { degree: "PhD in Applied Mathematics", institution: "University of Yaoundé I", year: 2016 },
    { degree: "MSc in Physics", institution: "University of Buea", year: 2012 }
  ],
  certifications: ["Cambridge Certified Teacher", "IB Mathematics Examiner", "SAT Prep Specialist"],
  subjects: [
    { name: "Mathematics", level: "Advanced", grades: "K-12, College" },
    { name: "Physics", level: "Advanced", grades: "9-12, College" },
    { name: "SAT Math Prep", level: "Expert", grades: "High School" },
    { name: "Calculus", level: "Advanced", grades: "College" }
  ],
  specializations: ["Exam Preparation", "Homework Help", "Project-Based Learning"],
  pricing: {
    single: { price: 15000, sessions: 1, features: ["1-on-1 session", "Session recording", "Basic materials"] },
    monthly: { price: 50000, sessions: 5, features: ["5 sessions/month", "Priority booking", "Progress reports", "Custom materials"], badge: "Best Value" },
    semester: { price: 180000, sessions: 24, features: ["24 sessions/semester", "Dedicated support", "All resources", "Weekly progress reports", "Exam strategy sessions"] }
  },
  availability: {
    timezone: "Africa/Douala",
    schedule: {
      Monday: ["09:00", "10:00", "14:00", "15:00", "16:00"],
      Tuesday: ["09:00", "10:00", "11:00", "15:00", "16:00"],
      Wednesday: ["14:00", "15:00", "16:00", "17:00"],
      Thursday: ["09:00", "10:00", "14:00", "15:00", "16:00"],
      Friday: ["09:00", "10:00", "11:00", "14:00"],
      Saturday: ["10:00", "11:00", "14:00", "15:00"],
      Sunday: []
    }
  },
  reviews: [
    { id: 1, studentName: "Emmanuel K.", avatar: null, subject: "Mathematics", rating: 5, date: "2024-01-15", text: "Dr. Sarah helped me improve my calculus grade from C to A in just 2 months. Her explanations are crystal clear!", verified: true },
    { id: 2, studentName: "Grace M.", avatar: null, subject: "Physics", rating: 5, date: "2024-01-10", text: "Best physics tutor I've ever had. She makes complex concepts easy to understand.", verified: true },
    { id: 3, studentName: "David T.", avatar: null, subject: "SAT Prep", rating: 4, date: "2024-01-05", text: "Scored 780 on SAT Math after her coaching. Highly recommend!", verified: true },
    { id: 4, studentName: "Aisha B.", avatar: null, subject: "Mathematics", rating: 5, date: "2023-12-28", text: "Patient, knowledgeable, and always prepared. Worth every franc!", verified: true }
  ],
  ratingBreakdown: { 5: 210, 4: 30, 3: 5, 2: 1, 1: 1 },
  sessionTools: ["HD Video Call", "Interactive Whiteboard", "Screen Sharing", "File Upload & Storage", "Session Recording", "Real-time Chat"],
  resources: [
    { name: "Calculus Fundamentals.pdf", locked: true },
    { name: "Physics Formula Sheet.pdf", locked: true }
  ]
};

export const similarTutors = [];
