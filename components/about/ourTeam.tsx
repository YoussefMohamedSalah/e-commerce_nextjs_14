import Image from "@/components/ui/image";
import React from "react";

const OurTeam = () => {
  return (
    <section className="our-team  bg-light py-5 mt100">
      <div className="">
        <div className="text-center">
          <div className="small-title opacity-50">Our Team</div>
          <div className="section-title fw-500 ">Who’s behind the scenes?</div>
        </div>
        <div className="row">
          <div className="col-lg-3  col-md-6 mb-4 border-end">
            <div className="single-worker">
              <div className="person_image">
                <div className="person_image_wrapper">
                  <a href="#">
                    <Image
                      src="/assets/avatar.png"
                      alt=""
                      className="img-fluid"
                      width={262}
                      height={300}
                    />
                  </a>
                </div>
              </div>

              <h5 className="person_name">
                <a href="https://rt19-demo7.rtthemes.com/team/frank-foe/">
                  Frank Foe
                </a>
              </h5>

              <span className="position">CEO</span>

              <div className="profile">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </div>
            </div>
          </div>
          <div className="col-lg-3  col-md-6 mb-4 border-end">
            <div className="single-worker">
              <div className="person_image">
                <div className="person_image_wrapper">
                  <a href="#">
                    {" "}<Image
                      src="/assets/avatar.png"
                      alt=""
                      className="img-fluid"
                      width={262}
                      height={300}
                    />
                  </a>
                </div>
              </div>

              <h5 className="person_name">
                <a href="https://rt19-demo7.rtthemes.com/team/frank-foe/">
                  Frank Foe
                </a>
              </h5>

              <span className="position">CEO</span>

              <div className="profile">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </div>
            </div>
          </div>
          <div className="col-lg-3  col-md-6 mb-4 border-end">
            <div className="single-worker">
              <div className="person_image">
                <div className="person_image_wrapper">
                  <a href="#">
                    {" "}<Image
                      src="/assets/avatar.png"
                      alt=""
                      className="img-fluid"
                      width={262}
                      height={300}
                    />
                  </a>
                </div>
              </div>

              <h5 className="person_name">
                <a href="https://rt19-demo7.rtthemes.com/team/frank-foe/">
                  Frank Foe
                </a>
              </h5>

              <span className="position">CEO</span>

              <div className="profile">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </div>
            </div>
          </div>
          <div className="col-lg-3  col-md-6 mb-4 border-end">
            <div className="single-worker">
              <div className="person_image">
                <div className="person_image_wrapper">
                  <a href="#">
                    {" "}<Image
                      src="/assets/avatar.png"
                      alt=""
                      className="img-fluid"
                      width={262}
                      height={300}
                    />
                  </a>
                </div>
              </div>

              <h5 className="person_name">
                <a href="https://rt19-demo7.rtthemes.com/team/frank-foe/">
                  Frank Foe
                </a>
              </h5>

              <span className="position">CEO</span>

              <div className="profile">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
