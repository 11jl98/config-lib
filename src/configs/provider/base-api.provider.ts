import axios from "axios";

const api = (baseUrl: string) => {
    return (
        axios.create({
            baseURL: `${baseUrl}`,
        })
    )
}

export default api;