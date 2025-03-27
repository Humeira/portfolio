import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faBluesky } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import data from './data.json';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-800 flex flex-col">
      <main className="flex-grow px-6 py-16 md:px-12 lg:px-24 max-w-6xl mx-auto w-full">
        <header className="mb-20">
          <h1 className="text-5xl text-zinc-600 font-bold mb-4">👋🏽 Hello.</h1>
          <p className="text-xl text-zinc-600 font-bold">My name is {data.name}.</p>
          <p className="mt-6 text-lg font-light text-zinc-600 max-w-2xl" dangerouslySetInnerHTML={{ __html: data.bio }} />

          <p className="mt-6 text-lg font-light text-zinc-600 max-w-2xl">You can get in touch with me via</p>
          <div className="mt-6 flex gap-4">
            <a 
              href={data.social.github}
              className="text-zinc-600 hover:text-zinc-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faGithub} size="lg"/>
            </a>
            <a 
              href={data.social.blueSky}
              className="text-zinc-600 hover:text-zinc-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
                  <FontAwesomeIcon icon={faBluesky} size="lg"/>
            </a>
            <a 
              href={data.social.linkedIn}
              className="text-zinc-600 hover:text-zinc-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faLinkedin} size="lg"/>
            </a>
          </div>
        </header>

        <section className="mb-20">
          <h2 className="text-2xl text-zinc-600 font-bold mb-6">👩🏽‍💻 Projects</h2>
          <p className="mb-6 text-lg font-light text-zinc-600 max-w-2xl">Lately, I’ve been turning a few side project ideas into reality. They keep me learning, experimenting, and enjoying the creative process outside of my 8:30-17:30 job.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.projects.map((project, index) => {
              const colors = [
                'bg-purple-200 hover:bg-purple-300',
                'bg-blue-200 hover:bg-blue-300',
                'bg-amber-200 hover:bg-amber-300'
              ];
              const textColors = [
                'text-purple-900',
                'text-blue-900',
                'text-amber-900'
              ];
              const colorIndex = index % colors.length;

              return (
                <a
                  key={project.name}
                  href={project.url}
                  className={`group p-6 rounded-xl transition-colors ${colors[colorIndex]} relative`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FontAwesomeIcon icon={faArrowRight} size="lg" style={{ transform: 'rotate(-45deg)' }}/>
                  </div>
                  <h3 className={`text-lg font-medium mb-2 ${textColors[colorIndex]}`}>
                    {project.name}
                  </h3>
                  <p className={`${textColors[colorIndex]} opacity-80`}>
                    {project.description}
                  </p>
                </a>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-2xl text-zinc-600 font-bold mb-6">🧙🏽‍♀️  Talks & Events</h2>
          <p className="mb-6 text-lg font-light text-zinc-600 max-w-2xl">Back in the day, I enjoyed being part of meetups and talks, sometimes sharing ideas, sometimes helping things run behind the scenes. These are some good memories, and who knows, maybe there’s more to come.</p>
          <div className="space-y-8">
            {data.speaking.map((talk) => (
              <div key={talk.title} className="border-l-2 border-zinc-200 pl-6 hover:border-zinc-400 transition-colors">
                <h3 className="text-lg">{talk.event}</h3>
                <p className="text-zinc-600 mt-1">{talk.title}</p>
                <p className="text-sm text-zinc-500 mt-2">
                  {talk.date} · {talk.location}
                </p>
              </div>
            ))}
          </div>
        </section>
        <footer className="mt-auto mx-auto w-full pt-10">
            <p className="font-light text-zinc-600"> Made with ❤️ in Mauritius</p>
         </footer>
      </main>
      
      
      {/* <footer className="mt-auto w-full border-t border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 py-16 md:px-12 lg:px-24">
          <div className="bg-zinc-50 rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-light text-zinc-900 mb-2">{data.newsletter.title}</h2>
                <p className="text-zinc-600 max-w-2xl">{data.newsletter.description}</p>
              </div>
            </div>
            <a
              href={data.newsletter.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-400 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors"
            >
              Subscribe to Newsletter
              <FontAwesomeIcon icon={faArrowRight} size="lg"/>
            </a>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

export default App;