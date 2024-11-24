const  base="http://localhost:8080/api/v1/";
const api={
    company:{
        url:base.concat("company"),
        create:"/create",
        update:"/update",
        fetch:"/fetch",
    },
    category:{
        url:base.concat("category"),
        create:"/create",
        update:"/update",
        fetch:"/fetch",
    },
    subscriptions:{
        url:base.concat("subscriptions"),
        fetch:"/",
    }
   
}

export default api;