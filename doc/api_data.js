define({ "api": [
  {
    "type": "post",
    "url": "/list",
    "title": "Create a New List",
    "version": "0.1.0",
    "name": "create_list",
    "group": "List",
    "permission": [
      {
        "name": "Administrator"
      }
    ],
    "description": "<p>Create a new list.</p>",
    "examples": [
      {
        "title": "Example Usage",
        "content": "https://mini-proj-apijs.herokuapp.com/api/v1/list",
        "type": "json"
      },
      {
        "title": "Request Body",
        "content": "{\n        \"activity\": activity,\n        \"date\": date,\n        \"status\": status\n}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "activity",
            "description": "<p>Activity Description.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Activity Due Date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Activity Status.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": "<p>State of error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data",
            "description": "<p>List's given ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response Example",
          "content": "{\n    \"error\": false,\n    \"message\": \"Add successfully!\",\n    \"data\": 10\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./examp.js",
    "groupTitle": "List"
  },
  {
    "type": "delete",
    "url": "/list/:listID",
    "title": "Delete List",
    "version": "0.1.0",
    "name": "delete_list",
    "group": "List",
    "permission": [
      {
        "name": "Administrator"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "listID",
            "description": "<p>List-ID.</p>"
          }
        ]
      }
    },
    "description": "<p>Delete list.</p>",
    "examples": [
      {
        "title": "Example Usage ",
        "content": "https://mini-proj-apijs.herokuapp.com/api/v1/list/10",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": "<p>State of error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response Example     ",
          "content": "{\n \"error\": false,\n \"message\": \"successfully deleted!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./examp.js",
    "groupTitle": "List"
  },
  {
    "type": "get",
    "url": "/list/:listID",
    "title": "Retrieve List by ID",
    "version": "0.1.0",
    "name": "findById_list",
    "group": "List",
    "permission": [
      {
        "name": "Administrator"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "listID",
            "description": "<p>List-ID.</p>"
          }
        ]
      }
    },
    "description": "<p>Retrieve List by List-ID.</p>",
    "examples": [
      {
        "title": "Example Usage",
        "content": "https://mini-proj-apijs.herokuapp.com/api/v1/list/9",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "listID",
            "description": "<p>List-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activity",
            "description": "<p>Activity To Do.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Activity Due Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Activity Status.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdate",
            "description": "<p>User's last name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response Example:     ",
          "content": "[\n    {\n        \"listID\": 9,\n        \"activity\": \"Do Laundry\",\n        \"date\": \"2021-09-03T00:00:00.000Z\",\n        \"status\": \"done\",\n        \"createdate\": \"2021-09-04T22:56:16.000Z\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./examp.js",
    "groupTitle": "List"
  },
  {
    "type": "get",
    "url": "/list",
    "title": "Retrieve All List",
    "version": "0.1.0",
    "name": "getAll",
    "group": "List",
    "permission": [
      {
        "name": "Administrator"
      }
    ],
    "description": "<p>Retrieve All List</p>",
    "examples": [
      {
        "title": "Example Usage",
        "content": "https://mini-proj-apijs.herokuapp.com/api/v1/list",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "listID",
            "description": "<p>List-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "activity",
            "description": "<p>Activity To Do.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Activity Due Date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Activity Status.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdate",
            "description": "<p>User's last name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response Example:     ",
          "content": "{\n    \"listID\": 9,\n    \"activity\": \"Do Laundry\",\n    \"date\": \"2021-09-03T00:00:00.000Z\",\n    \"status\": \"done\",\n    \"createdate\": \"2021-09-04T22:56:16.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./examp.js",
    "groupTitle": "List"
  },
  {
    "type": "put",
    "url": "/list/:listID",
    "title": "Update List by ID",
    "version": "0.1.0",
    "name": "updateByID",
    "group": "List",
    "permission": [
      {
        "name": "Administrator"
      }
    ],
    "description": "<p>Update List</p>",
    "examples": [
      {
        "title": "Example Usage",
        "content": "https://mini-proj-apijs.herokuapp.com/api/v1/list/10",
        "type": "json"
      },
      {
        "title": "Request Body",
        "content": "{\n        \"activity\": activity,\n        \"date\": date,\n        \"status\": status\n}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "activity",
            "description": "<p>Activity Description.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Activity Due Date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Activity Status.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": "<p>State of error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response Example",
          "content": "{\n    \"error\": false,\n    \"message\": \"successfully updated!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./examp.js",
    "groupTitle": "List"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create User",
    "version": "0.1.0",
    "name": "create",
    "group": "User",
    "permission": [
      {
        "name": "Administrator"
      }
    ],
    "description": "<p>Create a new user.</p>",
    "examples": [
      {
        "title": "Example Usage",
        "content": "https://mini-proj-apijs.herokuapp.com/api/v1/users",
        "type": "json"
      },
      {
        "title": "Request Body",
        "content": "{\n    \"email\":email,\n    \"password\":password,\n    \"username\":username,\n    \"firstName\":firstName,\n    \"lastName\":lastName\n}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's e-mail.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User's first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User's last name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": "<p>State of error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data",
            "description": "<p>user's given ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response Example",
          "content": "{\n    \"error\": false,\n    \"message\": \"Add successfully!\",\n    \"data\": 15\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./examp.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/users/:userID",
    "title": "Delete User",
    "version": "0.1.0",
    "name": "delete",
    "group": "User",
    "permission": [
      {
        "name": "Administrator"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "userID",
            "description": "<p>User's ID.</p>"
          }
        ]
      }
    },
    "description": "<p>Delete User</p>",
    "examples": [
      {
        "title": "Example Usage ",
        "content": "https://mini-proj-apijs.herokuapp.com/api/v1/users/1",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": "<p>State of error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response Example     ",
          "content": "{\n \"error\": false,\n \"message\": \"successfully deleted!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./examp.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Retrieve All User",
    "version": "0.1.0",
    "name": "findAll",
    "group": "User",
    "permission": [
      {
        "name": "Administrator"
      }
    ],
    "description": "<p>Retrieve all user's information.</p>",
    "examples": [
      {
        "title": "Example Usage",
        "content": "https://mini-proj-apijs.herokuapp.com/api/v1/users",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userID",
            "description": "<p>User-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's e-mail.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User's first name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User's last name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdate",
            "description": "<p>User's last name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "isblocked",
            "description": "<p>User's block status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response Example:     ",
          "content": "[\n   {\n    \"userID\": 1,\n    \"email\": \"steve@gmail.com\",\n    \"password\": \"\",\n    \"username\": \"steve17\",\n    \"firstName\": \"\",\n    \"lastName\": \"\",\n    \"createdate\": \"0000-00-00 00:00:00\",\n    \"isblocked\": 0\n   },\n   {\n    \"userID\": 2,\n    \"email\": \"steve1@gmail.com\",\n    \"password\": \"\",\n    \"username\": \"steve117\",\n    \"firstName\": \"\",\n    \"lastName\": \"\",\n    \"createdate\": \"2021-09-03T20:31:20.000Z\",\n    \"isblocked\": 0\n   }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "./examp.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:userID",
    "title": "Retrieve User by ID",
    "version": "0.1.0",
    "name": "findById",
    "group": "User",
    "permission": [
      {
        "name": "Administrator"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "userID",
            "description": "<p>User's ID.</p>"
          }
        ]
      }
    },
    "description": "<p>Retrieve user information.</p>",
    "examples": [
      {
        "title": "Example Usage",
        "content": "https://mini-proj-apijs.herokuapp.com/api/v1/users/1",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userID",
            "description": "<p>User-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's e-mail.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User's first name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User's last name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdate",
            "description": "<p>User's last name.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "isblocked",
            "description": "<p>User's block status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response Example:     ",
          "content": "[\n   {\n    \"userID\": 1,\n    \"email\": \"steve@gmail.com\",\n    \"password\": \"\",\n    \"username\": \"steve17\",\n    \"firstName\": \"\",\n    \"lastName\": \"\",\n    \"createdate\": \"0000-00-00 00:00:00\",\n    \"isblocked\": 0\n   } \n]",
          "type": "json"
        }
      ]
    },
    "filename": "./examp.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:userID",
    "title": "Update User Information",
    "version": "0.1.0",
    "name": "update",
    "group": "User",
    "permission": [
      {
        "name": "Administrator"
      }
    ],
    "description": "<p>Update User's Information</p>",
    "examples": [
      {
        "title": "Example Usage",
        "content": "https://mini-proj-apijs.herokuapp.com/api/v1/users/4",
        "type": "json"
      },
      {
        "title": "Request Body",
        "content": "{\n    \"email\": email,\n    \"password\": password,\n    \"username\": username,\n    \"firstName\": firstName,\n    \"lastName\": lastName\n}",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "userID",
            "description": "<p>User's ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User's e-mail.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User's first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User's last name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "error",
            "description": "<p>State of error.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response Example",
          "content": "{\n    \"error\": false,\n    \"message\": \"successfully updated!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./examp.js",
    "groupTitle": "User"
  }
] });
