// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
// import Login from "./Pages/Login";
// import SignUp from "./Pages/SignUp";
// import Navbar from "./Components/Navbar";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<SignUp />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Navbar */}
      <header className="w-full bg-slate-900/80 backdrop-blur border-b border-slate-800 px-4 sm:px-6 py-4 flex items-center justify-between gap-3 sticky top-0 z-50">
        <h1 className="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent whitespace-nowrap">
          For Me
        </h1>

        <div className="flex items-center gap-3 flex-1 justify-end min-w-0">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-xl text-white placeholder:text-white bg-slate-800 border border-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none text-sm w-full max-w-[180px] sm:max-w-xs md:max-w-sm"
          />
          <button className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-sm shrink-0">
            🌙
          </button>
          <div className="w-9 h-9 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center font-bold shrink-0">
            P
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-10 sm:space-y-12">
        {/* Stats Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { title: "Total Notes", value: "48" },
            { title: "Completed", value: "30" },
            { title: "Pending", value: "12" },
            { title: "Revision Today", value: "6" },
          ].map((stat) => (
            <div
              key={stat.title}
              className="bg-slate-900 border border-slate-800 p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/10 transition"
            >
              <p className="text-sm text-slate-400">{stat.title}</p>
              <h3 className="text-2xl sm:text-3xl font-bold mt-2 text-white">
                {stat.value}
              </h3>
            </div>
          ))}
        </section>

        {/* Form Section */}
        <section className="bg-slate-900 border border-slate-800 p-5 sm:p-8 rounded-2xl shadow-xl space-y-6">
          <div className="flex items-center justify-center">
            <h2 className="text-lg sm:text-xl font-semibold">Note</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <input
              type="text"
              placeholder="Title"
              className="px-4 text-white placeholder:text-white py-3 rounded-xl bg-slate-800 border border-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none text-sm w-full"
            />

            <select className="px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-sm w-full">
              <option>Category</option>
              <option>HTML</option>
              <option>CSS</option>
              <option>JavaScript</option>
              <option>React.js</option>
              <option>Redux</option>
              <option>Node.js</option>
              <option>Express.js</option>
              <option>MongoDB</option>
              <option>Git & GitHub</option>
            </select>

            <select className="px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-sm w-full">
              <option>Status</option>
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>

            <select className="px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-sm w-full">
              <option>Difficulty</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <select className="px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-sm w-full">
              <option>Social media Platform</option>
              <option>Instagram</option>
              <option>LinkedIn</option>
              <option>Whatsapp</option>
              <option>Whatsapp</option>
              <option>GitHub</option>
            </select>
            <input
              type="date"
              className="px-4 py-3 rounded-xl text-white placeholder:text-white bg-slate-800 border border-slate-700 text-sm w-full"
            />
          </div>
          <textarea
            placeholder="Description"
            rows="4"
            className="w-full px-4 py-3 text-white placeholder:text-white rounded-xl bg-slate-800 border border-slate-700 focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
          />
          <div className="flex justify-center">
            <button className="w-full sm:w-aut px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 text-white font-medium transition">
              Save Note
            </button>
          </div>
        </section>

        {/* Cards Section */}
        <section>
          <h2 className="text-lg sm:text-xl font-semibold mb-6">Your Notes</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-lg hover:shadow-indigo-500/10 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-semibold text-base leading-snug">
                      React Hooks Deep Dive
                    </h3>
                    <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full whitespace-nowrap">
                      Completed
                    </span>
                  </div>

                  <p className="text-sm text-slate-400 mt-3 line-clamp-3">
                    Understanding useEffect lifecycle behavior, dependency
                    array, cleanup functions and optimization strategies.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {["react", "hooks", "interview"].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-indigo-500/20 text-indigo-400 px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-3 text-xs text-slate-500 flex-wrap gap-2">
                  <span>Revise: 12 Mar</span>
                  <div className="flex gap-4">
                    {/* <button className="hover:text-indigo-400">Edit</button>
                    <button className="hover:text-red-400">Delete</button> */}
                    <div className="flex gap-">
  <button className="p-2 rounded-lg hover:bg-slate-800 transition">
    {/* <Eye size={16} className="text-slate-400 hover:text-indigo-400" /> */}
                    <button className="hover:text-indigo-400">View</button>

  </button>

  <button className="p-2 rounded-lg hover:bg-slate-800 transition">
    {/* <Pencil size={16} className="text-slate-400 hover:text-indigo-400" /> */}
                    <button className="hover:text-indigo-400">Edit</button>

  </button>

  <button className="p-2 rounded-lg hover:bg-slate-800 transition">
    {/* <Trash2 size={16} className="text-slate-400 hover:text-red-400" /> */}
                    <button className="hover:text-indigo-400">Delete</button>

  </button>
</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

