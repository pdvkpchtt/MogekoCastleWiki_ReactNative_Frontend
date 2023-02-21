import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';

import ItemScreen from "../Screens/ItemScreen";
import { DrawerNav } from './DrawerNav';
import ArticleScreen from '../Screens/SampleScreens/ArticleScreen';

const items = [
    {
      "Title": "Prosciutto",
      "SubText": "Product of the gods, surpassing all in this world.",
      "ImgPath": require('../img/prosc.png'),
      'DescriptionText': "\t\t\tProsciutto is an Italian dry-cured ham that is usually thinly sliced and served uncooked, the Mogekos have a religion cult that praise this dish so you can find a lot of it through the castle.\n\t\t\tAside of picking it up from the floor like other items, you can also get some prosciutto from some specific Mogekos. If you interact with them you can chose the option of taking away the prosciutto and then the Mogeko will start crying and begging Yonaka to give it back.\n"
    },
    {
      "Title": "Red pepper",
      "SubText": "Hot hot hot!",
      "ImgPath": require('../img/peper.png'),
      'DescriptionText': "\t\t\tA simple red pepper you can find around the castle. The first one can be obtained in the Mysterious Train since the first moment you get control of Yonaka.\n\t\t\tIn the kitchen's shelves unlimited red peppers can be obtained.\n"
    },
    {
      "Title": "Potato Chips",
      "SubText": "Oh... Very Good...",
      "ImgPath": require('../img/chips.png'),
      'DescriptionText': "\t\t\tFound in the kitchen's shelves of the first floor. Unlimited.\n"
    },
    {
      "Title": "Garbage",
      "SubText": "I got some puke here, the conclusion to a tale of much tragedy.",
      "ImgPath": require('../img/puke.png'),
      'DescriptionText': "\t\t\tYou can interact with the bins that can be found in the castle and pick up puke. The amount of garbage you can get from a single bin it's unlimited.\n"
    },
    {
      "Title": "Porn",
      "SubText": "Pornographic magazines that you can get from almost all the bookshelves in the castle.",
      "ImgPath": require('../img/porn.png'),
      'DescriptionText': "\t\t\tPornographic magazines that you can get from almost all the bookshelves in the castle.\n"
    },
    {
      "Title": "Hemorange Juice",
      "SubText": "Hemorrhoid-inducing juice. Deathly disgusting.",
      "ImgPath": require('../img/juce.png'),
      'DescriptionText': "\t\t\tIt looks like a regular orange juice, but is not. This can juice can be bought from the vending machines. It costs 100 yens.\n"
    },
    {
      "Title": "Sharkfin Juice",
      "SubText": "Removing the fins of a shark is a common practice and is used to make dishes.",
      "ImgPath": require('../img/shark.png'),
      'DescriptionText': "\t\t\tRemoving the fins of a shark is a common practice and is used to make dishes. The shark in the can looks like the animal form of Samekichi. This can juice can be bought from the vending machines. It costs 100 yens.\n"
    },
    {
      "Title": "Minestrone",
      "SubText": "God's blood. Very tasty, and addicting.",
      "ImgPath": require('../img/borsh.png'),
      'DescriptionText': "\t\t\tMinestrone is a thick soup of Italian origin made with vegetables, often with the addition of pasta or rice, sometimes both. Common ingredients include beans, onions, celery, carrots, stock, and tomatoes.\n\t\t\tMogekos seems to like it a lot and you can find it anytime you see a Mogeko having lunch. Unlimited.\n"
    }
]

const characters = [
  {
    'Title': 'Yonaka Kurai',
    'SubText': 'Is the main protagonist of Mogeko Castle.',
    'ImgPath': require("../img/characters/1.png"),
    'DescriptionText': "\t\t\tProsciutto is an Italian dry-cured ham that is usually thinly sliced and served uncooked, the Mogekos have a religion cult that praise this dish so you can find a lot of it through the castle.\n\t\t\tAside of picking it up from the floor like other items, you can also get some prosciutto from some specific Mogekos. If you interact with them you can chose the option of taking away the prosciutto and then the Mogeko will start crying and begging Yonaka to give it back.\n",
    'info': [
      {
        topTile: 'Character Information',
        packOfInfo: [
          {
            main: 'Japanese Name:',
            sub: '倉井ヨナカ'
          },
          {
            main: 'Romaji Name:',
            sub: 'Kurai Yonaka'
          },
          {
            main: 'First Appearance:',
            sub: 'Mysterious Train'
          },
          {
            main: 'Role:',
            sub: 'Protagonist'
          },
        ],
      },
      {
        topTile: 'Biological Information',
        packOfInfo: [
          {
            main: 'Species:',
            sub: 'Human'
          },
          {
            main: 'Gender:',
            sub: 'Female'
          },
          {
            main: 'Height:',
            sub: '158cm'
          },
          {
            main: 'Relatives:',
            sub: 'Kurai Shinya'
          },
        ],
      },
    ],
    'articles': [
      {
        title: 'Appearance',
        text: "Yonaka has fair skin, black eyes with white pupils, and black hair with braided pigtails. Her bangs cover her right eye.\n\nShe wears a typical Japanese high school uniform, consisting of a white dress shirt, a red plaid ribbon, a gray blazer with two brown buttons, a red plaid pleated skirt, dark gray tights, and black loafers.\n\nIn Mogeko Castle, she is shown wearing the scalped top half of King mogeko's head as a hat in the normal ending, when she becomes Lord Prosciutto."
      },
      {
        title: 'Personality',
        text: "Yonaka is depicted as a doting younger sister who loves her brother. She admires her brother greatly, wishing for nothing more than to see and be together with him again, due to him leaving her and their family sometime when she was in Junior High.\n\nShe is a very serious, kind and accepting girl; she was quick to accept cooperating with Defect Mogeko, despite not being wholly aware of the reasons concerning his imprisonment.\n\nHowever, like many of Deep Sea Prisoner's characters, she also has a darker side; in the events of Mogeko Castle, she occasionally demonstrates a sinister side to her, and during most of the game she has the option to kill several Mogeko, or generally act cruel to them, with no reasoning or justification."
      },
      {
        title: 'Background',
        text: "Yonaka's brother, Shinya, seems to have left her and their family when she was in junior high school.\n\nSeveral years seem to have passed since the two had seen each other, as Yonaka was a second-year high school student when Shinya finally returned to their home."
      }
    ]
  },
  {
    'Title': 'Defect Mogeko',
    'SubText': "Is the deuteragonist of Mogeko Castle.",
    'ImgPath': require("../img/characters/3.png"),
    'DescriptionText': "\t\t\tA simple red pepper you can find around the castle. The first one can be obtained in the Mysterious Train since the first moment you get control of Yonaka.\n\t\t\tIn the kitchen's shelves unlimited red peppers can be obtained.\n",
    'info': [
      {
        topTile: 'Character Information',
        packOfInfo: [
          {
            main: 'Japanese Name:',
            sub: '異端モゲコ'
          },
          {
            main: 'Romaji Name:',
            sub: 'Itan mogeko'
          },
          {
            main: 'First Appearance:',
            sub: 'Third floor'
          },
          {
            main: 'Role:',
            sub: 'Ally'
          },
        ],
      },
      {
        topTile: 'Biological Information',
        packOfInfo: [
          {
            main: 'Species:',
            sub: 'Mogeko'
          }
        ],
      },
    ],
    'articles': [
      {
        title: 'Appearance',
        text: "Defect Mogeko looks like a green Mogeko, with an X-shaped scar on his torso and a scar on the right side of his face. Missing left ear and tail."
      },
      {
        title: 'Personality',
        text: "He used to get along with King Mogeko, but came into disagreement with him, being branded as a 'defect Mogeko' and subsequently imprisoned.\n\nHe is considered to be a 'defect' by the Mogekos, although there isn't anything defective about him save for deviations from the rest of the Mogekos.\n\nAs far as his actual personality, Defect Mogeko is relatively tough but calm, contrasting Yonaka's more emotional reactions to the events throughout the game. He can also be resourceful, thinking to bring a weapon (more specifically, a rocket launcher) from the hospital in the case of an emergency, and even having tear gas to stave off King mogeko during his and Yonaka's rush to the seventh floor of the castle. He is also unfazed if any harm comes to himself, and is more concerned with protecting Yonaka and getting her out of the castle, showing a selfless side to him. While he claims he helped Yonaka since he had nothing better to do, his actions show him having a certain kindness. "
      },
      {
        title: 'Background',
        text: "Defect Mogeko is one of the Seven Special Mogekos. His former name was Nega-Mogeko.\n\nAfter he told King Mogeko that his way was wrong, King Mogeko called Nega-Mogeko 'defective' and imprisoned him. According to Defect Mogeko himself, he gave up fighting after he lost his ear."
      }
    ]
  },
  {
    'Title': 'Mogeko',
    'SubText': "Are main antagonists in Mogeko Castle.",
    'ImgPath': require("../img/characters/4.png"),
    'DescriptionText': "\t\t\tFound in the kitchen's shelves of the first floor. Unlimited.\n",
    'info': [
      {
        topTile: 'Character Information',
        packOfInfo: [
          {
            main: 'Japanese Name:',
            sub: 'モゲコ'
          },
          {
            main: 'Romaji Name:',
            sub: 'Mogeko'
          },
          {
            main: 'First Appearance:',
            sub: 'Mogeko Forest'
          },
          {
            main: 'Role:',
            sub: 'Mainly antagonist'
          },
        ],
      },
      {
        topTile: 'Biological Information',
        packOfInfo: [
          {
            main: 'Species:',
            sub: 'Mogeko'
          }
        ],
      },
    ],
    'articles': [
      {
        title: 'Appearance',
        text: "Mogeko look like an innocent cat-like creature, with two closed eyes, two white blush marks, a pinkish mouth, two cat-like ears with some fur on top of the head, a small body, and a tail that curls at the end.\n\nFrom time to time, Mogeko are depicted with menacing features. They appear to possess razor-sharp fangs, akin to that of a shark's. Evident in one comic, they appear to have extremely long tongues."
      },
      {
        title: 'Personality',
        text: "Each one is slightly different, some are locked up by King mogeko, on the grounds that they are defective (Mogekos who do not follow the social norm of typical Mogekos). The majority of them are perverted, having countless books of pornographic content, have an unusual obsession for high school girls, and lastly, have an obscenely disgusting obsession for prosciutto (to the point of creating religious connections around it).Though they are very lewd, they are in fact quite childish and pathetic, almost resembling spoiled brats. Even though most of them share similar interests, the Mogekos don't always get along; some go to the extent of murdering each other.\n\nAlthough they are relentless in their attempts to rape Yonaka, and bear overwhelming strength in numbers, they are actually quite weak individually and easy to slaughter. In Mogeko Castle, Yonaka has the option to take away prosciutto from Mogekos who have it. Doing so will cause the Mogeko to start bawling.\n\nSome Mogekos are shown to be rather suicidal and soulless, saying depressing things like 'Do we only live to die?' or 'If I had known I'd be sad everyday, I wouldn't have wished to be born'. In some occasions, they show little to no empathy towards their own kind, often leaving them to die in order to save themselves. It is shown that not all Mogeko desire Yonaka, but all still possess varying levels of indecency."
      },
      {
        title: 'Background',
        text: "Not much is known about these creatures past other than that they were created by King mogeko, inhabit the Mogeko Castle."
      }
    ]
  },
  {
    'Title': 'Moge-ko',
    'SubText': "Is a main antagonist in Mogeko Castle.",
    'ImgPath': require("../img/characters/2.png"),
    'DescriptionText': "\t\t\tYou can interact with the bins that can be found in the castle and pick up puke. The amount of garbage you can get from a single bin it's unlimited.\n",
    'info': [
      {
        topTile: 'Character Information',
        packOfInfo: [
          {
            main: 'Japanese Name:',
            sub: 'もげ子'
          },
          {
            main: 'Romaji Name:',
            sub: 'Mogeko'
          },
          {
            main: 'First Appearance:',
            sub: 'Fourth floor'
          },
          {
            main: 'Role:',
            sub: 'Antagonist'
          },
        ],
      },
      {
        topTile: 'Biological Information',
        packOfInfo: [
          {
            main: 'Species:',
            sub: 'Mogeko'
          },
          {
            main: 'Gender:',
            sub: 'Female'
          },
          {
            main: 'Height:',
            sub: '158cm'
          },
        ],
      },
    ],
    'articles': [
      {
        title: 'Appearance',
        text: "Moge-ko has flesh-coloured skin; eyes with black irises and white pupils; and shoulder-length blonde hair with two large tufts on the top that resemble Mogeko ears. Underneath her skirt a long mouse-like Mogeko tail protrudes.\n\nShe wears a black vest buttoned with brown buttons; a blood-red dress shirt cuffed with black; a black tie; a dark red pleated skirt; and large black boots with a light brown button on the sides and red soles.\n\nIf enraged or excited, Moge-ko's eyes will reflect her demeanor; instead of her typical black with white pupils, she will instead have red with black cat-like pupils."
      },
      {
        title: 'Personality',
        text: "Moge-ko may resemble a high school girl in appearance, but in mannerism she resembles a disturbed psychopath. Like most Mogekos she is deeply perverted, and has a professed like for high school girls. Beyond that, there is little that connects her to the rest of her species.\n\nMost if not all Mogekos possess a deep terror for Moge-ko, even the creator of all Mogekos, King mogeko. Though she is a Mogeko, Moge-ko is unrestrained in her sadism that she expresses towards members of her own race.\n\nProne to murdering other Mogekos using cleavers and other blades, she has earned herself a reputation for brutality. Aside from murdering she also likes to 'toy' with anyone she dislikes - 'toy' being in actuality torture. Once done with torturing those who have crossed her path, she is known to crucify them upon blood-red crosses until they die. Mentioned by Defect Mogeko, Moge-ko enjoys cutting people up and eating them, alluding to a possibility of cannibalism."
      },
      {
        title: 'Background',
        text: "Moge-ko was created by the Mogekos. Candy, tabasco, and all those neat stuff were used to make 'a perfect girl'. But the Mogekos added concrete instead of candy, ruining the recipe. In the end, Moge-ko was created, a psychopath with the appearance of a schoolgirl.\n\nSometime before the events of Mogeko Castle, Moge-ko travelled to the Mogeko Kremlin and abducted the General of Mogeko Kremlin, Mogekov Hashasky, and spirited him away to Mogeko Castle for unknown reasons."
      }
    ]
  },
  {
    "Title": "Shinya Kurai",
    "SubText": "Is Yonaka Kurai's elder brother and, arguably, one of the antagonists of Mogeko Castle.",
    "ImgPath": require('../img/characters/5.png'),
    'DescriptionText': "\t\t\tPornographic magazines that you can get from almost all the bookshelves in the castle.\n",
    'info': [
      {
        topTile: 'Character Information',
        packOfInfo: [
          {
            main: 'Japanese Name:',
            sub: '倉井シンヤ'
          },
          {
            main: 'Romaji Name:',
            sub: 'Kurai Shinya'
          },
          {
            main: 'First Appearance:',
            sub: 'Human World'
          },
          {
            main: 'Role:',
            sub: 'Antagonist'
          },
        ],
      },
      {
        topTile: 'Biological Information',
        packOfInfo: [
          {
            main: 'Species:',
            sub: 'Human'
          },
          {
            main: 'Gender:',
            sub: 'Male'
          },
          {
            main: 'Height:',
            sub: '171cm'
          },
          {
            main: 'Relatives:',
            sub: 'Kurai Yonaka'
          },
        ],
      },
    ],
    'articles': [
      {
        title: 'Appearance',
        text: "Shinya has short, black hair with an ahoge (cowlick), fair skin, and gray eyes. He wears a gakuran (Japanese high school boys' uniform), which consists of a black coat with mandarin collar, five golden/yellow buttons, black trousers, and black dress shoes. When he's in his murderous state, he has bright red eyes with black pupils."
      },
      {
        title: 'Personality',
        text: "When the player first meets him in Yonaka's flashback, Shinya seems to be the type that spaces out. He loves Yonaka, but when she meets him right after escaping from Mogeko Castle, he wants to kill her, causing her to run away and end up back where she had just fled from. It appears that this bloodthristy personality is not who he truly is; during Mogeko Castle's happy ending, he returns to his old self after Yonaka stabs him, just before he dies."
      },
      {
        title: 'Background',
        text: "Shinya left his family for a certain period of time for some unknown reason. He seems to have left around when Yonaka was in junior high and must have been gone for a few years since Yonaka was already a second-year high school (11th grade/year) student by the time he came back. Whatever caused him to snap and kill his and Yonaka's parents while she was away is currently unknown."
      }
    ]
  },
  {
    "Title": "Moffuru",
    "SubText": "Is one of the seven Special Mogekos of Mogeko Castle.",
    "ImgPath": require('../img/characters/6.png'),
    'DescriptionText': "\t\t\tIt looks like a regular orange juice, but is not. This can juice can be bought from the vending machines. It costs 100 yens.\n",
    'info': [
      {
        topTile: 'Character Information',
        packOfInfo: [
          {
            main: 'Japanese Name:',
            sub: 'もっふる'
          },
          {
            main: 'Romaji Name:',
            sub: 'Moffuru'
          },
          {
            main: 'First Appearance:',
            sub: 'Fifth floor'
          },
          {
            main: 'Role:',
            sub: 'Ally'
          },
        ],
      },
      {
        topTile: 'Biological Information',
        packOfInfo: [
          {
            main: 'Species:',
            sub: 'Mogeko'
          },
        ],
      },
    ],
    'articles': [
      {
        title: 'Appearance',
        text: "Moffuru closely resembles a Mofuko. While retaining some of the key features of a Mogeko (cheery expression and feline ears), Moffuru's body is covered in large amounts of fluffy fur, concealing the shape of their body.\n\nUnlike most Mogeko, Moffuru wears a bit of clothing in the form of a red bowtie across his chest."
      },
      {
        title: 'Personality',
        text: "Like the rest of the Special Mogekos, Moffuru lacks the violent and perverted tendencies of his brethren. He is kind enough to aid Yonaka in her quest to the top of the castle, leading her to Lord Prosciutto's light, which she uses to ascend to the sixth floor."
      },
      {
        title: 'Background',
        text: "Moffuru is said to have been created by King mogeko alongside the other six Special Mogekos, at the genesis of Mogeko Castle, to serve as a guardian of one of the castle's floors.\n\nDue to his resemblance to a Mofuko, Moffuru has been attacked by the Very Hungry Grotesque Mogeko many times."
      }
    ]
  },
  {
    "Title": "Mogecuckoo",
    "SubText": "Is one of the seven Special Mogekos of Mogeko Castle.",
    "ImgPath": require('../img/characters/7.png'),
    'DescriptionText': "\t\t\tRemoving the fins of a shark is a common practice and is used to make dishes. The shark in the can looks like the animal form of Samekichi. This can juice can be bought from the vending machines. It costs 100 yens.\n",
    'info': [
      {
        topTile: 'Character Information',
        packOfInfo: [
          {
            main: 'Japanese Name:',
            sub: 'モゲコッコ'
          },
          {
            main: 'Romaji Name:',
            sub: 'Mogekokko'
          },
          {
            main: 'First Appearance:',
            sub: 'Sixth floor'
          },
          {
            main: 'Role:',
            sub: 'Ally'
          },
        ],
      },
      {
        topTile: 'Biological Information',
        packOfInfo: [
          {
            main: 'Species:',
            sub: 'Mogeko'
          },
        ],
      },
    ],
    'articles': [
      {
        title: 'Appearance',
        text: "Characteristic of a Mogeko, Mogecuckoo has the typical cheery Mogeko face. However, he possesses a notable difference in his appearance compared to other Mogekos; his body is white and egg-shaped, and he has wings rather than fingerless paws, closely resembling a chicken."
      },
      {
        title: 'Personality',
        text: "Like the other Special Mogekos, Mogecuckoo is surprisingly benevolent during Yonaka's quest to reach the seventh floor. Without any complaint he allows her to use his warp egg, and wishes her the best of luck to getting up. In an act of pure altruism Mogecuckoo protected Yonaka and Defect Mogeko from King mogeko's attempt to stop them from warping to the seventh floor, using his own body as a shield and winding up injured as a consequence."
      },
      {
        title: 'Background',
        text: "Mogecuckoo is said to have been created by King mogeko alongside the other six Special Mogekos, at the genesis of Mogeko Castle, to serve as a guardian of one of the castle's floors. Aside from being the guardian of the sixth floor, he is also the chief librarian of Mogeko Castle's library."
      }
    ]
  },
  {
    "Title": "Prosciutto Fairy",
    "SubText": "Is one of the seven Special Mogekos of Mogeko Castle.",
    "ImgPath": require('../img/characters/8.png'),
    'DescriptionText': "\t\t\tMinestrone is a thick soup of Italian origin made with vegetables, often with the addition of pasta or rice, sometimes both. Common ingredients include beans, onions, celery, carrots, stock, and tomatoes.\n\t\t\tMogekos seems to like it a lot and you can find it anytime you see a Mogeko having lunch. Unlimited.\n",
    'info': [
      {
        topTile: 'Character Information',
        packOfInfo: [
          {
            main: 'Japanese Name:',
            sub: '生ハムの妖精'
          },
          {
            main: 'Romaji Name:',
            sub: 'Hahamu no yōsei'
          },
          {
            main: 'First Appearance:',
            sub: 'Second floor'
          },
          {
            main: 'Role:',
            sub: 'Ally'
          },
        ],
      },
      {
        topTile: 'Biological Information',
        packOfInfo: [
          {
            main: 'Species:',
            sub: 'Mogeko'
          },
        ],
      },
    ],
    'articles': [
      {
        title: 'Appearance',
        text: "Prosciutto Fairy resembles a normal Mogeko: they have a cute cheery expression, pale yellow fur, a curly mouse tail, and furry cat ears. On the top of their head are fluffy spikes of fur. They have pronounced blush on their cheeks.\n\nWhile still resembling a Mogeko, Prosciutto Fairy has a number of unique traits that offsets them from the typical Mogeko. On the top of their head are butterfly antenna that closely resemble their tail. They also have white butterfly wings on their back."
      },
      {
        title: 'Personality',
        text: "In comparison with other Mogekos, Prosciutto Fairy is noticeably effeminate. They lack the prominent lust for high school girls that other Mogekos possess. Stated in their bio, Prosciutto Fairy 'has a lot of girl power.'"
      },
      {
        title: 'Background',
        text: "Prosciutto Fairy is said to have been created by King mogeko alongside the other six Special Mogekos, at the genesis of Mogeko Castle, to serve as the fourth floor of Mogeko Castle."
      }
    ]
  }
]

const Stack = createNativeStackNavigator()


export const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="DrawerNav" initialParams={{items: items, characters: characters}} component={DrawerNav} 
                    options={{
                        headerShown: false,
                    }} 
                />
                <Stack.Screen name="ItemScreen" initialParams={{items: items}} component={ItemScreen} 
                    options={{
                        headerShown: false,
                        animationTypeForReplace: 'push',
                        animation:'slide_from_right'
                    }} 
                />
                <Stack.Screen name="ArticleScreen" initialParams={{items: characters}} component={ArticleScreen} 
                    options={{
                        headerShown: false,
                        animationTypeForReplace: 'push',
                        animation:'slide_from_right'
                    }} 
                />
            </Stack.Navigator>
            <StatusBar style='light' />
        </NavigationContainer>
    )
}

