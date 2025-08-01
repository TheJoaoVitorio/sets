import { componentsData } from "@/data"

export default function apiService() {
	return {
		getComponents() {
			return componentsData
		}
	}
}
