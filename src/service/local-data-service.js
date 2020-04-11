const KEY_AUTH = 'auth';

export const saveAuth = obj => {
    return localStorage.setItem(KEY_AUTH, JSON.stringify(obj));
};

export const getAuth = () => {
    try {
        return JSON.parse(localStorage.getItem(KEY_AUTH));
    } catch (e) {
        return null;
    }
};
