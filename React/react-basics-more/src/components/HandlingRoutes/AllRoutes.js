
import { Home, About, Contact } from '....'
import { Dashboard, Profile, Playlists }  from '...'

export const routes = [
    {
      path: "/",
      component: Home
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/contact",
        component: Contact
    }
];

export const privateRoutes = [
    {
        path: "/dashboard",
        component: Dashboard
    },
    {
        path: "/profile",
        component: Profile
    },
    {
        path: "/playlist",
        component: Playlists
    }
];