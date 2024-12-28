import { NavLink } from 'react-router'

export default function Home() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center">
        <div className="flex-1">
          <Intro />
        </div>
        <div className="flex-1">
          <img src="https://www.training.com.au/wp-content/uploads/Full-Stack-Developer-1.jpeg" />
        </div>
      </div>
      <div className="grow flex flex-col items-center justify-center">
        <blockquote className="border-l-4 border-lime-400 p-4 text-slate-600 italic text-xl">
          "The only limit to our realization of tomorrow is our doubts of today."
          <cite className="block text-right text-gray-500 mt-2">- Franklin D. Roosevelt</cite>
        </blockquote>
      </div>
    </div>
  )
}

function Intro() {
  return (
    <div className="flex flex-col gap-2 items-start">
      <h1 className="text-4xl">Christian is a full stack developer</h1>
      <p className="font-mono text-slate-600">He is interested in different frameworks and technologies.</p>
      <NavLink to="./../contacts" className="border-2 border-lime-400 font-mono py-1 px-2" title="Contact Me!">
        Contact Me!
      </NavLink>
    </div>
  )
}