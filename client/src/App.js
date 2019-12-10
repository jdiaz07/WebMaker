import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// User components
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
// Website components
import WebsiteList from "./components/website/WebsiteList";
import WebsiteNew from "./components/website/WebsiteNew";
import WebsiteEdit from "./components/website/WebsiteEdit";
// Page Components
import PageList from "./components/page/PageList";
import PageNew from "./components/page/PageNew";
import PageEdit from "./components/page/PageEdit";
// Widget Components
import WidgetList from "./components/widget/WidgetList";
import WidgetChooser from "./components/widget/WidgetChooser";
import WidgetEdit from "./components/widget/WidgetEdit";

function App() {
  const [widgets, setWidgets] = useState([
    {
      _id: "123",
      widgetType: "HEADING",
      pageId: "321",
      size: "2",
      text: "GIZMODO"
    },
    {
      _id: "234",
      widgetType: "HEADING",
      pageId: "321",
      size: "4",
      text: "Lorem ipsum"
    },
    {
      _id: "345",
      widgetType: "IMAGE",
      pageId: "321",
      width: "100%",
      url:
        "https://www.thoughtco.com/thmb/8qvtjPU97u4bwsoPxws6H-r9NoY=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/black-wolf-approaches-a-photographer-hudson-bay-949087536-5c44f0fa46e0fb000191455b.jpg"
    },
    {
      _id: "567",
      widgetType: "HEADING",
      pageId: "321",
      size: "4",
      text: "Lorem ipsum"
    },
    {
      _id: "678",
      widgetType: "YOUTUBE",
      pageId: "321",
      width: "100%",
      url: "https://www.youtube.com/embed/UW3mc3fH94Y"
    }
  ]);

  // Get widgets by page id
  const getWidgets = pid => {
    return widgets.filter(widget => widget.pageId === pid);
  };

  // Get Widget by widget id
  const getWidget = wgid => {
    for (let widget of widgets) {
      if (widget._id === wgid) {
        return widget;
      }
    }
  };

  // add Widget
  const addWidget = newWidget => {
    setWidgets([...widgets, newWidget]);
  };

  // remove Widget
  const removeWidget = wgid => {
    setWidgets(widgets.filter(widget => widget._id !== wgid));
  };

  // update Widget
  const updateWidget = newWidget => {
    setWidgets(
      widgets.map(widget => {
        if (widget._id === newWidget._id) {
          return newWidget;
        } else {
          return widget;
        }
      })
    );
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/user/:uid">
          <Profile />
        </Route>
        <Route exact path="/user/:uid/website">
          <WebsiteList />
        </Route>
        <Route exact path="/user/:uid/website/new">
          <WebsiteNew />
        </Route>
        <Route exact path="/user/:uid/website/:wid">
          <WebsiteEdit />
        </Route>
        <Route exact path="/user/:uid/website/:wid/page">
          <PageList />
        </Route>
        <Route exact path="/user/:uid/website/:wid/page/new">
          <PageNew />
        </Route>
        <Route exact path="/user/:uid/website/:wid/page/:pid">
          <PageEdit />
        </Route>
        <Route exact path="/user/:uid/website/:wid/page/:pid/widget">
          <WidgetList getWidgets={getWidgets} />
        </Route>
        <Route exact path="/user/:uid/website/:wid/page/:pid/widget/new">
          <WidgetChooser addWidget={addWidget} />
        </Route>
        <Route exact path="/user/:uid/website/:wid/page/:pid/widget/:wgid">
          <WidgetEdit
            getWidget={getWidget}
            removeWidget={removeWidget}
            updateWidget={updateWidget}
          />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
