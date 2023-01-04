import Route from "@randoms/core";

Route.initRoute ([])
class DefaultRoute extends Route {
    public async get(req: Route.Request, res: Route.Response): Promise<void> {
        res.send ('index.ts => get');
    }
}

export default new DefaultRoute ();
