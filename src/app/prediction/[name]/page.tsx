const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io?name=${name}`);
  return res.json();
};

interface Params {
  params: { name: string };
}

async function Prediction({ params }: Params) {
  const Name = await getPredictedAge(params.name);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 p-4">
      <div className="p-8">
        <div className="block mt-1 text-lg leading-tight font-medium text-black">
          Hi {Name?.name}
        </div>
        <div className="icon"><div className="gif-styling"><iframe src="https://giphy.com/embed/26xBwdIuRJiAIqHwA" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe></div></div>
      </div>
    </div>
  );
}

export default Prediction;
