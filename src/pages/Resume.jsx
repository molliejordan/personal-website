import TopAppBar from "../components/TopAppBar";

const Resume = () => {
  const pdfPath = `${import.meta.env.BASE_URL}Mollie_Jordan_Resume.pdf`;

  return (
    <div>
      <TopAppBar />
      <div className="flex pt-48 bg-white items-center justify-center pb-36">
        <embed 
        src={pdfPath} 
        className="w-4/6 h-[1125px] bg-white border-none rounded-xl" />
      </div>
    </div>
  );
};

export default Resume;
