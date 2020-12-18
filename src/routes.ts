import { ItemController } from "./controller/ItemController";
import { UserController } from "./controller/UserController";
import { ComprasController } from "./controller/ComprasController";

export const Routes = [{
    method: "get",
    route: "/user",
    controller: UserController,
    action: "all",
}, {
    method: "post",
    route: "/login",
    controller: UserController,
    action: "login"
}, {
    method: "post",
    route: "/user",
    controller: UserController,
    action: "save",
}, {
    method: "get",
    route: "/user/:id",
    controller: UserController,
    action: "one",
}, {
    method: "put",
    route: "/users/:id",
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
},
{
    method: "get",
    route: "/creator/:id/items",
    controller: ItemController,
    action: "allByUser",
},
{
    method: "post",
    route: "/creator/items/add",
    controller: ItemController,
    action: "save",
},
{
    method: "put",
    route: "/creator/items/edit/:id",
    controller: ItemController,
    action: "edit",
},
{
    method: "post",
    route: "/creator/items/delete",
    controller: ItemController,
    action: "remove",
},
{
    method: "post",
    route: "/item/like",
    controller: ItemController,
    action: "curtirItem",
},
{
    method: "post",
    route: "/item/favorite",
    controller: ItemController,
    action: "favItem",
},
{
    method: "get",
    route: "/favorites",
    controller: ItemController,
    action: "allFavs",
},
{
    method: "get",
    route: "/search",
    controller: UserController,
    action: "listCreators",
},
{
    method: "get",
    route: "/cart",
    controller: ItemController,
    action: "allCart",
},
{
    method: "post",
    route: "/item/cart",
    controller: ItemController,
    action: "addToCart",
},
{
    method: "post",
    route: "/exemplo/servico/comprar",
    controller: ComprasController,
    action: "RealizarCompra",
},
{
    method: "post",
    route: "/cart/buy",
    controller: ItemController,
    action: "clearCart",
}];
