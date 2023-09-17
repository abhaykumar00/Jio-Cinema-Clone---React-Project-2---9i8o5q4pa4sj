import "@splidejs/react-splide/css";
import "./Hero.css";
import HeroSlides from "./HeroSlides";

const heroposter = {
  image1:
    "https://images.slivcdn.com/videoasset_images/ca2_masthead_web_v1.jpg?h=auto&w=1366&q=high&fr=webp",
  image2:
    "https://images.slivcdn.com/videoasset_images/crs4_2_merged_image_web_v1.jpg?h=auto&w=1366&q=high&fr=webp",
  image3:
    "https://images.slivcdn.com/videoasset_images/kbc23_2_merged_image_web_v1.jpg?h=auto&w=1366&q=high&fr=webp",
  image4:
    "https://images.slivcdn.com/videoasset_images/porthozhil5_masthead_web_v1.jpg?h=auto&w=1366&q=high&fr=webp",
};
const heropostertitle = {
  postertitle1:
    "https://images.slivcdn.com/videoasset_images/ca2_hindi_multilang_mastheadr_logo_new_movie.png?w=400&q=high&fr=webp",
  postertitle2:
    "https://images.slivcdn.com/videoasset_images/crs4_set3_hindi_multilang_13july_masthead_logo.png?w=400&q=high&fr=webp",
  postertitle3:
    "https://images.slivcdn.com/videoasset_images/kbc23_9aug_masthead_logo.png?w=400&q=high&fr=webp",
  postertitle4:
    "https://images.slivcdn.com/videoasset_images/porthozhil_10aug_multilang_masthead_logo_new_movie.png?w=400&q=high&fr=webp",
};

export function Hero() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active" id="firsthero">
          <HeroSlides
            poster={heroposter.image1}
            postertitle={heropostertitle.postertitle1}
            cat={"Action,Romance"}
          />
        </div>
        <div class="carousel-item">
          <HeroSlides
            poster={heroposter.image2}
            postertitle={heropostertitle.postertitle2}
            cat={"Love,Romance"}
          />
        </div>
        <div class="carousel-item">
          <HeroSlides
            poster={heroposter.image3}
            postertitle={heropostertitle.postertitle3}
            cat={"Entertainment,Knowledge"}
          />
        </div>
        <div class="carousel-item">
          <HeroSlides
            poster={heroposter.image4}
            postertitle={heropostertitle.postertitle4}
            cat={"Action,Story"}
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}
