import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function WidgetList(props) {
  const params = useParams();

  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    getWidgets();
    // eslint-disable-next-line
  }, []);

  const getWidgets = async () => {
    const res = await axios.get(`/api/widget/page/${params.pid}`);
    setWidgets(res.data);
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div>
          <Link to={`/user/${params.uid}/website/${params.pid}/page`}>
            <i className="fas fa-chevron-left text-dark" />
          </Link>
          <span className="navbar-brand mb-0 h1 ml-4 text-black-50">
            Widgets
          </span>
        </div>
        <Link
          to={`/user/${params.uid}/website/${params.wid}/page/${params.pid}/widget/new`}
        >
          <i className="fas fa-plus text-dark" />
        </Link>
      </nav>
      <main className="container-fluid">
        {widgets.map(widget => (
          <section key={widget._id}>
            <div className="position-absolute front absolute-right p-1 bg-light rounded-left">
              <Link
                to={`/user/${params.uid}/website/${params.wid}/page/${params.pid}/widget/${widget._id}`}
              >
                <i className="fas fa-cog" />
              </Link>
              <i className="fas fa-bars" />
            </div>
            {widget.widgetType === "HEADING" && (
              <div>
                {widget.size === "1" && <h1>{widget.text}</h1>}
                {widget.size === "2" && <h2>{widget.text}</h2>}
                {widget.size === "3" && <h3>{widget.text}</h3>}
                {widget.size === "4" && <h4>{widget.text}</h4>}
                {widget.size === "5" && <h5>{widget.text}</h5>}
                {widget.size === "6" && <h6>{widget.text}</h6>}
              </div>
            )}
            {widget.widgetType === "IMAGE" && (
              <div>
                <img src={widget.url} width={widget.width} alt={widget.url} />
              </div>
            )}
            {widget.widgetType === "YOUTUBE" && (
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title="video"
                  width={560}
                  height={315}
                  src="https://www.youtube.com/embed/UW3mc3fH94Y"
                  frameBorder={0}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </section>
        ))}
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
        <Link to={`/user/${params.uid}`} className="text-primary">
          <i className="fas fa-user" />
        </Link>
      </nav>
    </div>
  );
}
