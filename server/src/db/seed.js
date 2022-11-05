import { FileModel } from "../models/index.js";

const gifs = [
  "https://media.tenor.com/rVWjMQTKy2MAAAAC/hugs-friends.gif",
  "https://media.tenor.com/Nj8KSoQro2oAAAAd/sad-crying.gif",
  "https://media.tenor.com/elQlNR64elkAAAAC/happy-friday1.gif",
  "https://media.tenor.com/hfOsQwdPcyMAAAAC/dog-smile.gif",
  "https://media.tenor.com/5pI6VL-8HUcAAAAC/elf-santa-is-coming.gif",
  "https://media.tenor.com/uXpomOQHKzwAAAAC/holiday-classics-elf.gif",
  "https://media.tenor.com/tToyyXFwyagAAAAd/ryan-reynolds-mon.gif",
  "https://media.tenor.com/MKaulbgnjQoAAAAd/werk-sassy.gif",
  "https://media.tenor.com/7D7anMLXzKAAAAAd/nodding-rupaul.gif",
  "https://media.tenor.com/FpwfkbDoSzsAAAAd/its-just-so-much-fun-to-watch-rupaul.gif",
  "https://media.tenor.com/H2gTFeU0g5sAAAAC/cat-work.gif",
  "https://media.tenor.com/Isg1Jd_yqPMAAAAC/thank-you-thank-you-alin.gif",
  "https://media.tenor.com/VPtj_CuypecAAAAC/cant-thankyou-enough.gif",
  "https://media.tenor.com/ZCWxZlxIHrkAAAAC/i-cant-thank-you-enough-ollie-dixon.gif",
  "https://media.tenor.com/7GbS8wcdJpAAAAAC/thank-you-again-crisstopher.gif",
  "https://media.tenor.com/8LjyBBKUKgQAAAAC/rainbow-gay.gif",
];

const seedGifs = async () => {
  gifs.map(async (gif) => {
    try {
      await FileModel.create({
        title: "This is my GIF",
        fileUrl: gif,
        tag: "JustForFun",
      });
    } catch (error) {
      console.log(error);
    }
  });
};

export default seedGifs;
