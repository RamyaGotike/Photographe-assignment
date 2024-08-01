# Use a multi-stage build to reduce image size

# Stage 1: Build React uiapp
FROM node:18 AS react-build
WORKDIR /app
COPY ./uiapp /app
RUN npm install
RUN npm run build

# Stage 2: Build Spring Boot uiapp
FROM maven:3.6.3-jdk-21 AS spring-build
WORKDIR /app
COPY ./ /app
COPY --from=react-build /uiapp/build /app/src/main/resources/static
RUN mvn clean package -DskipTests

# Stage 3: Create the final image
FROM openjdk:21-jre-slim
WORKDIR /app
COPY --from=spring-build /app/target/photograph-svc-0.0.1-SNAPSHOT.jar /app/photograph-svc-0.0.1-SNAPSHOT.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/photograph-svc-0.0.1-SNAPSHOT.jar"]
