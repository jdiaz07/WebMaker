import React from "react";
import { Link } from "react-router-dom";

export default function WidgetList() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-light bg-light">
          <div>
            <Link to="/user/:uid/website/:wid/page">
              <i className="fas fa-chevron-left text-dark" />
            </Link>
            <span className="navbar-brand mb-0 h1 ml-4 text-black-50">
              Widgets
            </span>
          </div>
          <Link to="/user/:uid/website/:wid/page/:pid/widget/new">
            <i className="fas fa-plus text-dark" />
          </Link>
        </nav>
        <main className="container-fluid">
          <section>
            <div className="position-absolute absolute-right p-1">
              <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
                <i className="fas fa-cog" />
              </Link>
              <i className="fas fa-bars" />
            </div>
            <h1>MSIMBO</h1>
          </section>
          <section>
            <div className="position-absolute absolute-right p-1">
              <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
                <i className="fas fa-cog" />
              </Link>
              <i className="fas fa-bars" />
            </div>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
              impedit?
            </h3>
          </section>
          <section>
            <div className="position-absolute absolute-right p-1">
              <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
                <i className="fas fa-cog" />
              </Link>
              <i className="fas fa-bars" />
            </div>
            <img
              src="https://www.thoughtco.com/thmb/8qvtjPU97u4bwsoPxws6H-r9NoY=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/black-wolf-approaches-a-photographer-hudson-bay-949087536-5c44f0fa46e0fb000191455b.jpg"
              alt="black wolf"
            />
          </section>
          <section>
            <div className="position-absolute absolute-right p-1">
              <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
                <i className="fas fa-cog" />
              </Link>
              <i className="fas fa-bars" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              <Link to="https://www.google.com/"> adipisicing </Link>
              elit. Incidunt illum deleniti dolore itaque obcaecati
              necessitatibus rem. Fugit excepturi molestiae vero porro
              reprehenderit blanditiis? Excepturi alias sint rem rerum, earum
              doloribus?
            </p>
          </section>
          <section>
            <div className="position-absolute absolute-right p-1">
              <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
                <i className="fas fa-cog" />
              </Link>
              <i className="fas fa-bars" />
            </div>
            <h3>Lorem ipsum dolor sit amet.</h3>
          </section>
          <section>
            <div className="position-absolute absolute-right p-1 bg-light rounded-left front">
              <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
                <i className="fas fa-cog" />
              </Link>
              <i className="fas fa-bars" />
            </div>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                width={560}
                height={315}
                src="https://www.youtube.com/embed/UW3mc3fH94Y"
                frameBorder={0}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>
          <section>
            <div className="position-absolute absolute-right p-1 bg-light rounded-left">
              <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
                <i className="fas fa-cog" />
              </Link>
              <i className="fas fa-bars" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              deserunt ea assumenda quos fugiat, impedit suscipit odit
              repellendus, odio nam quis consectetur numquam eius doloribus?
              Voluptatibus facere eveniet expedita incidunt.
            </p>
          </section>
        </main>
        <br />
        <nav className="navbar navbar-light bg-light fixed-bottom">
          <div>
            <i className="fas fa-play" />
            <i className="fas fa-eye ml-2" />
          </div>
          <span className="mb-0">
            <p className="fixed-bottom container text-center text-black-50">
              TRENCHES © 2020
            </p>
          </span>
          <Link to="/user/:uid" className="text-primary">
            <i className="fas fa-user" />
          </Link>
        </nav>
      </div>
    </div>
  );
}
