export const isauthenticated = (obj) => {

    var isLoggedin = false

    const storedUser = localStorage.getItem("user");
    const storedPass = localStorage.getItem("pass");

    if (storedUser === obj.username && storedPass === obj.password) {
      isLoggedin = true
    } 

    return isLoggedin
};
