import { Module, Term, TermModule } from "./interfaces/types";

export const getCourseInstances = (terms: Term[], courseCode: string) => {
  let instances: TermModule[] = [];
  terms.forEach((t, i) => {
    t.takenCourses.forEach((c) => {
      if (c.code === courseCode) {
        instances.push({
          term: i,
          code: courseCode,
          status: c.status,
        });
      }
    });
  });
  return instances;
};

export const Courses: Module[] = [
  {
    name: "Algorithms and Data Structures I",
    id: "ADS1",
    slack: "#cm1035-algos-data-i",
    credits: 15,
    code: "CM1035",
    lvl: 4,
  },
  {
    name: "Computational Mathematics",
    id: "CM",
    slack: "#cm1015-computational-math",
    credits: 15,
    code: "CM1015",
    lvl: 4,
  },
  {
    name: "Discrete Mathematics",
    id: "DM",
    slack: "#cm1020-discrete-math",
    credits: 15,
    code: "CM1020",
    lvl: 4,
  },
  {
    name: "Fundamentals of Computer Science",
    id: "FCS",
    slack: "#cm1025-fundamental-cs",
    credits: 15,
    code: "CM1025",
    lvl: 4,
  },
  {
    name: "How Computers Work",
    id: "HCW",
    slack: "#cm1030-hcw",
    credits: 15,
    code: "CM1030",
    lvl: 4,
  },
  {
    name: "Introduction to Programming I",
    id: "ITP1",
    slack: "#cm1005-intro-prog-i",
    credits: 15,
    code: "CM1005",
    lvl: 4,
  },
  {
    name: "Introduction to Programming II",
    id: "ITP2",
    slack: "#cm1010-intro-prog-ii",
    credits: 15,
    code: "CM1010",
    lvl: 4,
  },
  {
    name: "Web Development",
    id: "WD",
    slack: "#cm1040-web-dev",
    credits: 15,
    code: "CM1040",
    lvl: 4,
  },
  {
    name: "Agile Software Projects",
    id: "ASP",
    slack: "#cm2020-agile-software-projects",
    credits: 15,
    code: "CM2020",
    lvl: 5,
  },
  {
    name: "Algorithms and Data Structures II",
    id: "ADS2",
    slack: "#cm2035-algos-data-ii",
    credits: 15,
    code: "CM2035",
    lvl: 5,
  },
  {
    name: "Computer Security",
    id: "CSec",
    slack: "#cm2025-computer-security",
    credits: 15,
    code: "CM2025",
    lvl: 5,
  },
  {
    name: "Databases, Networks and the Web",
    id: "DNW",
    slack: "#cm2040-databases-networks-web",
    credits: 15,
    code: "CM2040",
    lvl: 5,
  },
  {
    name: "Graphics Programming",
    id: "GP",
    slack: "#cm2030-graphics-programming",
    credits: 15,
    code: "CM2030",
    lvl: 5,
  },
  {
    name: "Object Oriented Programming",
    id: "OOP",
    slack: "#cm2005-object-oriented-programming",
    credits: 15,
    code: "CM2005",
    lvl: 5,
  },
  {
    name: "Programming with Data",
    id: "PWD",
    slack: "#cm2015-programming-with-data",
    credits: 15,
    code: "CM2015",
    lvl: 5,
  },
  {
    name: "Software Design and Development",
    id: "SDD",
    slack: "#cm2010-software-design-development",
    credits: 15,
    code: "CM2010",
    lvl: 5,
  },

  {
    name: "3D Graphics and Animation",
    credits: 15,
    code: "CM3045",
    lvl: 6,
    id: "3DGA",
    slack: "#cm3045-3d-graphics-animation",
  },

  {
    name: "Advanced Web Development",
    credits: 15,
    code: "CM3035",
    lvl: 6,
    id: "AWD",
    slack: "#cm3035-adv-web-dev",
  },

  {
    name: "Artificial Intelligence",
    credits: 15,
    code: "CM3020",
    lvl: 6,
    id: "AI",
    slack: "#cm3020-artificial-intelligence",
  },

  {
    name: "Data Science",
    credits: 15,
    code: "CM3005",
    lvl: 6,
    id: "DS",
    slack: "#cm3005-data-science",
  },
  {
    name: "Databases and Advanced Data Techniques",
    credits: 15,
    code: "CM3010",
    lvl: 6,
    id: "DADT",
    slack: "#cm3010-databases-advanced-data-techniques",
  },

  {
    name: "Games Development",
    credits: 15,
    code: "CM3030",
    lvl: 6,
    id: "GD",
    slack: "#cm3030-games-development",
  },
  {
    name: "Intelligent Signal Processing",
    credits: 15,
    code: "CM3065",
    lvl: 6,
    id: "ISP",
    slack: "#cm3065-intelligent-signal-processing",
  },

  {
    name: "Machine Learning and Neural Networks",
    credits: 15,
    code: "CM3015",
    lvl: 6,
    id: "MLNN",
    slack: "#cm3015-machine-learning-and-neural-networks",
  },
  {
    name: "Mobile Development",
    credits: 15,
    code: "CM3050",
    lvl: 6,
    id: "MD",
    slack: "#cm3050-mobile-development",
  },

  {
    name: "Natural Language Processing",
    credits: 15,
    code: "CM3060",
    lvl: 6,
    id: "NLP",
    slack: "#cm3060-natural-language-processing",
  },

  {
    name: "Physical Computing and Internet of Things",
    credits: 15,
    code: "CM3040",
    lvl: 6,
    id: "IOT",
    slack: "#cm3040-physical-computing-internet-of-things",
  },

  {
    name: "Virtual Reality",
    credits: 15,
    code: "CM3025",
    lvl: 6,
    id: "VR",
    slack: "#cm3025-virtual-reality",
  },
];
