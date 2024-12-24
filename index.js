// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware to enable CORS (cross-origin requests)
app.use(cors());

app.get('/',(req,res)=> {
    res.send('Hello,this is the API root!')
}

)
// Dummy movies data
const dummyMovies = [
    { 
        id: 1, 
        title: "The Shawshank Redemption", 
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", 
        director: "Frank Darabont", 
        releaseDate: "1994-09-22", 
        imdbRating: 9.3, 
        brief: "Shawshank Redemption tells the story of Andy Dufresne, a man wrongly imprisoned for his wife’s murder, who creates an unlikely friendship with fellow inmate Ellis Redding. Their lives are intertwined through the struggles of surviving a brutal prison system. Andy uses his intelligence and skills to find a way to outsmart the corrupt prison system while maintaining hope through his friendship with Red. The movie explores themes of friendship, redemption, and the human spirit.", 
        imdbLink: "https://www.imdb.com/title/tt0111161/", 
        genre: "Drama" 
      },
      { 
        id: 2, 
        title: "The Godfather", 
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", 
        director: "Francis Ford Coppola", 
        releaseDate: "1972-03-24", 
        imdbRating: 9.2, 
        brief: "The Godfather is a powerful crime saga focusing on the Corleone family in post-war New York. Don Vito Corleone, the patriarch, leads his family’s criminal empire but must pass on control to his son Michael, who is reluctant to be involved in the family business. The film portrays the intricate balance of power, loyalty, and betrayal within a Mafia family. As Michael reluctantly becomes a ruthless leader, his transformation leads to the family’s rise and fall.", 
        imdbLink: "https://www.imdb.com/title/tt0068646/", 
        genre: "Crime, Drama" 
      },
      { 
        id: 3, 
        title: "The Dark Knight", 
        description: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.", 
        director: "Christopher Nolan", 
        releaseDate: "2008-07-18", 
        imdbRating: 9.0, 
        brief: "The Dark Knight is the second installment of Christopher Nolan’s Batman trilogy. Batman (Bruce Wayne) confronts a new villain, the Joker, whose mission is to bring Gotham City to its knees through chaos and terror. The Joker’s anarchistic mind challenges Batman’s moral code, leading to a series of confrontations. The film explores complex themes of morality, justice, and the price of heroism. The Joker, portrayed by Heath Ledger, is one of the most iconic villains in film history.", 
        imdbLink: "https://www.imdb.com/title/tt0468569/", 
        genre: "Action, Crime, Drama" 
      },
      { 
        id: 4, 
        title: "Inception", 
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.", 
        director: "Christopher Nolan", 
        releaseDate: "2010-07-16", 
        imdbRating: 8.8, 
        brief: "Inception is a mind-bending science fiction thriller that follows Dom Cobb, a skilled thief who enters people’s dreams to steal their secrets. Cobb is offered a chance to erase his criminal record by performing an ‘inception’ – planting an idea in a target’s subconscious. As Cobb and his team navigate through multiple dream layers, the lines between reality and illusion blur. The movie explores the nature of dreams, guilt, and the power of the mind.", 
        imdbLink: "https://www.imdb.com/title/tt1375666/", 
        genre: "Action, Adventure, Sci-Fi" 
      },
      { 
        id: 5, 
        title: "The Matrix", 
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", 
        director: "The Wachowskis", 
        releaseDate: "1999-03-31", 
        imdbRating: 8.7, 
        brief: "The Matrix follows Neo, a computer hacker who is drawn into a rebellion against a powerful computer system that controls humanity. The film is a philosophical and action-packed journey, exploring themes like simulated reality, free will, and the nature of consciousness. As Neo learns the truth about the Matrix, he becomes a symbol of resistance and hope. The Matrix is known for its groundbreaking visual effects and action sequences, particularly its iconic bullet-dodging scene.", 
        imdbLink: "https://www.imdb.com/title/tt0133093/", 
        genre: "Action, Sci-Fi" 
      },
      { 
        id: 6, 
        title: "Titanic", 
        description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.", 
        director: "James Cameron", 
        releaseDate: "1997-12-19", 
        imdbRating: 7.8, 
        brief: "Titanic is a historical romance about the ill-fated voyage of the R.M.S. Titanic. The story follows Jack, a poor artist, and Rose, an aristocratic young woman, as they fall in love aboard the ship. Their romance blooms amidst the grandeur of the ship’s voyage but is tragically cut short by the iceberg collision. The film explores themes of love, class divides, sacrifice, and the inevitable consequences of fate. Titanic was a groundbreaking achievement in visual effects and storytelling.", 
        imdbLink: "https://www.imdb.com/title/tt0120338/", 
        genre: "Drama, Romance" 
      },
      // Continue adding similar structure for the next movies
      { 
        id: 7, 
        title: "Avatar", 
        description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.", 
        director: "James Cameron", 
        releaseDate: "2009-12-18", 
        imdbRating: 7.8, 
        brief: "Avatar is a science fiction epic set on the lush moon of Pandora. The story follows Jake Sully, a paraplegic Marine who takes his twin brother’s place on a mission to help the human mining operation. Jake becomes torn between following his orders and protecting the indigenous Na’vi people and their way of life. The film explores themes of environmentalism, imperialism, and identity, with groundbreaking visual effects and 3D technology.", 
        imdbLink: "https://www.imdb.com/title/tt0499549/", 
        genre: "Action, Adventure, Sci-Fi" 
      },
      { 
        id: 8, 
        title: "Forrest Gump", 
        description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.", 
        director: "Robert Zemeckis", 
        releaseDate: "1994-07-06", 
        imdbRating: 8.8, 
        brief: "Forrest Gump is a heartwarming drama that tells the life story of Forrest, a man with low intelligence but extraordinary luck, as he inadvertently influences many significant events in American history. The film chronicles Forrest’s journey from growing up in the small town of Greenbow, Alabama, to becoming a football star, serving in the Vietnam War, and creating a shrimping empire. The movie explores themes of destiny, love, and the power of kindness and perseverance.", 
        imdbLink: "https://www.imdb.com/title/tt0109830/", 
        genre: "Drama, Romance" 
      },
      { 
        id: 9, 
        title: "The Avengers", 
        description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from subjugating Earth.", 
        director: "Joss Whedon", 
        releaseDate: "2012-05-04", 
        imdbRating: 8.0, 
        brief: "The Avengers brings together Marvel's most iconic superheroes, including Iron Man, Captain America, Thor, Hulk, Black Widow, and Hawkeye, to form an unlikely team tasked with stopping the villain Loki from conquering Earth. The film focuses on the heroes' personal struggles, leadership, and teamwork as they must set aside their differences to save the world. The Avengers was a groundbreaking film for the superhero genre, combining action, humor, and spectacle.", 
        imdbLink: "https://www.imdb.com/title/tt0848228/", 
        genre: "Action, Adventure, Sci-Fi" 
      },
      { 
        id: 10, 
        title: "Interstellar", 
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", 
        director: "Christopher Nolan", 
        releaseDate: "2014-11-07", 
        imdbRating: 8.6, 
        brief: "Interstellar follows a group of astronauts who embark on a mission to travel through a wormhole near Saturn in search of a new habitable planet for humanity. With Earth facing an environmental collapse, Cooper, a former pilot, joins the mission to ensure the survival of mankind. The film explores complex scientific concepts like black holes, time dilation, and the theory of relativity, while also diving deep into the human emotions of love, sacrifice, and hope.", 
        imdbLink: "https://www.imdb.com/title/tt0816692/", 
        genre: "Adventure, Drama, Sci-Fi" 
      },
    {
      id: 11, 
      title: "Gladiator", 
      description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.", 
      director: "Ridley Scott", 
      releaseDate: "2000-05-05", 
      imdbRating: 8.5, 
      brief: "Gladiator tells the epic story of Maximus, a betrayed Roman general who seeks vengeance against Commodus, the corrupt emperor who murdered his family. Maximus is forced into slavery but rises as a gladiator, gaining the loyalty of fellow fighters and the admiration of the people. The film explores themes of honor, revenge, and leadership.", 
      imdbLink: "https://www.imdb.com/title/tt0172495/", 
      genre: "Action, Adventure, Drama" 
    },
    { 
      id: 12, 
      title: "Pulp Fiction", 
      description: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.", 
      director: "Quentin Tarantino", 
      releaseDate: "1994-10-14", 
      imdbRating: 8.9, 
      brief: "Pulp Fiction is a nonlinear narrative film that intertwines several stories in the criminal underworld of Los Angeles. It follows two hitmen, Vincent and Jules, whose day takes unexpected turns after a job goes awry, as well as a boxer, a gangster’s wife, and a pair of bandits. Tarantino’s film is known for its sharp dialogue, dark humor, and cultural impact.", 
      imdbLink: "https://www.imdb.com/title/tt0110912/", 
      genre: "Crime, Drama" 
    },
    { 
      id: 13, 
      title: "Fight Club", 
      description: "An insomniac office worker and a soap salesman form an underground fight club that evolves into something much, much more.", 
      director: "David Fincher", 
      releaseDate: "1999-10-15", 
      imdbRating: 8.8, 
      brief: "Fight Club is a psychological drama that explores the life of an unnamed insomniac narrator who forms a bond with the charismatic soap salesman, Tyler Durden. Together, they create an underground fight club that soon spirals into a larger anti-corporate, anarchistic movement. The film is known for its dark themes of identity, consumerism, and masculinity.", 
      imdbLink: "https://www.imdb.com/title/tt0137523/", 
      genre: "Drama" 
    },
    { 
      id: 14, 
      title: "The Silence of the Lambs", 
      description: "A young FBI cadet must confide in an incarcerated and manipulative killer to catch another serial killer – a madman who skins his victims.", 
      director: "Jonathan Demme", 
      releaseDate: "1991-02-14", 
      imdbRating: 8.6, 
      brief: "The Silence of the Lambs follows FBI trainee Clarice Starling as she seeks the help of the notorious cannibalistic serial killer Dr. Hannibal Lecter to catch another serial killer, Buffalo Bill. The psychological tension builds as the two engage in a cat-and-mouse game. The film delves into themes of manipulation, fear, and the dark psychology of both criminals and investigators.", 
      imdbLink: "https://www.imdb.com/title/tt0102926/", 
      genre: "Crime, Drama, Thriller" 
    },
    { 
      id: 15, 
      title: "The Departed", 
      description: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in Boston.", 
      director: "Martin Scorsese", 
      releaseDate: "2006-10-06", 
      imdbRating: 8.5, 
      brief: "The Departed is a crime thriller about an undercover cop, Billy Costigan, who infiltrates the Irish mob in Boston. Meanwhile, Colin Sullivan, a member of the mob, has infiltrated the police force. Both men must navigate their dangerous roles as they try to identify each other before their covers are blown. The film is a tense exploration of loyalty, deception, and morality.", 
      imdbLink: "https://www.imdb.com/title/tt0407887/", 
      genre: "Crime, Drama, Thriller" 
    },
    { 
      id: 16, 
      title: "Se7en", 
      description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his modus operandi.", 
      director: "David Fincher", 
      releaseDate: "1995-09-22", 
      imdbRating: 8.6, 
      brief: "Se7en is a psychological thriller about two detectives, David Mills and William Somerset, as they hunt a serial killer who uses the seven deadly sins as inspiration for his gruesome murders. The film builds a slow-burn tension with its dark, brooding atmosphere and explores the nature of evil, sin, and morality.", 
      imdbLink: "https://www.imdb.com/title/tt0114369/", 
      genre: "Crime, Drama, Mystery" 
    },
    { 
      id: 17, 
      title: "Back to the Future", 
      description: "Marty McFly, a teenager, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the eccentric Dr. Emmett Brown.", 
      director: "Robert Zemeckis", 
      releaseDate: "1985-07-03", 
      imdbRating: 8.5, 
      brief: "Back to the Future follows Marty McFly as he is accidentally sent back in time in a DeLorean invented by the eccentric Dr. Emmett Brown. In 1955, Marty meets his young parents and must ensure that they fall in love or risk altering the future. The film blends science fiction with comedy, and its time-traveling antics and iconic characters make it a cultural touchstone.", 
      imdbLink: "https://www.imdb.com/title/tt0088763/", 
      genre: "Adventure, Comedy, Sci-Fi" 
    },
    { 
      id: 18, 
      title: "Schindler's List", 
      description: "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.", 
      director: "Steven Spielberg", 
      releaseDate: "1993-12-15", 
      imdbRating: 9.0, 
      brief: "Schindler's List tells the true story of Oskar Schindler, a German businessman who saves the lives of over a thousand Polish Jews during the Holocaust. Schindler uses his factory as a cover to protect his workers from Nazi persecution. The film is a poignant and harrowing account of one man's journey from indifference to moral responsibility.", 
      imdbLink: "https://www.imdb.com/title/tt0108052/", 
      genre: "Biography, Drama, History" 
    },
    { 
      id: 19, 
      title: "The Lion King", 
      description: "A young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.", 
      director: "Roger Allers, Rob Minkoff", 
      releaseDate: "1994-06-24", 
      imdbRating: 8.5, 
      brief: "The Lion King follows Simba, a young lion who is destined to be king of the Pride Lands. After the murder of his father Mufasa by his uncle Scar, Simba runs away in guilt and shame. The film tells the story of Simba’s growth as he learns the importance of responsibility and bravery in the face of his destiny. The Lion King is a beloved classic that explores themes of family, loss, and leadership.", 
      imdbLink: "https://www.imdb.com/title/tt0110357/", 
      genre: "Animation, Adventure, Drama" 
    },
    { 
      id: 20, 
      title: "The Prestige", 
      description: "Two magicians engage in a bitter rivalry, with each one attempting to outperform the other with increasingly dangerous tricks.", 
      director: "Christopher Nolan", 
      releaseDate: "2006-10-20", 
      imdbRating: 8.5, 
      brief: "The Prestige follows two magicians, Robert Angier and Alfred Borden, as they compete to create the most spectacular illusion. Their rivalry becomes intense, and they take increasingly dangerous measures to outdo each other. The film explores themes of obsession, sacrifice, and the fine line between reality and illusion.", 
      imdbLink: "https://www.imdb.com/title/tt0482571/", 
      genre: "Drama, Mystery, Sci-Fi" 
    },
    { 
        id: 21, 
        title: "Sholay", 
        description: "A police officer hires two criminals to capture the ruthless bandit leader, Gabbar Singh.", 
        director: "Ramesh Sippy", 
        releaseDate: "1975-08-15", 
        imdbRating: 8.2, 
        brief: "Sholay is a legendary Bollywood film that follows the story of two small-time criminals, Jai and Veeru, who are hired by a retired police officer to capture the notorious bandit leader, Gabbar Singh. The film is filled with action, drama, and iconic dialogues, making it one of the most beloved Indian films of all time.", 
        imdbLink: "https://www.imdb.com/title/tt0073707/", 
        genre: "Action, Adventure, Drama" 
      },
      { 
        id: 22, 
        title: "Lagaan", 
        description: "A poor village in colonial India is challenged to a game of cricket by the British, with the villagers' future at stake.", 
        director: "Ashutosh Gowariker", 
        releaseDate: "2001-06-15", 
        imdbRating: 8.1, 
        brief: "Lagaan tells the story of a small Indian village during British colonial rule, where the villagers are challenged to a cricket match by the British officers. The stakes are high, as the losing team will have to pay a heavy tax. The film combines historical drama with the excitement of sports, making it a true underdog story.", 
        imdbLink: "https://www.imdb.com/title/tt0169102/", 
        genre: "Drama, Musical, Sport" 
      },
      { 
        id: 23, 
        title: "Dilwale Dulhania Le Jayenge", 
        description: "A young man and woman fall in love while traveling across Europe but must fight for their love due to family pressures.", 
        director: "Aditya Chopra", 
        releaseDate: "1995-10-20", 
        imdbRating: 8.1, 
        brief: "Dilwale Dulhania Le Jayenge, often called DDLJ, follows the story of Raj and Simran, who meet on a trip across Europe and fall in love. However, their love faces challenges as Simran’s family does not approve of Raj. The film is a romantic classic that blends love with family values.", 
        imdbLink: "https://www.imdb.com/title/tt0112870/", 
        genre: "Drama, Romance" 
      },
      { 
        id: 24, 
        title: "Kabhi Khushi Kabhie Gham", 
        description: "A story of a rich family and their emotional conflicts, including love, tradition, and family values.", 
        director: "Karan Johar", 
        releaseDate: "2001-12-14", 
        imdbRating: 7.4, 
        brief: "Kabhi Khushi Kabhie Gham is an epic family drama that focuses on the Kapoor family, whose patriarch insists on traditional values. The family faces a crisis when the youngest son, Rahul, leaves the family after an emotional rift. The film is filled with emotional moments, family bonding, and the significance of relationships.", 
        imdbLink: "https://www.imdb.com/title/tt0294357/", 
        genre: "Drama, Family, Music" 
      },
      { 
        id: 25, 
        title: "3 Idiots", 
        description: "Three engineering students navigate through their studies and life, challenging societal expectations and pursuing their passions.", 
        director: "Rajkumar Hirani", 
        releaseDate: "2009-12-25", 
        imdbRating: 8.4, 
        brief: "3 Idiots is a story about three friends at an engineering college who challenge the rigid educational system and redefine the meaning of success. Through humor and heartfelt moments, the film explores themes like friendship, love, and the pressure of societal expectations.", 
        imdbLink: "https://www.imdb.com/title/tt1187043/", 
        genre: "Comedy, Drama" 
      },
      { 
        id: 26, 
        title: "Dangal", 
        description: "A former wrestler trains his daughters to become world-class wrestlers, challenging gender norms in rural India.", 
        director: "Nitesh Tiwari", 
        releaseDate: "2016-12-23", 
        imdbRating: 8.4, 
        brief: "Dangal tells the inspiring story of Mahavir Singh Phogat, who trains his daughters to become successful wrestlers, defying the norms of a patriarchal society. The film explores themes of determination, empowerment, and the breaking of stereotypes, making it an emotionally powerful sports drama.", 
        imdbLink: "https://www.imdb.com/title/tt5072526/", 
        genre: "Biography, Drama, Sport" 
      },
      { 
        id: 27, 
        title: "Queen", 
        description: "A young woman embarks on a solo honeymoon trip to Europe after her marriage falls apart, discovering independence and self-discovery.", 
        director: "Vikas Bahl", 
        releaseDate: "2014-03-07", 
        imdbRating: 8.2, 
        brief: "Queen is a story of Rani Mehra, a young woman who sets off on a solo honeymoon trip to Europe after her fiancé calls off their wedding. Along the journey, Rani discovers her own strength, independence, and self-worth, making it an empowering and heartwarming journey of self-discovery.", 
        imdbLink: "https://www.imdb.com/title/tt3398578/", 
        genre: "Comedy, Drama" 
      },
      { 
        id: 28, 
        title: "Barfi!", 
        description: "A charming, mute, and deaf man navigates life, relationships, and his love for two women who both change his life.", 
        director: "Anurag Basu", 
        releaseDate: "2012-09-14", 
        imdbRating: 8.1, 
        brief: "Barfi! tells the story of Murphy 'Barfi' Johnson, a mute and deaf man who brings joy to everyone he meets. He shares a special bond with two women, Shruti and Jhilmil, whose lives are intertwined with his. The film explores themes of love, acceptance, and happiness, showcasing a heartfelt story of unconventional relationships.", 
        imdbLink: "https://www.imdb.com/title/tt1866210/", 
        genre: "Comedy, Drama, Romance" 
      },
      { 
        id: 29, 
        title: "PK", 
        description: "A humanoid alien from outer space questions human beliefs and customs, challenging the traditional norms of society.", 
        director: "Rajkumar Hirani", 
        releaseDate: "2014-12-19", 
        imdbRating: 8.1, 
        brief: "PK is a satirical comedy-drama about an alien, played by Aamir Khan, who arrives on Earth and questions the religious and social practices of humans. The film critiques blind faith, superstition, and the rigid societal structure, all while delivering a powerful message of love and tolerance.", 
        imdbLink: "https://www.imdb.com/title/tt2338151/", 
        genre: "Comedy, Drama, Sci-Fi" 
      },
      { 
        id: 30, 
        title: "Zindagi Na Milegi Dobara", 
        description: "Three friends go on a road trip across Spain, where they confront their fears, discover love, and find true meaning in life.", 
        director: "Zoya Akhtar", 
        releaseDate: "2011-07-15", 
        imdbRating: 8.1, 
        brief: "Zindagi Na Milegi Dobara is a story about three friends who go on a road trip to Spain, where they learn to face their fears, rekindle old relationships, and reflect on their lives. The film is a celebration of friendship, life, and adventure, with a perfect balance of humor and deep emotional moments.", 
        imdbLink: "https://www.imdb.com/title/tt1562872/", 
        genre: "Adventure, Comedy, Drama" 
      },
      { 
        id: 31, 
        title: "Jab Tak Hai Jaan", 
        description: "A young woman is caught in a love triangle with a soldier, who is trying to find peace with his past, including his love for her.", 
        director: "Yash Chopra", 
        releaseDate: "2012-11-13", 
        imdbRating: 6.7, 
        brief: "Jab Tak Hai Jaan is a romantic drama about a love triangle involving Samar, Meera, and Akira. While Meera is torn between her duty and love, Samar’s tragic past and his current quest for peace and redemption form the heart of the story. The film is known for its beautiful music and emotional depth.", 
        imdbLink: "https://www.imdb.com/title/tt2199711/", 
        genre: "Drama, Music, Romance" 
      },
      { 
        id: 32, 
        title: "Bahubali: The Beginning", 
        description: "The story of two brothers and their rivalry over the throne of the kingdom of Mahishmati.", 
        director: "S. S. Rajamouli", 
        releaseDate: "2015-07-10", 
        imdbRating: 8.0, 
        brief: "Bahubali: The Beginning follows the story of two brothers, one of whom ascends the throne while the other, an outsider, is left to fight for justice. Filled with grand visuals, stunning action sequences, and epic storytelling, the film sets the stage for the larger-than-life saga of Bahubali.", 
        imdbLink: "https://www.imdb.com/title/tt4196776/", 
        genre: "Action, Adventure, Drama" 
      },
      { 
        id: 33, 
        title: "Bahubali: The Conclusion", 
        description: "The conclusion to the epic tale of rivalry and power struggles for the kingdom of Mahishmati.", 
        director: "S. S. Rajamouli", 
        releaseDate: "2017-04-28", 
        imdbRating: 8.2, 
        brief: "The concluding part of the Bahubali saga reveals the truth behind the battle for the throne of Mahishmati. As the characters' motivations unfold, the film takes viewers on an intense, action-packed journey, bringing the epic tale to a spectacular end.", 
        imdbLink: "https://www.imdb.com/title/tt5072526/", 
        genre: "Action, Adventure, Drama" 
      },
      { 
        id: 34, 
        title: "RRR", 
        description: "Two legendary freedom fighters from India team up to fight the British colonial forces in the early 20th century.", 
        director: "S. S. Rajamouli", 
        releaseDate: "2022-03-25", 
        imdbRating: 8.0, 
        brief: "RRR is an epic action drama that blends historical events with fictional characters. The story focuses on the lives of two Indian revolutionaries, Alluri Sitarama Raju and Komaram Bheem, and their fight against British imperialists in the 1920s.", 
        imdbLink: "https://www.imdb.com/title/tt8178634/", 
        genre: "Action, Drama, History" 
      },
      { 
        id: 35, 
        title: "Kahaani", 
        description: "A pregnant woman arrives in Kolkata to search for her missing husband and becomes entangled in a web of mysteries.", 
        director: "Sujoy Ghosh", 
        releaseDate: "2012-03-09", 
        imdbRating: 8.1, 
        brief: "Kahaani is a suspense thriller that follows Vidya Bagchi, a pregnant woman searching for her missing husband in the streets of Kolkata. The film unravels layer by layer with twists and turns that keep the audience guessing until the very end.", 
        imdbLink: "https://www.imdb.com/title/tt1821480/", 
        genre: "Drama, Mystery, Thriller" 
      },
      { 
        id: 36, 
        title: "Taare Zameen Par", 
        description: "A young boy with dyslexia faces difficulties in a traditional school system, but his life changes when an art teacher takes an interest in him.", 
        director: "Aamir Khan", 
        releaseDate: "2007-12-21", 
        imdbRating: 8.4, 
        brief: "Taare Zameen Par is an emotional drama about a young boy, Ishaan, who struggles with learning difficulties, only to find a mentor in his art teacher, who helps him overcome his challenges. The film focuses on the importance of understanding children's needs and talents beyond academic success.", 
        imdbLink: "https://www.imdb.com/title/tt0986264/", 
        genre: "Drama, Family" 
      },
      { 
        id: 37, 
        title: "Dil Chahta Hai", 
        description: "The lives and friendships of three inseparable childhood friends, as they navigate adulthood, love, and challenges.", 
        director: "Farhan Akhtar", 
        releaseDate: "2001-08-10", 
        imdbRating: 8.1, 
        brief: "Dil Chahta Hai is a coming-of-age story that captures the bond between three friends as they experience the highs and lows of life, love, and relationships. The film beautifully explores the transition from youth to adulthood and is a celebration of friendship.", 
        imdbLink: "https://www.imdb.com/title/tt0291341/", 
        genre: "Comedy, Drama" 
      },
      { 
        id: 38, 
        title: "Gully Boy", 
        description: "A young man from the slums of Mumbai discovers his talent for rap and begins his journey to become a successful artist.", 
        director: "Zoya Akhtar", 
        releaseDate: "2019-02-14", 
        imdbRating: 8.0, 
        brief: "Gully Boy follows the life of Murad, a young man from the slums of Mumbai, who discovers his passion for rapping and pursues a career in music, challenging the limits imposed by society. The film portrays his struggles and aspirations in a vibrant, musical setting.", 
        imdbLink: "https://www.imdb.com/title/tt7888964/", 
        genre: "Drama, Music" 
      },
      { 
        id: 39, 
        title: "Rock On!!", 
        description: "Four friends reunite years after their band's disbandment and reconnect through their love for music and their old friendship.", 
        director: "Abhishek Kapoor", 
        releaseDate: "2008-09-05", 
        imdbRating: 8.0, 
        brief: "Rock On!! is a film about friendship, music, and second chances. It tells the story of four friends who, years after their band broke up, come together to revive their passion for music and rediscover the bond they once shared.", 
        imdbLink: "https://www.imdb.com/title/tt1187043/", 
        genre: "Drama, Music" 
      },
      { 
        id: 40, 
        title: "Chennai Express", 
        description: "A man unknowingly ends up on a train journey with a woman who's running away from her past, leading to an adventure and romance.", 
        director: "Rohit Shetty", 
        releaseDate: "2013-08-08", 
        imdbRating: 6.1, 
        brief: "Chennai Express is a light-hearted action-comedy film that follows Rahul as he embarks on an accidental journey on a train to Chennai. What starts as a normal trip soon turns into an exciting adventure as he meets Meena, a woman with a mysterious past. The film combines romance, action, and comedy in a fun-filled package.", 
        imdbLink: "https://www.imdb.com/title/tt2561572/", 
        genre: "Action, Comedy, Romance" 
      },
      { 
        id: 41, 
        title: "Kabir Singh", 
        description: "A young, talented surgeon’s self-destructive behavior and toxic relationships stem from the heartache of a failed romance.", 
        director: "Sandeep Reddy Vanga", 
        releaseDate: "2019-06-21", 
        imdbRating: 7.1, 
        brief: "Kabir Singh is the story of a brilliant but troubled surgeon, Kabir Singh, whose passion for his career and a past love leads him down a dark path of self-destruction. The film delves deep into themes of love, loss, and personal turmoil.", 
        imdbLink: "https://www.imdb.com/title/tt8108208/", 
        genre: "Drama, Romance" 
      },
      { 
        id: 42, 
        title: "Tumbbad", 
        description: "A man searches for a hidden treasure in a cursed village, confronting the supernatural forces that guard it.", 
        director: "Rahi Anil Barve", 
        releaseDate: "2018-10-12", 
        imdbRating: 8.2, 
        brief: "Tumbbad is a horror-fantasy film that blends supernatural horror with mythology. The story follows the protagonist’s quest for a hidden treasure in a cursed village, where he encounters mystical creatures and dark forces. The film is praised for its unique storytelling and atmospheric visuals.", 
        imdbLink: "https://www.imdb.com/title/tt7659406/", 
        genre: "Drama, Horror, Fantasy" 
      },
      { 
        id: 43, 
        title: "Andhadhun", 
        description: "A blind pianist becomes embroiled in a murder mystery that takes him deeper into a world of crime and deception.", 
        director: "Sriram Raghavan", 
        releaseDate: "2018-10-05", 
        imdbRating: 8.2, 
        brief: "Andhadhun is a thriller that follows a blind pianist, whose life turns upside down when he becomes involved in a murder. The film cleverly plays with the idea of perception and reality, with twists and turns that keep the audience on the edge of their seats.", 
        imdbLink: "https://www.imdb.com/title/tt8108198/", 
        genre: "Comedy, Crime, Thriller" 
      },
      { 
        id: 44, 
        title: "Maanagaram", 
        description: "A group of people’s lives intertwine through a series of events that occur in Chennai, leading to a thrilling climax.", 
        director: "Lokesh Kanagaraj", 
        releaseDate: "2017-03-10", 
        imdbRating: 7.7, 
        brief: "Maanagaram is a fast-paced thriller set in Chennai, where the lives of several individuals intersect as their stories unfold. The film weaves together various perspectives to form a gripping narrative, exploring the impact of violence, crime, and survival in the city.", 
        imdbLink: "https://www.imdb.com/title/tt7021126/", 
        genre: "Action, Crime, Thriller" 
      },
      { 
        id: 45, 
        title: "Vikram", 
        description: "A special agent is called to investigate a series of mysterious deaths linked to a dangerous criminal syndicate.", 
        director: "Lokesh Kanagaraj", 
        releaseDate: "2022-06-03", 
        imdbRating: 8.4, 
        brief: "Vikram is a gripping action thriller that follows a special agent’s mission to uncover the truth behind a string of murders connected to a criminal organization. With intense action sequences and complex characters, the film is a thrilling roller coaster ride.", 
        imdbLink: "https://www.imdb.com/title/tt14411166/", 
        genre: "Action, Thriller" 
      },
      { 
        id: 46, 
        title: "Master", 
        description: "A troubled professor is tasked with taking down a powerful criminal while dealing with his personal demons.", 
        director: "Lokesh Kanagaraj", 
        releaseDate: "2021-01-13", 
        imdbRating: 7.8, 
        brief: "Master follows JD, a professor with a troubled past, as he is assigned to a juvenile school where he encounters a notorious gangster. The film revolves around the battle of wits between the two, set against an emotional backdrop of redemption and justice.", 
        imdbLink: "https://www.imdb.com/title/tt10205580/", 
        genre: "Action, Crime, Drama" 
      },
      { 
        id: 47, 
        title: "Eega", 
        description: "A man is reincarnated as a fly and seeks revenge against the businessman who killed him.", 
        director: "S. S. Rajamouli", 
        releaseDate: "2012-07-06", 
        imdbRating: 7.7, 
        brief: "Eega is a fantasy drama where a man is killed by a business tycoon and reincarnated as a fly. He takes revenge against his murderer using his new form, creating an intriguing mix of comedy, drama, and action in a unique revenge story.", 
        imdbLink: "https://www.imdb.com/title/tt2326554/", 
        genre: "Action, Adventure, Comedy" 
      },
      { 
        id: 48, 
        title: "Kumbalangi Nights", 
        description: "Four brothers living in a dysfunctional family come together to cope with their lives and relationships.", 
        director: "Madhu C. Narayanan", 
        releaseDate: "2019-02-07", 
        imdbRating: 8.3, 
        brief: "Kumbalangi Nights is a beautiful portrayal of familial bonds, love, and the struggles of four brothers living in a dysfunctional family. The film combines heartwarming moments with a dose of realism, showcasing the journey of self-discovery and overcoming obstacles.", 
        imdbLink: "https://www.imdb.com/title/tt8595660/", 
        genre: "Drama" 
      }
  ];
  

// Endpoint to fetch movies
app.get('/movies', (req, res) => {
  res.json(dummyMovies);
});

app.get('/movies/:id', (req, res) => {
    let movieId = req.params.id.trim();
    movieId = movieId.slice(1);
    console.log(`Received movieId: ${movieId}`); // Add this log
    // Check if the movieId is a valid number
    if (isNaN(movieId)) {
        return res.status(400).send({ message: 'Invalid ID format' });
    }

    const numericMovieId = parseInt(movieId, 10); // Convert to number

    const movie = dummyMovies.find(m => m.id === numericMovieId); // Compare as numbers

    if (movie) {
        res.json(movie); // Return the found movie as JSON
    } else {
        res.status(404).send({ message: 'Movie not found' });
    }
});
  
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
