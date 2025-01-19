export const useLoaderStore = defineStore('loader', () => {
    const loading = ref(false)
    const setLoading = (value: boolean) => {
        loading.value = value
    }
    return { loading, setLoading }
})
