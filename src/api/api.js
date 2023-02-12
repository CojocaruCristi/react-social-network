import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,

    headers: {
        'API-KEY': '7b194964-ceb2-45ed-8a3c-f802f7c6cb4e',
    }
})


export const UsersApi = {
    getUsers(items, currentPage) {
       return axiosInstance.get(`users?count=${items}&page=${currentPage}`)
            .then(response => response.data)
    }
}


export const FollowApi = {

    follow(userId) {
        return axiosInstance.post(`follow/${userId}`, {}, )
            .then((response) => {
                if(response.status === 200 || response.status === 201) {
                    return response.data
                }
            })
    },

    unfollow(userId) {
        return axiosInstance.delete(`follow/${userId}`, )
            .then((response) => {
                if(response.status === 200 || response.status === 201) {
                    return response.data;
                }
            })
    }
}

export const AuthApi = {
    authMe() {
        return axiosInstance.get(`auth/me`,
        )
            .then(response => response.data)
    },
    login(email, password, rememberMe) {
        return axiosInstance.post('auth/login', {
            email,
            password,
            rememberMe,
        } ).then(response => {

            return response.data;
        })
    },
    logOut() {
        return axiosInstance.delete('auth/login').then(response => response.data);
    }
}


export const ProfileApi = {
    getProfileById(id) {
        return axiosInstance.get(`profile/${id}`)
            .then(response => response.data)
    },

    updateProfileStatus(status) {
      return axiosInstance.put('profile/status', {status}).then((response) => response.data);
    },

    getProfileStatus(userId) {
        return axiosInstance.get(`profile/status/${userId}`).then((response) => {
            return response.data
        });
    },
    changeProfilePhoto(photoFile) {
        const formData = new FormData();

        formData.append("image", photoFile);

        return axiosInstance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            return response.data;
        })
    }
}