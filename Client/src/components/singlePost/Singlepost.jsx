import './singlepost.css';

export default function Singlepost() {
  return (
    <div className='singlepost'>
      <div className="singlePostWrapper">
        <img src="https://media.istockphoto.com/id/169945157/photo/milkyway-seen-from-the-southern-skies.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZRvXsJlt_fqvoxkBcn9mcVt8VHYG_iJjc6r9WVCBE1g=" alt="" className="singlePostImg" />
        <h1 className='singlePostTitle'>Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>Author: <b>Shan</b></span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
         <p className='singlePostDesc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, beatae? Repudiandae, ipsam sed aliquid, eveniet unde odio temporibus libero laboriosam reprehenderit nobis porro. Quos dolorem neque libero vero provident facilis?
          </p>
      </div>
    </div>
  )
}
