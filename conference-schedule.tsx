import React, { useState, useMemo, useEffect } from 'react';
import { ChevronDown, ChevronUp, Search, Calendar, Clock, User, Sun, Moon, ExternalLink } from 'lucide-react';

const ConferenceSchedule = () => {
  const [expandedDay, setExpandedDay] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const lastUpdated = "2024-08-05"; // Update this date when the schedule changes

  useEffect(() => {
    // Check for user's preference
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
          name: "Conference Session 1 - An ExtraOrdinary Revelation",
          events: [
            { time: "5:00pm", title: "The SAFIRE Project", speaker: "Michael Clarage PhD" },
            { time: "7:00pm", title: "Everything Electric!", speaker: "James Sorensen" },
            { time: "7:00pm", title: "Conference Evening Social" }
          ]
        }
      ]
    },
    {
      date: "Thursday, August 8, 2024",
      sessions: [
        {
          name: "Conference Session 2 - ExtraOrdinary Health Technology",
          events: [
            { time: "8:00am", title: "The Multiwave Oscillator: Brilliance Almost Lost", speaker: "Sue Whittaker" },
            { time: "9:30am", title: "Ultrasound Probes for Home Use!", speaker: "Joseph Ence" },
            { time: "11:00am", title: "Resonant Healing Technology... The Past Thru Tomorrow!", speaker: "Steven Ross" }
          ]
        },
        {
          name: "Conference Session 3 - ExtraOrdinary Elecro-Gravitic Technology",
          events: [
            { time: "1:00pm", title: "Searl Effect Generator Replication", speaker: "Isaiah Ritchey" },
            { time: "2:30pm", title: "Ward Magnetics and Antigravity", speaker: "Steven Ward" },
            { time: "4:00pm", title: "Electrogravitics... The Farside of Disclosure", speaker: "Russell Anderson" }
          ]
        },
        {
          name: "Conference Session 4 (Evening)",
          events: [
            { time: "7:00pm", title: "Universal One: Illuminating Holographic Tapestry", speaker: "K Elkins & K Faith" },
            { time: "8:30pm", title: "Conference Evening Social" }
          ]
        }
      ]
    },
    {
      date: "Friday, August 9, 2024",
      sessions: [
        {
          name: "Conference Session 5 - ExtraOrdinary Water Research",
          events: [
            { time: "8:00am", title: "JIVA Water: Harmonizing Water Technology", speaker: "Krishna Madappa" },
            { time: "9:30am", title: "Browns Gas Applications: Better Than Pure Hydrogen!", speaker: "George Wiseman" },
            { time: "11:00am", title: "Soil to Gut Terrain in Health", speaker: "Robert Slovak" }
          ]
        },
        {
          name: "Conference Session 6 - ExtraOrdinary Energy Technology",
          events: [
            { time: "1:00pm", title: "Vendor Showcase", speaker: "Vendors" },
            { time: "2:30pm", title: "Kromrey Generator with Bedini Modifications", speaker: "Dr. Thorsten Ludwig" },
            { time: "4:00pm", title: "Dual Ion Vortices for ZPE Coherence", speaker: "Moray King" }
          ]
        },
        {
          name: "Conference Session 7 (Evening)",
          events: [
            { time: "7:00pm", title: "Build Your Own Modern Tesla Research Facility at Home!", speaker: "Paul Finman" },
            { time: "8:30pm", title: "Conference Evening Social" }
          ]
        }
      ]
    },
    {
      date: "Saturday, August 10, 2024",
      sessions: [
        {
          name: "Conference Session 8 - True Tesla Technology",
          events: [
            { time: "8:00am", title: "Sahara Pump and Riemann Hypothesis", speaker: "Dan Stevenson" },
            { time: "9:30am", title: "C60 Buckyball... Key to New Carbon-Only Materials", speaker: "Thomas F Bailey" },
            { time: "11:00am", title: "Sensory Resonance, Neuroscience & Biofeedback Freq Tech", speaker: "Don Estes" }
          ]
        },
        {
          name: "Conference Session 9 - ExtraOrdinary Energy Concepts",
          events: [
            { time: "1:00pm", title: "Transforming Quantum Scalar Potential into Kinetic Motion", speaker: "Dale Pond" },
            { time: "2:30pm", title: "Replicating Tom Bearden's Scalar Wave Technology", speaker: "William Alek" },
            { time: "4:00pm", title: "Reliable Neutron and Gamma Detection", speaker: "Max Fomitchev-Zamilov" }
          ]
        },
        {
          name: "Conference Session 10 (Evening)",
          events: [
            { time: "7:00pm", title: "Biggest Shift In Human History!", speaker: "John L Peterson" },
            { time: "7:30pm", title: "What's Up!", speaker: "Greg Braden & John L Peterson" },
            { time: "8:00pm", title: "Conference Evening Social" }
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
            { time: "8:00am", title: "The Atom: The Origin of Properties", speaker: "Danny Dubrall" },
            { time: "9:30am", title: "Unraveling the Arrow of Time Conundrum", speaker: "Penny Kelly" },
            { time: "11:00am", title: "Breaking Bonds for Free Energy Capture", speaker: "Suzanne O Price" }
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
          session.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(session => session.events.length > 0)
    })).filter(day => day.sessions.some(session => session.events.length > 0));
  }, [schedule, searchTerm]);

  const toggleDay = (index) => {
    setExpandedDay(expandedDay === index ? null : index);
  };

  return (
    <div className={`max-w-4xl mx-auto p-4 ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg rounded-lg transition-colors duration-300`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className={`text-2xl sm:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Tesla Tech Conference 2024</h1>
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
            <span className={`text-lg sm:text-xl font-semibold flex items-center ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
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
                      <p className={`font-medium flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                        <Clock className="mr-2" size={16} />
                        {event.time}: {event.title}
                      </p>
                      {event.speaker && (
                        <p className={`text-sm mt-1 flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <User className="mr-2" size={14} />
                          {event.speaker}
                        </p>
                      )}
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
