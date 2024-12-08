interface CardInterface {
  title: string;
  selftextHtml: string;
  url: string;
  score: number;
}

function Card({ score, selftextHtml, title, url }: CardInterface) {
  function decodedHTMLToString(): string {
    const txt = document.createElement("textarea");
    txt.innerHTML = selftextHtml ?? "";
    return txt.value ?? "";
  }

  const decodedHtml = decodedHTMLToString();
  return (
    <div className="w-full pb-2  rounded-md lg:min-h-[20vh] shadow-md border border-black lg:hover:shadow-2xl lg:hover:scale-101">
      <div className="flex flex-col w-full">
        <label className="flex justify-center rounded-t-md py-5 bg-yellow-400">
          <span className="w-fit font-semibold  text-center px-2">
            {title}
          </span>
        </label>
        <div className="flex flex-col gap-3 mt-5 px-2">
          <label className="font-semibold text-lg">
            Score: <span className="font-normal">{score}</span>
          </label>

          <button className="border border-black bg-black w-fit h-fit px-4 rounded-md py-1 flex items-center justify-center  text-white " title={url}
            onClick={() => {
              if (url) window.open(url);
            }}
          >
            Read More
          </button>
          
        </div>
      </div>

      {decodedHtml && (
        <div className="mt-6 px-2 relative  border border-black  mx-2 lg:mx-4 rounded-md  flex flex-col ">
          <label className="font-semibold absolute bg-white -mt-3 rounded-sm lg:-mt-3  ml-2  lg:ml-1 px-4" > Self HTML text</label>
          <div
            className="html-content  rounded-lg py-1 px-1  break-words break-all mt-4 overflow-auto max-w-[95vw] lg:max-w-[30vw]  max-h-[20vh]"
            dangerouslySetInnerHTML={{ __html: decodedHtml ?? "" }}
          />
        </div>
      )}
    </div>
  );
}

export default Card;
