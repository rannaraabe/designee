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
    action: "one",
    view: "pages/userPage"
}, {
    method: "put",
    route: "/users/edit/:id",
    controller: UserController,
    action: "edit"
}, {
    method: "delete",
    route: "/users/delete/:id",
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
    route: "/artist/:id/splashes",
    controller: SplashController,
    action: "allByUser",
    view: "pages/splashes"
},
{
    method: "post",
    route: "/artist/splashes/add",
    controller: SplashController,
    action: "save",
    view: "pages/splashes"
},
{
    method: "put",
    route: "/artist/splashes/edit/:id",
    controller: SplashController,
    action: "edit",
    view: 'pages/splashes'
},
{
    method: "post",
    route: "/artist/splashes/delete",
    controller: SplashController,
    action: "remove",
    view: 'pages/splashes'
},
{
    method: "post",
    route: "/splash/like",
    controller: SplashController,
    action: "curtirSplash",
    view: 'pages/feed'
},
{
    method: "post",
    route: "/splash/favorite",
    controller: SplashController,
    action: "favSplash",
    view: 'pages/feed'
},
{
    method: "get",
    route: "/favorites",
    controller: SplashController,
    action: "allFavs",
    view: "pages/favorites"
},
{
    method: "get",
    route: "/search",
    controller: UserController,
    action: "listArtists",
    view: "pages/searchArtist"
},
{
    method: "get",
    route: "/cart",
    controller: SplashController,
    action: "allCart",
    view: "pages/cart"
},
{
    method: "post",
    route: "/splash/cart",
    controller: SplashController,
    action: "addToCart",
    view: "pages/feed"
},
{
    method: "post",
    route: "/cart/buy",
    controller: SplashController,
    action: "clearCart",
    view: "pages/feed"
}];
