import { useEffect } from "react";

function Gallery() {

  const timelineData = [
    {
      title: "Start!?😂",
      date: " you were so bf type that day 😂😂",
      type: "image",
      src: "/images/1i.jpeg",
      text: " This was just as friends but maybe the starting point! "
    },
    {
      title: "This is def the change🌸",
      date: "ne uuvvtti vita, na viluthuten😂 ",
      type: "video",
      src: "/videos/2v.mp4",
      text: "Birthday gift eh ne than😂 ."
    },
    {
      title: "This after church",
      date: "you said you need time ! Enaku nethu night enna naduchu nae marathuten😂😂cuz i dont remember what i said to you",
      type: "video",
      src: "/videos/3v.mp4",
      text: "But loved it !!!!"
    },
    {
      title: "your a pookie boy tho !!✨",
      date: " ",
      type: "video",
      src: "/videos/4v.mp4",
      text: "i love you <3"
    },
    {
      title: "Christmas was also comming ✨",
      date: "I wanted you as my child and i did searched and picked you! ",
      type: "video",
      src: "/videos/5v.mp4",
      text: "but you didnt want me as your mom 😏🥹 But were you happy that i was your mom !! "
    },
    {
      title: "First dare and also the last time neae vanthu enkuda okathathu😏😏",
      date: "Look the shirt !",
      type: "video",
      src: "/videos/6v.mp4",
      text: "were it again please! 🥹"
    },
    {
      title: "This was the first time to that milk shop ",
      date: " ",
      type: "image",
      src: "/images/7i.jpeg",
      text: "<3"
    },
    {
      title: "This Day was good !",
      date: " I loved the way you keep holding my hand for a long time! ",
      type: "image",
      src: "/images/8i.jpeg",
      text: "<3"
    },
    {
      title: "First day to Crave and you asked for a pic !",
      date: " You loved something i did and kept on asking for that 😂",
      type: "image",
      src: "/images/9i.jpeg",
      text: "<3"
    },
    {
      title: "I want to be by your side ! ",
      date: " You loved something i did and kept on asking for that 😂",
      type: "image",
      src: "/images/10i.jpeg",
      text: "<3"
    },
     {
      title: "I admire you in a lot of ways ",
      date: " You are so unique 🎀",
      type: "image",
      src: "/images/11i.jpeg",
      text: "<3"
    },
    {
      title: " Loved this day ",
      date: "",
      type: "video",
      src: "/videos/12v.mp4",
      text: "You said i looked pretty this day !!"
    },
     {
      title: "This pic so funny ! ",
      date: " But i loved this day and the food at pattinapakam loved it 🎀",
      type: "image",
      src: "/images/13i.jpeg",
      text: ""
    },
     {
      title: "ITC - Hot chocolate  ",
      date: " ",
      type: "video",
      src: "/videos/14v.mp4",
      text: "<3"
    },

     {
      title: " ✨✨New Year✨✨",
      date: "This is actually, i wanted to give for christmas !",
      type: "video",
      src: "/videos/15v.mp4",
      text: "I been thinking ! does you car has a name !?? neriya yosipen but marathuruven😂"
    },

 {
      title: " ✨✨✨",
      date: "Its cute so cute in your car than your room ! 😂😏",
      type: "video",
      src: "/videos/16v.mp4",
      text: "luv u"
    },

{
      title: " ✨😉Una epudilam rasika mudiyumo apudilam 🥰✨",
      date: "",
      type: "video",
      src: "/videos/17v (2).mp4",
      text: "I am tot a possessive i have to admit😂😏 "
    },
    {
      title: "Bask ",
      date: " 🎀",
      type: "image",
      src: "/images/18i.jpeg",
      text: "You said ne eruka modhu vera yarum paka thonala 😂"
    },
    {
      title: "Ayoo This day!🎀  ",
      date: "something felt so clam this day ",
      type: "image",
      src: "/images/19i.jpeg",
      text: "Less talks but 😂 a lot of love 💯 "
    },
    {
      title: " ✨🥰✨",
      date: " ",
      type: "video",
      src: "/videos/20v.mp4",
      text: " I can literally see you for whole day(may sound cringe but unmai!) "
    },
     {
      title: " ✨This day I felt like you're my World✨",
      date: "I heard that you felt so sad,photo thing ",
      type: "video",
      src: "/videos/21v.mp4",
      text: "entha class la full attention un mela than erutthuchu idk why i felt so emotional and i wanted to give you everything and see you happy!! Thats why i wanted to take you somewhere and unkita pesanum pola eruthuchu , enaku una aniku hug panni unkita na epodumae un kuda erupu in your happines and sadness , whomevers stays in your life but i wil and i will keep loving you solla thonunuchu. but ethula la oru 10% han sonen 😂"
    },
    {
      title: "Jerosh i Believe in you 🎀  ",
      date: "Even tho you say no but i do in whatever you wanna do  ",
      type: "image",
      src: "/images/22i.jpeg",
      text: "💯 "
    },
     {
      title: "🎀  ",
      date: "😂😂😂  ",
      type: "image",
      src: "/images/23i.jpeg",
      text: "💯 "
    },
    {
      title: " ✨",
      date: "",
      type: "video",
      src: "/videos/24v.mp4",
      text: "I love it when you understand and accept what i tell you "
    },

    {
      title: "Bald  ",
      date: "😂😂😂  ",
      type: "image",
      src: "/images/25i.jpeg",
      text: " "
    },
  
  {
      title: " ✨",
      date: " You can trust me💯 ",
      type: "video",
      src: "/videos/26v.mp4",
      text: " I am so loyal 😂😂  "
    },

    {
      title: "😍My favorite Picture 😍  ",
      date: "" ,
      type: "image",
      src: "/images/27i.jpeg",
      text: "You look so natural and the smile 💯😌 "
    },
    {
      title: " ✨",
      date: " You Have always been there💯 ",
      type: "video",
      src: "/videos/28v.mp4",
      text: " Always there for you!!  "
    },
    {
      title: " CUte la !?😂✨",
      date: " 💯 ",
      type: "video",
      src: "/videos/29v.mp4",
      text: "Thank For everything jerosh ! I Love you So Much 🎀😌💯 "
    },
];


  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-pink-50 to-white py-24 px-6 overflow-hidden">

      {/* Floating romantic background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute float-heart text-pink-300 opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${16 + Math.random() * 20}px`,
              animationDuration: `${5 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            💗
          </span>
        ))}
      </div>

      <h1 className="text-5xl font-bold text-center text-pink-600 mb-24 relative z-10">
        The Timeline (Scroll down) 💌
      </h1>

      <div className="relative max-w-5xl mx-auto">

        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-pink-400 to-pink-200 h-full transform -translate-x-1/2"></div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item opacity-0 translate-y-16 transition-all duration-1000 ease-out mb-24 flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="w-full md:w-1/2 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-6 hover:scale-105 hover:shadow-pink-200 transition-all duration-500 relative z-10">

              {/* Dot indicator */}
              <div className="absolute -left-6 top-6 w-4 h-4 bg-pink-500 rounded-full border-4 border-white shadow-lg md:block hidden"></div>

              <h2 className="text-2xl font-bold text-pink-500 mb-2">
                {item.title}
              </h2>

              <p className="text-sm text-gray-400 mb-4">
                {item.date}
              </p>

              {/* IMAGE OR VIDEO */}
              {item.type === "image" ? (
 <img
  src={item.src}
  alt=""
  className="rounded-2xl mb-4 w-full max-h-[400px] object-contain bg-white"
/>

) : (
  <video
  src={item.src}
  autoPlay
  loop
  muted
  playsInline
  className="rounded-2xl mb-4 w-full max-h-[400px] object-contain bg-black"
/>

)}


              <p className="text-gray-600 leading-relaxed">
                {item.text}
              </p>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Gallery;
