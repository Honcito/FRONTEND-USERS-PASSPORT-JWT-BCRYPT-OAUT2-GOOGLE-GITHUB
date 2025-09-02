import axios from 'axios'

const API_URL = 'http://localhost:4000';

const register = (email, password) => {
    return axios.post(`${API_URL}/auth/register`, {
        email,
        password,
    });
};

const login = (email, password) => {
    return axios.post(`${API_URL}/auth/login`, {
        email,
        password,
    }).then((response) => {
        // Almacena la información del usuario y el token en el almacenamiento local
        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    });
};

const logout = () => {
    localStorage.removeItem('user');
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}; 

const authService = {
    register,
    login,
    logout,
    getCurrentUser,
};

export default authService;