import { UploadLayout } from "~/layouts"
import Home from "~/pages/Home"
import Following from "~/pages/Following"
import Upload from "~/pages/Upload";
import config from '~/config';
import Explore from "~/pages/Explore";
import Live from "~/pages/Live";
const publicRoutes = [
    {path:config.routes.home, component: Home}, 
    {path:config.routes.following, component: Following}, 
    {path:config.routes.explore,component:Explore }, 
    {path:config.routes.live, component:Live}, 
    {path:config.routes.upload, component: Upload, layout:UploadLayout }
]

const privateRoute = [];

export {publicRoutes, privateRoute};