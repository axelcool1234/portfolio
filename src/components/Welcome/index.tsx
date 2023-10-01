import './index.scss'
import Portrait from '../../../public/img/Axel.jpg'

export default function Welcome() {
  return (
    <div className="container">
      <div className="portrait">
        <img className="portrait-image" src={Portrait} alt="Axel Sorenson" />
      </div>
      <div className="text">
        <h1>Hello World! <br />
          I'm Axel Sorenson.
        </h1>
        <h2>Student at University of California, Irvine</h2>
      </div>
    </div>
  );
}