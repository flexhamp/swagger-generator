## About project

Description text

## Build
###### For prodaction
*  `gradle build -Pprod`
###### For develop
* Build `gradle clean build -Pdev`
* Build and run ` gradle clean build -Pdev && gradle bootRun`
* Swagger codegenerate server and client: `gradle clean build -Pgenerate`
##H2
* Url: `http://localhost:8080/h2-console/`
* JDBC URL: `jdbc:h2:mem:testdb`

## Jar file
* "${rootDir}/build/libs/user-service-${version}.jar"


##### For Test requests
* Please download programm "Postman"