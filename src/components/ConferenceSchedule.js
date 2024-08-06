import React, { useState, useMemo, useEffect } from 'react';
import { ChevronDown, ChevronUp, Search, Calendar, Clock, User, Sun, Moon, ExternalLink, Plus, Minus } from 'lucide-react';

const EventDetails = ({ event, isOpen, onToggle }) => {
  return (
    <div className="mt-2">
      <button
        onClick={onToggle}
        className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
      >
        {isOpen ? (
          <>
            <Minus size={14} className="mr-1" /> Hide details
          </>
        ) : (
          <>
            <Plus size={14} className="mr-1" /> Show details
          </>
        )}
      </button>
      {isOpen && (
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          <p>{event.description}</p>
        </div>
      )}
    </div>
  );
};

const ConferenceSchedule = () => {
  const [expandedDay, setExpandedDay] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [expandedEvents, setExpandedEvents] = useState({});

  const lastUpdated = "2024-08-06";

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const schedule = [
  {
    date: "Wednesday, August 7, 2024",
    sessions: [
      {
        name: "Wednesday Workshop • Tesla Technology Wkshp",
        events: [
          {
            time: "1:00pm",
            title: "Unleashing the Power of VBM Workshop",
            description: "Here, you will be taken on a spiraling tour through the toroidal roller coaster of our deterministic universe. The vibratory essence of all that exists, is no longer on its elusive hide and seek trip — it has been found! With the introduction of VortexBased Mathematics you will be able to see how energy is expressing itself mathematically. This math has no anomalies and shows the dimensional shape and function of the universe as being a toroid or donut-shaped black hole. This is the template for the universe and it is all within our base ten decimal system! You have entered a place where Numbers are real and alive, not merely symbols for other things. The relationships between numbers are not random or manmade but numbers are actually elementary particles of which everything is composed. This lost knowledge was well known to our ancients and is now uncovered for us today. You will come to see numbers in a simple yet profoundly perfect three-dimensional matrix grid pattern that forms the shape of a torus. The grid reveals the calibration and timing for an engine that can take us throughout the universe and solve mankind's energy needs. The revolutionary world of VBM hopfion dielectric antennas has profound implications for biological healing. These innovative antennas harness the principles of VBM to create a new paradigm in applied magnetic fields. The antennas interact with bioelectromagnetic fields to produce unique healing effects, paving the way for noninvasive and effective therapeutic solutions. We agitate the fluids in the body which according to BEMER Mat studies, assist to regenerate tissue to enhance cellular communication. Gain insights into the underlying mechanisms driving these healing benefits and learn about the exciting possibilities for future advancements in healthcare!"
          }
        ]
      },
      {
        name: "Conference Session 1 - An ExtraOrdinary Revelation",
        events: [
          {
            time: "5:00pm",
            title: "The SAFIRE Project",
            speaker: "Michael Clarage PhD",
            description: "The SAFIRE plasma reactor is an attempt to replicate the sun in a lab on Earth! The processes required to generate the miniature 'sun' are put in play, developed, and tested. The SAFIRE experiments relate to energy production, transmutation of elements, and remediation of radiation."
          },
          {
            time: "7:00pm",
            title: "Everything Electric!",
            speaker: "James Sorensen",
            description: "There are two competing theoretical models of the sun – gravitational and electrical. Some cosmologists believe there is no electricity in Space. Any initial charge distribution would have neutralized billions of years ago. This leaves cosmology with one force to explain our universe... gravity. Gravity is thought to be the result of mass - the more mass the more gravity. Electric Universe theories claim the primary force defining our universe is electricity, not gravity. EU theorists show galaxies can be described using known equations for electromagnetics. This is math used by engineers to create our modern world of electric devices."
          },
          {
            time: "7:00pm",
            title: "Conference Evening Social",
            description: "Join us for an evening of networking and socializing with fellow conference attendees."
          }
        ]
      }
    ]
  },
  {
    date: "Thursday, August 8, 2024",
    sessions: [
      {
        name: "Conference Session 2 - ExtraOrdinary Mind Concepts",
        events: [
          {
            time: "8:00am",
            title: "Lahkovsky Multiwave Oscillator... Brilliance Almost Lost",
            speaker: "Sue Whittaker",
            description: "In 1925, Georges Lakhovsky published The Secret of Life: Electricity, Radiation, and Your Body highlighting the physics of the previously unknown and undetected force of cosmic radiation that constantly bombards the Earth. While it is comprised of a virtually unlimited range of electromagnetic frequencies, Earth is located in a delicately balanced habitable zone, or Goldilocks region. Maintaining this balance is a vital key to health in plants, animals and humans. Lakhovsky studied a French theory developed in 1850 about the harmful effects cosmic radiation can have at ground level in areas with certain types of geology. This meshed with his theory that disease is linked to electromagnetic frequencies and he knew certain areas of Paris had a high incidence of cancer—while in adjacent areas it was low. Lakhovsky soon found the patterns of geology matched the predicted incidence of cancer. Lakhovsky's desire to find the cause and cure of cancer drove his theory that cellular oscillatory disequilibrium causes disease, and balance helps restore wellness. His invention in 1931 of the multiwave oscillator cured some forms of cancer and other illnesses, but for those in later stages it did little to help. Lakhovsky's frequency therapy is the basis of Sue's Broad Spectrum DeTOX program and its individualized homeopathic remedies of programmable, non-consumable supplements."
          },
          {
            time: "9:30am",
            title: "Ultrasound Probes For Home Use!",
            speaker: "Joseph Ence",
            description: "Ultrasound technology lets us see inside the body. Modern ultrasound is very clear and the best images are in the Carotid artery above your shoulders. A C-IMT Scan is a non-invasive procedure that uses ultrasound technology to measure the thickness of your carotid arteries' walls. These arteries, located on each side of your neck, supply blood to your brain. Over time, plaque can build up in these arteries, causing them to thicken. This is often an early sign of atherosclerosis, a disease that can lead to serious conditions such as heart attacks and strokes. This fast, painless test can determine the 'age' of your arteries. It checks how thick your artery walls are - thicker walls can mean inflammation. Additionally, it will spot and show plaque, whether soft or hard, in your arteries. You get detailed pictures from the ultrasound for your records. Medical ultrasound probes have made a huge jump in technology to visualize your own anatomy. While it used to be out of reach for consumers, they are now available creating an industry of local ultrasound technicians for the community. Citizens and physicians seeing and tracking their own bodies in real time. Heart attack and stroke are the biggest threat to Americans, by leveraging existing research and educating patients by giving them context and education. We are closer than ever empowering invested citizens to take better care of their health. Free sneak peaks of your cartoid artery will be done at the expo!"
          },
          {
            time: "11:00am",
            title: "Resonant Healing Technology The Past ... Thru Tomorrow!",
            speaker: "Steven Ross PhD",
            description: "We tend to think because we have fast computers, fast cars, instantaneous access to world knowledge, that we are more intelligent and advanced than many of the ancient writers and philosophers. Despite all our advanced electromagnetic devices, individuals are not maintaining good health. What might the ancients have known that we today are not aware of? Isn't the idea of all our healing devices to bring us to this vibration of better health? Though medical costs continue to rise, acceptable solutions are not offered for any major health challenges. Pharmaceuticals or repeated surgeries should not be the only option. Our suppressed past reveals alternatives to the way we treat disease! For instance, if the most powerful light-source microscope in the world was used for research it would change the entire paradigm of medicine away from pharmaceuticals. The use of color allowed a little girl with 3rd degree burns on two-thirds of her body to grow new skin without topical preparations. A past chairman of the Nobel Assembly whose electrical cure for cancer, with no adverse effects, was completely ignored. Steve will discuss his experiences while he possessed Rife's Universal Microscope and show Rife's original laboratory book from 1933. Also, a Multiple Wave Oscillator and an original Dinshah machine from 1933 will be displayed!"
          }
        ]
      },
      {
        name: "Conference Session 3 - ExtraOrdinary AntiGravity Tech",
        events: [
          {
            time: "1:00pm",
            title: "Searl Effect Generator Replication",
            speaker: "Isaiah Ritchey",
            description: "John Searle, known all over the world as the inventor of the Searl Effect Generator, designed a generator using magnetic fields to induce a flow of electrons from the neodymium core through a system of rotating magnetized components. Those electrons would be collected, compressed, used and recycled when the magnetic forces were in motion. Using Searle's work as a guidepost, I set out to replicate and validate his work by constructing a physical model. My replication device is precisely modeled after Searle's generator device. It contains all the nearly identical elements as the original device he built, and is one the best replicas to ever exist. The magnetic generator consists of a series of rings (also called \"plates\") and a number of cylindrical rollers composed of the same type of elements as in the stator. The system at this moment uses a series of sophisticated pulsed electromagnets that generate the continual motion of magnetized rollers around magnetized rings. The magnetic field holds the rollers tightly to the copper plate. At the same time, the electrons moving through layered elements are collected and compressed on the surface of the copper plate, lifting the roller and creating the space between the roller and the plate. This is the Searl Effect... the intersection of two magnetic fields creating a magnetic wave. The generator uses perpendicular magnetic fields located on the rollers and stator rings to create a wave pattern."
          },
          {
            time: "2:30pm",
            title: "Wardforce Magnetics & Antigravity",
            speaker: "Steven Ward",
            description: "An energy producing magnetic converter patented and published by the US Patent office in 2009, is only one very small benefit from the discovery of Wardforce. The first sentence in the abstract of USPTO 7531930 states: An energy producing magnetic converter is provided that outputs both electrical and mechanical energy. Nowhere in the world will they patent perpetual motion applications. I had to prove that Wardforce existed, before the USPTO would accept my application for US Patent 7531930. Wardforce can be defined as the force part of the magnetic field that controls forward and backward motion, attraction and repelling. Pinch your finger, a current goes up your arm... in simple terms a current is defined as the Magnetic Field in motion. This which controls that motion is Wardforce. I can demonstrate energy from magnets using junk. Incredibly, space travel can be demonstrated on a bench right in front of you. When demonstrating, space travel, gravity and anti-gravity are defined by duplication. It also proves that gravity can be made. Think of what this knowledge can do for the space program. Keep in mind that I am using junk for these ongoing experiments and demonstrations. Imagine what could be done with the proper resources and personnel!"
          },
          {
            time: "4:00pm",
            title: "Electrogravitics... The New Age of Disclosure",
            speaker: "Russell Anderson",
            description: "The New Age of Disclosure of data on UAP (UFOs) began in the media in 2012. The mechanisms and apparatus for Disclosure accelerated with the appearance of Tom DeLonge and \"Whistleblowers\" like Navy pilot Ryan Graves, who testified about UAP reality July, 2023 before a groundbreaking congressional open session. The first real Whistleblower was researcher and builder Robert Lazar, who came forward in the late 1980s, as a stopgap measure to protect his own life. Other whistleblowers like Robert Bigelow of Bigelow Aerospace assert that the covert, unelected US Government has UAP retrieval teams to secure UAP crashsites. Late July 2023, whistleblowers working for the US Government, the DoD and the Pentagon testified to the hard reality of such programs and that the technology was created on other worlds by Biologics. However, no one in the media or mainstream scientific community discusses or elucidates the modus operandi of UAPs, since Final Disclosure would destroy our economy, according to the CIA in the 1950s. One example of disruptive technology that slipped through the cracks of suppression are the operational Navy patents published by the USPTO for Salvatore Pais. With working technology onstage, I will show we have had such alien tech, for over 100 years, that mimics and copies the aether (ZPE) energy conversion and propulsion tech of UAPs!"
          }
        ]
      },
      {
        name: "Conference Session 4 (Evening)",
        events: [
          {
            time: "7:00pm",
            title: "Universal One! Illuminating Holographic Tapestry",
            speakers: "Karen Elkins & Kimberely Faith",
            description: "Welcome to an extraordinary exploration into the Science of One and its Unity, delving into the cosmology of Walter Russell's \"Universal One.\" Tap dance with the mysteries of existence and explore a holographic living matrix—a cosmic tapestry woven with the threads of light that connect us to the essence of the cosmos. Karen and Kim will ignite your spirit by illuminating the secrets of the lattice, unveiling a supercomputer within a universal cosmic sound system, where geometry, fractals, balance, and the enchanting light spectrum converge to shape the canvas of our reality. Prepare to be inspired as you embark into the journey of your mind of genius, take the a stairstep journey into your consciousness with the scientists who measured the field in the movie \"The 1 Field\". During this session we will actually calculate the field of our collective mind and reveal the geometry of our living matrix."
          },
          {
            time: "8:30pm",
            title: "Conference Evening Social",
            description: "Join fellow attendees for an evening of networking and discussion."
          }
        ]
      }
    ]
  },
  {
    date: "Friday, August 9, 2024",
    sessions: [
      {
        name: "Conference Session 5 - ExtraOrdinary Water Concepts",
        events: [
          {
            time: "8:00am",
            title: "JIVA Water... Harmonizing Water Technology",
            speaker: "Krishna Madappa",
            description: "Water has the ability to \"remember\" substances it has come into contact with, even after those substances have been removed. This theory the basis of homeopathic and traditional remedies, where a substance is diluted in water multiple times, with each dilution believed to imprint the water with the energetic signature of the original substance. Likewise, water can store the vibrational or energetic patterns of various substances. This stored information can influence the human body's energy systems and bring about therapeutic effects, despite the extreme dilution of the original substance in the remedy. Although the notion of water possessing memory and information-retaining capabilities remains a subject of considerable discussion in the scientific realm, Indian wisdom has a profound comprehension of this concept. It encompasses the transformation of ordinary water into \"theertha,\" imbued with healing properties. The natural flow of water, combined with its inherent light, is what's missing in the water we consume today. This missing element, known as Life Energy, is responsible for the numerous health benefits that water should provide us with on a daily basis. We can restore Life Energy to our everyday water with Jiva Water Devices. These devices utilize quantum principles and frequency encoding technologies to bring back the natural flow and Life Energy to water."
          },
          {
            time: "9:30am",
            title: "Brown's Gas Applications",
            speaker: "George Wiseman",
            description: "Working with Brown's Gas since 1986, George Wiseman developed practical technology that optimized a number of various Brown's Gas applications (fuel saving, torch fuel-gas, radioactive neutralization, etc). In 1996 a 'WaterTorch' customer claimed he had cured a melanoma using Brown's Gas. Wiseman shared this information with other customers and many of them tried it on their various ailments, and they reported astonishing results back. They convinced George to build Brown's Gas machines that were optimized for health applications. Brown's Gas is a MIXTURE of several variations of hydrogen and oxygen, including a negatively charged cold plasma form of water he named Electrically Expanded Water (ExW). ExW works synergistically with hydrogen to make hydrogen more therapeutic. Hydrogen is literally our most important nutrient; comprising 62% (by volume) of the average human body. But hydrogen is a FOOD and is inert by itself. Hydrogen cannot do anything without energy. Most sick people have seriously compromised energy generation systems and have used up their energy reserves. ExW provides bioavailable energy that helps the body use hydrogen for healing and health."
          },
          {
            time: "11:00am",
            title: "Soil to Gut Terrain in Health",
            speaker: "Robert Slovak",
            description: "Two medical paradigms of wellness and illness (terrain theory versus germ theory) were presented and debated in Paris in the mid 19th century. While Pasteur's germ theory was adopted by the orthodox medical researchers of the time, Bechamp's theory was never discredited. Both theories acknowledge that bacteria or viruses can bring illness... the primary difference is in how they approach the prevention of disease. Germ theory tends to attack and kill germs before they enter the body, whereas terrain theory controls disease by enhancing the body's immune system naturally. A close linkage between the soil microbiome and the human intestinal microbiome has evolved over human existence. Today we face a crisis as the microbiome in the human gut is being dramatically altered. Pasteur's prophylactic approach of little contact with soil and feces, hygienic measures, and antibiotics have led to a loss of beneficial microbes. This is exacerbated by a low fiber diet of processed food, chemical pollution and the proliferation of microplastic contamination. It is little wonder that lifestyle diseases related to the human gut microbiome are exploding! We need to take a closer look at the increasing reduction of biodiversity in our soils and its effect on the human gut. The soil/root microbiome should be considered 'superorganisms' which, by close contact, can replenish the human gut microbiome with inoculants, genes and growth-sustaining molecules leading to a healthy immune system."
          }
        ]
      },
      {
        name: "Conference Session 6 - ExtraOrdinary Energy Tech",
        events: [
          {
            time: "1:00pm",
            title: "Vendor Showcase",
            speaker: "Vendors",
            description: "Explore the latest technologies and products from our conference vendors."
          },
          {
            time: "2:30pm",
            title: "Kromrey Generator with Bedini Modifications",
            speaker: "Dr. Thorsten Ludwig",
            description: "Raymond Kromrey, a French inventor worked on a theory that magnetism and gravitation have the same origin. This theory led him to a new electro motive principle that he put into practice in this magnetic generator... also called the machine molecular generator. Kromrey filed a patent on Jan 9th 1964 and received the patent on March 19th 1968. The US patent number is 3,374,376. The Kromrey generator is an electric generator. The generator converts magnetic force into electric energy. Two segments of a rotor are moved through a magnetic field generated by a stator, either by permanentmagnetic or electromagnetic means. The quantum energy fills everything from empty space to matter. Dr Ludwig is working on projects that aim to use this force for propulsion and generating electric power. He has researched for decades on Zero Point Energy, Casimir Effect and magnetic Free Energy machines and still does. A large Kromrey Generator was previously tested by the author... the test result was overunity. In the 1980s, John Bedini presented his modified Kromrey Converter, also called G-field Generator, and demonstrated many times that it is putting more power out than John put in. This year, we present the test results of the Kromrey Generator with the Bedini modification. Building real hardware and thorough testing are vital for progress in free energy. An introduction into this interesting theory will be given."
          },
          {
            time: "4:00pm",
            title: "Dual Ion Vortices for ZPE Coherence",
            speaker: "Moray King",
            description: "A vortex of charged particles (ions, dust, mist, fog, etc.) can entrain a coherent vortex in the surrounding zero-point energy (ZPE). Historically inventions utilizing large ion vortices manifested excess energy and sometimes strange phenomena. In the past, the Tesla conference has hosted two inventors on this theme: Malcolm Bendall and the late Paul Pantone Their inventions have similarities. They induce ion vortices in concentric conduits (pipes). The inner conduit directs the flow into a 1-cylinder internal combustion engine. The exhaust returns through the outer conduit which helps preheat and ionize the fuel. Pantone used a pointed rod within the inner feed conduit to induce the vortex. Bendall feeds the fuel tangentially into spherical chambers to induce a swirling flow that causes a more intense vortex within the conduits. The spherical chambers are concentric spheres, where the outer sphere can guide the exhaust into a vortex of opposite helicity. Bendall also used ultraviolet light to ionize the water mist as it enters the inner spherical chamber. Both inventors claimed success with unusual fuels and claimed they were threatened if they used only water. When using gasoline in the mix, the inventors claimed a very clean exhaust that would not pollute the environment. Both have freely disclosed the details of their inventions and are/were eager for open-source replication."
          }
        ]
      },
      {
        name: "Conference Session 7 (Evening)",
        events: [
          {
            time: "7:00pm",
            title: "Build Your Own Modern Tesla Research Facility at Home!",
            speaker: "Paul Finman PhD",
            description: "We are entering a unique time for research and technology development. Artificial intelligence with open source and public domain software/ hardware makes possible a low-cost, powerful network of decentralized research facilities. Inventors will be able to build and test their own hybrid fission/fusion microreactor! In the past these reactors required centralized facilities and billions of dollars. Now will be able to develop the technology for abundant clean energy at a cost of less than $10K per facility! I am developing low cost equipment and instrumentation for a high school or undergraduate physics lab. Students could complete surprisingly high level experimentation in nuclear physics and fusion at an unbelievably low cost. Such a facility allows engineers and small businesses to afford experimental work on an abundant clean energy and usher in an era of unprecedented prosperity!"
          },
          {
            time: "8:30pm",
            title: "Conference Evening Social",
            description: "Network and socialize with fellow conference attendees."
          }
        ]
      }
    ]
  },
  {
    date: "Saturday, August 10, 2024",
    sessions: [
      {
        name: "Conference Session 8 - ExtraOrdinary Concepts",
        events: [
          {
            time: "8:00am",
            title: "The Bridge Realized by the Proof of the 1859 Riemann Hypothesis",
            speaker: "Dan Stevenson",
            description: "In geometry the foundational concepts: the point, the line, the ray, in fact all non 3 dimensional realities are conceptual, therefore, not in a sense, real. So why all the fuss about the big bang coming from \"no thing\". Geometry works as a bridge translating intangible consciousness with tangible materialism. Consider: if the mind's constructs and physical reality are incompatible then in the words of Solomon \"all is vanity and grasping for the wind\". Get out your crayons. Let's do the impossible. 1 Draw a point 2 Draw a sphere with a surface area of the fraction 1 /infinity Neither is possible but both are conceptually foundational, identical in form while extreme in concept. So lets try again. 1 Draw a circle any size 2 Draw its relative diameter, that now is all three: a line segment, a ray and a line if the circle is both finite and infinite in its possibilities. You have now redrawn the critical strip and line while encapsulating an infinity that escapes both the classical (materialistic) X Y plane on all sides and the complex plane (illustrated by the zeta function) at the infinite extremes of the +/- (imaginary) Y axis. Welcome to the possibilities awakened by this extraordinary new paradigm!"
          },
          {
            time: "9:30am",
            title: "C60 Buckyball... Threshold to New Chemical Bonding Concepts and New Carbon-Only Materials",
            speaker: "Thomas F Bailey",
            description: "Mass spectrometric examination of the volatiles emitted upon laser defoliation of graphite in September 1985 at Rice University led to discovery of an exceptionally stable volatile never before encountered molecule consisting of only 60 carbon atoms. The discovery arose from studies to confirm existence of carbon molecules in outer space. The glob of 60 carbon atoms was theorized to be spherical of a truncated icosahedron 3D geometry and was reported in the prestigious Nature journal. The nanometer diameter molecule caught the imagination of the world as a nano soccer ball, thus \"Buckyball,\" short for Buckminsterfullerene named after iconic geodesic dome architect, Richard Buckminster Fuller. Architectural considerations were overwhelming organic chemistry principles developed by August Kekulé 150 years ago regarding benzene that introduced the bonding concept of aromaticity responsible for the planarity seen in benzene and the 2D graphite allotrope of carbon. The newly discovered fullerene allotrope of carbon and its fullerenic bonding nature is a 3D version of aromaticity with both allotropes with habitats for free-roaming electrons that are responsible for their exceptional thermodynamic stabilities. A new allotrope of carbon of even greater electron delocalization and thermodynamic stability was recently patented known as crossene (US 11,718,530). Nearly 40 years of obsession over geodesic domes is finally broken!"
          },
          {
            time: "11:00am",
            title: "Sensory Resonance, Neuroscience & Biofeedback Frequency Technology",
            speaker: "Don Estes",
            description: "By combining ancient philosophy and modern science, we can address a wide array of mental, physical and emotional issues in a truly one of a kind experience. Sensory Resonance theory states that for every outer sensory mechanism there is an inner one. When we dream, we see, hear, smell and sense that inner-world just as accurately and precisely as we do the time domain we live in. Our methods and technologies are designed to turn the focus of attention inward toward the greatest nation on earth… the imagination, the reciprocal spectral domain, inner space… the \"other side\". We use our inner senses when we are sleeping, dreaming, meditating, contemplating or performing other activities that attempt to integrate our bodies, minds and spirits. This \"expanded\" state creates brain hemisphere synchronization and rapidly resets the nervous system. Your voice is a combination of how you think and feel at that time. When you speak about something you are passionate or excited about, those words carry a measurable energy. Using research grade proprietary vocal analysis software we can help you identify a goal or intention which you want to amplify using our technology. Then we use the unique frequency information from your analysis to program the music, light patterns and vibrations to amplify and encode the energy of your intention through every cell of your body. This method is very successful in balancing the nervous system and accelerating intentions."
          }
        ]
      },
      {
        name: "Conference Session 9 - True Tesla Technology",
        events: [
          {
            time: "1:00pm",
            title: "Replicating Tom Bearden Scalar Wave Technology",
            speaker: "William Alek",
            description: "In the late 1990's, Thomas Bearden lectured about a flaw he discovered when Oliver Heaviside applied vector mechanics to simplify Maxwell's Electromagnetic (EM) Equations originally written in quaternion mathematics. This classical solution provided by vector mechanics shows that when the cross product of two opposing vectors (q x q) is calculated, the resultant simplified wave function shows an empty zero-vector, which has no internal structure. Bearden shows that using Maxwell's original quaternion mathematics, the same zero-vector is not empty, but has complex internal structure that simultaneously produces an EM Transverse Scalar Wave function and a local Anti-Gravitational Scalar Wave function. We show Tom's analysis is correct and the output Scalar Wave function with a complex internal structure is produced using what is called a Phase Conjugate Mirror or PCM transformer operating in resonant mode. Its output is a time reversed EM Transverse Scalar Wave function, which in turn, increases the overall output efficiency of the circuit. This scientific breakthrough in electromagnetics will lead to the development of power systems that can have efficiencies greater than 100%. Examples of PCM Resonators includes Nikola Tesla's Magnifying Transmitter, Floyd Sweet's Space Quanta Modulator, Stanley Meyers Water Car and William Alek's Split-Flux Transformer."
          },
          {
            time: "2:30pm",
            title: "Transform Quantum Scalar Potential into Kinetic Motion",
            speaker: "Dale Pond",
            description: "Many terms for Quantum Scalar Potential are used in the literature including Universal Consciousness, Zero Point, Dirac Sea, Neutral Center, Vacuum or Quantum Scalar Potential. They all mean the same thing, state or condition... the One Source of all motion of observable materiality while it itself is non-motion, non-substance or nonobservable. It is pure Potential from which all else is derived. There are three basic processes or steps involved in deriving Kinetic Motion or Energy from Scalar Potential. This presentation discusses these three processes but not the countless details. All three processes have been discovered and known for centuries and can be found in science, religious, metaphysical and philosophic literature. This presentation is a simplified \"snapshot\" of these concepts. All three processes have been discovered in the literature. It would take days or weeks to discuss each one of these processes. These processes are: 1)Scalar Potential State 2)Differentiation, Refraction or Disturbing Equilibrium 3)Kinetic States – Motion John Keely, Walter Russell, Thomas Bearden, Mrs. Fitzgerald Hughes,Victor Schauberger, and of course, Nikola Tesla were all aware of these processes. They each mentioned them in their own terms, all having the same meaning."
          },
          {
            time: "4:00pm",
            title: "Microscopic Thermonuclear Fusion: Reliable Neutron & Gamma Detection",
            speaker: "Max Fomitchev-Zamilov",
            description: "There is a nearly universal consensus that inexhaustible fusion energy will power out future. Deuterium fusion fuel from water is cheap with 10 mg of deuterium equal to a barrel of oil! The radiation is entirely contained within the reactor and ceases when the reactor is turned off. The reactor does't emit CO2 or other pollutants and does not produce nuclear waste requiring remediation. Our objective is to revolutionize power generation with compact, inexpensive thermonuclear fusion reactors. Nuclear fusion does not have to cost billions and require decades to develop. Conventional approaches to fusion are very difficult and very expensive using extremely hot plasma. Using magnetic confinement, plasma is created and kept in place using super-strong magnetic fields. With inertial confinement, extremely hot plasma is created and kept in place by compressing a solid fusion target using super-strong lasers. Our approach is different. We rely on the nature of collapsing bubbles for containment. We are expanding and collapsing nanobubbles in fluids using acoustic waves. Each bubble is a microscopic thermonuclear reactor therefore we call our approach Microscopic Thermonuclear Fusion (MTF). Each bubble generates a tiny amount of fusion. The trillions of bubbles pulsating a million times per second allows harvesting several kilowatts of thermal energy from one liter of working fluid!"
          }
        ]
      },
      {
        name: "Conference Session 10 (Evening)",
        events: [
          {
            time: "7:00pm",
            title: "Biggest Shift In Human History!",
            speaker: "John L Peterson",
            description: "An introduction to the unprecedented changes happening in our world and their potential implications. No description is provided, but I think this talk overlaps with the next talk (What's Up!)"
          },
          {
            time: "7:30pm",
            title: "What's Up!",
            speakers: "Greg Braden & John L Peterson",
            description: "We are surrounded by never-ending events that don't make practical sense... wars, killing, what appears to be a planet-wide effort to destroy the capability to grow and distribute food! These assaults on humanity are being augmented by unprecedented new technologies – like artificial intelligence, nanotechnology, genetic engineering and mind manipulation – for which we have no 'operating framework'. The past provides no guidance about how to deal with what is headed this way. Something bigger than all of us is happening. This is really unusual. We all sense it but can't put our arms around it. Who's driving all of this change? Certainly it is not just the results of random events that are unrelated to each other. The execution is impressively complex . . . and sophisticated. None of it benefits humanity from any rational point of view, so... what's up??? Here's some pointers!"
          },
          {
            time: "8:00pm",
            title: "Conference Evening Social",
            description: "Join fellow attendees for the final evening social of the conference."
          }
        ]
      }
    ]
  },
  {
    date: "Sunday, August 11, 2024",
    sessions: [
      {
        name: "Conference Session 11 - ExtraOrdinary Challenges",
        events: [
          {
            time: "8:00am",
            title: "THE ATOM: The Origin of Properties",
            speaker: "Danny Dubrall",
            description: "Continuing from last year with more on forces. Longitudinal waves were shown to produce attraction and repulsion effects. I advance the idea that all forces and fields are related through a Hamilton relationship. There is more on quantum gravity and its contribution to the quantum environment of forces. The Atom is the most sensitive, responsive, adaptable, and versatile mechanism in nature; it's an energy-processing machine. With many electrons in orbit, orchestrated 3D oscillations are formed. These resonant oscillations change to accommodate the energy state of the Atom. The energy-oscillation relationship determines factors of viscosity, hardness, conductivity, magnetism, refraction, color, plasma-gas-liquid-solid, Curie point, molecular bonding, and energy-sharing relationships. The Mono-atomic state represents the highest energy 3D state with a self-reinforcing oscillation that contributes to the particle history (from last year). The Di-atomic state is a lower energy configuration. This presentation will define metamaterial as well as the three recognized fields of chemistry (Elemental, Molecular, Organic). It will also expose a fundamental understanding of 3D oscillations and their relationship to various different physical magnetic phenomena with regards to superconductivity!"
          },
          {
            time: "9:30am",
            title: "Unraveling the Arrow of Time Conundrum",
            speaker: "Penny Kelly",
            description: "In his book, The Mind of God, mathematician Paul Davies points out that for millennia, reports of a timeless, eternal world of peaceful being and exquisite bliss have come from saints and sages. Yet the world we live in is characterized by constant change, noisy action, and the suffering of humanity as we wander through time and space. The problem is that there is no reasonable explanation for how we move from this time-based, noisy world of constant becoming to the timeless, peaceful place of eternal being. Davies labeled this The Arrow of Time Conundrum and wrote: \"…how do we account for a flux of time in a world founded upon timeless laws. ... No attempt to explain the world, either scientifically or theologically, can be considered successful until it accounts for the paradoxical conjunction of the temporal and the atemporal ...\" Davies' inquiry propels us into the heart of a cosmic riddle that must be addressed if we are going to successfully move into the next paradigm of science and engineering. Through five stages of unfolding, we will resolve Davies' conundrum, examine the mechanics of time and the end of time, the nature of consciousness and why it is primary, how energetic structures form that then become plasmas, charge density plasmas and their structures, black holes, superconductivity, and the structure and function of the human brain in relation to all of this."
          },
          {
            time: "11:00am",
            title: "Breaking Bonds for Free Energy Capture",
            speaker: "Suzanne O Price",
            description: "The challenge to free energy researchers and inventors is how to extract a mere portion of space energy for practical use. If everything is entangled as physicists have recently discovered and proven, what are the keys to accessing and multiplying free energy, and what tools can independent researchers and inventors utilize to achieve over-unity? Are there basic principles, even hierarchical ones, to break bonds of quantum and atomic particles? Breaking the bonds of entangled particle/wave strings provide clues to achieving over-unity. The higher energy is trapped in the bonding strings/mechanism/codes as Feynman has noted. Breaking these bonds to release inherent energies for practical capture is a basic principle. Beyond the energies required to break bonds, the next steps are capturing, storing and relaying freed energy. Here, we explore the nature of quantum and chemical bonding and the fine art of bond breaking. Selected devices demonstrated or researched at TeslaTech, related conferences, and recently published scientific papers will be featured. Devices or techniques examined include the Papp engine and disruption of noble gas balance, cavitation and electrolysis for hydrogen extraction, conductor rotation for exponential electron production, and nano dot technology cascade, to name a few."
          }
        ]
      }
    ]
  }
];


  const filteredSchedule = useMemo(() => {
    if (!searchTerm) return schedule;

    return schedule.map(day => ({
      ...day,
      sessions: day.sessions.map(session => ({
        ...session,
        events: session.events.filter(event => 
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (event.speaker && event.speaker.toLowerCase().includes(searchTerm.toLowerCase())) ||
          session.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (event.description && event.description.toLowerCase().includes(searchTerm.toLowerCase()))
        )
      })).filter(session => session.events.length > 0)
    })).filter(day => day.sessions.some(session => session.events.length > 0));
  }, [schedule, searchTerm]);

  const toggleDay = (index) => {
    setExpandedDay(expandedDay === index ? null : index);
  };

  const toggleEventDetails = (dayIndex: number, sessionIndex: number, eventIndex: number) => {
    setExpandedEvents(prev => {
      const key = `${dayIndex}-${sessionIndex}-${eventIndex}`;
      return { ...prev, [key]: !prev[key] };
    });
  };

  return (
    <div className={`max-w-4xl mx-auto p-3 sm:p-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} shadow-lg rounded-lg transition-colors duration-300`}>
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <div className="flex-grow">
          <h1 className="text-2xl sm:text-4xl font-bold text-center">Tesla Tech Conference 2024</h1>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'} transition-colors duration-300`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
      <p className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>Schedule last updated: {lastUpdated}</p>
      <a
        href="https://teslatech.info/ttevents/prgframe.html"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} mb-4 sm:mb-6`}
      >
        View Latest Schedule on Official Website
        <ExternalLink size={14} className="ml-1" />
      </a>
      
      <div className="mb-4 sm:mb-6 relative">
        <input
          type="text"
          placeholder="Search events, speakers, or sessions..."
          className={`w-full p-2 sm:p-3 pr-10 sm:pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'
          }`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className={`absolute right-2 sm:right-3 top-2 sm:top-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} size={18} />
      </div>

      {filteredSchedule.map((day, dayIndex) => (
        <div key={dayIndex} className={`mb-4 sm:mb-6 border rounded-lg overflow-hidden ${
          darkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <button
            className={`w-full p-3 sm:p-4 text-left transition-colors flex justify-between items-center ${
              darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
            }`}
            onClick={() => toggleDay(dayIndex)}
          >
            <span className="text-lg sm:text-xl font-semibold flex items-center">
              <Calendar className="mr-2" size={18} />
              {day.date}
            </span>
            {expandedDay === dayIndex ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {(expandedDay === dayIndex || searchTerm) && (
            <div className={`p-3 sm:p-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
              {day.sessions.map((session, sessionIndex) => (
                <div key={sessionIndex} className="mb-4 sm:mb-6 last:mb-0">
                  <h3 className={`text-lg font-semibold mb-2 sm:mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    {session.name}
                  </h3>
                  {session.events.map((event, eventIndex) => (
                    <div key={eventIndex} className={`mb-2 sm:mb-3 last:mb-0 pl-2 sm:pl-4 border-l-2 ${
                      darkMode ? 'border-blue-700' : 'border-blue-500'
                    }`}>
                      <p className="font-medium flex items-center">
                        <Clock className="mr-2" size={14} />
                        {event.time}: {event.title}
                      </p>
                      {event.speaker && (
                        <p className={`text-sm mt-1 flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <User className="mr-2" size={12} />
                          {event.speaker}
                        </p>
                      )}
                      <EventDetails
                        event={event}
                        isOpen={expandedEvents[`${dayIndex}-${sessionIndex}-${eventIndex}`]}
                        onToggle={() => toggleEventDetails(dayIndex, sessionIndex, eventIndex)}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ConferenceSchedule;