import React, { useState } from "react";
import "./styles.css";

var movies = {
  Fantasy: [
    {
      name: "Cinderella",
      image: "images/cinderalla.jpg",
      desc:
        "When her father unexpectedly dies, young Ella finds herself at the mercy of her cruel stepmother and her scheming stepsisters. Never one to give up hope, Ella's fortunes begin to change after meeting a dashing stranger."
    },
    {
      name: "Aladdin",
      image: "images/aladdin.jpg",
      desc:
        "A kind-hearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true."
    },
    {
      name: "Harry Potter and the Socerer's Stone",
      image: "images/harry.jpg",
      desc:
        "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world."
    },
    {
      name: "The Twilight Saga",
      image: "images/twilight.jpg",
      desc:
        "When Bella Swan moves to a small town in the Pacific Northwest, she falls in love with Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire."
    },
    {
      name: "Jumanji-The Next Level",
      image: "images/jumanji the next level.jpg",
      desc:
        "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game."
    },
    {
      name: "Wonder Woman",
      image: "images/wonder woman.jpg",
      desc:
        "When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny."
    },
    {
      name: "Fantastic Beasts and Where to Find Them",
      image: "images/fantastic beasts and where to find them.jpg",
      desc:
        "The adventures of writer Newt Scamander in New York's secret community of witches and wizards seventy years before Harry Potter reads his book in school."
    },
    {
      name: "The Chronicles of Narnia",
      image: "images/narnia.jpg",
      desc:
        "Four kids travel through a wardrobe to the land of Narnia and learn of their destiny to free it with the guidance of a mystical lion."
    },
    {
      name: "Maleficent",
      image: "images/maleficent.jpg",
      desc:
        "A vengeful fairy is driven to curse an infant princess, only to discover that the child may be the one person who can restore peace to their troubled land."
    }
  ],
  Scifi: [
    {
      name: "Passengers",
      image: "images/passengers.jpg",
      desc:
        "A malfunction in a sleeping pod on a spacecraft traveling to a distant colony planet wakes one passenger 90 years early."
    },
    {
      name: "A Wrinkle in Time",
      image: "images/wrinkle in time.jpg",
      desc:
        "After the disappearance of her scientist father, three peculiar beings send Meg, her brother, and her friend to space in order to find him."
    },
    {
      name: "Guardians of the Galaxy",
      image: "images/guardians of galaxy.jpg",
      desc:
        "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe."
    },
    {
      name: "A.I. Artificial Intelligence",
      image: "images/artificial intelligence.jpg",
      desc:
        "A highly advanced robotic boy longs to become 'real' so that he can regain the love of his human mother."
    },
    {
      name: "Minority Report",
      image: "images/minorityReport.jpg",
      desc:
        "In a future where a special police unit is able to arrest murderers before they commit their crimes, an officer from that unit is himself accused of a future murder."
    },
    {
      name: "Timeline",
      image: "images/timeline.jpg",
      desc:
        "A group of archaeologists become trapped in the past when they go there to retrieve a friend. The group must survive in fourteenth century France before they can escape back to the twenty-first century."
    },
    {
      name: "Intersteller",
      image: "images/interstellar.jpg",
      desc:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },
    {
      name: "The Core",
      image: "images/thecore.jpg",
      desc:
        "The only way to save Earth from catastrophe is to drill down to the core and set it spinning again."
    }
  ],

  ChineseDrama: [
    "LoveO2O",
    "The Whirlwind Girl",
    "Maiden Holmes",
    "You are my Destiny",
    "Your Highness Class Monitor",
    "My Unicorn Girl",
    "The King's Avatar"
  ],
  Disney: [
    {
      name: "Frozen",
      image: "images/Frozen.jpg",
      desc:
        "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition."
    },
    {
      name: "The Little Mermaid",
      image: "images/the little mermaid.jpg",
      desc:
        "A mermaid princess makes a Faustian bargain in an attempt to become human and win a prince's love."
    },
    {
      name: "The Lion King",
      image: "images/the lion king.jpg",
      desc:
        "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery."
    },
    {
      name: "Mary Poppins Returns",
      image: "images/mary poppins return.jpg",
      desc:
        "A few decades after her original visit, Mary Poppins, the magical nanny, returns to help the Banks siblings and Michael's children through a difficult time in their lives."
    },
    {
      name: "Coco",
      image: "images/coco.jpg",
      desc:
        "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer."
    },
    {
      name: "Beauty and the Beast",
      image: "images/beauty and the beast.jpg",
      desc:
        "A selfish Prince is cursed to become a monster for the rest of his life, unless he learns to fall in love with a beautiful young woman he keeps prisoner."
    },
    {
      name: "Moana",
      image: "images/moana.jpg",
      desc:
        "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right."
    },
    {
      name: "Alice Through the Looking Glass",
      image: "images/alice through the looking glass.jpg",
      desc:
        "Alice returns to the whimsical world of Wonderland and travels back in time to help the Mad Hatter."
    }
  ]
};


export default function App() {
  var [choice, setchoice] = useState("Fantasy");
  function choiceHandler(choice) {
    setchoice(choice);
  }
  return (
    <div className="App mainbox">
      <h1 className="heading left">
        Movies to watch <span role="img">🍿🎥</span>
      </h1>
      <div className="buttons">
        <button className="button" onClick={() => choiceHandler("Fantasy")}>
          Fantasy
        </button>
        <button className="button" onClick={() => choiceHandler("Scifi")}>
          Sci-fi
        </button>
        <button className="button" onClick={() => choiceHandler("Disney")}>
          Disney
        </button>
      </div>

      <ol className="remove-pad">
        {movies[choice].map((movie) => (
          <li style={{ listStyle: "none" }}>
            <div className="box" style={{}}>
              <div className="image-div">
                <img
                  className="inline img"
                  src={require("../src/" + movie.image)}
                ></img>
              </div>
              <div className="details">
                <h2 className="details-h">{movie.name}</h2>
                <p className="details-p">{movie.desc}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <footer className="footer">
        <div className="social-icons">
          <p className="footer-desc">find me below</p>
          <a
            href="https://www.linkedin.com/in/gaganpreet-kaur-kalsi-2a6650191/"
            className="icon"
          >
            <svg
              style={{ height: "20px", width: "20px" }}
              className="icon"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="linkedin-in"
              class="svg-inline--fa fa-linkedin-in fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/gagan_singhkalsi11/"
            className="icon"
          >
            <svg
              style={{ height: "20px", width: "20px" }}
              className="icon"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="instagram"
              class="svg-inline--fa fa-instagram fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              ></path>
            </svg>
          </a>
          <a href="https://twitter.com/GaganpreetKalsi" className="icon">
            <svg
              style={{ height: "20px", width: "20px" }}
              className="icon"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="twitter"
              class="svg-inline--fa fa-twitter fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              ></path>
            </svg>
          </a>
          <a href="https://github.com/GaganpreetKaurKalsi" className="icon">
            <svg
              style={{ height: "20px", width: "20px" }}
              className="icon"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              class="svg-inline--fa fa-github fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
