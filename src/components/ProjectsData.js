import recyclaidpic from "../assets/recyclaidpic.png";
import topletspic from "../assets/topletspic.png";

const projects = [
  {
    id: 1,
    title: "RECYCLAID",
    description: "Recyclaid is a platform where users can sell or buy cheaper construction materials in a sustainable way, contributing to the circular economy.",
    credits: "This was the final project of the bootcamp followed at Le Wagon Brussels.",
    image:`${recyclaidpic}`,
    link: "http://www.recyclaid.xyz/",
  },
  {
    id: 2,
    title: "TOPLETS",
    description: "Toplets is a replica of the AirBnb app but to rent toilets.",
    credits: "This was an exercise in preparation for the final project of the bootcamp followed at Le Wagon Brussels.",
    image: `${topletspic}`,
    link: "https://toilets-airbnb.herokuapp.com/",
  },

]

export default projects;
