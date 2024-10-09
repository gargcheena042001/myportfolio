import React from "react";
import mypik from "../assets/mypik.jpg"
import Carroussel from "./slider/carosuel";
import { v4 as uuidv4 } from "uuid";
import Card from "./slider/Card";

export default function About() {
    let cards = [
        {
          key: uuidv4(),
          content: (
            <Card imagen={mypik} />
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card imagen={mypik} />
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card imagen={mypik} />
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card imagen={mypik} />
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card imagen={mypik} />
          )
        }
      ];
      
    return (
        <div className=" bg-white ">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className=" md:space-y-6 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">          
                <div>
      <Carroussel
        cards={cards}
        height="400px"
        width="40%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
                       </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            A passionate Full Stack <br/>Web Developer
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Hi, I am <span className="text-orange-800 font-bold">Cheena</span>, currently pursuing an MCA. I am a motivated software developer with expertise in <span className="text-orange-800 font-bold">Java, SQL, and the MERN stack</span> , skilled in creating robust applications that enhance user experience. Proficient in both front-end and back-end development, I have a solid understanding of database management and RESTful API design.
                        </p>
                        <p className="mt-4 text-gray-600">
                        Additionally, I excel in developing full-stack solutions with MongoDB, Express.js, React, and Node.js. Passionate about leveraging technology to solve complex problems, I am eager to contribute to innovative projects.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}