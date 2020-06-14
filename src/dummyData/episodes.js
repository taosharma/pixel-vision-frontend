const exampleEpisodes = [
  {
    id: 'an-example-post',
    type: 'episode',
    headerImage: {
      image: 'https://i.imgur.com/cRSW6ar.jpg',
      alt: 'A description of the header image.',
    },
    images: {
      0: {
        image: 'https://i.imgur.com/cRSW6ar.jpg',
        alt: 'A description of the header image.',
      },
    },
    audioLink:
      'https://drive.google.com/file/d/1NV4-B3GGOEQFI1mu4OnnH9-jSN6BvoFl/view?usp=sharing',
    text: {
      title: 'Episode Number - Game Title',
      date: '10 January 2010',
      summary:
        'Ben and Tao introduce themselves, the idea behind the podcast and its origins before jumping straight into analysis of the hilarious and novel RPG game, Disco Elysium. Topics include censorship, discrimination and politics in game stories, save scumming, whether Ben’s an unlucky person, gaming alter-egos and breaking the rigid gamer mindset, and the merits of an in-game sidekick. Spoilers. Content Warning.',
      body: [
        `Ben and Tao introduce themselves, the idea behind the podcast and its origins before jumping straight into analysis of the hilarious and novel RPG game, Disco Elysium. Topics include censorship, discrimination and politics in game stories, save scumming, whether Ben’s an unlucky person, gaming alter-egos and breaking the rigid gamer mindset, and the merits of an in-game sidekick. Spoilers. Content Warning.`,
      ],
      audioExtracts: ['The Simpsons', 'Saturday Night Fever'],
      clarifications: [
        'The game writer is Robert Kurvitz, a Karelian-Estonian novelist. He founded the video game development company ZA/UM in 2016, which employs about 20 developers.',
        'WW2 soldier hiding in Guam jungle didn’t know war had ended.',
        'The official soundtrack is by British Sea Power.',
      ],
      contentWarning: [
        'PEGI 16. Strong language. Reference to drugs, violence and discrimination.',
      ],
    },
    comments: [],
  },
];

export default exampleEpisodes;
