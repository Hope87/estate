import axios from "axios";



export const baseUrl = "https://bayut.p.rapidapi.com"


export const fetchApi = async (url: string) => {
    const {data} = await axios.get(url, {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'dd903aff68msh0ddbb4f8c48d8d6p13bc2ajsnc04970fd0f4d'
          }
    })

    return data
}