const GetLocalStorage = (id) => {
    const objString = localStorage.getItem(String(id));
    return objString? JSON.parse(objString) : null;
};

export default GetLocalStorage;