import React, { Component } from "react";
import johnwicktrailer from "../assets/johnwick_trailer_2023.mp4";
import avatartrailer from "../assets/avatar_2023.mp4";
import spidermantrailer from "../assets/spiderman_2023.mp4";
import missiontrailer from "../assets/mi_2023.mp4";

export default class Carousel extends Component {
  render() {
    return (
      <div>
        <div className="carousel w-full h-[40rem] overflow-hidden">
          <div id="slide1" className="carousel-item relative w-full">
            <video
              autoPlay
              muted
              loop
              className="absolute z-0 object-cover w-full  h-full"
            >
              <source src={johnwicktrailer} />
            </video>
            <div className="absolute z-1 w-full h-full top-40 left-64 flex flex-col justify-center align-middle">
              <p className="text-white bg-red-600 w-fit p-3 font-extrabold italic ml-3">
                UPCOMING MOVIE
              </p>
              <p className="text-white p-3 font-bold text-2xl">
                John Wick 4 (2023)
              </p>
              <p className="text-white w-1/4 p-3 text-justify">
                With the price on his head ever increasing, legendary hit man
                John Wick takes his fight against the High Table global as he
                seeks out the most powerful players in the underworld, from New
                York to Paris to Japan to Berlin.
              </p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <video
              autoPlay
              muted
              loop
              className="absolute z-0 object-cover w-full  h-full"
            >
              <source src={avatartrailer} />
            </video>
            <div className="absolute z-1 w-full h-full top-40 left-64 flex flex-col justify-center align-middle">
              <p className="text-white bg-red-600 w-fit p-3 font-extrabold italic ml-3">
                UPCOMING MOVIE
              </p>
              <p className="text-white p-3 font-bold text-2xl">
                Avatar: The Way of Water (2022)
              </p>
              <p className="text-white w-1/4 p-3 text-justify">
                Jake Sully and Ney'tiri have formed a family and are doing
                everything to stay together. However, they must leave their home
                and explore the regions of Pandora. When an ancient threat
                resurfaces, Jake must fight a difficult war against the humans.
              </p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <video
              autoPlay
              muted
              loop
              className="absolute z-0 object-cover w-full  h-full"
            >
              <source src={spidermantrailer} />
            </video>
            <div className="absolute z-1 w-full h-full top-40 left-64 flex flex-col justify-center align-middle">
              <p className="text-white bg-red-600 w-fit p-3 font-extrabold italic ml-3">
                UPCOMING MOVIE
              </p>
              <p className="text-white p-3 font-bold text-2xl">
                Spider-Man: Across the Spider-Verse (2023)
              </p>
              <p className="text-white w-1/4 p-3 text-justify">
                Miles Morales embarks on an epic adventure that will transport
                Brooklyn's full-time, friendly neighbourhood Spider-Man across
                the Multiverse to join forces with Gwen Stacy and a new team.
              </p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <video
              autoPlay
              muted
              loop
              className="absolute z-0 object-cover w-full  h-full"
            >
              <source src={missiontrailer} />
            </video>
            <div className="absolute z-1 w-full h-full top-40 left-64 flex flex-col justify-center align-middle">
              <p className="text-white bg-red-600 w-fit p-3 font-extrabold italic ml-3">
                UPCOMING MOVIE
              </p>
              <p className="text-white p-3 font-bold text-2xl">
                Mission: Impossible – Dead Reckoning
              </p>
              <p className="text-white w-1/4 p-3 text-justify">
                Mission: Impossible – Dead Reckoning Part One is an upcoming
                American action spy film written, produced, and directed by
                Christopher McQuarrie. It is the sequel to Mission: Impossible –
                Fallout and is the seventh installment in the Mission:
                Impossible film series
              </p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
