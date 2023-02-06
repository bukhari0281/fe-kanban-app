import { axiosInstance } from "@/service/http/axios.service";

const fetcher = (url) => axiosInstance.get(url).then(res => res?.data)

export default fetcher