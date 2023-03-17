import image1 from "@/assets/img/1-skills.png";
import image2 from "@/assets/img/2-skills.png";
import image3 from "@/assets/img/3-skills.png";
import image4 from "@/assets/img/4-skills.png";
import image5 from "@/assets/img/5-skills.png";

import nextJSLogoDark from "@/assets/img/skills/nextjs-dark.png";
import nextJSLogoLight from "@/assets/img/skills/nextjs-light.png";
import reactJSLogoDark from "@/assets/img/skills/react-logo-dark.png";
import reactJSLogoLight from "@/assets/img/skills/react-logo-light.png";
import vueJSLogoDark from "@/assets/img/skills/vue-logo-dark.png";
import vueJSLogoLight from "@/assets/img/skills/vue-logo-light.png";
import typescriptLogoDark from "@/assets/img/skills/typescript-dark.png";
import typescriptLogoLight from "@/assets/img/skills/typescript-light.png";

import laravelLogoDark from "@/assets/img/skills/laravel-dark.png";
import laravelLogoLight from "@/assets/img/skills/laravel-light.png";
import nodejsLogoDark from "@/assets/img/skills/nodejs-dark.png";
import nodejsLogoLight from "@/assets/img/skills/nodejs-light.png";
import djangoLogoDark from "@/assets/img/skills/django-dark.png";
import djangoLogoLight from "@/assets/img/skills/django-light.png";
import socketioLogoDark from "@/assets/img/skills/socket-io-dark.png";
import socketioLogoLight from "@/assets/img/skills/socket-io-light.png";

import mysqlLogoDark from "@/assets/img/skills/mysql-dark.png";
import mysqlLogoLight from "@/assets/img/skills/mysql-light.png";
import postgresqlLogoDark from "@/assets/img/skills/postgresql-dark.png";
import postgresqlLogoLight from "@/assets/img/skills/postgresql-light.png";
import mongodbLogoDark from "@/assets/img/skills/mongodb-dark.png";
import mongodbLogoLight from "@/assets/img/skills/mongodb-light.png";

export const FIELD_LIST = [
  "Front End Developer",
  "Back End Developer",
  "Full Stack Developer",
  "Data Analytics Student",
];

export const workHistory = [
  {
    name: "Maligaya Taxi",
    duration: "Feb 2017 - Sept 2018",
    position: "IT Staff / Web Developer",
    description: [
      "The Information Technology (IT) staff is responsible for the smooth operation of the company’s computer systems. They install and maintain software, hardware and networks.",
      "They also provide support to users and train them on how to use the different systems. The IT staff is also responsible for ensuring that the company’s data is secure.",
      "IT staff must constantly keep up with new trends and developments to ensure that their organization’s systems are up to date.",
      "IT staff often train users on how to use new computer systems and software. With the ever-changing landscape of technology,",
    ],
  },
  {
    name: "Applicable Limited",
    duration: "Oct 2018 - Oct 2019",
    position: "Web Developer (Front End)",
    description: [
      "Determining the structure and design of web pages. ",
      "Ensuring user experience determines design choices.",
      "Developing features to enhance the user experience.",
      "Optimizing web pages for maximum speed and scalability.",
    ],
  },
  {
    name: "Flatworld Solutions",
    duration: "Mar 2020 - Dec 2020",
    position: "Web Developer (Full Stack)",
    description: [
      "Developing front end and back end website architecture.",
      "Designing user interactions on web pages.",
      "Web developer should have a strong understanding of web standards and accessibility.",
      "Ensuring responsiveness of applications.",
      "Meeting both technical and consumer needs.",
    ],
  },
  {
    name: "Acquirely",
    duration: "July 2021 - Feb 2023",
    position: "Web Developer (Front End)",
    description: [
      "Develop new user-facing features",
      "Build reusable code and libraries for future use",
      "Ensure the technical feasibility of UI/UX designs",
      "Optimize application for maximum speed and scalability",
      "Translating design in Figma to reusable components",
    ],
  },
];

export const imageCarousel = [
  {
    name: "carousel-1",
    src: image1.src,
  },
  {
    name: "carousel-2",
    src: image2.src,
  },
  {
    name: "carousel-3",
    src: image3.src,
  },
  {
    name: "carousel-4",
    src: image4.src,
  },
  {
    name: "carousel-5",
    src: image5.src,
  },
];

export const skillsets = [
  {
    type: "Front End",
    list: [
      {
        name: "react-js",
        src: {
          light: reactJSLogoLight.src,
          dark: reactJSLogoDark.src,
        },
      },
      {
        name: "next-js",
        src: {
          light: nextJSLogoLight.src,
          dark: nextJSLogoDark.src,
        },
      },
      {
        name: "vue-js",
        src: {
          light: vueJSLogoLight.src,
          dark: vueJSLogoDark.src,
        },
      },
      {
        name: "typescript-js",
        src: {
          light: typescriptLogoLight.src,
          dark: typescriptLogoDark.src,
        },
      },
    ],
  },
  {
    type: "Back End",
    list: [
      {
        name: "laravel-php",
        src: {
          light: laravelLogoLight.src,
          dark: laravelLogoDark.src,
        },
      },
      {
        name: "node-js",
        src: {
          light: nodejsLogoLight.src,
          dark: nodejsLogoDark.src,
        },
      },
      {
        name: "django-python",
        src: {
          light: djangoLogoLight.src,
          dark: djangoLogoDark.src,
        },
      },
      {
        name: "socket-io",
        src: {
          light: socketioLogoLight.src,
          dark: socketioLogoDark.src,
        },
      },
    ],
  },
  {
    type: "Database",
    list: [
      {
        name: "mysql",
        src: {
          light: mysqlLogoLight.src,
          dark: mysqlLogoDark.src,
        },
      },
      {
        name: "postgresql",
        src: {
          light: postgresqlLogoLight.src,
          dark: postgresqlLogoDark.src,
        },
      },
      {
        name: "mongo-db",
        src: {
          light: mongodbLogoLight.src,
          dark: mongodbLogoDark.src,
        },
      },
    ],
  },
];
