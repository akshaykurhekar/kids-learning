import {Row,Col,Image,Card} from 'react-bootstrap';
import Mercury from './PlanetsImg/Mercury.jpg';
import Venus from './PlanetsImg/Venus.jpg';
import Earth from './PlanetsImg/Earth.jpg';
import Mars from './PlanetsImg/Mars.jpg';
import Jupiter from './PlanetsImg/Jupiter.jpg';
import Saturn from './PlanetsImg/Saturn.jpg';
import Uranus from './PlanetsImg/Uranus.jpg';
import Neptune from './PlanetsImg/Neptune.jpg';
import Pluto from './PlanetsImg/Pluto.jpg';
import Sun from './PlanetsImg/Sun.jpg';
import Moon from './PlanetsImg/Moon.jpg';

function Animals() {
   
   const Animals = [
        {
            photo:Sun,
            val: "Sun"
        },
        {
            photo:Moon,
            val: "Moon"
        },
        {
            photo:Mercury,
            val: "Mercury"
        },
        {
            photo:Venus,
            val: "Venus"
        },
        {
            photo:Earth,
            val: "Earth"
        },
        {
            photo:Mars,
            val: "Mars"
        },
        {
            photo:Jupiter,
            val: "Jupiter"
        },
        {
            photo:Saturn,
            val: "Saturn"
        },
        {
            photo:Uranus,
            val: "Uranus"
        },
        {
            photo:Neptune,
            val: "Neptune"
        },
        {
            photo:Pluto,
            val: "Pluto"
        },
    ];

  return (
    <div >  
    <Row>   
     {
        Animals.map((variant, idx) => (
        <Col md="3" key={idx} className="media-col text-center"> 
        <Card className="mb-3 card-style" style={{width:'250',height:'250'}}>             
            <Card.Body style={{padding:'1rem'}}>
            <Card.Title>
               <Image src={variant.photo} alt={variant.val} roundedCircle style={{padding:'1rem',width:'200px'}} />
               <br/>                                
               {variant.val}
            </Card.Title>                     
            </Card.Body>
        </Card> 
        </Col>
        ))
     }
    </Row> 
    </div>
  );
}

export default Animals;

Fishes and Marine Animals
barbel
carp
cod
crab
eel
goldfish
haddock
halibut
jellyfish
lobster
perch
pike
plaice
ray
salmon
sawfish
scallop
shark
shell
shrimp
trout
6. Insects
ant
aphid
bee
beetle
bumblebee
caterpillar
cockroach
dragonfly
flea
fly
gadfly
grasshopper
harvestman
ladybug
larva
louse (pl. lice)
maggot
midge
moth
nymph
wasp
7. Mammals
anteater
antelope
armadillo
badger
bat
bear
beaver
bullock
camel
chimpanzee
dachshund
deer, hart
dolphin
elephant
elk , moose 
fox
gazelle
gerbil
giraffe
goat
grizzly bear
guinea pig
hamster
hare
hare
hedgehog
horse
hyena
lion
llama
lynx
mammoth
marmot
mink
mole
mongoose
mouse
mule
otter
panda
pig, hog
platypus
polar bear
polecat
pony
porcupine
prairie dog
puma
racoon
rat
reindeer
rhinoceros
seal
seal
sheep
skunk
sloth
squirrel
tiger
weasel
whale
wolf
zebra
8. Molluscs , Mollusks 
slug
snail
9. Reptiles
blindworm
boa
chameleon
constrictor snake
copperhead
coral snake
cottonmouth
crocodile
diamondback rattlesnake
gecko
iguana
lizard
Mojave rattlesnake
poisonous / venomous snake
python
salamander
saurian
sea snake
sidewinder
snake
Southern Pacific rattlesnake
tortoise, turtle
10. Worms
tapeworm
leech
earthworm
round worm
