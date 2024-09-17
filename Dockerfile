FROM maven:3.9.9-eclipse-temurin-21 AS build
WORKDIR /backend
COPY backend/pom.xml .
COPY backend/src 
# COPY .. else
RUN mvn clean package -DskipTests
# Stage 2: Run the application using OpenJDK
#change version to 21.0.4 if any prblm occurs
FROM openjdk:21-jdk-slim
COPY --from=build backend/target/backend-0.0.1-SNAPSHOT.jar demo.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","demo.jar"]

