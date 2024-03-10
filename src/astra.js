import React from "react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ once: true });
const Astra = () => {
  return (
    <div className="container">
      <div className="header text-center p-2">
        <h1 className="rob">Team Astra</h1>{" "}
        <p className="cl">Unleash the Power : Where Speed Meets Precision</p>
      </div>

      <div className="about-us">
        <h3 className="pop cl">About Team Astra</h3>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis cum
          ex fugit beatae ipsam! Iste vero velit voluptatem facere saepe hic,
          tenetur odio, vitae temporibus et sequi architecto soluta doloremque?
          Nemo ratione culpa, odio ab omnis itaque possimus dolores nobis, eum
          esse ipsam obcaecati blanditiis id tenetur repellat numquam accusamus
          reiciendis tempora. Dolorem ex natus, dignissimos eaque suscipit quos
          ab. Nam, voluptatibus ipsam sunt quidem libero quae mollitia quis
          laboriosam quisquam vero eligendi at, beatae impedit ea, consectetur
          a. Fuga odio, atque asperiores dolore sunt maiores laudantium facilis
          eum qui? Unde corporis nihil dolorum vero consequatur. Id nam pariatur
          reiciendis voluptatum. Labore ex libero corporis saepe tempora fuga
          blanditiis, perspiciatis nemo totam, consequatur repellat praesentium
          necessitatibus ducimus mollitia dignissimos quis! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Expedita sunt nobis excepturi
          facilis dicta repellat alias animi sed, dolorum optio autem,
          temporibus similique in perferendis accusamus, praesentium dolorem
          molestiae nemo. Voluptas hic impedit aliquid, nobis sed blanditiis
          numquam possimus nostrum ipsam eius itaque enim pariatur assumenda
          ipsa quia ducimus! Repudiandae, illo assumenda! Consectetur voluptates
          quis voluptate vitae maiores perspiciatis ipsa. Mollitia sed itaque
          labore similique optio quia voluptatibus, earum ea fugit suscipit est
          commodi, voluptas ad cum atque totam impedit officiis blanditiis in
          reiciendis alias dolor? Reiciendis officiis nam commodi. Molestias
          minus quia nemo repellat quisquam omnis dolor voluptatum, cumque
          suscipit praesentium ducimus placeat quo odit porro illum consequuntur
          unde excepturi beatae sequi expedita! Nostrum magnam cupiditate
          sapiente excepturi quasi? Delectus et nemo asperiores alias quisquam!
          Odio voluptatum eligendi, cupiditate quo expedita quod. Obcaecati
          vitae laudantium voluptates explicabo harum itaque, et voluptas
          suscipit quos voluptatum distinctio possimus soluta officia. Corporis?
          Non eius ad, a impedit praesentium, ut reiciendis possimus, eaque
          debitis aspernatur ex suscipit repellendus perspiciatis dolores iure
          placeat. A minus unde sed maxime veritatis quisquam eius possimus
          store, magni nihil officiis repellendus voluptas distinctio laboriosam
          impedit placeat totam.
        </p>
      </div>

      <div className="row m-5">
        <h3 className="text-center cl m-3">Our Journey</h3>
        <div
          className="col-md-6"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            className="img-fluid rounded size"
            src="https://ideogram.ai/api/images/direct/uIMKRRKyRveVyO_SJkr-uQ.png"
            alt=""
          />
        </div>

        <div className="col-md-6" data-aos="fade-left" data-aos-duration="1000">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            accusamus incidunt aliquid porro tenetur id, laborum corporis. Quasi
            quia, modi non assumenda inventore, sit numquam facilis maiores eos
            quaerat consequatur! Maiores incidunt in, explicabo ipsam iste
            commodi voluptatibus, unde accusamus saepe culpa quaerat? Amet
            tempora blanditiis veniam pariatur quos vitae voluptatem nesciunt,
            unde beatae quam fugiat neque cupiditate consectetur quo! Dicta
            eligendi officiis nulla numquam perferendis quisquam alias animi,
            cum deserunt nobis officia quas doloribus inventore laboriosam
            asperiores aliquam perspiciatis, omnis quia illum itaque temporibus.
            Autem consequuntur esse ut rem! Eveniet omnis excepturi, velit totam
            iusto repellendus nihil rerum nisi facilis laudantium aperiam saepe.
            Consequuntur nemo aut blanditiis maxime rem. Quis ratione veniam
            libero ducimus, at possimus necessitatibus ab corporis. Quibusdam
            quis hic pariatur nihil dicta labore deleniti architecto
            necessitatibus veniam! Quia repellat necessitatibus, consequuntur
          </p>
        </div>
      </div>

      <div className="row m-5 ">
        <div
          className="col-md-6  order-md-1 order-2"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <p>
            second Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ipsam accusamus incidunt aliquid porro tenetur id, laborum corporis.
            Quasi quia, modi non assumenda inventore, sit numquam facilis
            maiores eos quaerat consequatur! Maiores incidunt in, explicabo
            ipsam iste commodi voluptatibus, unde accusamus saepe culpa quaerat?
            Amet tempora blanditiis veniam pariatur quos vitae voluptatem
            nesciunt, unde beatae quam fugiat neque cupiditate consectetur quo!
            Dicta eligendi officiis nulla numquam perferendis quisquam alias
            animi, cum deserunt nobis officia quas doloribus inventore
            laboriosam asperiores aliquam perspiciatis, omnis quia illum itaque
            temporibus. Autem consequuntur esse ut rem! Eveniet omnis excepturi,
            velit totam iusto repellendus nihil rerum nisi facilis laudantium
            aperiam saepe. Consequuntur nemo aut blanditiis maxime rem. Quis
            ratione veniam libero ducimus, at possimus necessitatibus ab
            corporis. Quibusdam quis hic pariatur nihil dicta labore deleniti
            architecto necessitatibus veniam! Quia repellat necessitatibus,
            consequuntur
          </p>
        </div>
        <div
          className="col-md-6  order-md-2 order-1 "
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            className="img-fluid rounded"
            src="https://ideogram.ai/api/images/direct/JmfuSSLHREGIOmiDETjTxA.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Astra;
