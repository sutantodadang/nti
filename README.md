# nti

## Installation

To run this project need:

1. [NodeJs](https://nodejs.org/en/download)
2. [Pnpm](https://pnpm.io/installation)
3. [Postman](https://www.postman.com/downloads/)
4. [Docker](https://docs.docker.com/engine/install/)

run this command on terminal it will download dependencies

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Deployment

using docker compose

```bash
$ docker compose up -d
```

## API Reference

api doc using postman

#### postman

```json
{
  "info": {
    "_postman_id": "242932d2-8da7-4202-b0b8-98fed765da24",
    "name": "nti",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
    "_exporter_id": "14623263"
  },
  "item": [
    {
      "name": "users",
      "item": [
        {
          "name": "register",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"email\": \"dadang@mail.com\",\r\n    \"user_name\": \"dadang\",\r\n    \"password\": \"test1234\",\r\n    \"role_id\": \"8f373da2-220d-4123-b54e-5ffc2fa7c999\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "http://localhost:3000/api/v1/users/register",
              "protocol": "http",
              "host": ["localhost"],
              "port": "3000",
              "path": ["api", "v1", "users", "register"]
            }
          },
          "response": []
        },
        {
          "name": "login",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"email\":\"dadang@mail.com\",\r\n    \"password\":\"test1234\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "http://localhost:3000/api/v1/users/login",
              "protocol": "http",
              "host": ["localhost"],
              "port": "3000",
              "path": ["api", "v1", "users", "login"]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "roles",
      "item": [
        {
          "name": "create role",
          "request": {
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"role_name\":\"Admin\",\r\n    \"role_unique_name\":\"ADMIN\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "http://localhost:3000/api/v1/roles",
              "protocol": "http",
              "host": ["localhost"],
              "port": "3000",
              "path": ["api", "v1", "roles"]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "teacher",
      "item": [
        {
          "name": "add teacher",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjNjU3OGUzZS0xMzEyLTRmYzktYmVmOS00OWRmMTg2ZDdkODAiLCJpYXQiOjE3NDAwMTMxNTEsImV4cCI6MTc0MDA5OTU1MX0.0QcsAo4uChPok3rvlGUi-z6KP1wT3czhp-wbjgH3O00",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"teacher_name\": \"dadang\",\r\n    \"specialization\": \"geo\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "http://localhost:3000/api/v1/teachers",
              "protocol": "http",
              "host": ["localhost"],
              "port": "3000",
              "path": ["api", "v1", "teachers"]
            }
          },
          "response": []
        },
        {
          "name": "find all teachers",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjNjU3OGUzZS0xMzEyLTRmYzktYmVmOS00OWRmMTg2ZDdkODAiLCJpYXQiOjE3NDAwMTMxNTEsImV4cCI6MTc0MDA5OTU1MX0.0QcsAo4uChPok3rvlGUi-z6KP1wT3czhp-wbjgH3O00",
                  "type": "string"
                }
              ]
            },
            "method": "GET",
            "header": [],
            "url": {
              "raw": "http://localhost:3000/api/v1/teachers",
              "protocol": "http",
              "host": ["localhost"],
              "port": "3000",
              "path": ["api", "v1", "teachers"]
            }
          },
          "response": []
        },
        {
          "name": "find teacher by id",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjNjU3OGUzZS0xMzEyLTRmYzktYmVmOS00OWRmMTg2ZDdkODAiLCJpYXQiOjE3NDAwMTMxNTEsImV4cCI6MTc0MDA5OTU1MX0.0QcsAo4uChPok3rvlGUi-z6KP1wT3czhp-wbjgH3O00",
                  "type": "string"
                }
              ]
            },
            "method": "GET",
            "header": [],
            "url": {
              "raw": "http://localhost:3000/api/v1/teachers/:id",
              "protocol": "http",
              "host": ["localhost"],
              "port": "3000",
              "path": ["api", "v1", "teachers", ":id"],
              "query": [
                {
                  "key": "",
                  "value": null,
                  "disabled": true
                }
              ],
              "variable": [
                {
                  "key": "id",
                  "value": "d7420563-d18e-404a-89ef-3a4be0303504"
                }
              ]
            }
          },
          "response": []
        },
        {
          "name": "update teacher",
          "request": {
            "method": "PATCH",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"teacher_name\": \"dadang edit\",\r\n    \"specialization\": \"geografi\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "http://localhost:3000/api/v1/teachers/:id",
              "protocol": "http",
              "host": ["localhost"],
              "port": "3000",
              "path": ["api", "v1", "teachers", ":id"],
              "variable": [
                {
                  "key": "id",
                  "value": "d7420563-d18e-404a-89ef-3a4be0303504"
                }
              ]
            }
          },
          "response": []
        },
        {
          "name": "delete teacher",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjNjU3OGUzZS0xMzEyLTRmYzktYmVmOS00OWRmMTg2ZDdkODAiLCJpYXQiOjE3NDAwMTMxNTEsImV4cCI6MTc0MDA5OTU1MX0.0QcsAo4uChPok3rvlGUi-z6KP1wT3czhp-wbjgH3O00",
                  "type": "string"
                }
              ]
            },
            "method": "DELETE",
            "header": [],
            "url": {
              "raw": "http://localhost:3000/api/v1/teachers/:id",
              "protocol": "http",
              "host": ["localhost"],
              "port": "3000",
              "path": ["api", "v1", "teachers", ":id"],
              "variable": [
                {
                  "key": "id",
                  "value": "d7420563-d18e-404a-89ef-3a4be0303504"
                }
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "student",
      "item": [
        {
          "name": "add student",
          "request": {
            "method": "POST",
            "header": [],
            "url": {
              "raw": "http://localhost:3000/api/v1/students",
              "protocol": "http",
              "host": ["localhost"],
              "port": "3000",
              "path": ["api", "v1", "students"]
            }
          },
          "response": []
        },
        {
          "name": "find all student",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlMjdjZGJhZS04NDFiLTRiMjQtOWFhNC04ZjRhYTkxN2NmY2QiLCJpYXQiOjE3NDAwNDA4MDAsImV4cCI6MTc0MDEyNzIwMH0.5CR3yBwA9pm_f0PAUlEgtVLxpyxGj2hwoiJxWRg0kzA",
                  "type": "string"
                }
              ]
            },
            "method": "GET",
            "header": [],
            "url": {
              "raw": "http://localhost:3000/api/v1/students",
              "protocol": "http",
              "host": ["localhost"],
              "port": "3000",
              "path": ["api", "v1", "students"]
            }
          },
          "response": []
        },
        {
          "name": "find student by id",
          "request": {
            "method": "GET",
            "header": [],
            "url": {
              "raw": "http://localhost:3000/api/v1/students/:id",
              "protocol": "http",
              "host": ["localhost"],
              "port": "3000",
              "path": ["api", "v1", "students", ":id"],
              "variable": [
                {
                  "key": "id",
                  "value": ""
                }
              ]
            }
          },
          "response": []
        },
        {
          "name": "update student",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlMjdjZGJhZS04NDFiLTRiMjQtOWFhNC04ZjRhYTkxN2NmY2QiLCJpYXQiOjE3NDAwNDA4MDAsImV4cCI6MTc0MDEyNzIwMH0.5CR3yBwA9pm_f0PAUlEgtVLxpyxGj2hwoiJxWRg0kzA",
                  "type": "string"
                }
              ]
            },
            "method": "PATCH",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"student_name\":\"dadang edit\",\r\n    \"student_grade\":\"10A\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "http://localhost:3000/api/v1/students/:id",
              "protocol": "http",
              "host": ["localhost"],
              "port": "3000",
              "path": ["api", "v1", "students", ":id"],
              "variable": [
                {
                  "key": "id",
                  "value": "68127f11-7e1d-4661-a785-ba25e8ff888e"
                }
              ]
            }
          },
          "response": []
        },
        {
          "name": "delete student",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlMjdjZGJhZS04NDFiLTRiMjQtOWFhNC04ZjRhYTkxN2NmY2QiLCJpYXQiOjE3NDAwNDA4MDAsImV4cCI6MTc0MDEyNzIwMH0.5CR3yBwA9pm_f0PAUlEgtVLxpyxGj2hwoiJxWRg0kzA",
                  "type": "string"
                }
              ]
            },
            "method": "DELETE",
            "header": [],
            "url": {
              "raw": "http://localhost:3000/api/v1/students/:id",
              "protocol": "http",
              "host": ["localhost"],
              "port": "3000",
              "path": ["api", "v1", "students", ":id"],
              "variable": [
                {
                  "key": "id",
                  "value": "8eea1108-0aaf-4c4b-847a-e92b8f052590"
                }
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "class",
      "item": [
        {
          "name": "add class",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlMjdjZGJhZS04NDFiLTRiMjQtOWFhNC04ZjRhYTkxN2NmY2QiLCJpYXQiOjE3NDAwNDA4MDAsImV4cCI6MTc0MDEyNzIwMH0.5CR3yBwA9pm_f0PAUlEgtVLxpyxGj2hwoiJxWRg0kzA",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"class_name\":\"geo\",\r\n    \"class_room_number\":\"10A\",\r\n    \"teacher_id\":\"e9aab0a5-97c3-4c27-ba90-59fa768efd5b\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "http://localhost:3000/api/v1/classes",
              "protocol": "http",
              "host": ["localhost"],
              "port": "3000",
              "path": ["api", "v1", "classes"]
            }
          },
          "response": []
        },
        {
          "name": "find all class",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlMjdjZGJhZS04NDFiLTRiMjQtOWFhNC04ZjRhYTkxN2NmY2QiLCJpYXQiOjE3NDAwNDA4MDAsImV4cCI6MTc0MDEyNzIwMH0.5CR3yBwA9pm_f0PAUlEgtVLxpyxGj2hwoiJxWRg0kzA",
                  "type": "string"
                }
              ]
            },
            "method": "GET",
            "header": [],
            "url": {
              "raw": "http://localhost:3000/api/v1/classes",
              "protocol": "http",
              "host": ["localhost"],
              "port": "3000",
              "path": ["api", "v1", "classes"]
            }
          },
          "response": []
        },
        {
          "name": "find class by id",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlMjdjZGJhZS04NDFiLTRiMjQtOWFhNC04ZjRhYTkxN2NmY2QiLCJpYXQiOjE3NDAwNDA4MDAsImV4cCI6MTc0MDEyNzIwMH0.5CR3yBwA9pm_f0PAUlEgtVLxpyxGj2hwoiJxWRg0kzA",
                  "type": "string"
                }
              ]
            },
            "method": "GET",
            "header": [],
            "url": {
              "raw": "http://localhost:3000/api/v1/classes/:id",
              "protocol": "http",
              "host": ["localhost"],
              "port": "3000",
              "path": ["api", "v1", "classes", ":id"],
              "variable": [
                {
                  "key": "id",
                  "value": "3185468e-4687-499a-bd74-22a1a749e68b"
                }
              ]
            }
          },
          "response": []
        },
        {
          "name": "update class",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlMjdjZGJhZS04NDFiLTRiMjQtOWFhNC04ZjRhYTkxN2NmY2QiLCJpYXQiOjE3NDAwNDA4MDAsImV4cCI6MTc0MDEyNzIwMH0.5CR3yBwA9pm_f0PAUlEgtVLxpyxGj2hwoiJxWRg0kzA",
                  "type": "string"
                }
              ]
            },
            "method": "PATCH",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"class_name\":\"geografi\",\r\n    \"class_room_number\":\"10A\",\r\n    \"teacher_id\":\"e9aab0a5-97c3-4c27-ba90-59fa768efd5b\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "http://localhost:3000/api/v1/classes/:id",
              "protocol": "http",
              "host": ["localhost"],
              "port": "3000",
              "path": ["api", "v1", "classes", ":id"],
              "variable": [
                {
                  "key": "id",
                  "value": "3185468e-4687-499a-bd74-22a1a749e68b"
                }
              ]
            }
          },
          "response": []
        },
        {
          "name": "delete class",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlMjdjZGJhZS04NDFiLTRiMjQtOWFhNC04ZjRhYTkxN2NmY2QiLCJpYXQiOjE3NDAwNDA4MDAsImV4cCI6MTc0MDEyNzIwMH0.5CR3yBwA9pm_f0PAUlEgtVLxpyxGj2hwoiJxWRg0kzA",
                  "type": "string"
                }
              ]
            },
            "method": "DELETE",
            "header": [],
            "url": {
              "raw": "http://localhost:3000/api/v1/classes/:id",
              "protocol": "http",
              "host": ["localhost"],
              "port": "3000",
              "path": ["api", "v1", "classes", ":id"],
              "variable": [
                {
                  "key": "id",
                  "value": "3185468e-4687-499a-bd74-22a1a749e68b"
                }
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "subject",
      "item": [
        {
          "name": "add subject and class",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlMjdjZGJhZS04NDFiLTRiMjQtOWFhNC04ZjRhYTkxN2NmY2QiLCJpYXQiOjE3NDAwNDA4MDAsImV4cCI6MTc0MDEyNzIwMH0.5CR3yBwA9pm_f0PAUlEgtVLxpyxGj2hwoiJxWRg0kzA",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"subject_name\":\"geo\",\r\n    \"description\":\"pelajaran geo\",\r\n    \"classes\":[]\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "http://localhost:3000/api/v1/subjects",
              "protocol": "http",
              "host": ["localhost"],
              "port": "3000",
              "path": ["api", "v1", "subjects"]
            }
          },
          "response": []
        },
        {
          "name": "find all subject",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlMjdjZGJhZS04NDFiLTRiMjQtOWFhNC04ZjRhYTkxN2NmY2QiLCJpYXQiOjE3NDAwNDA4MDAsImV4cCI6MTc0MDEyNzIwMH0.5CR3yBwA9pm_f0PAUlEgtVLxpyxGj2hwoiJxWRg0kzA",
                  "type": "string"
                }
              ]
            },
            "method": "GET",
            "header": [],
            "url": {
              "raw": "http://localhost:3000/api/v1/subjects",
              "protocol": "http",
              "host": ["localhost"],
              "port": "3000",
              "path": ["api", "v1", "subjects"]
            }
          },
          "response": []
        },
        {
          "name": "find subject by id",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlMjdjZGJhZS04NDFiLTRiMjQtOWFhNC04ZjRhYTkxN2NmY2QiLCJpYXQiOjE3NDAwNDA4MDAsImV4cCI6MTc0MDEyNzIwMH0.5CR3yBwA9pm_f0PAUlEgtVLxpyxGj2hwoiJxWRg0kzA",
                  "type": "string"
                }
              ]
            },
            "method": "GET",
            "header": [],
            "url": {
              "raw": "http://localhost:3000/api/v1/subjects/:id",
              "protocol": "http",
              "host": ["localhost"],
              "port": "3000",
              "path": ["api", "v1", "subjects", ":id"],
              "variable": [
                {
                  "key": "id",
                  "value": "db384a2f-ac08-4bd2-b422-ea9ff6c3d71f"
                }
              ]
            }
          },
          "response": []
        },
        {
          "name": "updatee subject and class",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlMjdjZGJhZS04NDFiLTRiMjQtOWFhNC04ZjRhYTkxN2NmY2QiLCJpYXQiOjE3NDAwNDA4MDAsImV4cCI6MTc0MDEyNzIwMH0.5CR3yBwA9pm_f0PAUlEgtVLxpyxGj2hwoiJxWRg0kzA",
                  "type": "string"
                }
              ]
            },
            "method": "PATCH",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"subject_name\":\"geo\",\r\n    \"description\":\"pelajaran geo\",\r\n    \"classes\":[\"a1721aaa-51e6-4219-bbb9-975217f9ac81\"]\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "http://localhost:3000/api/v1/subjects/:id",
              "protocol": "http",
              "host": ["localhost"],
              "port": "3000",
              "path": ["api", "v1", "subjects", ":id"],
              "variable": [
                {
                  "key": "id",
                  "value": "db384a2f-ac08-4bd2-b422-ea9ff6c3d71f"
                }
              ]
            }
          },
          "response": []
        },
        {
          "name": "delete subject and class",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlMjdjZGJhZS04NDFiLTRiMjQtOWFhNC04ZjRhYTkxN2NmY2QiLCJpYXQiOjE3NDAwNDA4MDAsImV4cCI6MTc0MDEyNzIwMH0.5CR3yBwA9pm_f0PAUlEgtVLxpyxGj2hwoiJxWRg0kzA",
                  "type": "string"
                }
              ]
            },
            "method": "DELETE",
            "header": [],
            "url": {
              "raw": "http://localhost:3000/api/v1/subjects/:id",
              "protocol": "http",
              "host": ["localhost"],
              "port": "3000",
              "path": ["api", "v1", "subjects", ":id"],
              "variable": [
                {
                  "key": "id",
                  "value": "ae36da99-ea5d-42ef-ab2c-d49c0cfebc91"
                }
              ]
            }
          },
          "response": []
        }
      ]
    },
    {
      "name": "enrollment",
      "item": [
        {
          "name": "new enroll",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlMjdjZGJhZS04NDFiLTRiMjQtOWFhNC04ZjRhYTkxN2NmY2QiLCJpYXQiOjE3NDAwNDA4MDAsImV4cCI6MTc0MDEyNzIwMH0.5CR3yBwA9pm_f0PAUlEgtVLxpyxGj2hwoiJxWRg0kzA",
                  "type": "string"
                }
              ]
            },
            "method": "POST",
            "header": [],
            "body": {
              "mode": "raw",
              "raw": "{\r\n    \"subject_class_id\":\"31ab3171-db8c-4b75-be89-423f5be8e625\",\r\n    \"student_id\":\"a0709114-1232-4dab-b97e-0bc305b19aa2\",\r\n    \"enrollment_date\":\"\"\r\n}",
              "options": {
                "raw": {
                  "language": "json"
                }
              }
            },
            "url": {
              "raw": "http://localhost:3000/api/v1/enrollments",
              "protocol": "http",
              "host": ["localhost"],
              "port": "3000",
              "path": ["api", "v1", "enrollments"]
            }
          },
          "response": []
        },
        {
          "name": "find enroll by student",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlMjdjZGJhZS04NDFiLTRiMjQtOWFhNC04ZjRhYTkxN2NmY2QiLCJpYXQiOjE3NDAwNDA4MDAsImV4cCI6MTc0MDEyNzIwMH0.5CR3yBwA9pm_f0PAUlEgtVLxpyxGj2hwoiJxWRg0kzA",
                  "type": "string"
                }
              ]
            },
            "method": "GET",
            "header": [],
            "url": {
              "raw": "http://localhost:3000/api/v1/enrollments/:id",
              "protocol": "http",
              "host": ["localhost"],
              "port": "3000",
              "path": ["api", "v1", "enrollments", ":id"],
              "variable": [
                {
                  "key": "id",
                  "value": "a0709114-1232-4dab-b97e-0bc305b19aa2"
                }
              ]
            }
          },
          "response": []
        },
        {
          "name": "remove enroll",
          "request": {
            "auth": {
              "type": "bearer",
              "bearer": [
                {
                  "key": "token",
                  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlMjdjZGJhZS04NDFiLTRiMjQtOWFhNC04ZjRhYTkxN2NmY2QiLCJpYXQiOjE3NDAwNDA4MDAsImV4cCI6MTc0MDEyNzIwMH0.5CR3yBwA9pm_f0PAUlEgtVLxpyxGj2hwoiJxWRg0kzA",
                  "type": "string"
                }
              ]
            },
            "method": "DELETE",
            "header": [],
            "url": {
              "raw": "http://localhost:3000/api/v1/enrollments/:id",
              "protocol": "http",
              "host": ["localhost"],
              "port": "3000",
              "path": ["api", "v1", "enrollments", ":id"],
              "variable": [
                {
                  "key": "id",
                  "value": "7ffec05d-ed12-43da-bd81-22490dd8bc34"
                }
              ]
            }
          },
          "response": []
        }
      ]
    }
  ]
}
```

## Authors

- [@sutantodadang](https://www.github.com/sutantodadang)
