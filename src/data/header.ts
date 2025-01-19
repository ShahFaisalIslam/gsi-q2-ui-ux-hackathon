interface IHeaderItem {
    url: string,
    name: string,
    banner: string,
};

const headerItems: IHeaderItem[] = [{
    url: "/",
    name: "Home",
    banner: ""
},{
    url: "/shop",
    name: "Menu",
    banner: "Our Menu"
},{
    url: "/chef",
    name: "Chef",
    banner: "Our Chef"
}];

const bannerOnlyItems: IHeaderItem[] = [{
    url: "/faq",
    name: "faq",
    banner: "FAQ Page"
}];

export {type IHeaderItem,headerItems,bannerOnlyItems};