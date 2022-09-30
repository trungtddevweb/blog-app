import config from '~/config';
// Layouts
import { DefaultLayout } from '~/layouts';
// Pages
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Single from '~/pages/Single';
import Write from '~/pages/Write';

const publicRoutes = [
    { path: config.routes.home, component: Home, layout: DefaultLayout },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.register, component: Register, layout: null },
    { path: config.routes.single, component: Single, layout: DefaultLayout },
    { path: config.routes.write, component: Write, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
