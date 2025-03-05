import Image from "next/image";
import RegisterForm from "./components/RegisterForm";
import Courses from "./components/Courses";
import CustomCarousel from "@/components/Carousel";
import StudentCard from "./components/StudentCard";
import CompanyCard from "./components/CompanyCard";
import ReviewCard from "./components/ReviewCard";
import { isMobile } from "mobile-device-detect";

const students = [
  {
    name: "Talha Khan",
    course: "CCNA",
    img: "https://ccnstorage.s3.amazonaws.com/Talha_Khan_2_b29f1e02b0.jpg",
  },
  {
    name: "Harsh Pandey",
    course: "CHP",
    img: "https://ccnstorage.s3.amazonaws.com/Harsh_Pandey_1_bf7308f837.jpg",
  },
  {
    name: "Pranit Kondaskar",
    course: "AWS Certified Solutions Architect",
    img: "https://ccnstorage.s3.amazonaws.com/Pranit_Kondaskar_b1bfe00a59.jpg",
  },
  {
    name: "Owais Anssari",
    course: "Cyber Security Essentials",
    img: "https://ccnstorage.s3.amazonaws.com/Owais_Anssari_910f6ee22c.png",
  },
  {
    name: "Vatan Tiwari",
    course: "Full Stack Web Development",
    img: "https://ccnstorage.s3.amazonaws.com/Vatan_Tiwari_5e4cd54e7d.jpg",
  },
  {
    name: "Aditya Pawar",
    course: "Python for Data Science",
    img: "https://ccnstorage.s3.amazonaws.com/Aditya_Pawar_d02aa80436.jpg",
  },
  {
    name: "Pradeep Singh",
    course: "Machine Learning with Python",
    img: "https://ccnstorage.s3.amazonaws.com/Pradeep_Singh_18ab890053.jpg",
  },
  {
    name: "Mansi Mhatre",
    course: "Cloud Computing with Azure",
    img: "https://ccnstorage.s3.amazonaws.com/Mansi_Mhatre_612edacd8b.png",
  },
  {
    name: "Abhishek Dubey",
    course: "DevOps Fundamentals",
    img: "https://ccnstorage.s3.amazonaws.com/Abhishek_Dubey_dd3b126931.jpg",
  },
  {
    name: "Yash Nishad",
    course: "Android App Development",
    img: "https://ccnstorage.s3.amazonaws.com/Yash_Nishad_1d5a9ab3e3.png",
  },
];

const company_logos: string[] = [
  "https://ccnstorage.s3.amazonaws.com/netplace_f7c05a5c22.png",
  "https://ccnstorage.s3.amazonaws.com/IBM_21cfa27577.png",
  "https://ccnstorage.s3.amazonaws.com/cisco_png_logo_3774_5bda491450.png",
  "https://ccnstorage.s3.amazonaws.com/ntt_49026f40e3.png",
  "https://ccnstorage.s3.amazonaws.com/inventa_49be7d6a62.jpg",
  "https://ccnstorage.s3.amazonaws.com/airtel_cd9369ddf8.jpg",
  "https://ccnstorage.s3.amazonaws.com/aks_6634e8a1de.jpg",
  "https://ccnstorage.s3.amazonaws.com/IPCA_b76690ce5b.png",
  "https://ccnstorage.s3.amazonaws.com/checkpoint_logo_stacked_large_blk_afb7826e32.png",
  "https://ccnstorage.s3.amazonaws.com/ESSEN_6b3be7ab96.png",
  "https://ccnstorage.s3.amazonaws.com/microland_0c6b2d80e2.png",
  "https://ccnstorage.s3.amazonaws.com/IIFL_585e45d3fc.png",
  "https://ccnstorage.s3.amazonaws.com/securelink_f3ccb4861a.png",
  "https://ccnstorage.s3.amazonaws.com/sewretek_44e72b5fcc.png",
  "https://ccnstorage.s3.amazonaws.com/anuta_10f21a9b2a.png",
  "https://ccnstorage.s3.amazonaws.com/velocis_de4493db89.png",
];

const student_reviews = [
  {
    name: "Rahul Sharma",
    rating: 4.5,
    comment:
      "The course was really insightful, covering all the fundamental topics in great detail. The instructor explained concepts in a simple yet effective way, making it easier to understand. I particularly liked the hands-on projects, which helped me apply what I learned. Highly recommend it to beginners looking to build a strong foundation.",
    img: "https://ccnstorage.s3.amazonaws.com/Talha_Khan_2_b29f1e02b0.jpg",
  },
  {
    name: "Sneha Patel",
    rating: 5,
    comment:
      "This was one of the best learning experiences I have had! The course structure was well thought out, with a great balance of theory and practical applications. The assignments were challenging yet fun, and I could see real improvement in my skills as I progressed through the course. Would definitely recommend it to anyone looking to upskill!",
    img: "https://ccnstorage.s3.amazonaws.com/Harsh_Pandey_1_bf7308f837.jpg",
  },
  {
    name: "Amit Verma",
    rating: 4,
    comment:
      "I found the course to be very informative, covering all the necessary aspects of the subject. However, I think it could include more real-world case studies and examples to help reinforce the concepts better. Nonetheless, the instructor was very knowledgeable and answered all our queries promptly.",
    img: "https://ccnstorage.s3.amazonaws.com/Pranit_Kondaskar_b1bfe00a59.jpg",
  },
  {
    name: "Neha Joshi",
    rating: 4.8,
    comment:
      "Absolutely loved this course! The way the topics were explained made it really easy to grasp even the more complex concepts. The quizzes and exercises were well-designed to test our understanding, and I found the community discussions really helpful. I feel much more confident in my skills now.",
    img: "https://ccnstorage.s3.amazonaws.com/Owais_Anssari_910f6ee22c.png",
  },
  {
    name: "Vikram Singh",
    rating: 3.5,
    comment:
      "While the course content was good, I felt that some sections were a bit rushed, and I would have liked more detailed explanations on certain topics. That said, the instructor was very responsive to doubts, and the additional resources provided were useful. A solid course, but there’s room for improvement.",
    img: "https://ccnstorage.s3.amazonaws.com/Vatan_Tiwari_5e4cd54e7d.jpg",
  },
  {
    name: "Pooja Patel",
    rating: 5,
    comment:
      "I had an amazing experience taking this course! The lectures were engaging, and the examples used were very relatable. The best part was the project at the end, where I could apply everything I had learned. It was a truly hands-on learning experience, and I feel well-equipped to use these skills in real-life scenarios.",
    img: "https://ccnstorage.s3.amazonaws.com/Pradeep_Singh_18ab890053.jpg",
  },
  {
    name: "Rohan Malhotra",
    rating: 4.2,
    comment:
      "This course was a great investment of my time. The concepts were explained in a structured manner, making it easy to follow along. The practical assignments helped reinforce the topics, and I appreciated the additional reading materials provided. I would love to see more advanced topics covered in a future course!",
    img: "https://ccnstorage.s3.amazonaws.com/Aditya_Pawar_d02aa80436.jpg",
  },
  {
    name: "Kiran Das",
    rating: 3.8,
    comment:
      "Overall, the course was well put together, but I found the pace a bit slow at times. Some sections could have been more concise. That being said, I did learn a lot, and I appreciate the effort put into making complex topics easy to understand. The instructor’s teaching style was clear and precise.",
    img: "https://ccnstorage.s3.amazonaws.com/Vatan_Tiwari_5e4cd54e7d.jpg",
  },
  {
    name: "Alok Tiwari",
    rating: 4.7,
    comment:
      "A fantastic course! The material was up-to-date, and the projects allowed me to get hands-on experience. I particularly enjoyed the interactive elements, such as quizzes and coding challenges. The instructor was very engaging, and the examples used made the concepts very easy to grasp.",
    img: "https://ccnstorage.s3.amazonaws.com/Mansi_Mhatre_612edacd8b.png",
  },
  {
    name: "Aditya Kumar",
    rating: 4.9,
    comment:
      "This course exceeded my expectations! The explanations were clear, and I loved how the instructor broke down complex topics into simpler segments. The community support was great, and I felt like I was actually learning in a classroom environment despite it being online. I would recommend this to anyone looking to gain expertise in this field!",
    img: "https://ccnstorage.s3.amazonaws.com/Yash_Nishad_1d5a9ab3e3.png",
  },
];

// Current headline, "Want to become an CEH Expert?", is clear but could be more compelling. Consider emphasizing the value proposition:

// "Transform into a Certified Ethical Hacker and Secure Your Future in Cybersecurity!"

// Follow this with a subheadline that addresses common pain points:

// "Missed Out on Campus Placements? Join CCN and Secure Your Dream Job in Just 6 Months!"

// Need Action-Oriented CTAs
// USE-
// "Secure My Spot Now!"
// "Start My Cybersecurity Journey Today!"

export default function Home() {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-4 md:h-[90vh]" id="register">
        <div className="md:col-span-2 ">
          <div className="flex flex-col justify-center h-full">
            <h1 className=" font-bold md:text-6xl text-4xl md:mt-0 mt-4">
              Transform into a Certified Ethical Hacker and Secure Your Future
              in Cybersecurity!
            </h1>
            <p className="md:mt-4 mt-2 md:text-3xl text-xl my-2">
              Missed Out on Campus Placements? Join CCN and Secure Your Dream
              Job in Just 6 Months!
            </p>
            <p className="md:mt-4 mt-2 md:text-xl ">
              Don't miss out—claim your free demo today!
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex w-full  md:items-center h-full">
            <RegisterForm />
          </div>
        </div>
      </div>
      <div id="course" className="mt-8 md:my-18">
        <h1 className="md:text-5xl text-3xl font-bold text-center  mb-8">
          Our Courses
        </h1>
        <Courses />
      </div>

      <div className="mt-8 md:my-18">
        <h1 className="md:text-5xl text-3xl font-bold text-center  mb-8">
          Placements
        </h1>
        <div className="mt-2">
          <CustomCarousel
            no_of_items={4}
            no_of_items_mobile={1}
            items={students.map((item, index) => (
              <StudentCard key={item.name + index} {...item} />
            ))}
          />
        </div>
        <h1 className="md:text-5xl text-3xl font-bold text-center my-8">
          Our Partners
        </h1>
        <div className="mt-2">
          <CustomCarousel
            no_of_items={6}
            no_of_items_mobile={2}
            items={company_logos.map((item) => (
              <CompanyCard key={item} logo={item} />
            ))}
          />
        </div>
        <h1 className="md:text-5xl text-3xl font-bold text-center my-8">
          What Our Students Say
        </h1>
        <div className="mt-2">
          <CustomCarousel
            no_of_items={1}
            items={student_reviews.map((item) => (
              <ReviewCard key={item.comment} {...item} />
            ))}
          />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 z-20">
        <a href="/register">
          <img
            src="Register-Now-GIF-1.gif"
            width={250}
            height={300}
            alt="register now gif"
          />
        </a>
      </div>
    </div>
  );
}
