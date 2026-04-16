const DeleteLocalStorage = (id) => {
    localStorage.removeItem(String(id));
};

export default DeleteLocalStorage;