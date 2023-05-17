import person1Img from "@/assets/images/person_1.jpg";
import person2Img from "@/assets/images/person_2.jpg";
import person3Img from "@/assets/images/person_3.jpg";

export default function Testimonial() {
  return (
    <section className="ftco-section testimony-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center">
            <span className="subheading">Testimony</span>
            <h2 className="mb-4">Our satisfied customer says</h2>
            <p>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts. Separated they live in
            </p>
          </div>
        </div>
        <div className="carousel-testimony row">
          <div className="item col-4">
            <div className="testimony-wrap p-4 pb-5">
              <div
                className="user-img mb-5"
                style={{ backgroundImage: `url("${person1Img}")` }}
              >
                <span className="quote d-flex align-items-center justify-content-center">
                  <i className="icon-quote-left"></i>
                </span>
              </div>
              <div className="text text-center">
                <p className="mb-5 pl-4 line">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                  the blind texts.
                </p>
                <p className="name">Garreth Smith</p>
                <span className="position">Marketing Manager</span>
              </div>
            </div>
          </div>
          <div className="item col-4">
            <div className="testimony-wrap p-4 pb-5">
              <div
                className="user-img mb-5"
                style={{ backgroundImage: `url("${person2Img}")` }}
              >
                <span className="quote d-flex align-items-center justify-content-center">
                  <i className="icon-quote-left"></i>
                </span>
              </div>
              <div className="text text-center">
                <p className="mb-5 pl-4 line">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                  the blind texts.
                </p>
                <p className="name">Garreth Smith</p>
                <span className="position">Interface Designer</span>
              </div>
            </div>
          </div>
          <div className="item col-4">
            <div className="testimony-wrap p-4 pb-5">
              <div
                className="user-img mb-5"
                style={{ backgroundImage: `url("${person3Img}")` }}
              >
                <span className="quote d-flex align-items-center justify-content-center">
                  <i className="icon-quote-left"></i>
                </span>
              </div>
              <div className="text text-center">
                <p className="mb-5 pl-4 line">
                  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                  the blind texts.
                </p>
                <p className="name">Garreth Smith</p>
                <span className="position">UI Designer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
