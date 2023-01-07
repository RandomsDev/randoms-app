import Route from "@randoms/core";

@Route.init ([])
class ProductRoute extends Route {
    public async get(req: Route.Request, res: Route.Response): Promise<void> {
        res.send ('./products/index => get');
    }
}

export default new ProductRoute ();
