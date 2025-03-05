import React from "react";
import Course from "./Course";

// Highlight the unique benefits of your courses:

// Cyber Security Associate: "Master foundational skills with certifications like CCNA and CEH in just 6 months."
// Cyber Security Professional: "Advance your career with comprehensive training, unlimited interviews, and guaranteed placement."
// Cyber Security Expert: "Become an industry leader with specialized training in Forensic Investigation and Bug Bounty programs."

export const courses = [
  {
    title: "Cyber Security Associate",
    duration: "6 months",
    certifications: [
      "CCNA",
      "CEH",
      "Security Cisco ASA Firewall + VPN",
      "Checkpoint Firewall (CCSA)",
      "Palo Alto Firewall (PCNSA)",
      "Maximum 5 Interviews",
    ],
    benefits: [
      "Master foundational skills with certifications like CCNA and CEH in just 6 months.",
    ],
  },
  {
    title: "Cyber Security Professional",
    duration: "10 months",
    certifications: [
      "CCNA",
      "CEH",
      "CCNP Security",
      "Checkpoint Firewall (CCSA)",
      "Palo Alto Firewall (PCNSA)",
      "N no. of Interviews",
      "100% placement guaranteed on bond",
      "Lifetime Consultation Programme",
      "Soft Skill + Mock Interview Preparation",
    ],
    benefits: [
      "Advance your career with comprehensive training, unlimited interviews, and guaranteed placement.",
    ],
  },
  {
    title: "Cyber Security Expert",
    duration: "12 months+",
    certifications: [
      "CCNA",
      "CEH",
      "CCNP Security",
      "Checkpoint Firewall (CCSA)",
      "Palo Alto Firewall (PCNSA)",
      "Forensic Investigation",
      "Bug Bounty",
      "N no. of Interviews",
      "100% placement guaranteed on bond",
      "Lifetime Consultation Programme",
      "Soft Skills + Mock",
    ],
    benefits: [
      "Become an industry leader with specialized training in Forensic Investigation and Bug Bounty programs.",
    ],
  },
];

function Courses() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {courses.map((course) => (
        <Course
          key={course.title}
          title={course.title}
          duration={course.duration}
          certifications={course.certifications}
          benefits={course.benefits}
        />
      ))}
    </div>
  );
}
export default Courses;
