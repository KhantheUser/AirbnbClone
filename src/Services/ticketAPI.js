import axiosClient from './axiosClient'

const ticketAPI = {
    getTicketsByUser: (userId) => {
        return axiosClient.get("api/tickets/by-user",{
            params: {
                userId: userId
            }
        })
    }
}
export default ticketAPI;