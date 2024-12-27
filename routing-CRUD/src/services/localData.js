export const getLocalData = () => {
    return JSON.parse(localStorage.getItem('EMP')) || [];
}

export const setLocalData = (data) => {
    return localStorage.setItem("EMP", JSON.stringify(data));
}