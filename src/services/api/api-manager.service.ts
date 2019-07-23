import axios, { AxiosInstance } from "axios";
import { getConfig } from "../../config";

/**
 * Cette class permet de gérer de façon générique les requetes API.
 * Vous pouvez créer vos propres méthodes via l'entité correspondant au endpoint
 * @export
 * @class ApiManagerService
 * @template I
 * @template T
 */
export default class ApiManagerService<I, T extends Resource<I>> {
	private BASE_URL: string = getConfig("GOTVSERIES_ADRESS");
	protected axiosClient: AxiosInstance;

	/**
	 *Creates an instance of ApiManagerService.
	 * @param {string} endpoint le endpoint est la définition de la route.
	 * Exemple:
	 * http://localhost/users < le endpoint est "users"
	 * @memberof ApiManagerService
	 */
	constructor(private endpoint: string) {
		this.axiosClient = axios.create({
			headers: {
				"x-token": getConfig('GOTVSERIES_TOKEN')
			}
		})
	}

	public getAll(): Promise<T[]> {
		return this.axiosClient.get<T[]>(`${this.BASE_URL}/${this.endpoint}`)
			.then(data => {
				return data.data;
			})
	}

	public get(id: number): Promise<T[]> {
		return this.axiosClient.get<T[]>(`${this.BASE_URL}/${this.endpoint}/${id}`)
			.then(data => {
				return data.data;
			})
	}

	public post(): Promise<T[]> {
		return this.axiosClient.post<T[]>(`${this.BASE_URL}/${this.endpoint}`)
			.then(data => {
				return data.data;
			})
	}

	public put(id: number): Promise<T[]> {
		return this.axiosClient.put<T[]>(`${this.BASE_URL}/${this.endpoint}/${id}`)
			.then(data => {
				return data.data;
			})
	}
	public delete(id: number): Promise<T[]> {
		return this.axiosClient.delete<T[]>(`${this.BASE_URL}/${this.endpoint}/${id}`)
			.then(data => {
				return data.data;
			})
	}
}

export class Resource<I> {
	// @ts-ignore
	id: I;
}