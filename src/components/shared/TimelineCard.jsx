import "./Card.css";

function TimelineCard({ item }) {
  return (
    <div data-aos="fade-up">
      <a
        target="_blank"
        href={item.url}
        className={`card grid grid-flow-col gap-5 my-5 p-8 transition-all duration-300 ${
          item.image ? "card--bg" : ""
        }`}
        style={item.image ? { '--tc-bg': `url(${item.image})` } : undefined}
      >
        <div className="date w-40 font-semibold h-10 text-gray-500 flex items-center overflow-hidden max-md:hidden">
          {item.start}
          <span className="line bg-gray-500"></span>
          {item.end}
        </div>
        <div>
          <h3 className="title text-lg font-bold">{item.title}</h3>
          <h5 className="text-sm font-semibold text-gray-400 md:mb-5">{item.agency}</h5>
          <div className="date font-semibold h-10 text-gray-500 flex items-center justify-center overflow-hidden mb-4 md:hidden">
            {item.start}
            <span className="line bg-gray-500"></span>
            {item.end}
          </div>
          <p className="text-sm mb-3">{item.details}</p>
          <div className="documentations flex flex-wrap gap-3 mb-3 max-md:justify-center">
            {item.documentations.map((doc, i) => (
              <a
                target="_blank"
                href={doc.url}
                className="link whitespace-nowrap text-sm flex items-center gap-2"
                key={i}
              >
                <doc.Icon /> {doc.name}
              </a>
            ))}
          </div>
          <div className="categories flex flex-wrap gap-3 max-md:justify-center">
            {item.categories.map((category, i) => (
              <span className="badge whitespace-nowrap text-xs" key={i}>
                {category}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}

export default TimelineCard;
