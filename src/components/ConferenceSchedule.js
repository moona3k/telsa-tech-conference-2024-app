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
            <Minus size={16} className="mr-1" /> Hide details
          </>
        ) : (
          <>
            <Plus size={16} className="mr-1" /> Show details
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
              description: "Explore Rodin Vortex-Based Mathematics meets Fibonacci and the Healing Power of VBM Hopfion Dielectric Antennas. This workshop takes you on a spiraling tour through the toroidal roller coaster of our deterministic universe, introducing VortexBased Mathematics and its applications in energy expression and healing."
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
              description: "Explore the competing theoretical models of the sun – gravitational and electrical. This presentation will discuss the Electric Universe theories and how galaxies can be described using known equations for electromagnetics."
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
              description: "Explore Georges Lakhovsky's theory on cosmic radiation and its effects on health. Learn about the multiwave oscillator and its potential in curing diseases, as well as Sue's Broad Spectrum DeTOX program based on Lakhovsky's frequency therapy."
            },
            {
              time: "9:30am",
              title: "Ultrasound Probes For Home Use!",
              speaker: "Joseph Ence",
              description: "Discover the advancements in ultrasound technology for home use, particularly focusing on C-IMT Scans for early detection of atherosclerosis. Learn about the potential of this technology in empowering citizens to take better care of their health."
            },
            {
              time: "11:00am",
              title: "Resonant Healing Technology The Past ... Thru Tomorrow!",
              speaker: "Steven Ross PhD",
              description: "Explore alternative healing technologies from our suppressed past, including powerful microscopes, color therapy, and electrical cures for cancer. Steve will discuss his experiences with Rife's Universal Microscope and show original laboratory equipment from the 1930s."
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
              description: "Learn about the Searl Effect Generator, a device designed to generate electricity using magnetic fields. Isaiah will present his physical model replication of Searl's work and explain the principles behind this innovative technology."
            },
            {
              time: "2:30pm",
              title: "Wardforce Magnetics & Antigravity",
              speaker: "Steven Ward",
              description: "Discover Wardforce, a patented energy-producing magnetic converter. Steven will demonstrate energy from magnets and explain how this technology could revolutionize space travel and our understanding of gravity."
            },
            {
              time: "4:00pm",
              title: "Electrogravitics... The New Age of Disclosure",
              speaker: "Russell Anderson",
              description: "Explore the world of Unidentified Aerial Phenomena (UAP) and the recent disclosures about their reality. Russell will discuss the potential technologies behind UAPs and how they might relate to known scientific principles."
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
              description: "Delve into the cosmology of Walter Russell's 'Universal One' and explore the holographic nature of the universe. This session will illuminate the secrets of the cosmic lattice and the interconnectedness of geometry, fractals, and light in shaping our reality."
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
              description: "Learn about the concept of water memory and how it relates to homeopathic remedies. Discover the Jiva Water Devices that use quantum principles and frequency encoding technologies to restore 'Life Energy' to everyday water."
            },
            {
              time: "9:30am",
              title: "Brown's Gas Applications",
              speaker: "George Wiseman",
              description: "Explore the applications of Brown's Gas, a mixture of hydrogen and oxygen variations including Electrically Expanded Water (ExW). Learn about its potential health benefits and how it synergizes with hydrogen for therapeutic effects."
            },
            {
              time: "11:00am",
              title: "Soil to Gut Terrain in Health",
              speaker: "Robert Slovak",
              description: "Investigate the connection between soil microbiome and human gut microbiome. Robert will discuss the impact of modern lifestyles on gut health and the importance of maintaining biodiversity in our soils for overall human health."
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
              description: "Learn about the Kromrey Generator, an electric generator that converts magnetic force into electric energy. Dr. Ludwig will present the test results of the Kromrey Generator with Bedini modifications and discuss its potential for overunity output."
            },
            {
              time: "4:00pm",
              title: "Dual Ion Vortices for ZPE Coherence",
              speaker: "Moray King",
              description: "Explore how vortices of charged particles can entrain coherent vortices in the surrounding zero-point energy (ZPE). Moray will discuss historical inventions utilizing large ion vortices and their potential for manifesting excess energy."
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
              description: "Discover how to create a low-cost, powerful network of decentralized research facilities using artificial intelligence, open source, and public domain software/hardware. Learn about developing hybrid fission/fusion microreactors and other high-level experiments at an affordable cost."
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
              description: "Explore the connection between geometry and consciousness, and how the proof of the Riemann Hypothesis opens up new paradigms in understanding the universe."
            },
            {
              time: "9:30am",
              title: "C60 Buckyball... Threshold to New Chemical Bonding Concepts and New Carbon-Only Materials",
              speaker: "Thomas F Bailey",
              description: "Learn about the discovery of the C60 Buckyball molecule and its implications for new chemical bonding concepts and carbon-only materials. Thomas will also introduce the newly patented crossene allotrope of carbon."
            },
            {
              time: "11:00am",
              title: "Sensory Resonance, Neuroscience & Biofeedback Frequency Technology",
              speaker: "Don Estes",
              description: "Discover how combining ancient philosophy and modern science can address mental, physical, and emotional issues. Learn about Sensory Resonance theory and how it can be applied to create brain hemisphere synchronization and reset the nervous system."
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
              description: "Explore Thomas Bearden's discoveries in electromagnetic theory and learn about the potential for creating over-unity power systems using Phase Conjugate Mirror (PCM) transformers."
            },
            {
              time: "2:30pm",
              title: "Transform Quantum Scalar Potential into Kinetic Motion",
              speaker: "Dale Pond",
              description: "Delve into the concept of Quantum Scalar Potential and the three basic processes involved in deriving Kinetic Motion or Energy from it. Dale will discuss how various inventors and thinkers have approached these concepts."
            },
            {
              time: "4:00pm",
              title: "Microscopic Thermonuclear Fusion: Reliable Neutron & Gamma Detection",
              speaker: "Max Fomitchev-Zamilov",
              description: "Learn about a new approach to nuclear fusion called Microscopic Thermonuclear Fusion (MTF), which uses acoustic waves to collapse nanobubbles in fluids. Discover the potential of this technology for compact, inexpensive thermonuclear fusion reactors."
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
              description: "An introduction to the unprecedented changes happening in our world and their potential implications."
            },
            {
              time: "7:30pm",
              title: "What's Up!",
              speakers: "Greg Braden & John L Peterson",
              description: "Join Gregg Braden and John L Peterson as they discuss the current global events, new technologies, and their potential impact on humanity. They will explore the bigger picture behind these changes and what it might mean for our future."
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
              description: "Explore the atom as an energy-processing machine and learn about the relationship between energy oscillations and various physical properties. Danny will discuss metamaterials, fields of chemistry, and the connection between 3D oscillations and magnetic phenomena."
            },
            {
              time: "9:30am",
              title: "Unraveling the Arrow of Time Conundrum",
              speaker: "Penny Kelly",
              description: "Delve into Paul Davies' Arrow of Time Conundrum and explore the nature of time, consciousness, and energetic structures. Penny will discuss the mechanics of time, the structure of the human brain, and their relation to cosmic phenomena."
            },
            {
              time: "11:00am",
              title: "Breaking Bonds for Free Energy Capture",
              speaker: "Suzanne O Price",
              description: "Investigate the principles of extracting free energy from space by breaking bonds of quantum and atomic particles. Suzanne will discuss various devices and techniques for achieving over-unity and capturing freed energy."
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
    <div className={`max-w-4xl mx-auto p-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} shadow-lg rounded-lg transition-colors duration-300`}>
      <div className="flex justify-between items-center mb-6">
        <div className="flex-grow">
          <h1 className="text-2xl sm:text-4xl font-bold text-center">Tesla Tech Conference 2024</h1>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'} transition-colors duration-300`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
      <p className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>Schedule last updated: {lastUpdated}</p>
      <a
        href="https://teslatech.info/ttevents/prgframe.html"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} mb-6`}
      >
        View Latest Schedule on Official Website
        <ExternalLink size={16} className="ml-1" />
      </a>
      
      <div className="mb-6 relative">
        <input
          type="text"
          placeholder="Search events, speakers, or sessions..."
          className={`w-full p-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'
          }`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className={`absolute right-3 top-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} size={24} />
      </div>

      {filteredSchedule.map((day, dayIndex) => (
        <div key={dayIndex} className={`mb-6 border rounded-lg overflow-hidden ${
          darkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <button
            className={`w-full p-4 text-left transition-colors flex justify-between items-center ${
              darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
            }`}
            onClick={() => toggleDay(dayIndex)}
          >
            <span className="text-lg sm:text-xl font-semibold flex items-center">
              <Calendar className="mr-2" size={20} />
              {day.date}
            </span>
            {expandedDay === dayIndex ? <ChevronUp /> : <ChevronDown />}
          </button>
          {(expandedDay === dayIndex || searchTerm) && (
            <div className={`p-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
              {day.sessions.map((session, sessionIndex) => (
                <div key={sessionIndex} className="mb-6 last:mb-0">
                  <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    {session.name}
                  </h3>
                  {session.events.map((event, eventIndex) => (
                    <div key={eventIndex} className={`mb-3 last:mb-0 pl-4 border-l-2 ${
                      darkMode ? 'border-blue-700' : 'border-blue-500'
                    }`}>
                      <p className="font-medium flex items-center">
                        <Clock className="mr-2" size={16} />
                        {event.time}: {event.title}
                      </p>
                      {event.speaker && (
                        <p className={`text-sm mt-1 flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <User className="mr-2" size={14} />
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