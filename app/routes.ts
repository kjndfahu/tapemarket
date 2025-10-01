import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("catalog", "catalog/catalog.tsx"),
  route("case", "case/case.tsx"),
  route("faq", "faq/faq.tsx"),
  route("open-case", "open-case/open-case.tsx"),
  route("account", "account/account.tsx"),
  route("confirmation", "confirmation/confirmation.tsx"),

  route("*", "routes/$.tsx"),
] satisfies RouteConfig;
