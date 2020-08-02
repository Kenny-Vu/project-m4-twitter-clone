const users = {
  diplomog: {
    handle: "diplomog",
    displayName: "Eve",
    avatarSrc: "/assets/birb-avatar.jpg",
    bannerSrc: "/assets/eve-banner.jpg",
    location: "Whitehall",
    url: "http://fco.gov.uk",
    joined: "2016-02-02T12:00",
    bio: "Best friends with @treasurymog.",
    followingIds: ["treasurymog"],
    followerIds: ["treasurymog"],
    likeIds: ["1212689921057665024"],
  },
  treasurymog: {
    handle: "treasurymog",
    displayName: "Pichin",
    avatarSrc: "/assets/pichin-avatar.jpg",
    bannerSrc: "/assets/pichin-banner.jpg",
    location: "Whitehall, London",
    url: undefined,
    joined: "2016-10-12T12:00",
    bio:
      "I live and work at the Treasury as a mouser but I also have a paw in the finances. Here to help lighten up the political world. Unofficial.",
    followingIds: ["diplomog", "giantcat9"],
    followerIds: ["diplomog", "giantcat9"],
    likeIds: ["1209791721099411456"],
  },
  giantcat9: {
    handle: "giantcat9",
    displayName: "Sir Ibouna the Fifth",
    avatarSrc: "/assets/ibouna-avatar.jpg",
    bannerSrc: "/assets/ibouna-banner.jpg",
    location: undefined,
    url: undefined,
    joined: "2019-09-01T18:00",
    bio:
      "Just giant cats with military hardware. \nInstagram: @giantmilitarycats",
    followingIds: ["treasurymog"],
    followerIds: ["treasurymog"],
    likeIds: [],
  },
};

const tweets = {
  // TreasuryMog
  "1209791721099411456r1": {
    id: "1209791721099411456r1",
    authorHandle: "treasurymog",
    timestamp: "2020-01-19T09:14:00+00:00",
    sortedTimestamp: "2020-01-19T09:14:00+00:00",
    retweetOf: "1209791721099411456",
    likedBy: [],
    retweetedBy: [],
  },
  "1212689921057665024": {
    id: "1212689921057665024",
    authorHandle: "treasurymog",
    timestamp: "2020-01-12T09:14:00+00:00",
    sortedTimestamp: "2020-01-12T09:14:00+00:00",
    likedBy: [],
    retweetedBy: [],
    status:
      "I've been featured on a speedrun of Undertale! Check it out folks!",
    media: [
      {
        type: "img",
        url: "/assets/duck-undertale.jpg",
      },
    ],
  },

  // Diplomog
  "1209791721099411456": {
    id: "1209791721099411456",
    authorHandle: "diplomog",
    timestamp: "2019-12-26T14:38:00+00:00",
    sortedTimestamp: "2019-12-26T14:38:00+00:00",
    likedBy: [],
    retweetedBy: ["treasurymog"],
    status:
      "If you're concerned and want to help the environment, consider donating to my Patreon!",
    media: [],
  },

  "1215324598067245056r2": {
    id: "1215324598067245056r2",
    authorHandle: "diplomog",
    timestamp: "2020-01-19T09:14:00+00:00",
    sortedTimestamp: "2020-01-19T09:14:00+00:00",
    retweetOf: "1215324598067245056",
    likedBy: [],
    retweetedBy: [],
  },

  "1214624813723136002": {
    id: "1214624813723136002",
    authorHandle: "diplomog",
    timestamp: "2020-01-12T04:31:00+00:00",
    sortedTimestamp: "2020-01-12T04:31:00+00:00",
    likedBy: [],
    retweetedBy: [],
    status: `Found an injured butterfly. Anyone wanna give me a helping foot?`,
    media: [
      {
        type: "img",
        url: "/assets/birb-butterfly.jpg",
      },
    ],
  },
  "1209788222324256768": {
    id: "1209788222324256768",
    authorHandle: "diplomog",
    timestamp: "2019-12-25T21:53:00+00:00",
    sortedTimestamp: "2019-12-25T21:53:00+00:00",
    likedBy: [],
    retweetedBy: [],
    status: `Happy Earth day to all! Discussing solutions to global warming, serving 🦆 all over the 🌍.`,
    media: [
      {
        type: "img",
        url: "/assets/duck-discussion.jpg",
      },
    ],
  },
  "1212021009320161280": {
    id: "1212021009320161280",
    authorHandle: "diplomog",
    timestamp: "2019-12-30T19:23:00+00:00",
    sortedTimestamp: "2019-12-30T19:23:00+00:00",
    likedBy: [],
    retweetedBy: [],
    status: `Was rescued by a hooman when I feel in hole. Maybe these hoomans aren't so bad after all!`,
    media: [
      {
        type: "img",
        url: "/assets/duckhooman.jpg",
      },
      // {
      //   type: 'img',
      //   url: '/assets/ENH2rTvWwAYTqQW.jpeg',
      // },
      // {
      //   type: 'img',
      //   url: '/assets/ENH2rYeXYAEAIk7.jpeg',
      // },
    ],
  },
  // Giant Military Cats
  "1215337574526525440": {
    id: "1215337574526525440",
    authorHandle: "giantcat9",
    timestamp: "2020-01-09T13:20:00+00:00",
    sortedTimestamp: "2020-01-09T13:20:00+00:00",
    likedBy: [],
    retweetedBy: [],
    status: `Sir Doggo sure knows how to warmly receive guests. Always a splendid time.`,
    media: [
      {
        type: "img",
        url: "/assets/ibouna-dog.jpg",
      },
    ],
  },
  "1215324598067245056": {
    id: "1215324598067245056",
    authorHandle: "giantcat9",
    timestamp: "2020-01-06T09:20:00+00:00",
    sortedTimestamp: "2020-01-06T09:20:00+00:00",
    likedBy: [],
    retweetedBy: ["diplomog"],
    status: `People will forget what you said, but they will never forget how you made them feel`,
    media: [
      {
        type: "img",
        url: "/assets/duck-duo.jpg",
      },
    ],
  },
  "1215288136026284032": {
    id: "1215288136026284032",
    authorHandle: "giantcat9",
    timestamp: "2019-12-24T14:02:00+00:00",
    sortedTimestamp: "2019-12-24T14:02:00+00:00",
    likedBy: [],
    retweetedBy: [],
    status: `What fine service! I definitely recommend HoomanStrokes.`,
    media: [
      {
        type: "img",
        url: "/assets/duck-stroke.gif",
      },
    ],
  },
  "1215286068716736512": {
    id: "1215286068716736512",
    authorHandle: "giantcat9",
    timestamp: "2019-12-29T22:19:00+00:00",
    sortedTimestamp: "2019-12-29T22:19:00+00:00",
    likedBy: [],
    retweetedBy: [],
    status: `"I have never seen elegance go out of style".`,
    media: [],
  },
  "1215277385404309504": {
    id: "1215277385404309504",
    authorHandle: "giantcat9",
    timestamp: "2020-01-01T11:53:00+00:00",
    sortedTimestamp: "2020-01-01T11:53:00+00:00",
    likedBy: [],
    retweetedBy: [],
    status: `Being male is a matter of birth. Being a gentleduck is a matter of choice.`,
    media: [
      {
        type: "img",
        url: "/assets/duck-mozart.jpg",
      },
    ],
  },
  "1216044243980095488": {
    id: "1216044243980095488",
    authorHandle: "giantcat9",
    timestamp: "2020-01-11T12:08:00+00:00",
    sortedTimestamp: "2020-01-11T12:08:00+00:00",
    likedBy: [],
    retweetedBy: [],
    status: `March of the 10th Quackers battalion`,
    media: [
      {
        type: "img",
        url: "/assets/ducks_march.jpg",
      },
    ],
  },
  "1215996774806106114": {
    id: "1215996774806106114",
    authorHandle: "giantcat9",
    timestamp: "2020-01-11T08:59:00+00:00",
    sortedTimestamp: "2020-01-11T08:59:00+00:00",
    likedBy: [],
    retweetedBy: [],
    status: `"Art by Jenny-Jinya"`,
    media: [
      {
        type: "img",
        url: "assets/duck-art.png",
      },
    ],
  },
  "1215991148579315713": {
    id: "1215991148579315713",
    authorHandle: "giantcat9",
    timestamp: "2020-01-11T08:37:00+00:00",
    sortedTimestamp: "2020-01-11T08:37:00+00:00",
    likedBy: [],
    retweetedBy: [],
    status: `On set for the upcoming Netflix series "Gone with the Quack"!`,
    media: [
      {
        type: "img",
        url: "/assets/classy-duck.jpg",
      },
    ],
  },
  "1215953505451638784": {
    id: "1215953505451638784",
    authorHandle: "giantcat9",
    timestamp: "2020-01-12T17:27:00+00:00",
    sortedTimestamp: "2020-01-12T17:27:00+00:00",
    likedBy: [],
    retweetedBy: [],
    status: `Hennything is possible`,
    media: [
      {
        type: "img",
        url: "/assets/duck-bar.jpeg",
      },
    ],
  },
};

module.exports = {
  users,
  tweets,
};
