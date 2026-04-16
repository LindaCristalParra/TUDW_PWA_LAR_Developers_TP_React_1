const PostLocalStorage = (Obj) => {
    localStorage.setItem("Obj", JSON.stringify(Obj));
};

export default PostLocalStorage;