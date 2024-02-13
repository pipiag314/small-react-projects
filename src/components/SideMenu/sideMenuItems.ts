
export type MenuItemT = {
    label: string;
    to: string;
    children?: MenuItemT[];
}

export type MenuItemsType = MenuItemT[];

export const menuItems = [
    {
        label: "Home",
        to: "/"
    },
    {
        label: "About",
        to: "/about"
    },
    {
        label: "Contact",
        to: "/contact"
    },
    {
        label: "Profile",
        to: "/profile",
        children: [
            {
                label: "Details",
                to: "details",
                children: [
                    {
                        label: "Location",
                        to: "location"
                    }
                ]
            },
            {
                label: "Settings",
                to: "settings"
            },
        ]
    },
    {
        label: "Auth",
        to: "/auth",
        children: [
            {
                label: "Register",
                to: "register"
            },
            {
                label: "Login",
                to: "login"
            }
        ]
    }

]