import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?_gl=1*pctsv*_ga*MzIwOTg5NzU1LjE3NTAzMjg1Mjc.*_ga_8JE65Q40S6*czE3NTAzMjg1MjYkbzEkZzEkdDE3NTAzMjg1MzckajQ5JGwwJGgw"
        alt=""
      />
    </div>
  );
}