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
        "info": "Allosaurus was an apex predator in the Late Jurassic in North America.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/a/allosaurus-size.jpg",
            "dinoImage": "https://i.pinimg.com/originals/72/f1/ce/72f1ce42277f595c393b8f9230e46025.jpg"
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
        "info": "Named the 'deceptive lizard' because its skull was confused with those of other sauropods until 1909.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/a/apatosaurus-size.jpg",
            "dinoImage": "http://images.dinosaurpictures.org/apatosaurus_9b24.jpg"
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
		"info": "Brachiosaurus was a large, North American sauropod dinosaur with an arch encircling its nasal opening.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/b/brachiosaurus-size.jpg",
            "dinoImage": "https://www.thoughtco.com/thmb/zbBHNerDgv55ppn0kqn_ikcH8iQ=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-680791823-59af09edaad52b0010486221.jpgs"
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
		"info": "Compsognathus was small and bipedal, roughly the size of a turkey. It lived in Europe and was the first dinosaur genus to be portrayed with feathers.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/c/compsognathus-size.jpg",
            "dinoImage": "https://static.turbosquid.com/Preview/001284/707/XI/_D.jpg"
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
		"info": "Elasmosaurus was an aquatic dinosaur with an extremely long neck that likely fed on other smaller aquatic fauna like fish, molluscs, and squid. E.D. Cope mistakenly placed the skull of an Elasmosaurus on the much shorter tail rather than the extremely long neck.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/e/elasmosaurus-size.jpg",
            "dinoImage": "http://images.dinosaurpictures.org/elasmosaurus-platyurus-a-prehistoric-sergey-krasovskiy_1ead.jpg"
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
		"info": "Giraffatitan was a large sauropod related to Brachiosaurus with huge nostrils and nasal openings in its skull.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/g/giraffatitan-size.jpg",
            "dinoImage": "https://vignette.wikia.nocookie.net/jurassicpark/images/5/58/Giraffatitan.png/revision/latest?cb=20180924230009"
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
		"info": "Indosuchus had a flattened crest on its skull.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/i/indosuchus-size.jpg",
            "dinoImage": "http://images.dinosaurpictures.org/Indosuchus_7076.jpg"
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
		"info": "Khaan was an oviraptor with a parrot-like beak, discovered in Mongolia.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/k/khaan-size.jpg",
            "dinoImage": "https://pbs.twimg.com/media/Ci7Kq72WYAYWJGM.jpg"
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
		"info": "Minmi was a small, anklyosaurian, armored dinosaur discovered in Australia.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/m/minmi-size.jpg",
            "dinoImage": "http://images.dinosaurpictures.org/minmi-paravertebra-a-prehistoric-era-sergey-krasovskiy_07e1.jpg"
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
		"info": "Ouranosaurus was an iguanodont dinosaur in Africa. It had a large sail on its back supported by long, wide neural spines and an elnogated, flat skull.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/o/ouranosaurus-size.jpg",
            "dinoImage": "https://vignette.wikia.nocookie.net/jurassicpark/images/5/5c/JPI_Ouranosaurus_Profile.gif/revision/latest?cb=20161104160506"
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
		"info": "Found in Canada and the USA, Parasaurolophus was a hadrosaur most famous for its long, elaborate cranial crest.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/p/parasaurolophus-size.jpg",
            "dinoImage": "http://images.dinosaurpictures.org/Parasaurolophus_0d4f.jpg"
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
		"info": "Spinosaurus was one of the largest carnivorous dinosaurs to walk the Earth. Its diet consisted mostly of fish and the large spines on its back likely formed a sail.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/s/spinosaurus-size.jpg",
            "dinoImage": "https://vignette.wikia.nocookie.net/walkingwithdinos/images/e/ee/Dino-large_spino.png/revision/latest?cb=20131109000010"
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
		"info": "Tyrannosaurus is well-represented in both fiction and history with over 50 specimens discovered. It and was one of the last non-avian dinosaurs to exist before the extinction event. Tyrannosaurus had a massive skull and a long heavy tail.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/t/tyrannosaurus-size.jpg",
            "dinoImage": "http://islanublar.jurassicworld.com/media/dinosaurs/tyrannosaurus-rex/tyrannosaurus-rex-info-graphic.png"
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
		"info": "Found in the USA, Utahraptor resembled velociraptor but much larger, prompting Robert T. Bakker to pronounce it 'Spielberg's raptor' due to the velociraptors in the movie <em>Jurassic Park</em> being portrayed much larger than their historical counterparts.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/u/utahraptor-size.jpg",
            "dinoImage": "https://nhmu.utah.edu/sites/default/files/g1835_Utahraptor_1.png"
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
		"info": "Vulcanodon was a primitive sauropod that lived in southern Africa.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/v/vulcanodon-size.jpg",
            "dinoImage": "https://i.pinimg.com/originals/ef/e5/53/efe55306be5953df1de2e009b275d3c4.jpg"
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
		"info": "Xenoceratops had horns and a bony frill with elborate ornamentation of projections, knobs, and spikes.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/x/xenoceratops-size.jpg",
            "dinoImage": ""
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
		"info": "An ornithopod dinosaur known only by a partial skull and postcranial fragments, not much about Zephyrosaurus has been discovered.",
        "images": {
            "compareToHuman": "http://www.prehistoric-wildlife.com/images/species/z/zephyrosaurus-size.jpg",
            "dinoImage": ""
        }
	}
]

)