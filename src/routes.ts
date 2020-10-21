import { SplashController } from "./controller/SplashController";
import {UserController} from "./controller/UserController";

export const Routes = [{
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
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
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
    method: "post",
    route: "/users/login",
    controller: UserController,
    action: "login"
},
{
    method: "get",
    route: "/splash",
    controller: SplashController,
    action: "all",
    view: "pages/splash"
}];