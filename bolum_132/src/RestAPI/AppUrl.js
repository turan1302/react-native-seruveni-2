class AppUrl {
    static baseURL = "http://127.0.0.1:8000";
    static storageURL = "http://127.0.0.1:8000/storage/";
    static apiURL = this.baseURL + "/api";

    // licence control API
    static licenceControl = this.apiURL+"/licence-control"; // POST ISLEMI ILE CALISACAK
}

export default AppUrl;
