console.log("himanshu");
console.log("Sameer");
console.log("Rishabh");
console.log("Ankit");
function Greeting() {
  console.log("Hii ! Hello ! How Are You ?");
}
console.log("script.js Updated");

const greet = (req, res) => {
  console.log("req", req);
  return res;
};

function GreetingX() {
  console.log("Hii ! Hello ! How Are You X?");
}
function GreetingY() {
  console.log("Hii ! Hello ! How Are You X?");
}

function GreetingZ() {
  console.log("Hii ! Hello ! How Are You Z?");
}

function GreetingSameer() {
  console.log("Hii ! Hello ! How Are You Sameer ?");
}

const people = {
  name: "Sameer",
  age: 24,
  location: "India",
  profession: "Developer",
  skills: ["JavaScript", "React", "NodeJS"],
  greet: function () {
    console.log("Hello, I am " + this.name);
  },
  info: function () {
    console.log(
      `I am ${this.name}, a ${this.age} year old ${this.profession} from ${
        this.location
      }. My skills include ${this.skills.join(", ")}.`
    );
  },
  mindset: function () {
    console.log("Stay positive and keep learning!");
  },
};
