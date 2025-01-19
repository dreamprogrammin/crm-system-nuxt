interface IAuthStore {
    email: string
    name: string
    isAuthenticated?: boolean
}

const defaultValue : {user : IAuthStore} = {
    user : {
        email: '',
        name: '',
        isAuthenticated: false
    }
}

export const useAuthStore = defineStore('auth', () => {
    const state = ref(defaultValue)
    const isAuth = computed(() => state.value.user.isAuthenticated)
    const clear = () => {
        state.value.user = defaultValue.user
    }
    const set = (input: IAuthStore) => {
        state.value.user = {...input}
    }
    return {
        state, isAuth,clear,set
    }
})
