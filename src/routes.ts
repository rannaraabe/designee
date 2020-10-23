import { SplashController } from "./controller/SplashController";
import { UserController } from "./controller/UserController";

export const Routes = [{
    method: "get",
    route: "/",
    controller: UserController,
    action: "all",
    view: "pages/index"
}, {
    method: "post",
    route: "/login",
    controller: UserController,
    action: "login"
}, {
    method: "get",
    route: "/register",
    controller: UserController,
    action: "all",
    view: "pages/register"
}, {
    method: "post",
    route: "/register",
    controller: UserController,
    action: "save",
    view: "pages/register"
}, {
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all",
    view: "pages/index"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "put",
    route: "/users/:id",
    controller: UserController,
    action: "edit"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}, {
    method: "get",
    route: "/feed",
    controller: SplashController,
    action: "all",
    view: "pages/feed"
},
{
    method: "get",
    route: "/artist/splashes",
    controller: SplashController,
    action: "all",
    view: "pages/artist"
},
{
    method: "post",
    route: "/artist/splashes",
    controller: SplashController,
    action: "save"
},
{
    method: "put",
    route: "/artist/splashes/:id",
    controller: SplashController,
    action: "edit"
},
{
    method: "delete",
    route: "/artist/splashes/:id",
    controller: SplashController,
    action: "remove"
}];
