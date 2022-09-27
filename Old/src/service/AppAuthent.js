export default class AppAuthent {
    static accessToken = "";
    static serverUrl = "";

    static instance = null;

    static createInstance() {
        const object = new AppAuthent();
        return object;
    }

    static getInstance() {
        if (!AppAuthent.instance) {
            return AppAuthent.createInstance();
        }
        return AppAuthent.instance;
    }

    getAccessTokent() {
        return AppAuthent.accessToken;
    }


    getServerUrl() {
        return AppAuthent.serverUrl;
    }

    setAccessToken(token) {
        console.log("setAuthenApp",token);
        AppAuthent.accessToken = token || "";
    }


    setServerUrl(serverUrl) {
        AppAuthent.serverUrl = serverUrl || "";
    }

    setAppAuthen(authen) {
        this.setAccessToken(authen.accesstoken);
        this.setServerUrl(authen.serverRequest);
    }
}