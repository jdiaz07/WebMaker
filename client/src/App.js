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
  // User Data
  const [users, setUsers] = useState([
    {
      _id: "123",
      username: "alice",
      password: "alice",
      firstName: "Alice",
      lastName: "Wonder",
      email: "alice@gmail.com"
    },
    {
      _id: "234",
      username: "bob",
      password: "bob",
      firstName: "Bob",
      lastName: "Marley",
      email: "bob@whatever.com"
    },
    {
      _id: "345",
      username: "charly",
      password: "charly",
      firstName: "Charly",
      lastName: "Garcia",
      email: "charly@ulem.com"
    },
    {
      _id: "456",
      username: "shiyu",
      password: "shiyu",
      firstName: "Shiyu",
      lastName: "Wang",
      email: "swang@ulem.org"
    }
  ]);

  const [websites, setWebsites] = useState([
    { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
    { _id: "234", name: "Twitter", developerId: "456", description: "Lorem" },
    { _id: "456", name: "MSIMBO", developerId: "456", description: "Lorem" },
    { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
    {
      _id: "567",
      name: "Tic Tac Toe",
      developerId: "123",
      description: "Lorem"
    },
    { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
    { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
  ]);

  const [pages, setPages] = useState([
    { _id: "321", name: "Post 1", websiteId: "456", title: "Lorem" },
    { _id: "432", name: "Post 2", websiteId: "456", title: "Lorem" },
    { _id: "543", name: "Post 3", websiteId: "456", title: "Lorem" }
  ]);

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

  // Add a new user into users
  const addUser = user => {
    setUsers([...users, user]);
  };

  // Update user by id
  const updateUser = newUser => {
    setUsers(
      users.map(user => {
        if (user._id === newUser._id) {
          return newUser;
        } else {
          return user;
        }
      })
    );
  };

  // get websites by user id
  const getWebsites = uid => {
    const curWebs = [];
    for (let website of websites) {
      if (website.developerId === uid) {
        curWebs.push(website);
      }
    }
    return curWebs;
  };

  // getWebsite
  const getWebsite = wid => {
    for (let website of websites) {
      if (website._id === wid) {
        return website;
      }
    }
  };

  // Add new website
  const addWebsite = newWeb => {
    setWebsites([...websites, newWeb]);
  };

  // Remove website
  const removeWebsite = wid => {
    setWebsites(websites.filter(website => website._id !== wid));
  };

  // Update website
  const updateWebsite = newWeb => {
    setWebsites(
      websites.map(website => {
        if (website._id === newWeb._id) {
          return newWeb;
        } else {
          return website;
        }
      })
    );
  };

  // Get pages by website id
  const getPages = wid => {
    return pages.filter(page => page.websiteId === wid);
  };

  // Add new page into pages
  const addPage = newPage => {
    setPages([...pages, newPage]);
  };

  // Get page by pid
  const getPage = pid => {
    for (let page of pages) {
      if (page._id === pid) {
        return page;
      }
    }
  };

  // Remove page by pid
  const removePage = pid => {
    setPages(pages.filter(page => page._id !== pid));
  };

  // Update page
  const updatePage = newPage => {
    setPages(
      pages.map(page => {
        if (page._id === newPage._id) {
          return newPage;
        } else {
          return page;
        }
      })
    );
  };

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
          <Login users={users} />
        </Route>
        <Route exact path="/register">
          <Register users={users} addUser={addUser} />
        </Route>
        <Route exact path="/user/:uid">
          <Profile users={users} updateUser={updateUser} />
        </Route>
        <Route exact path="/user/:uid/website">
          <WebsiteList getWebsites={getWebsites} />
        </Route>
        <Route exact path="/user/:uid/website/new">
          <WebsiteNew getWebsites={getWebsites} addWebsites={addWebsite} />
        </Route>
        <Route exact path="/user/:uid/website/:wid">
          <WebsiteEdit
            getWebsites={getWebsites}
            getWebsite={getWebsite}
            removeWebsite={removeWebsite}
            updateWebsite={updateWebsite}
          />
        </Route>
        <Route exact path="/user/:uid/website/:wid/page">
          <PageList getPages={getPages} />
        </Route>
        <Route exact path="/user/:uid/website/:wid/page/new">
          <PageNew addPage={addPage} />
        </Route>
        <Route exact path="/user/:uid/website/:wid/page/:pid">
          <PageEdit
            getPage={getPage}
            removePage={removePage}
            updatePage={updatePage}
          />
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
          <Login users={users} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
