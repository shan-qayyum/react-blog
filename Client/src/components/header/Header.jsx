import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <div className="headerImgWrapper">
        <img
          className="headerImg"
          src="https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?_gl=1*pctsv*_ga*MzIwOTg5NzU1LjE3NTAzMjg1Mjc.*_ga_8JE65Q40S6*czE3NTAzMjg1MjYkbzEkZzEkdDE3NTAzMjg1MzckajQ5JGwwJGgw"
          alt="Milky Way Night Sky"
        />
        <div className="headerImgText">
          <h2>Welcome to Your Personal Blog</h2>
          <p>
            Share your thoughts, stories, and ideas with the world.
            <br />
            Start writing today and inspire others!
          </p>
        </div>
      </div>
    </div>
  );
}