# OAuth2/OIDC Demo with Keycloak and Spring Boot

This is a demo project to show how BFF Architecture works and authenticate user based on OAuth2/OIDC protocol.

### Technology Stack
- Java 17
- Spring Boot 3
- Spring Security
- Spring Boot Starter OAuth2 Client
- Spring Boot Starter OAuth2 Resource Server
- Spring Cloud Gateway
- Keycloak
- ReactJS

### Local development architecture
![Local development architecture]()

### Getting started
1. Get the latest source code
2. Add the following entry to your hosts file
```
127.0.0.1 backoffice
127.0.0.1 keycloak.local
127.0.0.1 pgadmin.local
```
3. Open terminal of your choice, go to `bff-spring-keycloak-react-demo` directory, run `docker-compose up`, wait for all the containers up and running
4. Open another terminal, go to `backoffice` directory, run `npm install` and `npm run dev` to start the backoffice application
5. Open `bff-spring-keycloak-react-demo` project by your favorite IDE, open `backoffice-bff` to run `BackofficeBffApplication.java` and open `product` to run `ProductApplication.java` as Spring Boot Application
6. Open your browser, now you can access the websites via `http://backoffice/` login with `admin|123456` or `user|123456`

#### You might also want to explore:
1. `http://keycloak.local/` to access Keycloak Admin Console, login with `admin|admin`
2. `http://pgadmin.local/` to access PgAdmin, login with `admin@hqt.com|admin`. Register a server: postgres, port 5432, username: admin, password: admin. The Postgresql server is also exposed to the host machine at port 5432.
3. Test Authentication Flow + PKCE with Swagger UI: `http://backoffice/api/product/swagger-ui/index.html`

### License & Copyright
&copy; 2023 HQT-Team
> :love_you_gesture: Feel free to use our repository and star it if you find something interesting :love_you_gesture:
