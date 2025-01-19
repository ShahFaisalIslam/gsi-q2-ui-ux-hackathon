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

export {type IHeaderItem,headerItems};