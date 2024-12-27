import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  layout("./routes/portfolio/layout.tsx", [
    index("./routes/portfolio/index.tsx"),
    route("home", "./routes/portfolio/home.tsx"),
    route("about", "./routes/portfolio/about.tsx"),
    route("skills", "./routes/portfolio/skills.tsx"),
    route("contacts", "./routes/portfolio/contacts.tsx"),
  ]),
  ...prefix("admin", [
    layout("./routes/admin/layout.tsx", [
      index("./routes/admin/index.tsx"),
    ])
  ])
] satisfies RouteConfig;
