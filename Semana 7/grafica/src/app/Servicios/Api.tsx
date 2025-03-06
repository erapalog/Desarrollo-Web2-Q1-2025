import axios from "axios";

const API_URL='http://localhost:5000';

export const getConteoPuestoDepartamento = async()=>{
    const response = await axios.get(`${API_URL}/coun-puestos-departamento`);

    return response.data
}

export const getSumaDepartamento = async()=>{
    const response = await axios.get(`${API_URL}/sum-salario-departamento`);

    return response.data
}

export const getMaxSalarioDepartamento = async()=>{
    const response = await axios.get(`${API_URL}/max-salario-departamento`);

    return response.data
}