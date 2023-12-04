import axios from "axios";
import { ref } from "vue";

export default function useFetchData(apiEndpoint) {
    const data = ref([]);
    const isLoading = ref(false);

    const fetchData = async () => {
        try {
            isLoading.value = true;
            const response = await fetch(apiEndpoint);
            const result = await response.json();
            data.value = result;
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            isLoading.value = false;
        }
    };

    return {
        data,
        isLoading,
        fetchData,
    };
}
