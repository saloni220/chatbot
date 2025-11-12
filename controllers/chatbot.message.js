import User from "../model/user.model.js";
import Bot from "../model/bot.model.js";

export const Message=async(req,res)=>{
  try {
    const {text}=req.body;
    if(!text?.trim){
        return res.send({
            Message:"please provide me some text ",
            status:400
        })
    }
    const user= await User.create({
        sender:"user",
        text

    })
    const botResponses = {
  // ✅ Interview Preparation
  "what is coding interview": "A coding interview tests your problem-solving and programming ability.",
  "how to prepare for coding interview": "Practice DSA problems, revise core concepts, and mock interview regularly.",
  "what is behavioral interview": "Behavioral interviews assess how you handle past challenges and teamwork situations.",
  "what is hr interview": "An HR interview checks your personality, communication, and cultural fit for the company.",
  "what is aptitude test": "An aptitude test measures your logical reasoning and problem-solving skills.",
  "what is technical round": "A technical round tests your knowledge in programming, databases, and technical concepts.",
  "how to crack interview": "Be confident, prepare well, and give clear, structured answers.",
  "what is group discussion": "Group discussions assess teamwork, communication, and leadership skills.",
  "how to introduce yourself": "Start with your name, education, experience, skills, and career goals.",
  "how to end self introduction": "End with your future goals or how you align with the company's vision.",
  "what is resume": "A resume summarizes your education, skills, and experience.",
  "what is cover letter": "A cover letter introduces yourself and highlights your interest in a specific job.",
  "how to improve communication skills": "Read, listen carefully, practice speaking daily, and get feedback.",
  "how to overcome interview fear": "Prepare well, practice mock interviews, and take deep breaths before starting.",
  "what are soft skills": "Soft skills include communication, teamwork, adaptability, and time management.",
  "what is time management": "Time management means planning and using time effectively to increase productivity.",
  "how to dress for interview": "Dress professionally — usually formal attire, neat and clean.",
  "how to negotiate salary": "Know your worth, research salary range, and politely justify your expectations.",
  "what are strengths and weaknesses": "Strengths are your positive traits, weaknesses are areas you’re improving.",
  "what is body language": "Body language includes facial expressions, gestures, and posture that convey confidence.",
  "what is teamwork": "Teamwork is collaborating effectively with others to achieve a common goal.",

  // ✅ Technical Concepts (Basic)
  "what is html": "HTML stands for HyperText Markup Language and is used to create web pages.",
  "what is css": "CSS stands for Cascading Style Sheets and is used for styling web pages.",
  "what is javascript": "JavaScript is a scripting language that adds interactivity to websites.",
  "what is react": "React is a JavaScript library for building user interfaces developed by Facebook.",
  "what is nodejs": "Node.js is a runtime environment that allows JavaScript to run on the server.",
  "what is expressjs": "Express.js is a web framework for Node.js used to build APIs and web apps.",
  "what is mongodb": "MongoDB is a NoSQL database used for storing JSON-like documents.",
  "what is api": "An API allows different software systems to communicate with each other.",
  "what is rest api": "REST API uses HTTP methods like GET, POST, PUT, DELETE to perform operations.",
  "what is database": "A database is a structured collection of data stored electronically.",
  "what is sql": "SQL stands for Structured Query Language used to manage relational databases.",
  "difference between sql and nosql": "SQL databases are relational and structured; NoSQL databases are flexible and document-based.",
  "what is git": "Git is a version control system that tracks changes in code.",
  "what is github": "GitHub is a platform to host and collaborate on Git repositories.",
  "what is version control": "Version control helps track and manage code changes over time.",
  "what is api testing": "API testing ensures APIs work correctly and return expected responses.",

  // ✅ HR Questions
  "tell me about yourself": "Start with your name, education, skills, and end with your career goals.",
  "why should we hire you": "Because my skills and enthusiasm match the job role perfectly.",
  "what are your strengths": "Hardworking, quick learner, and team player.",
  "what are your weaknesses": "I sometimes focus too much on details, but I'm improving with planning.",
  "where do you see yourself in 5 years": "I see myself in a responsible position contributing to company success.",
  "why do you want to join this company": "Because the company aligns with my values and offers growth opportunities.",
  "what motivates you": "Learning new things, solving challenges, and achieving goals motivate me.",
  "what is your greatest achievement": "Completing projects or academic milestones that improved my confidence.",
  "do you have any questions for us": "Yes, could you tell me about the growth opportunities and work culture?",

  // ✅ General Career & Education
  "how to become full stack developer": "Learn frontend (HTML, CSS, JS, React) and backend (Node.js, Express, MongoDB).",
  "what is internship": "An internship is a short-term work experience to learn and gain exposure.",
  "what are coding languages": "Languages like C, Java, Python, and JavaScript used for software development.",
  "what is project": "A project is practical implementation of your learning and skills.",
  "how to build portfolio": "Include projects, skills, achievements, and resume on a personal website.",
  "what is cloud computing": "Cloud computing allows storing and accessing data over the internet.",
  "what is artificial intelligence": "AI enables machines to simulate human intelligence and decision-making.",
  "what is machine learning": "Machine learning allows computers to learn from data and improve over time.",
  "what is data structure": "A data structure organizes and stores data efficiently for access and modification.",
  "what is algorithm": "An algorithm is a step-by-step method to solve a specific problem.",
  
  // ✅ Fun or fallback
  "hi": "Hello! How can I help you with your interview preparation?",
  "hello": "Hi there! Ready to practice interview questions?",
  "thanks": "You're welcome! Keep learning and stay confident.",
  "thank you": "You're welcome! I’m always here to help you.",
  "bye": "Goodbye! Best of luck for your interviews!",
};
const normalizedText= text.toLowerCase().trim()
const botResponse=botResponses[normalizedText]||`sorry i don't understand. can you please rephrase`
const bot=await Bot.create({
    text:botResponse
})
return res.send({
    userMessage:user.text,
    botMessage:bot.text
})
  } catch (error) {
    console.log(`error in message controller ${error}`)
    return res.send({
        Message:"internal server error",
        status:500
    })
  }
}
