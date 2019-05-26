use dinosaur_hub;
db.dropDatabase();

db.dinosaurs.insertMany([
	{
		"name": "Allosaurus",
		"pronunciation": "AL-oh-sore-us",
		"meaningOfName": "other lizard",
		"diet": "carnivorous",
		"length": "12m",
		"period": "Late Jurassic",
		"mya": "156-144",
        "info": "Allosaurus was an apex predator in the Late Jurassic in North America. With its knife-like teeth and strong, sharp claws, Allosaurus  was a fierce hunter and one of the most common big predators of the Late Jurassic age. Allosaurus preyed on the rhino-sized Stegosaurus. It may also have attacked the young of giant plant-eaters such as Diplodocus. Fossil evidence shows that its prey fought back, making every hunt a potential life-or-death struggle for Allosaurus. This dinosaur belonged to a group of meat-eaters called theropods. Like many theropods, Allosaurus was probably a scavenger as well as a hunter, feeding on any dead animals it could find as well as eating dinosaurs that it killed. ",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/a/allosaurus-size.jpg",
            "dinoImage": "https://i.pinimg.com/originals/72/f1/ce/72f1ce42277f595c393b8f9230e46025.jpg"
        },
        "location": {
            "continent": "North America",
            "latitude": "41.9014",
            "longitude": "-106.0792"     
        }
	},
	{
		"name": "Apatosaurus",
		"pronunciation": "ah-PAT-oh-sore-us",
		"meaningOfName": "deceptive lizard",
		"diet": "herbivorous",
		"length": "21m",
		"period": "Late Jurassic",
		"mya": "154-145",
        "info": "Named the 'deceptive lizard' because its skull was confused with those of other sauropods until 1909. Apatosaurus was a member of the sauropod group of dinosaurs. It lived in the late Jurassic period, in an area now in the US. It had a long, flexible neck and ate plants like all sauropods. From nose to tail, Apatosaurus was around 21m (69ft) long. For a long time, Apatosaurus was thought to be the same as another dinosaur called Brontosaurus but scientists have now classified them as separate species, within the same group as Diplodocus. Apatosaurus laid some of the largest eggs of any dinosaur.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/a/apatosaurus-size.jpg",
            "dinoImage": "http://images.dinosaurpictures.org/apatosaurus_9b24.jpg"
        },
        "location": {
            "continent": "North America",
            "latitude": "42.0358",
            "longitude": "-106.3906"     
        }
	},
	{
		"name": "Brachiosaurus",
		"pronunciation": "BRAK-ee-oh-sore-us",
		"meaningOfName": "arm lizard",
		"diet": "herbivorous",
		"length": "30m",
		"period": "Late Jurassic",
		"mya": "155-140",
		"info": "Brachiosaurus was a sauropod that had very long front legs and a long, flexible neck. It weighed as much as 30–50 tonnes, which is about the same as 12 African elephants. This dinosaur’s long neck helped it to feed at an incredible height of 15m (49ft). It used its spoon-shaped teeth to snip off leaves from trees like conifers and tree ferns. Brachiosaurus ate about 200kg (440lb) of leaves and twigs per day.  ",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/b/brachiosaurus-size.jpg",
            "dinoImage": "https://www.thoughtco.com/thmb/zbBHNerDgv55ppn0kqn_ikcH8iQ=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-680791823-59af09edaad52b0010486221.jpgs"
        },
        "location": {
            "continent": "North America",
            "latitude": "39.0761",
            "longitude": "-108.647"     
        }
	},
	{
		"name": "Compsognathus",
		"pronunciation": "komp-sog-NATH-us",
		"meaningOfName": "pretty jaw",
		"diet": "carnivorous",
		"length": "0.65m",
		"period": "Late Jurassic",
		"mya": "145-140",
		"info": "With its large eyes, clawed hands, and sharp, curved teeth, Compsognathus was a typical carnivorous (meat-eating) dinosaur. It was only the size of a chicken, but it was still a fierce predator. Fossils of Compsognathus show that its body was built for speed. This quick, nimble hunter was able to snatch small animals before they could scamper under rocks or into the undergrowth. Compsognathus belonged to a group of giant, mainly meat-eating dinosaurs called theropods. Paleontologists now believe it had short bristles all over its body.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/c/compsognathus-size.jpg",
            "dinoImage": "https://static.turbosquid.com/Preview/001284/707/XI/_D.jpg"
        },
        "location": {
            "continent": "Europe",
            "latitude": "45.7797",
            "longitude": "5.5486"     
        }
	},
	{
		"name": "Dracorex",
		"pronunciation": "dray-ko-rex",
		"meaningOfName": "dragon king",
		"diet": "herbivorous",
		"length": "estimated 4m",
		"period": "Late Cretaceous",
		"mya": "66",
		"info": "<em>Dracorex hogwartsia</em> was a pachycephalosaur that did not have a domed head. Instead, its skull was adorned with spikes and frills reminiscent of a dragon. A skull was discovered in the Hell Creek Formation in South Dakota and donated to the Children's Museum of Indianapolis in 2004. Its name was inspired by J.K. Rowling's Harry Potter series and the young visitors to the children's museum.",
        "images": {
            "compareToHuman": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Pachycephalosaurus_scale.png",
            "dinoImage": "https://banner2.kisspng.com/20180729/cf/kisspng-stygimoloch-tyrannosaurus-universal-pictures-baryo-jurassic-world-fallen-kingdom-logo-5b5e75a72532f0.1617724815329171591524.jpg"
        },
        "location": {
            "continent": "North America",
            "latitude": "50.7413",
            "longitude": "-111.5759"     
        }
	},
	{
		"name": "Elasmosaurus",
		"pronunciation": "ee-LAZ-mo-sore-us",
		"meaningOfName": "thin plate lizard",
		"diet": "carnivorous",
		"length": "14m",
		"period": "Late Cretaceous",
		"mya": "80.5",
		"info": "Elasmosaurus was an aquatic dinosaur with an extremely long neck that likely fed on other smaller aquatic fauna like fish, molluscs, and squid. E.D. Cope mistakenly placed the skull of an Elasmosaurus on the much shorter tail rather than the extremely long neck. Another one of the most interesting facts about Elasmosaurus was that it was also incapable of moving its head like a snake. While early paleontologists may have thought it could move its neck like a snake, modern paleontologists now know that is an impossibility.  Elasmosaurus was only able to hold its neck out straight, anything else wouldn’t have been possible.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/e/elasmosaurus-size.jpg",
            "dinoImage": "http://images.dinosaurpictures.org/elasmosaurus-platyurus-a-prehistoric-sergey-krasovskiy_1ead.jpg"
        },
        "location": {
            "continent": "Asia",
            "latitude": "44",
            "longitude": "142"     
        }
	},
	{
		"name": "Giraffatitan",
		"pronunciation": "ji-raf-e-tie-tan",
		"meaningOfName": "giraffe titan",
		"diet": "herbivorous",
		"length": "23m",
		"period": "Late Jurassic",
		"mya": "154-142",
		"info": "Giraffatitan was a large sauropod related to Brachiosaurus with huge nostrils and nasal openings in its skull. The name of this dinosaur describes it perfectly, because it was like a colossal giraffe. Its astoundingly high reach allowed it to feed from the treetops without lifting a foot off the ground. It could use its very long neck to reach the leaves while standing on extra-long front legs that raised the front end of its body higher than the back end. It was one of the tallest dinosaurs that ever lived.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/g/giraffatitan-size.jpg",
            "dinoImage": "https://vignette.wikia.nocookie.net/jurassicpark/images/5/58/Giraffatitan.png/revision/latest?cb=20180924230009"
        },
        "location": {
            "continent": "Africa",
            "latitude": "-9.7118",
            "longitude": "39.2238"     
        }
	},
	{
		"name": "Indosuchus",
		"pronunciation": "in-doh-sook-us",
		"meaningOfName": "Indian crocodile",
		"diet": "carnivorous",
		"length": "7m",
		"period": "Late Cretaceous",
		"mya": "70-66",
		"info": "Indosuchus was a close relative of other abelisaurids, such as Abelisaurus from South America and Majungasaurus from Madagascar. It possibly grew to a size of 6 meters (20 feet) long. Because only some skull material was found, Indosuchus placement has been somewhat erratic. As the remains are fragmentary, it is difficult to assess whether Indosuchus is identical to other poorly known theropods from the Lameta Formation like Indosaurus. Though, the discovery of other abelisaurids like Carnotaurus has helped clarify its position. Indosuchus had a flattened crest on its skull.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/i/indosuchus-size.jpg",
            "dinoImage": "http://images.dinosaurpictures.org/Indosuchus_7076.jpg"
        },
        "location": {
            "continent": "Asia",
            "latitude": "23.1687",
            "longitude": "79.9723"     
        }
	},
	{
		"name": "Khaan",
		"pronunciation": "kahn",
		"meaningOfName": "ruler",
		"diet": "omnivorous",
		"length": "1.8m",
		"period": "Late Cretaceous",
		"mya": "81-75",
		"info": "Khaan was an oviraptor with a parrot-like beak, discovered in Mongolia. Khaan did not differ much from other oviraptorids. At first, its remains were assigned to Ingenia, but the Khaan manual structure, lacking the expansion of the upper third metacarpal, was considered to differ sufficiently from that of Ingenia for it to be assigned to its own genus. The oviraptorid diet is disputed, with plants and molluscs having been suggested. Like other oviraptorids, Khaan was probably at least partially a meat eater, feeding on small vertebrates like mammals, lizards and possibly other small dinosaurs. It was also probably feathered.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/k/khaan-size.jpg",
            "dinoImage": "https://pbs.twimg.com/media/Ci7Kq72WYAYWJGM.jpg"
        },
        "location": {
            "continent": "Asia",
            "latitude": "43.6644",
            "longitude": "100.9019"     
        }
	},
	{
		"name": "Minmi",
		"pronunciation": "min-mie",
		"meaningOfName": "Minmi Crossing, Queensland, Australia",
		"diet": "herbivorous",
		"length": "3m",
		"period": "Early Cretaceous",
		"mya": "121-112",
		"info": "Minmi was a small, anklyosaurian, armored dinosaur discovered in Australia. Minmi was about 6½ feet (2 meters) long, and stood about 3 feet (1 meter) tall at the shoulder. Its body, head and tail were protected by a variety of types of bony armor. Its hind legs were longer than its front limbs, and from fossilized tracks, scientists believe that Minmi was relatively slow moving.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/m/minmi-size.jpg",
            "dinoImage": "http://images.dinosaurpictures.org/minmi-paravertebra-a-prehistoric-era-sergey-krasovskiy_07e1.jpg"
        },
        "location": {
            "continent": "Australia",
            "latitude": "-26.425",
            "longitude": "148.7925"     
        }
	},
	{
		"name": "Ouranosaurus",
		"pronunciation": "oo-RAH-noh-sore-us",
		"meaningOfName": "brave monitor lizard",
		"diet": "herbivorous",
		"length": "7m",
		"period": "Early Cretaceous",
		"mya": "125-112",
		"info": "Ouranosaurus was an iguanodont dinosaur in Africa. It had a large sail on its back supported by long, wide neural spines and an elnogated, flat skull. The sail is believed to have been used to keep the animal cool during the hot days. It could do this by expelling heat through the sail. Other paleontologists believe that this wasn’t the purpose of it at all, that it was used only for the dinosaur to attract a mate with. Kind of like feathers on a peacock. A well known fact about Ouranosaurus is that although it didn’t have any teeth in its bony beak, it did have teeth in its cheek. This would have allowed the dinosaur to grind a variety of plant material so it could easily digest it. This dinosaur’s diet probably consisted of seed ferns, ginkgos and club mosses.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/o/ouranosaurus-size.jpg",
            "dinoImage": "https://vignette.wikia.nocookie.net/jurassicpark/images/5/5c/JPI_Ouranosaurus_Profile.gif/revision/latest?cb=20161104160506"
        },
        "location": {
            "continent": "",
            "latitude": "",
            "longitude": ""     
        }
	},
	{
		"name": "Parasaurolophus",
		"pronunciation": "PARR-eh-saw-ROL-off-us / PARR-eh-sawr-eh-LOH-fus",
		"meaningOfName": "near crested lizard",
		"diet": "herbivorous",
		"length": "11m",
		"period": "Late Cretaceous",
		"mya": "76-74",
		"info": "Found in Canada and the USA, Parasaurolophus was a hadrosaur most famous for its long, elaborate cranial crest. It belonged to a group of broad-beaked, plant-eating dinosaurs called hadrosaurs. Its most striking feature was the long, bony crest on its head, which contained a network of tubes. It is likely that the tubes worked like a trumpet to make very loud, booming calls to communicate with other herd members. In the 1930s, at least one scientist believed that Parasaurolophus searched for food underwater and used its crest as a snorkel. But we now know that the crest does not have a hole in the end, so it could not have been used for breathing underwater. The muscular body and wide shoulders of Parasaurolophus may have helped it push through dense undergrowth in woodlands. ",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/p/parasaurolophus-size.jpg",
            "dinoImage": "http://images.dinosaurpictures.org/Parasaurolophus_0d4f.jpg"
        },
        "location": {
            "continent": "",
            "latitude": "",
            "longitude": ""     
        }
	},
	{
		"name": "Spinosaurus",
		"pronunciation": "SPINE-oh-SORE-us",
		"meaningOfName": "spine lizard",
		"diet": "carnivorous",
		"length": "18m",
		"period": "Early Cretaceous",
		"mya": "112-97",
		"info": "Longer and probably heavier than the mighty Tyrannosaurus, Spinosaurus may have been the largest land predator ever known. Mystery surrounds Spinosaurus, as very few bones belonging to it have been uncovered. The few fossils that have been found suggest that this giant dinosaur had a spectacular sail-like structure on its back. Remains of its fossilized skull show that Spinosaurus had very long jaws, with sharp, pointed teeth. Its jaws were like a crocodile’s, making it likely that this dinosaur preyed on fish by wading into shallow water. Spinosaurus belongs to a group of giant dinosaurs called theropods.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/s/spinosaurus-size.jpg",
            "dinoImage": "https://vignette.wikia.nocookie.net/walkingwithdinos/images/e/ee/Dino-large_spino.png/revision/latest?cb=20131109000010"
        },
        "location": {
            "continent": "",
            "latitude": "",
            "longitude": ""     
        }
	},
	{
		"name": "Tyrannosaurus",
		"pronunciation": "tie-RAN-oh-sore-us",
		"meaningOfName": "tyrant lizard",
		"diet": "carnivorous",
		"length": "12m",
		"period": "Late Cretaceous",
		"mya": "68-66",
		"info": "Tyrannosaurus is well-represented in both fiction and history with over 50 specimens discovered. It and was one of the last non-avian dinosaurs to exist before the extinction event. As long as a bus and twice the weight of an elephant, the mighty Tyrannosaurus was the deadliest of all meat-eating dinosaurs. It was a heavyweight hunter with strong teeth and incredibly powerful jaws, which allowed the dinosaur to kill and eat almost any animal that came in its way. The Tyrannosaurus had no enemies, and its name means “king of the lizards”.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/t/tyrannosaurus-size.jpg",
            "dinoImage": "http://islanublar.jurassicworld.com/media/dinosaurs/tyrannosaurus-rex/tyrannosaurus-rex-info-graphic.png"
        },
        "location": {
            "continent": "",
            "latitude": "",
            "longitude": ""     
        }
	},
	{
		"name": "Utahraptor",
		"pronunciation": "YOO-tah-RAP-tor",
		"meaningOfName": "Utah predator",
		"diet": "carnivorous",
		"length": "6m",
		"period": "Early Cretaceous",
		"mya": "112-100",
		"info": "Found in the USA, Utahraptor resembled velociraptor but much larger, prompting Robert T. Bakker to pronounce it 'Spielberg's raptor' due to the velociraptors in the movie <em>Jurassic Park</em> being portrayed much larger than their historical counterparts. Utahraptor was the largest member of a group of dinosaurs called dromaeosaurs. Like other dromaeosaurs, it had a large, hooked claw on its second toe that it might have used for slashing or stabbing a victim after leaping on it. It reached about half a tonne in weight, making it heavier than a grizzly bear. The dromaeosaurs were small but ferocious hunters.  ",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/u/utahraptor-size.jpg",
            "dinoImage": "https://nhmu.utah.edu/sites/default/files/g1835_Utahraptor_1.png"
        },
        "location": {
            "continent": "",
            "latitude": "",
            "longitude": ""     
        }
	},
	{
		"name": "Vulcanodon",
		"pronunciation": "vul-ka-oh-don",
		"meaningOfName": "vulcano tooth",
		"diet": "herbivorous",
		"length": "6.5m",
		"period": "Early Jurassic",
		"mya": "183-175",
		"info": "Vulcanodon was a primitive sauropod that lived in southern Africa. As one of the earliest and basalmost sauropods, it is important for understanding the early evolution of this group. Sauropods descend from basal sauropodomorphs (informally called 'prosauropods'), which were primitively bipedal (two-legged). While Vulcanodon already was fully quadrupedal (four-legged), its limb proportions were intermediate between those of its prosauropod ancestors and those of later, more derived sauropods. Its forelimbs were much more similar to later sauropods than basal sauropodomorphs because they are straight, much more gracile, and the proximal end of the ulna is v-shaped.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/v/vulcanodon-size.jpg",
            "dinoImage": "https://i.pinimg.com/originals/ef/e5/53/efe55306be5953df1de2e009b275d3c4.jpg"
        },
        "location": {
            "continent": "",
            "latitude": "",
            "longitude": ""     
        }
	},
	{
		"name": "Xenoceratops",
		"pronunciation": "ZEE-no-SEH-ruh-tops",
		"meaningOfName": "alien horned face",
		"diet": "herbivorous",
		"length": "6m",
		"period": "Early Cretaceous",
		"mya": "78.5-77.5",
		"info": "Xenoceratops had horns and a bony frill with elborate ornamentation of projections, knobs, and spikes. It can be distinguished from other ceratopsids by details of the frill's bony ornamentation. The two bony projections closest to the midline of the frill are thick knobs, oriented toward the midline. Next to each knob is a single long flattened straight spike pointing laterally and to the rear. The anterior corners of the parietal have a large triangular knob. Unlike most other centrosaurines, the midline bar of the frill has no bumps or other ornamentation. Xenoceratops probably had a nasal and brow horn configuration comparable to that of other basal centrosaurines. The holotype and associated skull material do not include much of the face, but the Royal Tyrrell skull shows evidence of large brow horns, perhaps similar to those of Albertaceratops and Diabloceratops. Similarly, the form of the nasal bone fragment suggests a long, low structure like that of Medusaceratops.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/x/xenoceratops-size.jpg",
            "dinoImage": "https://static01.nyt.com/images/2012/11/13/science/13OBDINO/13OBDINO-popup.jpg"
        },
        "location": {
            "continent": "",
            "latitude": "",
            "longitude": ""     
        }
	},
	{
		"name": "Zephyrosaurus",
		"pronunciation": "ZEF-ear-ro-SORE-us",
		"meaningOfName": "West wind lizard",
		"diet": "herbivorous",
		"length": "1.8m",
		"period": "Early Cretaceous",
		"mya": "120-110",
		"info": "An ornithopod dinosaur known only by a partial skull and postcranial fragments, not much about Zephyrosaurus has been discovered.  Among other distinctive characteristics, it had a steep face, a raised knob on the upper jaw, and a larger knob on the cheekbone. Some of the bones may have allowed movement within the skull (cranial kinesis) as well. Like other hypsilophodonts, it had beak teeth.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/z/zephyrosaurus-size.jpg",
            "dinoImage": "http://images.dinosaurpictures.org/Zephyrosaurus-Jean-Luc-Sala-600x452_ad8f.jpg"
        },
        "location": {
            "continent": "",
            "latitude": "",
            "longitude": ""     
        }
	}
]

)