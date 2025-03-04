import React from "react";
import Course from "./Course";

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
        />
      ))}
    </div>
  );
}
export default Courses;
