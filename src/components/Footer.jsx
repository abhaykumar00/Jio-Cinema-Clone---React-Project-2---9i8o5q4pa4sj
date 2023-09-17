import "./Footer.css";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="contactsection">
          {/* Download app links */}
          <div className="downloadplaystore">
            <a href="https://play.google.com/store/apps/details?id=com.sonyliv&pli=1">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAAAoCAMAAADjcxkDAAAA/1BMVEVHcEwxMTGOjo7///9+fn55eXmEhISQkJB0dHSLi4sA4v80NTUyMjIA0/8A8HbHx8f29vbi4uIA2/9DQ0M8Pj3AwMDs7Oz7+/sAxv9VVVVnZ2dzcnOrq6s4OTjd3d1LS0tfX1+hoaFrbWv8OEXzMkrY2NiampqKiopPT0+np6f/zAAcc4SAgIC0tLR4eHiFhYX/xACJcpkAt//Pz8+VlZXmKVH/1AAcbYSRkZHOxykE53swUksN2ncVs31p1F1bXn6FXoYA3bDRikkA3LFCU2WuT3MdZ3xzbTAfkGUma14D17AJzbDXOFsC3qyvrzPSjEjgR1eiwUtvmFsPxLAklb6+WhWOAAAACnRSTlMA////uJrS+VvmxdMMwwAABFxJREFUWMPNmHlb2zgQxiPP7gKVQTK2ZRwfcQy+WDtpcEqBQqHHtnt07/3+n2VHcgKmxDTdsE8yfyRRLNm/zLwzmqjX623vbGnrtK2d7R7aN2OTrNV0M/sWvTEmazeqbfd2zPVzkPy73tYGYBC61dM2gYP8Nw6douGb/tmvwjFdnePD1U/6Y3P7zLYjUoaMaYkIGSFaUYUirPDSGC+5pLYJMQarcrw6+fvy6lU3Sc4sYg1IWcoB6+NLVuBzLfww8nVi1hYLSxKuzPHh5OSXSyTpmprGxHRdq/RH8ecctsy5M49lobk6x8sTCXJxcRV0cPRJP2VlWZVeF0c89J+G4+Tni729ix8Xis1lAaEsfywuMU3E6hwHBwcIsod2uVCwMbOZR8rEtq2GQ0OOUHLMdMpiEjtPwoH2bk+RLJSJpKNBEMzSs523utwn8MKAPhFHA3Kxd2V9fVl5kjr2cnd3t+URlEmwlnoqORqUNw3I6/OP+ho4vt+dWwPy+vnx8fnHe7MHRSiMKvrCPftp3h5maZpOR5jZA6xAy3Ds79+SvJEYyHF8+ltLJmMOIByA4nEtDsFrDw2QJjzSB39JDmUK5FfEQI7T09Pz27ka8LFFgn44JV/HEUWRxrm7LMez/TnJ/u7k7fPGH3ccrsMbf38pMx9wKF9CujQH2oxkcnj4tvHHn7eFxIbs3lIrmpUs6roztNylOp1xDKKgzRFBpThoFJmyCKmFAV3Msf+sYUEMCYI67d8VBQ7tDtKqMOihlGyGquGyyY1QCUYNruRwQ/wya3EUoEmOWAA4PrUVqg2jLn8olMmR5Dj8/fyvVggC4PKtdKQxwqDOfBmpDMR0KmBMcu4UWgKKwxROkSXNYwxI0yEDw0IOmjjDswTSCLB9MR1BOzkaDAnyh3e/ojogx16SJCGwWN6IlFBRzmVKcq5X8rGBoThS0IhbgXGXL/agyRc39lwekgRyMoUz8gjH5Ajt8Ojm/f06rbNb+fWhmKrfSh3DBbsRT25wXYlUctgwrUGkg3m+uJZa5pMSgwgOJyMY6ga3HuFQGEc/vH+43YKw5oodnYHc/gMnnHEwGBgOVTpoOKAe0bZOG47cEaM85pxQIbx2+jzgmLx4gRTXC3JT9yF0G4UmNIIEJX8Gvi64K3NakErmkykURybpdM1sc+jI4cFQ8nC5VEDezSExPl0v3moDTBHDZhwS9DcGf2iDMNHD3Pc5xgwR7EI0OqUh1EXSuKrtD9SRXzmSw+JKYR0ciPHpprNDJXGNwU2m0lk05eAwKQAPhRjizqHntQM1g3wqsJOt8LKvqkQtZv6IxJDEBvApM1Rw404OxJDy7N5l9aDV55jzj1bjP0sPTGI7s2/pg45IV62T2dzdxKTp6NcRY6Ewlmx7RnwohZIstziFcQeH/s/NtbVCC2EaEGJkoqUmB0IEnf8rV+x6zMIQbDkMEtnjJ/h/+3/0Y5ty7rAp5zCbci61/nM6os7pNuTc8l8biZR33Rr82QAAAABJRU5ErkJggg=="></img>
            </a>
            <a href="https://apps.apple.com/in/app/sonyliv-originals-hollywood/id587794258">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAoCAMAAAASeEKOAAAAYFBMVEVHcEyvr6////8xMTGnp6enp6epqamnp6enp6enp6eampo6Ojo0NDSLi4u6urqurq6lpaX39/dBQUFOTk5sbGzq6up1dXXFxcXR0dFhYWGTk5Pd3d19fX1ZWVlHR0eFhYXTwDbLAAAACnRSTlMAEP//ds0+4x2wKL7qggAABBNJREFUWMPNmNt22zgMRTXnpO1EpHi/ipT0/3/ZB9lxbKVO2mbG4YuxuLCgbQAEQA7DMDx9Gx+6fjx/H4ZhGJ6T42OXn56GYXhKfPiS8/dh+CEfD8Llefhn/gIcdN+Gf6evACJ+3AGRSd1ksXTrL+IoD1Y28bZm8r8LshbgxtgUc1NvfsDZ2534xgddJXP6TRDZgHKzN2lKZUifPEWlWLh6Wdcg6SwpQiW5JEeKtOwgIlRy9UslSWlKZU5hJVmD/CDIBqAeQVgbQ5takNZtkWaTNudCZynamDW9GZuURSnrydNeirrNJKVqG3PRdqVRWn0QpAEj3wbJnVOmSkotbZVYBYSz7JkOgsnYtUZK60n2zBUiFaZMkl2RubMkaafNyo+B2HYM5qRJo1kSt8xuch8LJQStc5ZbpoOb8hJ9aCeQSdFBpMxQXkASVRfoKb0HIsM8B0lBPxnTr1JzKl03x62Eluji7OJ8AVljMpmj2qwXcdTWk1xj0oovICGGHYRZpfROaEIEgKjHAgCI/XX9m6cgSYa5kuwr+0pOkpuQG+nnTVJsKTn6OewNzM9d0geu+2dTZ/IMnrLP9T5Ix+3qb56p/7qgeXvLEf1DKqu+5bD+ISVeHhxiHtNrlkOG3DpkKiW8N+aoaKPyfwUSDiDiWOfUfZvVIpYIT9LXzwO56b8e2dr7R6ZhJrmQnKA/LzQ3cZixlX1POElR3UVcTyZf4N0I5XaFZZFnxcWTlKeNX4K4A0i5/bt+3v+nQlUAlCAVgj6JJC1OFiMAWFJoAHaWpEbIGMnNArbfPb7lQDJeR6bRI0qSCjHOxkKR+iKSHAG1kOSU0caZzCh9ijCkRrGlc0IJoV05+wAyH0CgX6XJhJHcTWhYT1ZgOYkLsJxJoDzJ3XcJUZAV8DRAJYW1ggxXzj6AHJPkaiopqEKM0CT1HqGCTrP7opxj4rVF9GcQvTu1YKNBJhlQQggd9m6vOcamvZoez2X/Yl9hpNnLnr5Uv7VBnUHK3q0uitPZsrwHUu+dmw1Na60t6gtIxnayLxWmV3UgnkHyvp0xnRQ7cq211uX+GHDbbV6Xr4xt/zGkRiYpLCoNCkkRXzEnFHJCJjm+VjQklz3b3xueXbtuvu7qcK/7qBBJDUxizSikAWbhFJokKXPyLkTMZIKtjqvFRqF2RbOHX610wb0zofkIAC03AIjL1azSzkALNYo9KZiL+JLuavcRGpksrEXzLyC+AfZ60HlzZnWjmj3JdVbjenU3Gk++38ZKjbEaNTuSBmY5iaRcRq3G/frgjZpI+lnpLkmGkwHZjTL9PY98cOlLqTPXw8IHp7eP3mv+HOTT777/M8gfPkvIui0Xsf4tiPv2Fw81nznJL89f6Onq8Y950s9Pw/BVnjd/At6LguQbVdJVAAAAAElFTkSuQmCC"></img>
            </a>
          </div>
          {/* Social media links */}
          <div className="socialcontect">
            <a href="https://www.linkedin.com/company/sony-pictures-networks-india/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
                style={{ marginRight: "1.6rem" }}
              ></img>
            </a>
            <a href="https://www.instagram.com/sonylivindia/?hl=en">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"></img>
            </a>
            <a href="https://www.facebook.com/SonyLIV/">
              <img
                src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
                style={{ width: "75px" }}
              ></img>
            </a>
            <a href="https://twitter.com/SonyLIV">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553"></img>
            </a>
          </div>
        </div>
        {/* Links to different sections */}
        <div className="LinksSection">
          <div className="linkbox">
            <h5>Explore Shows</h5>
            <li>
              <a href="https://www.sonyliv.com/custompage/set-shows-506">
                SET Shows
              </a>
            </li>
            <li>
              <a href="https://www.sonyliv.com/custompage/sab-tv-shows-463">
                SAB TV Shows
              </a>
            </li>
            <li>
              <a href="https://www.sonyliv.com/custompage/marathi-tv-shows-559">
                Marathi TV Shows
              </a>
            </li>
            <li>
              <a href="https://www.sonyliv.com/listing/bengali-shows-38048_7124">
                Bengali TV Shows
              </a>
            </li>
            <li>
              <a href="https://www.sonyliv.com/custompage/english-tv-shows-46488">
                English TV Shows
              </a>
            </li>
          </div>

          <div className="linkbox">
            <h5>Shows by Genres</h5>
            <li>
              <a href="https://www.sonyliv.com/listing/drama-shows-38048_8735">
                Drama Shows
              </a>
            </li>
            <li>
              <a href="https://www.sonyliv.com/listing/popular-in-comedy-38048_8736">
                Comedy Shows
              </a>
            </li>
            <li>
              <a href="https://www.sonyliv.com/listing/thriller-shows-38048_8734">
                Thriller Shows
              </a>
            </li>
            <li>
              <a href="https://www.sonyliv.com/listing/romantic-shows-38048_8733">
                Romantic Shows
              </a>
            </li>
            <li>
              <a href="https://www.sonyliv.com/listing/reality-shows-38048_8732">
                Reality Shows
              </a>
            </li>
          </div>
          <div className="linkbox">
            <h5>Movies by Language</h5>
            <li>
              <a href="https://www.sonyliv.com/listing/hindi-movies-36562_11112">
                Hindi Movies
              </a>
            </li>
            <li>
              <a href="https://www.sonyliv.com/listing/english-movies-36562_11114">
                English Movies
              </a>
            </li>
            <li>
              <a href="https://www.sonyliv.com/listing/marathi-movies-36562_6849">
                Marathi Movies
              </a>
            </li>
            <li>
              <a href="https://www.sonyliv.com/listing/tamil-movies-36562_11116">
                Tamil Movies
              </a>
            </li>
            <li>
              <a href="https://www.sonyliv.com/listing/telugu-movies-36562_11117">
                Telgu Movies
              </a>
            </li>
          </div>
          <div className="linkbox">
            <h5>Top TV Shows</h5>
            <li>
              <a href="https://www.sonyliv.com/shows/hum-rahein-na-rahein-hum-1700001207">
                Hum Rahein Na Rahein Hum
              </a>
            </li>
            <li>
              <a href="https://www.sonyliv.com/shows/sapno-ki-chhalaang-1700001208">
                Sapno Ki Chhalaang
              </a>
            </li>
            <li>
              <a href="https://www.sonyliv.com/shows/taarak-mehta-ka-ooltah-chashmah-1700000084">
                Taarak Mehta{" "}
              </a>
            </li>
            <li>
              <a href="https://www.sonyliv.com/shows/kathaa-ankahee-1700001091">
                Katha Ankahee
              </a>
            </li>
            <li>
              <a href="https://www.sonyliv.com/shows/the-kapil-sharma-show-1700000083">
                The Kapli Sharma Show
              </a>
            </li>
          </div>
          <div className="linkbox">
            <h5>Channels</h5>
            <li>
              <a href="https://www.sonyliv.com/custompage/live-tv-532">
                LIVE TV
              </a>
            </li>
            <li>
              <a href="https://www.sonyliv.com/live-tv/set-1000009246">
                Sony SET
              </a>
            </li>
            <li>
              <a href="https://www.sonyliv.com/live-tv/sony-sab-hd-1000009248">
                Sony SAB
              </a>
            </li>
            <li>
              <a href="https://www.sonyliv.com/live-tv/sony-marathi-1000009259">
                Sony Marathi
              </a>
            </li>
            <li>
              <a href="https://www.sonyliv.com/live-tv/sony-max-hd-1000009247">
                Sony MAX
              </a>
            </li>
          </div>
        </div>
        {/* Copyright information */}
        <div className="copyright">
          <p>
            © 2023 All Rights Reserved Developed by{" "}
            <a href="https://abhishekprajapati.netlify.app/">Abhishek Kumar</a>.
          </p>
        </div>
      </footer>
    </>
  );
}
