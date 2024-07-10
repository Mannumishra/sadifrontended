import React from "react";
import image9 from "../../Images/img/image9.jpg";
import image10 from "../../Images/img/image10.png";

const Story = () => {
  return (
    <>
      <section id="story" class="p_3">
        <div class="container-xl">
          <div class="row story_1 text-center mb-4">
            <div class="col-md-12">
              <span class="col_brown icon_dove fs-2">
                <i class="fa fa-dove"></i>
              </span>
              <h1 class="font_50">Our Sweet Story</h1>
            </div>
          </div>
          <div class="row story_2 text-center">
            <div class="col-md-12">
              <ul class="timeline">
                <li>
                  <div class="timeline-badge">
                    <i class="fa fa-heart"></i>
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h1 class="timeline-title">First Time We Meet</h1>
                      <h6 class="mt-3 mb-3">
                        <i class="fa fa-clock me-1 col_brown"></i> 19 Jan 2018
                      </h6>
                    </div>
                    <div class="timeline-body">
                      <p>
                        Lorem ipsum dolor sit amet, constetur adicng elit.
                        Ultricies nulla mi tempus mcorper for praesent.
                        Ultricies interdum volutpat morbi nam ornare neque elit
                        leo, diam. Malesuada enim ac amurna tempor vel duis.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-badge warning">
                    <i class="fa fa-heart"></i>
                  </div>
                  <div class="timeline-panel">
                    <img alt="abc" class="w-100" src={image9} />
                  </div>
                </li>
                <li>
                  <div class="timeline-badge danger">
                    <i class="fa fa-heart"></i>
                  </div>
                  <div class="timeline-panel">
                    <div class="timeline-heading">
                      <h1 class="timeline-title">She Said Yes!</h1>
                      <h6 class="mt-3 mb-3">
                        <i class="fa fa-clock me-1 col_brown"></i> 22 Feb 2018
                      </h6>
                    </div>
                    <div class="timeline-body">
                      <p>
                        Lorem ipsum dolor sit amet, constetur adicng elit.
                        Ultricies nulla mi tempus mcorper for praesent.
                        Ultricies interdum volutpat morbi nam ornare neque elit
                        leo, diam. Malesuada enim ac amurna tempor vel duis.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="timeline-inverted">
                  <div class="timeline-panel">
                    <img alt="abc" class="w-100" src={image10} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;
