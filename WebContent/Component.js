//sap.ui.define("routing.Component");
sap.ui.core.UIComponent.extend("routing.Component", {
    metadata: {
        "rootView": {
            "viewName": "routing.shopping1.app",
            "type": "JS"
        },
        "routing": {
            "config": {
                "routerClass": "sap.m.routing.Router",
                "viewType": "JS",
                "viewPath": "routing.shopping1",
                "controlId": "rootView",
                "controlAggregation": "pages",
                "async": true
            },
            "routes": [
                {
                    "pattern": "",
                    "name": "view1",
                    "target": "view1Target"
                },
                {
                    "pattern": "sample",
                    "name": "sample",
                    "target": "sampleTarget"
                },
                {
                    "pattern": "cart",
                    "name": "cart",
                    "target": "cartTarget"
                }
            ],
            "targets": {
                "view1Target": {
                    "viewName": "view1"
                },
                "sampleTarget": {
                    "viewName": "sample"
                },
                "cartTarget": {
                    "viewName": "cart"
                }
            }
        }
    },
    init: function () {

        this.oObj = {
            "signedup": [{
                "fname": "Narendra",
                "lname": "Valiveti",
                "dob": "4/11/18",
                "email": "narendrachdr007@gmail.com",
                "mobile": "9999",
                "password": "9999"
            },
                {
                    "fname": "Nani",
                    "lname": "Valiveti",
                    "dob": "4/11/18",
                    "email": "narendrachdr007@gmail.com",
                    "mobile": "8888",
                    "password": "8888"
                }],
            "signupform": {"fname": "", "lname": "","dob": "", "email": "", "mobile": "", "password": ""},
            "loggedin": {"fname": "", "lname": "","dob": "", "email": "", "mobile": "", "password": ""},
            "loginform": {"username": "", "password": ""},
            "profileList": {"fname": "", "lname": "","dob": "", "email": "", "mobile": ""},
            "img": {
                "category": [
                    {
                        "id": "Laptop",
                        "loc":
                            "shopping1/images/laptop.jpg",
                        "items": [
                            {
                                "id":
                                    "laptop1",
                                "loc":
                                    "shopping1/images/laptop1.jpg"
                            }
                            ,
                            {
                                "id":
                                    "laptop2",
                                "loc":
                                    "shopping1/images/laptop2.jpg"
                            }
                        ]
                    },
                    {
                        "id": "Mobiles",
                        "loc":
                            "shopping1/images/mobile.jpg",
                        "items": [
                            {
                                "id": "mobile1",
                                "loc": "shopping1/images/mobile1.jpg"
                            },
                            {
                                "id": "mobile2",
                                "loc": "shopping1/images/mobile2.jpg"
                            }
                        ]
                    }
                ]
            }
        };
        this.oModel = new sap.ui.model.json.JSONModel(this.oObj);
        this.setModel(this.oModel, "userModel");
        sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
        this.getRouter().initialize();
    }
});