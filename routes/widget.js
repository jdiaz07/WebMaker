const express = require("express");
const router = express.Router();

const widgets = [
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
];

// Create new widget
router.post("/", (req, res) => {
  const newWidget = req.body;
  widgets.push(newWidget);
  res.json(newWidget);
});

// Get all pages by given page id
router.get("/page/:pid", (req, res) => {
  const pid = req.params.pid;
  const currentWidgets = [];
  for (let i = 0; i < widgets.length; i++) {
    if (widgets[i].pageId === pid) {
      currentWidgets.push(widgets[i]);
    }
  }
  res.json(currentWidgets);
});

// Get page by given id
router.get("/:wgid", (req, res) => {
  const wgid = req.params.wgid;
  let widget = null;
  for (let i = 0; i < widgets.length; i++) {
    if (widgets[i]._id === wgid) {
      widget = widgets[i];
    }
  }
  res.json(widget);
});

// Update widget
router.put("/", (req, res) => {
  const newWidget = req.body;

  for (let i = 0; i < widgets.length; i++) {
    if (widgets[i]._id === newWidget._id) {
      widgets[i] = newWidget;
    }
  }
  res.json(newWidget);
});

// Delete widget
router.delete("/:wgid", (req, res) => {
  const wgid = req.params.wgid;
  for (let i = 0; i < widgets.length; i++) {
    if (widgets[i]._id === wgid) {
      widgets.splice(i, 1);
    }
  }
  res.json(widgets);
});

module.exports = router;
