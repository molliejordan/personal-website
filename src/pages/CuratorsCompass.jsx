const CuratorsCompass = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="w-full flex-grow">
        <div className="w-full flex flex-col pt-48 items-center justify-center pb-32">
          <h1 className="font-jetbrains pb-6">Curator's Compass</h1>
          <div className="flex pt-8 w-4/5 justify-between text-left">
            <div>
              <p className="font-jetbrains text-lg">Timeline</p>
              <span className="text-sm">January 2025</span>
            </div>
            <div className="flex flex-col">
              <p className="font-jetbrains text-lg">Collaborators</p>
              <span className="text-sm">Sarah Rosenkrantz (NC State)</span>
              <span className="text-sm">Izzy Summers (NC State)</span>
              <span className="text-sm">Madison Book (NC State)</span>
              <span className="text-sm">Chase Thompson (NC State)</span>
              <span className="text-sm">Eric Bolender (SAS)</span>
              <span className="text-sm">Lavanya Ganesh (SAS)</span>
            </div>
            <div className="flex flex-col">
              <p className="font-jetbrains text-lg">Key Skills</p>
              <span className="text-sm">Agile Development</span>
              <span className="text-sm">Collaboration</span>
              <span className="text-sm">Full-Stack Development</span>
            </div>
            <div className="flex flex-col">
              <p className="font-jetbrains text-lg">Tools Used</p>
              <span className="text-sm">GitHub Projects</span>
              <span className="text-sm">Figma</span>
              <span className="text-sm">Docker</span>
              <span className="text-sm">Python</span>
              <span className="text-sm">PostgreSQL</span>
              <span className="text-sm">FastAPI</span>
              <span className="text-sm">React</span>
              <span className="text-sm">Material UI</span>
            </div>
          </div>
          <div className="pt-16 w-4/5">
            <p>
              This project is a collaboration between the NC State Computer
              Science Senior Design Center and SAS. My team is developing a data
              product catalog designed for both technical and non-technical
              users, allowing business professionals as well as data scientists
              to manage, discover, and use their data to make data-driven
              decisions. Our project includes manual search functionality and a
              recommendation algorithm to assist non-technical users in finding
              relevant data assets. We are following an agile development model,
              using GitHub Projects for task management, and delivering regular
              oral and written progress updates. Our final presentation will
              take place at the Senior Design Center's "Posters & Pies" day in
              May.
            </p>
            <p className="font-bold pt-32">
              Note: This page is in progress and I will be updating it with a
              much more in-depth discussion of the business case, our design,
              and more!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CuratorsCompass;
