import { ItemController } from "./controller/ItemController";
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
    controller: ItemController,
    action: "all",
    view: "pages/feed"
},
{
    method: "get",
    route: "/creator/:id/items",
    controller: ItemController,
    action: "allByUser",
    view: "pages/items"
},
{
    method: "post",
    route: "/creator/items/add",
    controller: ItemController,
    action: "save",
    view: "pages/items"
},
{
    method: "put",
    route: "/creator/items/edit/:id",
    controller: ItemController,
    action: "edit",
    view: 'pages/items'
},
{
    method: "post",
    route: "/creator/items/delete",
    controller: ItemController,
    action: "remove",
    view: 'pages/items'
},
{
    method: "post",
    route: "/item/like",
    controller: ItemController,
    action: "curtirItem",
    view: 'pages/feed'
},
{
    method: "post",
    route: "/item/favorite",
    controller: ItemController,
    action: "favItem",
    view: 'pages/feed'
},
{
    method: "get",
    route: "/favorites",
    controller: ItemController,
    action: "allFavs",
    view: "pages/favorites"
},
{
    method: "get",
    route: "/search",
    controller: UserController,
    action: "listCreators",
    view: "pages/searchCreator"
},
{
    method: "get",
    route: "/cart",
    controller: ItemController,
    action: "allCart",
    view: "pages/cart"
},
{
    method: "post",
    route: "/item/cart",
    controller: ItemController,
    action: "addToCart",
    view: "pages/feed"
},
{
    method: "post",
    route: "/cart/buy",
    controller: ItemController,
    action: "clearCart",
    view: "pages/feed"
}];
